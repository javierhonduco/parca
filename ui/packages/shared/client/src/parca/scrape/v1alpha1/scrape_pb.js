// source: parca/scrape/v1alpha1/scrape.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = function () {
  if (this) {
    return this;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  return Function('return this')();
}.call(null);

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var parca_profilestore_v1alpha1_profilestore_pb = require('../../../parca/profilestore/v1alpha1/profilestore_pb.js');
goog.object.extend(proto, parca_profilestore_v1alpha1_profilestore_pb);
goog.exportSymbol('proto.parca.scrape.v1alpha1.Target', null, global);
goog.exportSymbol('proto.parca.scrape.v1alpha1.Target.Health', null, global);
goog.exportSymbol('proto.parca.scrape.v1alpha1.Targets', null, global);
goog.exportSymbol('proto.parca.scrape.v1alpha1.TargetsRequest', null, global);
goog.exportSymbol('proto.parca.scrape.v1alpha1.TargetsRequest.State', null, global);
goog.exportSymbol('proto.parca.scrape.v1alpha1.TargetsResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.parca.scrape.v1alpha1.TargetsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.parca.scrape.v1alpha1.TargetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.parca.scrape.v1alpha1.TargetsRequest.displayName =
    'proto.parca.scrape.v1alpha1.TargetsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.parca.scrape.v1alpha1.TargetsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.parca.scrape.v1alpha1.TargetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.parca.scrape.v1alpha1.TargetsResponse.displayName =
    'proto.parca.scrape.v1alpha1.TargetsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.parca.scrape.v1alpha1.Targets = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.parca.scrape.v1alpha1.Targets.repeatedFields_,
    null
  );
};
goog.inherits(proto.parca.scrape.v1alpha1.Targets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.parca.scrape.v1alpha1.Targets.displayName = 'proto.parca.scrape.v1alpha1.Targets';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.parca.scrape.v1alpha1.Target = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.parca.scrape.v1alpha1.Target, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.parca.scrape.v1alpha1.Target.displayName = 'proto.parca.scrape.v1alpha1.Target';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.parca.scrape.v1alpha1.TargetsRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.parca.scrape.v1alpha1.TargetsRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.parca.scrape.v1alpha1.TargetsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.parca.scrape.v1alpha1.TargetsRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        state: jspb.Message.getFieldWithDefault(msg, 1, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.parca.scrape.v1alpha1.TargetsRequest}
 */
proto.parca.scrape.v1alpha1.TargetsRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.parca.scrape.v1alpha1.TargetsRequest();
  return proto.parca.scrape.v1alpha1.TargetsRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.parca.scrape.v1alpha1.TargetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.parca.scrape.v1alpha1.TargetsRequest}
 */
proto.parca.scrape.v1alpha1.TargetsRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.parca.scrape.v1alpha1.TargetsRequest.State} */ (
          reader.readEnum()
        );
        msg.setState(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.parca.scrape.v1alpha1.TargetsRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.parca.scrape.v1alpha1.TargetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.parca.scrape.v1alpha1.TargetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.scrape.v1alpha1.TargetsRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
};

/**
 * @enum {number}
 */
proto.parca.scrape.v1alpha1.TargetsRequest.State = {
  STATE_ANY_UNSPECIFIED: 0,
  STATE_ACTIVE: 1,
  STATE_DROPPED: 2,
};

/**
 * optional State state = 1;
 * @return {!proto.parca.scrape.v1alpha1.TargetsRequest.State}
 */
proto.parca.scrape.v1alpha1.TargetsRequest.prototype.getState = function () {
  return /** @type {!proto.parca.scrape.v1alpha1.TargetsRequest.State} */ (
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};

/**
 * @param {!proto.parca.scrape.v1alpha1.TargetsRequest.State} value
 * @return {!proto.parca.scrape.v1alpha1.TargetsRequest} returns this
 */
proto.parca.scrape.v1alpha1.TargetsRequest.prototype.setState = function (value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.parca.scrape.v1alpha1.TargetsResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.parca.scrape.v1alpha1.TargetsResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.parca.scrape.v1alpha1.TargetsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.parca.scrape.v1alpha1.TargetsResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        targetsMap: (f = msg.getTargetsMap())
          ? f.toObject(includeInstance, proto.parca.scrape.v1alpha1.Targets.toObject)
          : [],
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.parca.scrape.v1alpha1.TargetsResponse}
 */
proto.parca.scrape.v1alpha1.TargetsResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.parca.scrape.v1alpha1.TargetsResponse();
  return proto.parca.scrape.v1alpha1.TargetsResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.parca.scrape.v1alpha1.TargetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.parca.scrape.v1alpha1.TargetsResponse}
 */
