package storage

import (
	"testing"

	"github.com/google/pprof/profile"
	"github.com/stretchr/testify/require"
)

func makeSample(value int64, locationIds []uint64) *profile.Sample {
	s := &profile.Sample{
		Value: []int64{value},
	}

	for _, id := range locationIds {
		s.Location = append(s.Location, &profile.Location{ID: id})
	}

	return s
}

func TestSortSamples(t *testing.T) {
	samples := []*profile.Sample{
		makeSample(1, []uint64{6, 3, 1}),
		makeSample(1, []uint64{5, 3, 1}),
		makeSample(1, []uint64{3, 1}),
	}

	sortSamples(samples)

	require.Equal(t,
		[]*profile.Sample{
			makeSample(1, []uint64{3, 1}),
			makeSample(1, []uint64{5, 3, 1}),
			makeSample(1, []uint64{6, 3, 1}),
		},
		samples,
	)
}