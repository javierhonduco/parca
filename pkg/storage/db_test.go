package storage

import (
	"bytes"
	"context"
	"runtime/pprof"
	"testing"
	"time"

	"github.com/google/pprof/profile"
	"github.com/prometheus/prometheus/pkg/labels"
	"github.com/prometheus/prometheus/pkg/timestamp"
	"github.com/stretchr/testify/require"
)

func TestDB(t *testing.T) {
	l := NewInMemoryProfileMetaStore()
	db := OpenDB()
	ctx := context.Background()
	app1, err := db.Appender(ctx, labels.Labels{{Name: "namespace", Value: "default"}, {Name: "container", Value: "test1"}})
	require.NoError(t, err)

	b := bytes.NewBuffer(nil)
	err = pprof.WriteHeapProfile(b)
	require.NoError(t, err)
	p, err := profile.Parse(b)
	require.NoError(t, err)

	require.NoError(t, app1.Append(ProfileFromPprof(l, p, 0)))

	app2, err := db.Appender(ctx, labels.Labels{{Name: "namespace", Value: "default"}, {Name: "container", Value: "test2"}})
	require.NoError(t, err)

	b = bytes.NewBuffer(nil)
	err = pprof.WriteHeapProfile(b)
	require.NoError(t, err)
	p, err = profile.Parse(b)
	require.NoError(t, err)

	require.NoError(t, app2.Append(ProfileFromPprof(l, p, 0)))

	q := db.Querier(
		ctx,
		timestamp.FromTime(time.Now().Add(-10*time.Second)),
		timestamp.FromTime(time.Now().Add(10*time.Second)),
	)
	m, err := labels.NewMatcher(labels.MatchEqual, "namespace", "default")
	require.NoError(t, err)

	set := q.Select(nil, m)
	seen := map[string]bool{
		labels.Labels{{Name: "namespace", Value: "default"}, {Name: "container", Value: "test1"}}.String(): false,
		labels.Labels{{Name: "namespace", Value: "default"}, {Name: "container", Value: "test2"}}.String(): false,
	}
	for set.Next() {
		seen[set.At().Labels().String()] = true
	}
	require.NoError(t, set.Err())

	for labels, seenLabels := range seen {
		if !seenLabels {
			t.Fatalf("expected to see %s but did not", labels)
		}
	}
}

func TestSliceSeriesSet(t *testing.T) {
	ss := SliceSeriesSet{
		series: []Series{},
		i:      -1,
	}

	for i := 0; i < 100; i++ {
		ss.series = append(ss.series, &MemSeries{
			id:      uint64(i),
			minTime: 0,
			maxTime: int64(i),
		})
	}

	// Iterate over all series
	for i := 0; i < 100; i++ {
		require.True(t, ss.Next())
		require.Equal(t, &MemSeries{id: uint64(i), maxTime: int64(i)}, ss.At())
	}
	require.NoError(t, ss.Err())
	require.False(t, ss.Next())
}