proto.parca.scrape.v1alpha1.TargetsResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = msg.getTargetsMap();
        reader.readMessage(value, function (message, reader) {
          jspb.Map.deserializeBinary(
            message,
            reader,
            jspb.BinaryReader.prototype.readString,
            jspb.BinaryReader.prototype.readMessage,
            proto.parca.scrape.v1alpha1.Targets.deserializeBinaryFromReader,
            '',
            new proto.parca.scrape.v1alpha1.Targets()
          );
        });
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.parca.scrape.v1alpha1.TargetsResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.parca.scrape.v1alpha1.TargetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.parca.scrape.v1alpha1.TargetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.scrape.v1alpha1.TargetsResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTargetsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(
      1,
      writer,
      jspb.BinaryWriter.prototype.writeString,
      jspb.BinaryWriter.prototype.writeMessage,
      proto.parca.scrape.v1alpha1.Targets.serializeBinaryToWriter
    );
  }
};

/**
 * map<string, Targets> targets = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.parca.scrape.v1alpha1.Targets>}
 */
proto.parca.scrape.v1alpha1.TargetsResponse.prototype.getTargetsMap = function (opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.parca.scrape.v1alpha1.Targets>} */ (
    jspb.Message.getMapField(this, 1, opt_noLazyCreate, proto.parca.scrape.v1alpha1.Targets)
  );
};

/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.parca.scrape.v1alpha1.TargetsResponse} returns this
 */
proto.parca.scrape.v1alpha1.TargetsResponse.prototype.clearTargetsMap = function () {
  this.getTargetsMap().clear();
  return this;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.parca.scrape.v1alpha1.Targets.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.parca.scrape.v1alpha1.Targets.prototype.toObject = function (opt_includeInstance) {
    return proto.parca.scrape.v1alpha1.Targets.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.parca.scrape.v1alpha1.Targets} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.parca.scrape.v1alpha1.Targets.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        targetsList: jspb.Message.toObjectList(
          msg.getTargetsList(),
          proto.parca.scrape.v1alpha1.Target.toObject,
          includeInstance
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.parca.scrape.v1alpha1.Targets}
 */
proto.parca.scrape.v1alpha1.Targets.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.parca.scrape.v1alpha1.Targets();
  return proto.parca.scrape.v1alpha1.Targets.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.parca.scrape.v1alpha1.Targets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.parca.scrape.v1alpha1.Targets}
 */
proto.parca.scrape.v1alpha1.Targets.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.parca.scrape.v1alpha1.Target();
        reader.readMessage(value, proto.parca.scrape.v1alpha1.Target.deserializeBinaryFromReader);
        msg.addTargets(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.parca.scrape.v1alpha1.Targets.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.parca.scrape.v1alpha1.Targets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.parca.scrape.v1alpha1.Targets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.scrape.v1alpha1.Targets.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTargetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.parca.scrape.v1alpha1.Target.serializeBinaryToWriter);
  }
};

/**
 * repeated Target targets = 1;
 * @return {!Array<!proto.parca.scrape.v1alpha1.Target>}
 */
proto.parca.scrape.v1alpha1.Targets.prototype.getTargetsList = function () {
  return /** @type{!Array<!proto.parca.scrape.v1alpha1.Target>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.parca.scrape.v1alpha1.Target, 1)
  );
};

/**
 * @param {!Array<!proto.parca.scrape.v1alpha1.Target>} value
 * @return {!proto.parca.scrape.v1alpha1.Targets} returns this
 */
proto.parca.scrape.v1alpha1.Targets.prototype.setTargetsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.parca.scrape.v1alpha1.Target=} opt_value
 * @param {number=} opt_index
 * @return {!proto.parca.scrape.v1alpha1.Target}
 */
proto.parca.scrape.v1alpha1.Targets.prototype.addTargets = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.parca.scrape.v1alpha1.Target,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.parca.scrape.v1alpha1.Targets} returns this
 */
proto.parca.scrape.v1alpha1.Targets.prototype.clearTargetsList = function () {
  return this.setTargetsList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.parca.scrape.v1alpha1.Target.prototype.toObject = function (opt_includeInstance) {
    return proto.parca.scrape.v1alpha1.Target.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.parca.scrape.v1alpha1.Target} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.parca.scrape.v1alpha1.Target.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        discoveredLabels:
          (f = msg.getDiscoveredLabels()) &&
          parca_profilestore_v1alpha1_profilestore_pb.LabelSet.toObject(includeInstance, f),
        labels:
          (f = msg.getLabels()) &&
          parca_profilestore_v1alpha1_profilestore_pb.LabelSet.toObject(includeInstance, f),
        lastError: jspb.Message.getFieldWithDefault(msg, 3, ''),
        lastScrape:
          (f = msg.getLastScrape()) &&
          google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
        lastScrapeDuration:
          (f = msg.getLastScrapeDuration()) &&
          google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
        url: jspb.Message.getFieldWithDefault(msg, 6, ''),
        health: jspb.Message.getFieldWithDefault(msg, 7, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.parca.scrape.v1alpha1.Target}
 */
proto.parca.scrape.v1alpha1.Target.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.parca.scrape.v1alpha1.Target();
  return proto.parca.scrape.v1alpha1.Target.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.parca.scrape.v1alpha1.Target} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.parca.scrape.v1alpha1.Target}
 */
proto.parca.scrape.v1alpha1.Target.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new parca_profilestore_v1alpha1_profilestore_pb.LabelSet();
        reader.readMessage(
          value,
          parca_profilestore_v1alpha1_profilestore_pb.LabelSet.deserializeBinaryFromReader
        );
        msg.setDiscoveredLabels(value);
        break;
      case 2:
        var value = new parca_profilestore_v1alpha1_profilestore_pb.LabelSet();
        reader.readMessage(
          value,
          parca_profilestore_v1alpha1_profilestore_pb.LabelSet.deserializeBinaryFromReader
        );
        msg.setLabels(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setLastError(value);
        break;
      case 4:
        var value = new google_protobuf_timestamp_pb.Timestamp();
        reader.readMessage(
          value,
          google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader
        );
        msg.setLastScrape(value);
        break;
      case 5:
        var value = new google_protobuf_duration_pb.Duration();
        reader.readMessage(value, google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
        msg.setLastScrapeDuration(value);
        break;
      case 6:
        var value = /** @type {string} */ (reader.readString());
        msg.setUrl(value);
        break;
      case 7:
        var value = /** @type {!proto.parca.scrape.v1alpha1.Target.Health} */ (reader.readEnum());
        msg.setHealth(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.parca.scrape.v1alpha1.Target.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.parca.scrape.v1alpha1.Target.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.parca.scrape.v1alpha1.Target} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.scrape.v1alpha1.Target.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getDiscoveredLabels();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      parca_profilestore_v1alpha1_profilestore_pb.LabelSet.serializeBinaryToWriter
    );
  }
  f = message.getLabels();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      parca_profilestore_v1alpha1_profilestore_pb.LabelSet.serializeBinaryToWriter
    );
  }
  f = message.getLastError();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getLastScrape();
  if (f != null) {
    writer.writeMessage(4, f, google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter);
  }
  f = message.getLastScrapeDuration();
  if (f != null) {
    writer.writeMessage(5, f, google_protobuf_duration_pb.Duration.serializeBinaryToWriter);
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(6, f);
  }
  f = message.getHealth();
  if (f !== 0.0) {
    writer.writeEnum(7, f);
  }
};

/**
 * @enum {number}
 */
proto.parca.scrape.v1alpha1.Target.Health = {
  HEALTH_UNKNOWN_UNSPECIFIED: 0,
  HEALTH_GOOD: 1,
  HEALTH_BAD: 2,
};

/**
 * optional parca.profilestore.v1alpha1.LabelSet discovered_labels = 1;
 * @return {?proto.parca.profilestore.v1alpha1.LabelSet}
 */
proto.parca.scrape.v1alpha1.Target.prototype.getDiscoveredLabels = function () {
  return /** @type{?proto.parca.profilestore.v1alpha1.LabelSet} */ (
    jspb.Message.getWrapperField(this, parca_profilestore_v1alpha1_profilestore_pb.LabelSet, 1)
  );
};

/**
 * @param {?proto.parca.profilestore.v1alpha1.LabelSet|undefined} value
 * @return {!proto.parca.scrape.v1alpha1.Target} returns this
 */
proto.parca.scrape.v1alpha1.Target.prototype.setDiscoveredLabels = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.parca.scrape.v1alpha1.Target} returns this
 */
proto.parca.scrape.v1alpha1.Target.prototype.clearDiscoveredLabels = function () {
  return this.setDiscoveredLabels(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.parca.scrape.v1alpha1.Target.prototype.hasDiscoveredLabels = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional parca.profilestore.v1alpha1.LabelSet labels = 2;
 * @return {?proto.parca.profilestore.v1alpha1.LabelSet}
 */
proto.parca.scrape.v1alpha1.Target.prototype.getLabels = function () {
  return /** @type{?proto.parca.profilestore.v1alpha1.LabelSet} */ (
    jspb.Message.getWrapperField(this, parca_profilestore_v1alpha1_profilestore_pb.LabelSet, 2)
  );
};

/**
 * @param {?proto.parca.profilestore.v1alpha1.LabelSet|undefined} value
 * @return {!proto.parca.scrape.v1alpha1.Target} returns this
 */
proto.parca.scrape.v1alpha1.Target.prototype.setLabels = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.parca.scrape.v1alpha1.Target} returns this
 */
proto.parca.scrape.v1alpha1.Target.prototype.clearLabels = function () {
  return this.setLabels(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.parca.scrape.v1alpha1.Target.prototype.hasLabels = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string last_error = 3;
 * @return {string}
 */
proto.parca.scrape.v1alpha1.Target.prototype.getLastError = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.parca.scrape.v1alpha1.Target} returns this
 */
proto.parca.scrape.v1alpha1.Target.prototype.setLastError = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional google.protobuf.Timestamp last_scrape = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.parca.scrape.v1alpha1.Target.prototype.getLastScrape = function () {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4)
  );
};

/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.parca.scrape.v1alpha1.Target} returns this
 */
proto.parca.scrape.v1alpha1.Target.prototype.setLastScrape = function (value) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.parca.scrape.v1alpha1.Target} returns this
 */
proto.parca.scrape.v1alpha1.Target.prototype.clearLastScrape = function () {
  return this.setLastScrape(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.parca.scrape.v1alpha1.Target.prototype.hasLastScrape = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional google.protobuf.Duration last_scrape_duration = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.parca.scrape.v1alpha1.Target.prototype.getLastScrapeDuration = function () {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5)
  );
};

/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.parca.scrape.v1alpha1.Target} returns this
 */
proto.parca.scrape.v1alpha1.Target.prototype.setLastScrapeDuration = function (value) {
  return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.parca.scrape.v1alpha1.Target} returns this
 */
proto.parca.scrape.v1alpha1.Target.prototype.clearLastScrapeDuration = function () {
  return this.setLastScrapeDuration(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.parca.scrape.v1alpha1.Target.prototype.hasLastScrapeDuration = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional string url = 6;
 * @return {string}
 */
proto.parca.scrape.v1alpha1.Target.prototype.getUrl = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ''));
};

/**
 * @param {string} value
 * @return {!proto.parca.scrape.v1alpha1.Target} returns this
 */
proto.parca.scrape.v1alpha1.Target.prototype.setUrl = function (value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};

/**
 * optional Health health = 7;
 * @return {!proto.parca.scrape.v1alpha1.Target.Health}
 */
proto.parca.scrape.v1alpha1.Target.prototype.getHealth = function () {
  return /** @type {!proto.parca.scrape.v1alpha1.Target.Health} */ (
    jspb.Message.getFieldWithDefault(this, 7, 0)
  );
};

/**
 * @param {!proto.parca.scrape.v1alpha1.Target.Health} value
 * @return {!proto.parca.scrape.v1alpha1.Target} returns this
 */
proto.parca.scrape.v1alpha1.Target.prototype.setHealth = function (value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};

goog.object.extend(exports, proto.parca.scrape.v1alpha1);
