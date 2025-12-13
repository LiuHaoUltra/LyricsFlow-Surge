/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.spotify = (function() {

    /**
     * Namespace spotify.
     * @exports spotify
     * @namespace
     */
    var spotify = {};

    spotify.lyrics = (function() {

        /**
         * Namespace lyrics.
         * @memberof spotify
         * @namespace
         */
        var lyrics = {};

        /**
         * SyncType enum.
         * @name spotify.lyrics.SyncType
         * @enum {number}
         * @property {number} UNSYNCED=0 UNSYNCED value
         * @property {number} LINE_SYNCED=1 LINE_SYNCED value
         * @property {number} SYLLABLE_SYNCED=2 SYLLABLE_SYNCED value
         */
        lyrics.SyncType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNSYNCED"] = 0;
            values[valuesById[1] = "LINE_SYNCED"] = 1;
            values[valuesById[2] = "SYLLABLE_SYNCED"] = 2;
            return values;
        })();

        lyrics.ColorData = (function() {

            /**
             * Properties of a ColorData.
             * @memberof spotify.lyrics
             * @interface IColorData
             * @property {number|null} [red] ColorData red
             * @property {number|null} [green] ColorData green
             * @property {number|null} [blue] ColorData blue
             * @property {number|null} [alpha] ColorData alpha
             */

            /**
             * Constructs a new ColorData.
             * @memberof spotify.lyrics
             * @classdesc Represents a ColorData.
             * @implements IColorData
             * @constructor
             * @param {spotify.lyrics.IColorData=} [properties] Properties to set
             */
            function ColorData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ColorData red.
             * @member {number} red
             * @memberof spotify.lyrics.ColorData
             * @instance
             */
            ColorData.prototype.red = 0;

            /**
             * ColorData green.
             * @member {number} green
             * @memberof spotify.lyrics.ColorData
             * @instance
             */
            ColorData.prototype.green = 0;

            /**
             * ColorData blue.
             * @member {number} blue
             * @memberof spotify.lyrics.ColorData
             * @instance
             */
            ColorData.prototype.blue = 0;

            /**
             * ColorData alpha.
             * @member {number} alpha
             * @memberof spotify.lyrics.ColorData
             * @instance
             */
            ColorData.prototype.alpha = 0;

            /**
             * Creates a new ColorData instance using the specified properties.
             * @function create
             * @memberof spotify.lyrics.ColorData
             * @static
             * @param {spotify.lyrics.IColorData=} [properties] Properties to set
             * @returns {spotify.lyrics.ColorData} ColorData instance
             */
            ColorData.create = function create(properties) {
                return new ColorData(properties);
            };

            /**
             * Encodes the specified ColorData message. Does not implicitly {@link spotify.lyrics.ColorData.verify|verify} messages.
             * @function encode
             * @memberof spotify.lyrics.ColorData
             * @static
             * @param {spotify.lyrics.IColorData} message ColorData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ColorData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.red != null && Object.hasOwnProperty.call(message, "red"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.red);
                if (message.green != null && Object.hasOwnProperty.call(message, "green"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.green);
                if (message.blue != null && Object.hasOwnProperty.call(message, "blue"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.blue);
                if (message.alpha != null && Object.hasOwnProperty.call(message, "alpha"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.alpha);
                return writer;
            };

            /**
             * Encodes the specified ColorData message, length delimited. Does not implicitly {@link spotify.lyrics.ColorData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof spotify.lyrics.ColorData
             * @static
             * @param {spotify.lyrics.IColorData} message ColorData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ColorData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ColorData message from the specified reader or buffer.
             * @function decode
             * @memberof spotify.lyrics.ColorData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {spotify.lyrics.ColorData} ColorData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ColorData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.spotify.lyrics.ColorData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.red = reader.int32();
                            break;
                        }
                    case 2: {
                            message.green = reader.int32();
                            break;
                        }
                    case 3: {
                            message.blue = reader.int32();
                            break;
                        }
                    case 4: {
                            message.alpha = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ColorData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof spotify.lyrics.ColorData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {spotify.lyrics.ColorData} ColorData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ColorData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ColorData message.
             * @function verify
             * @memberof spotify.lyrics.ColorData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ColorData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.red != null && message.hasOwnProperty("red"))
                    if (!$util.isInteger(message.red))
                        return "red: integer expected";
                if (message.green != null && message.hasOwnProperty("green"))
                    if (!$util.isInteger(message.green))
                        return "green: integer expected";
                if (message.blue != null && message.hasOwnProperty("blue"))
                    if (!$util.isInteger(message.blue))
                        return "blue: integer expected";
                if (message.alpha != null && message.hasOwnProperty("alpha"))
                    if (!$util.isInteger(message.alpha))
                        return "alpha: integer expected";
                return null;
            };

            /**
             * Creates a ColorData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof spotify.lyrics.ColorData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {spotify.lyrics.ColorData} ColorData
             */
            ColorData.fromObject = function fromObject(object) {
                if (object instanceof $root.spotify.lyrics.ColorData)
                    return object;
                var message = new $root.spotify.lyrics.ColorData();
                if (object.red != null)
                    message.red = object.red | 0;
                if (object.green != null)
                    message.green = object.green | 0;
                if (object.blue != null)
                    message.blue = object.blue | 0;
                if (object.alpha != null)
                    message.alpha = object.alpha | 0;
                return message;
            };

            /**
             * Creates a plain object from a ColorData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof spotify.lyrics.ColorData
             * @static
             * @param {spotify.lyrics.ColorData} message ColorData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ColorData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.red = 0;
                    object.green = 0;
                    object.blue = 0;
                    object.alpha = 0;
                }
                if (message.red != null && message.hasOwnProperty("red"))
                    object.red = message.red;
                if (message.green != null && message.hasOwnProperty("green"))
                    object.green = message.green;
                if (message.blue != null && message.hasOwnProperty("blue"))
                    object.blue = message.blue;
                if (message.alpha != null && message.hasOwnProperty("alpha"))
                    object.alpha = message.alpha;
                return object;
            };

            /**
             * Converts this ColorData to JSON.
             * @function toJSON
             * @memberof spotify.lyrics.ColorData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ColorData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ColorData
             * @function getTypeUrl
             * @memberof spotify.lyrics.ColorData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ColorData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/spotify.lyrics.ColorData";
            };

            return ColorData;
        })();

        lyrics.Syllable = (function() {

            /**
             * Properties of a Syllable.
             * @memberof spotify.lyrics
             * @interface ISyllable
             * @property {number|Long|null} [startTimeMs] Syllable startTimeMs
             * @property {number|Long|null} [endTimeMs] Syllable endTimeMs
             * @property {string|null} [content] Syllable content
             */

            /**
             * Constructs a new Syllable.
             * @memberof spotify.lyrics
             * @classdesc Represents a Syllable.
             * @implements ISyllable
             * @constructor
             * @param {spotify.lyrics.ISyllable=} [properties] Properties to set
             */
            function Syllable(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Syllable startTimeMs.
             * @member {number|Long} startTimeMs
             * @memberof spotify.lyrics.Syllable
             * @instance
             */
            Syllable.prototype.startTimeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Syllable endTimeMs.
             * @member {number|Long} endTimeMs
             * @memberof spotify.lyrics.Syllable
             * @instance
             */
            Syllable.prototype.endTimeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Syllable content.
             * @member {string} content
             * @memberof spotify.lyrics.Syllable
             * @instance
             */
            Syllable.prototype.content = "";

            /**
             * Creates a new Syllable instance using the specified properties.
             * @function create
             * @memberof spotify.lyrics.Syllable
             * @static
             * @param {spotify.lyrics.ISyllable=} [properties] Properties to set
             * @returns {spotify.lyrics.Syllable} Syllable instance
             */
            Syllable.create = function create(properties) {
                return new Syllable(properties);
            };

            /**
             * Encodes the specified Syllable message. Does not implicitly {@link spotify.lyrics.Syllable.verify|verify} messages.
             * @function encode
             * @memberof spotify.lyrics.Syllable
             * @static
             * @param {spotify.lyrics.ISyllable} message Syllable message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Syllable.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.startTimeMs != null && Object.hasOwnProperty.call(message, "startTimeMs"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.startTimeMs);
                if (message.endTimeMs != null && Object.hasOwnProperty.call(message, "endTimeMs"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.endTimeMs);
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
                return writer;
            };

            /**
             * Encodes the specified Syllable message, length delimited. Does not implicitly {@link spotify.lyrics.Syllable.verify|verify} messages.
             * @function encodeDelimited
             * @memberof spotify.lyrics.Syllable
             * @static
             * @param {spotify.lyrics.ISyllable} message Syllable message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Syllable.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Syllable message from the specified reader or buffer.
             * @function decode
             * @memberof spotify.lyrics.Syllable
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {spotify.lyrics.Syllable} Syllable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Syllable.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.spotify.lyrics.Syllable();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.startTimeMs = reader.int64();
                            break;
                        }
                    case 2: {
                            message.endTimeMs = reader.int64();
                            break;
                        }
                    case 3: {
                            message.content = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Syllable message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof spotify.lyrics.Syllable
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {spotify.lyrics.Syllable} Syllable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Syllable.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Syllable message.
             * @function verify
             * @memberof spotify.lyrics.Syllable
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Syllable.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.startTimeMs != null && message.hasOwnProperty("startTimeMs"))
                    if (!$util.isInteger(message.startTimeMs) && !(message.startTimeMs && $util.isInteger(message.startTimeMs.low) && $util.isInteger(message.startTimeMs.high)))
                        return "startTimeMs: integer|Long expected";
                if (message.endTimeMs != null && message.hasOwnProperty("endTimeMs"))
                    if (!$util.isInteger(message.endTimeMs) && !(message.endTimeMs && $util.isInteger(message.endTimeMs.low) && $util.isInteger(message.endTimeMs.high)))
                        return "endTimeMs: integer|Long expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                return null;
            };

            /**
             * Creates a Syllable message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof spotify.lyrics.Syllable
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {spotify.lyrics.Syllable} Syllable
             */
            Syllable.fromObject = function fromObject(object) {
                if (object instanceof $root.spotify.lyrics.Syllable)
                    return object;
                var message = new $root.spotify.lyrics.Syllable();
                if (object.startTimeMs != null)
                    if ($util.Long)
                        (message.startTimeMs = $util.Long.fromValue(object.startTimeMs)).unsigned = false;
                    else if (typeof object.startTimeMs === "string")
                        message.startTimeMs = parseInt(object.startTimeMs, 10);
                    else if (typeof object.startTimeMs === "number")
                        message.startTimeMs = object.startTimeMs;
                    else if (typeof object.startTimeMs === "object")
                        message.startTimeMs = new $util.LongBits(object.startTimeMs.low >>> 0, object.startTimeMs.high >>> 0).toNumber();
                if (object.endTimeMs != null)
                    if ($util.Long)
                        (message.endTimeMs = $util.Long.fromValue(object.endTimeMs)).unsigned = false;
                    else if (typeof object.endTimeMs === "string")
                        message.endTimeMs = parseInt(object.endTimeMs, 10);
                    else if (typeof object.endTimeMs === "number")
                        message.endTimeMs = object.endTimeMs;
                    else if (typeof object.endTimeMs === "object")
                        message.endTimeMs = new $util.LongBits(object.endTimeMs.low >>> 0, object.endTimeMs.high >>> 0).toNumber();
                if (object.content != null)
                    message.content = String(object.content);
                return message;
            };

            /**
             * Creates a plain object from a Syllable message. Also converts values to other types if specified.
             * @function toObject
             * @memberof spotify.lyrics.Syllable
             * @static
             * @param {spotify.lyrics.Syllable} message Syllable
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Syllable.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.startTimeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.startTimeMs = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.endTimeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.endTimeMs = options.longs === String ? "0" : 0;
                    object.content = "";
                }
                if (message.startTimeMs != null && message.hasOwnProperty("startTimeMs"))
                    if (typeof message.startTimeMs === "number")
                        object.startTimeMs = options.longs === String ? String(message.startTimeMs) : message.startTimeMs;
                    else
                        object.startTimeMs = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeMs) : options.longs === Number ? new $util.LongBits(message.startTimeMs.low >>> 0, message.startTimeMs.high >>> 0).toNumber() : message.startTimeMs;
                if (message.endTimeMs != null && message.hasOwnProperty("endTimeMs"))
                    if (typeof message.endTimeMs === "number")
                        object.endTimeMs = options.longs === String ? String(message.endTimeMs) : message.endTimeMs;
                    else
                        object.endTimeMs = options.longs === String ? $util.Long.prototype.toString.call(message.endTimeMs) : options.longs === Number ? new $util.LongBits(message.endTimeMs.low >>> 0, message.endTimeMs.high >>> 0).toNumber() : message.endTimeMs;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                return object;
            };

            /**
             * Converts this Syllable to JSON.
             * @function toJSON
             * @memberof spotify.lyrics.Syllable
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Syllable.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Syllable
             * @function getTypeUrl
             * @memberof spotify.lyrics.Syllable
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Syllable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/spotify.lyrics.Syllable";
            };

            return Syllable;
        })();

        lyrics.Line = (function() {

            /**
             * Properties of a Line.
             * @memberof spotify.lyrics
             * @interface ILine
             * @property {string|null} [content] Line content
             * @property {number|Long|null} [startTimeMs] Line startTimeMs
             * @property {Array.<spotify.lyrics.ISyllable>|null} [syllables] Line syllables
             */

            /**
             * Constructs a new Line.
             * @memberof spotify.lyrics
             * @classdesc Represents a Line.
             * @implements ILine
             * @constructor
             * @param {spotify.lyrics.ILine=} [properties] Properties to set
             */
            function Line(properties) {
                this.syllables = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Line content.
             * @member {string} content
             * @memberof spotify.lyrics.Line
             * @instance
             */
            Line.prototype.content = "";

            /**
             * Line startTimeMs.
             * @member {number|Long} startTimeMs
             * @memberof spotify.lyrics.Line
             * @instance
             */
            Line.prototype.startTimeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Line syllables.
             * @member {Array.<spotify.lyrics.ISyllable>} syllables
             * @memberof spotify.lyrics.Line
             * @instance
             */
            Line.prototype.syllables = $util.emptyArray;

            /**
             * Creates a new Line instance using the specified properties.
             * @function create
             * @memberof spotify.lyrics.Line
             * @static
             * @param {spotify.lyrics.ILine=} [properties] Properties to set
             * @returns {spotify.lyrics.Line} Line instance
             */
            Line.create = function create(properties) {
                return new Line(properties);
            };

            /**
             * Encodes the specified Line message. Does not implicitly {@link spotify.lyrics.Line.verify|verify} messages.
             * @function encode
             * @memberof spotify.lyrics.Line
             * @static
             * @param {spotify.lyrics.ILine} message Line message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Line.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
                if (message.startTimeMs != null && Object.hasOwnProperty.call(message, "startTimeMs"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.startTimeMs);
                if (message.syllables != null && message.syllables.length)
                    for (var i = 0; i < message.syllables.length; ++i)
                        $root.spotify.lyrics.Syllable.encode(message.syllables[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Line message, length delimited. Does not implicitly {@link spotify.lyrics.Line.verify|verify} messages.
             * @function encodeDelimited
             * @memberof spotify.lyrics.Line
             * @static
             * @param {spotify.lyrics.ILine} message Line message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Line.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Line message from the specified reader or buffer.
             * @function decode
             * @memberof spotify.lyrics.Line
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {spotify.lyrics.Line} Line
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Line.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.spotify.lyrics.Line();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.content = reader.string();
                            break;
                        }
                    case 2: {
                            message.startTimeMs = reader.int64();
                            break;
                        }
                    case 3: {
                            if (!(message.syllables && message.syllables.length))
                                message.syllables = [];
                            message.syllables.push($root.spotify.lyrics.Syllable.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Line message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof spotify.lyrics.Line
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {spotify.lyrics.Line} Line
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Line.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Line message.
             * @function verify
             * @memberof spotify.lyrics.Line
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Line.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                if (message.startTimeMs != null && message.hasOwnProperty("startTimeMs"))
                    if (!$util.isInteger(message.startTimeMs) && !(message.startTimeMs && $util.isInteger(message.startTimeMs.low) && $util.isInteger(message.startTimeMs.high)))
                        return "startTimeMs: integer|Long expected";
                if (message.syllables != null && message.hasOwnProperty("syllables")) {
                    if (!Array.isArray(message.syllables))
                        return "syllables: array expected";
                    for (var i = 0; i < message.syllables.length; ++i) {
                        var error = $root.spotify.lyrics.Syllable.verify(message.syllables[i]);
                        if (error)
                            return "syllables." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Line message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof spotify.lyrics.Line
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {spotify.lyrics.Line} Line
             */
            Line.fromObject = function fromObject(object) {
                if (object instanceof $root.spotify.lyrics.Line)
                    return object;
                var message = new $root.spotify.lyrics.Line();
                if (object.content != null)
                    message.content = String(object.content);
                if (object.startTimeMs != null)
                    if ($util.Long)
                        (message.startTimeMs = $util.Long.fromValue(object.startTimeMs)).unsigned = false;
                    else if (typeof object.startTimeMs === "string")
                        message.startTimeMs = parseInt(object.startTimeMs, 10);
                    else if (typeof object.startTimeMs === "number")
                        message.startTimeMs = object.startTimeMs;
                    else if (typeof object.startTimeMs === "object")
                        message.startTimeMs = new $util.LongBits(object.startTimeMs.low >>> 0, object.startTimeMs.high >>> 0).toNumber();
                if (object.syllables) {
                    if (!Array.isArray(object.syllables))
                        throw TypeError(".spotify.lyrics.Line.syllables: array expected");
                    message.syllables = [];
                    for (var i = 0; i < object.syllables.length; ++i) {
                        if (typeof object.syllables[i] !== "object")
                            throw TypeError(".spotify.lyrics.Line.syllables: object expected");
                        message.syllables[i] = $root.spotify.lyrics.Syllable.fromObject(object.syllables[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Line message. Also converts values to other types if specified.
             * @function toObject
             * @memberof spotify.lyrics.Line
             * @static
             * @param {spotify.lyrics.Line} message Line
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Line.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.syllables = [];
                if (options.defaults) {
                    object.content = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.startTimeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.startTimeMs = options.longs === String ? "0" : 0;
                }
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                if (message.startTimeMs != null && message.hasOwnProperty("startTimeMs"))
                    if (typeof message.startTimeMs === "number")
                        object.startTimeMs = options.longs === String ? String(message.startTimeMs) : message.startTimeMs;
                    else
                        object.startTimeMs = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeMs) : options.longs === Number ? new $util.LongBits(message.startTimeMs.low >>> 0, message.startTimeMs.high >>> 0).toNumber() : message.startTimeMs;
                if (message.syllables && message.syllables.length) {
                    object.syllables = [];
                    for (var j = 0; j < message.syllables.length; ++j)
                        object.syllables[j] = $root.spotify.lyrics.Syllable.toObject(message.syllables[j], options);
                }
                return object;
            };

            /**
             * Converts this Line to JSON.
             * @function toJSON
             * @memberof spotify.lyrics.Line
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Line.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Line
             * @function getTypeUrl
             * @memberof spotify.lyrics.Line
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Line.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/spotify.lyrics.Line";
            };

            return Line;
        })();

        lyrics.LyricsResponse = (function() {

            /**
             * Properties of a LyricsResponse.
             * @memberof spotify.lyrics
             * @interface ILyricsResponse
             * @property {spotify.lyrics.SyncType|null} [syncType] LyricsResponse syncType
             * @property {Array.<spotify.lyrics.ILine>|null} [lines] LyricsResponse lines
             * @property {string|null} [provider] LyricsResponse provider
             * @property {string|null} [providerLyricsId] LyricsResponse providerLyricsId
             * @property {string|null} [providerDisplayName] LyricsResponse providerDisplayName
             * @property {string|null} [syncLyricsUri] LyricsResponse syncLyricsUri
             * @property {boolean|null} [isDenseTypeface] LyricsResponse isDenseTypeface
             * @property {Array.<spotify.lyrics.ILine>|null} [alternatives] LyricsResponse alternatives
             * @property {string|null} [language] LyricsResponse language
             * @property {spotify.lyrics.IColorData|null} [backgroundColor] LyricsResponse backgroundColor
             * @property {spotify.lyrics.IColorData|null} [textColor] LyricsResponse textColor
             */

            /**
             * Constructs a new LyricsResponse.
             * @memberof spotify.lyrics
             * @classdesc Represents a LyricsResponse.
             * @implements ILyricsResponse
             * @constructor
             * @param {spotify.lyrics.ILyricsResponse=} [properties] Properties to set
             */
            function LyricsResponse(properties) {
                this.lines = [];
                this.alternatives = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LyricsResponse syncType.
             * @member {spotify.lyrics.SyncType} syncType
             * @memberof spotify.lyrics.LyricsResponse
             * @instance
             */
            LyricsResponse.prototype.syncType = 0;

            /**
             * LyricsResponse lines.
             * @member {Array.<spotify.lyrics.ILine>} lines
             * @memberof spotify.lyrics.LyricsResponse
             * @instance
             */
            LyricsResponse.prototype.lines = $util.emptyArray;

            /**
             * LyricsResponse provider.
             * @member {string} provider
             * @memberof spotify.lyrics.LyricsResponse
             * @instance
             */
            LyricsResponse.prototype.provider = "";

            /**
             * LyricsResponse providerLyricsId.
             * @member {string} providerLyricsId
             * @memberof spotify.lyrics.LyricsResponse
             * @instance
             */
            LyricsResponse.prototype.providerLyricsId = "";

            /**
             * LyricsResponse providerDisplayName.
             * @member {string} providerDisplayName
             * @memberof spotify.lyrics.LyricsResponse
             * @instance
             */
            LyricsResponse.prototype.providerDisplayName = "";

            /**
             * LyricsResponse syncLyricsUri.
             * @member {string} syncLyricsUri
             * @memberof spotify.lyrics.LyricsResponse
             * @instance
             */
            LyricsResponse.prototype.syncLyricsUri = "";

            /**
             * LyricsResponse isDenseTypeface.
             * @member {boolean} isDenseTypeface
             * @memberof spotify.lyrics.LyricsResponse
             * @instance
             */
            LyricsResponse.prototype.isDenseTypeface = false;

            /**
             * LyricsResponse alternatives.
             * @member {Array.<spotify.lyrics.ILine>} alternatives
             * @memberof spotify.lyrics.LyricsResponse
             * @instance
             */
            LyricsResponse.prototype.alternatives = $util.emptyArray;

            /**
             * LyricsResponse language.
             * @member {string} language
             * @memberof spotify.lyrics.LyricsResponse
             * @instance
             */
            LyricsResponse.prototype.language = "";

            /**
             * LyricsResponse backgroundColor.
             * @member {spotify.lyrics.IColorData|null|undefined} backgroundColor
             * @memberof spotify.lyrics.LyricsResponse
             * @instance
             */
            LyricsResponse.prototype.backgroundColor = null;

            /**
             * LyricsResponse textColor.
             * @member {spotify.lyrics.IColorData|null|undefined} textColor
             * @memberof spotify.lyrics.LyricsResponse
             * @instance
             */
            LyricsResponse.prototype.textColor = null;

            /**
             * Creates a new LyricsResponse instance using the specified properties.
             * @function create
             * @memberof spotify.lyrics.LyricsResponse
             * @static
             * @param {spotify.lyrics.ILyricsResponse=} [properties] Properties to set
             * @returns {spotify.lyrics.LyricsResponse} LyricsResponse instance
             */
            LyricsResponse.create = function create(properties) {
                return new LyricsResponse(properties);
            };

            /**
             * Encodes the specified LyricsResponse message. Does not implicitly {@link spotify.lyrics.LyricsResponse.verify|verify} messages.
             * @function encode
             * @memberof spotify.lyrics.LyricsResponse
             * @static
             * @param {spotify.lyrics.ILyricsResponse} message LyricsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LyricsResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.syncType != null && Object.hasOwnProperty.call(message, "syncType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.syncType);
                if (message.lines != null && message.lines.length)
                    for (var i = 0; i < message.lines.length; ++i)
                        $root.spotify.lyrics.Line.encode(message.lines[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.provider != null && Object.hasOwnProperty.call(message, "provider"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.provider);
                if (message.providerLyricsId != null && Object.hasOwnProperty.call(message, "providerLyricsId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.providerLyricsId);
                if (message.providerDisplayName != null && Object.hasOwnProperty.call(message, "providerDisplayName"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.providerDisplayName);
                if (message.syncLyricsUri != null && Object.hasOwnProperty.call(message, "syncLyricsUri"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.syncLyricsUri);
                if (message.isDenseTypeface != null && Object.hasOwnProperty.call(message, "isDenseTypeface"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isDenseTypeface);
                if (message.alternatives != null && message.alternatives.length)
                    for (var i = 0; i < message.alternatives.length; ++i)
                        $root.spotify.lyrics.Line.encode(message.alternatives[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.language);
                if (message.backgroundColor != null && Object.hasOwnProperty.call(message, "backgroundColor"))
                    $root.spotify.lyrics.ColorData.encode(message.backgroundColor, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.textColor != null && Object.hasOwnProperty.call(message, "textColor"))
                    $root.spotify.lyrics.ColorData.encode(message.textColor, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified LyricsResponse message, length delimited. Does not implicitly {@link spotify.lyrics.LyricsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof spotify.lyrics.LyricsResponse
             * @static
             * @param {spotify.lyrics.ILyricsResponse} message LyricsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LyricsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LyricsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof spotify.lyrics.LyricsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {spotify.lyrics.LyricsResponse} LyricsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LyricsResponse.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.spotify.lyrics.LyricsResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.syncType = reader.int32();
                            break;
                        }
                    case 2: {
                            if (!(message.lines && message.lines.length))
                                message.lines = [];
                            message.lines.push($root.spotify.lyrics.Line.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.provider = reader.string();
                            break;
                        }
                    case 4: {
                            message.providerLyricsId = reader.string();
                            break;
                        }
                    case 5: {
                            message.providerDisplayName = reader.string();
                            break;
                        }
                    case 6: {
                            message.syncLyricsUri = reader.string();
                            break;
                        }
                    case 7: {
                            message.isDenseTypeface = reader.bool();
                            break;
                        }
                    case 8: {
                            if (!(message.alternatives && message.alternatives.length))
                                message.alternatives = [];
                            message.alternatives.push($root.spotify.lyrics.Line.decode(reader, reader.uint32()));
                            break;
                        }
                    case 9: {
                            message.language = reader.string();
                            break;
                        }
                    case 10: {
                            message.backgroundColor = $root.spotify.lyrics.ColorData.decode(reader, reader.uint32());
                            break;
                        }
                    case 11: {
                            message.textColor = $root.spotify.lyrics.ColorData.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LyricsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof spotify.lyrics.LyricsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {spotify.lyrics.LyricsResponse} LyricsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LyricsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LyricsResponse message.
             * @function verify
             * @memberof spotify.lyrics.LyricsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LyricsResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.syncType != null && message.hasOwnProperty("syncType"))
                    switch (message.syncType) {
                    default:
                        return "syncType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.lines != null && message.hasOwnProperty("lines")) {
                    if (!Array.isArray(message.lines))
                        return "lines: array expected";
                    for (var i = 0; i < message.lines.length; ++i) {
                        var error = $root.spotify.lyrics.Line.verify(message.lines[i]);
                        if (error)
                            return "lines." + error;
                    }
                }
                if (message.provider != null && message.hasOwnProperty("provider"))
                    if (!$util.isString(message.provider))
                        return "provider: string expected";
                if (message.providerLyricsId != null && message.hasOwnProperty("providerLyricsId"))
                    if (!$util.isString(message.providerLyricsId))
                        return "providerLyricsId: string expected";
                if (message.providerDisplayName != null && message.hasOwnProperty("providerDisplayName"))
                    if (!$util.isString(message.providerDisplayName))
                        return "providerDisplayName: string expected";
                if (message.syncLyricsUri != null && message.hasOwnProperty("syncLyricsUri"))
                    if (!$util.isString(message.syncLyricsUri))
                        return "syncLyricsUri: string expected";
                if (message.isDenseTypeface != null && message.hasOwnProperty("isDenseTypeface"))
                    if (typeof message.isDenseTypeface !== "boolean")
                        return "isDenseTypeface: boolean expected";
                if (message.alternatives != null && message.hasOwnProperty("alternatives")) {
                    if (!Array.isArray(message.alternatives))
                        return "alternatives: array expected";
                    for (var i = 0; i < message.alternatives.length; ++i) {
                        var error = $root.spotify.lyrics.Line.verify(message.alternatives[i]);
                        if (error)
                            return "alternatives." + error;
                    }
                }
                if (message.language != null && message.hasOwnProperty("language"))
                    if (!$util.isString(message.language))
                        return "language: string expected";
                if (message.backgroundColor != null && message.hasOwnProperty("backgroundColor")) {
                    var error = $root.spotify.lyrics.ColorData.verify(message.backgroundColor);
                    if (error)
                        return "backgroundColor." + error;
                }
                if (message.textColor != null && message.hasOwnProperty("textColor")) {
                    var error = $root.spotify.lyrics.ColorData.verify(message.textColor);
                    if (error)
                        return "textColor." + error;
                }
                return null;
            };

            /**
             * Creates a LyricsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof spotify.lyrics.LyricsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {spotify.lyrics.LyricsResponse} LyricsResponse
             */
            LyricsResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.spotify.lyrics.LyricsResponse)
                    return object;
                var message = new $root.spotify.lyrics.LyricsResponse();
                switch (object.syncType) {
                default:
                    if (typeof object.syncType === "number") {
                        message.syncType = object.syncType;
                        break;
                    }
                    break;
                case "UNSYNCED":
                case 0:
                    message.syncType = 0;
                    break;
                case "LINE_SYNCED":
                case 1:
                    message.syncType = 1;
                    break;
                case "SYLLABLE_SYNCED":
                case 2:
                    message.syncType = 2;
                    break;
                }
                if (object.lines) {
                    if (!Array.isArray(object.lines))
                        throw TypeError(".spotify.lyrics.LyricsResponse.lines: array expected");
                    message.lines = [];
                    for (var i = 0; i < object.lines.length; ++i) {
                        if (typeof object.lines[i] !== "object")
                            throw TypeError(".spotify.lyrics.LyricsResponse.lines: object expected");
                        message.lines[i] = $root.spotify.lyrics.Line.fromObject(object.lines[i]);
                    }
                }
                if (object.provider != null)
                    message.provider = String(object.provider);
                if (object.providerLyricsId != null)
                    message.providerLyricsId = String(object.providerLyricsId);
                if (object.providerDisplayName != null)
                    message.providerDisplayName = String(object.providerDisplayName);
                if (object.syncLyricsUri != null)
                    message.syncLyricsUri = String(object.syncLyricsUri);
                if (object.isDenseTypeface != null)
                    message.isDenseTypeface = Boolean(object.isDenseTypeface);
                if (object.alternatives) {
                    if (!Array.isArray(object.alternatives))
                        throw TypeError(".spotify.lyrics.LyricsResponse.alternatives: array expected");
                    message.alternatives = [];
                    for (var i = 0; i < object.alternatives.length; ++i) {
                        if (typeof object.alternatives[i] !== "object")
                            throw TypeError(".spotify.lyrics.LyricsResponse.alternatives: object expected");
                        message.alternatives[i] = $root.spotify.lyrics.Line.fromObject(object.alternatives[i]);
                    }
                }
                if (object.language != null)
                    message.language = String(object.language);
                if (object.backgroundColor != null) {
                    if (typeof object.backgroundColor !== "object")
                        throw TypeError(".spotify.lyrics.LyricsResponse.backgroundColor: object expected");
                    message.backgroundColor = $root.spotify.lyrics.ColorData.fromObject(object.backgroundColor);
                }
                if (object.textColor != null) {
                    if (typeof object.textColor !== "object")
                        throw TypeError(".spotify.lyrics.LyricsResponse.textColor: object expected");
                    message.textColor = $root.spotify.lyrics.ColorData.fromObject(object.textColor);
                }
                return message;
            };

            /**
             * Creates a plain object from a LyricsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof spotify.lyrics.LyricsResponse
             * @static
             * @param {spotify.lyrics.LyricsResponse} message LyricsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LyricsResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.lines = [];
                    object.alternatives = [];
                }
                if (options.defaults) {
                    object.syncType = options.enums === String ? "UNSYNCED" : 0;
                    object.provider = "";
                    object.providerLyricsId = "";
                    object.providerDisplayName = "";
                    object.syncLyricsUri = "";
                    object.isDenseTypeface = false;
                    object.language = "";
                    object.backgroundColor = null;
                    object.textColor = null;
                }
                if (message.syncType != null && message.hasOwnProperty("syncType"))
                    object.syncType = options.enums === String ? $root.spotify.lyrics.SyncType[message.syncType] === undefined ? message.syncType : $root.spotify.lyrics.SyncType[message.syncType] : message.syncType;
                if (message.lines && message.lines.length) {
                    object.lines = [];
                    for (var j = 0; j < message.lines.length; ++j)
                        object.lines[j] = $root.spotify.lyrics.Line.toObject(message.lines[j], options);
                }
                if (message.provider != null && message.hasOwnProperty("provider"))
                    object.provider = message.provider;
                if (message.providerLyricsId != null && message.hasOwnProperty("providerLyricsId"))
                    object.providerLyricsId = message.providerLyricsId;
                if (message.providerDisplayName != null && message.hasOwnProperty("providerDisplayName"))
                    object.providerDisplayName = message.providerDisplayName;
                if (message.syncLyricsUri != null && message.hasOwnProperty("syncLyricsUri"))
                    object.syncLyricsUri = message.syncLyricsUri;
                if (message.isDenseTypeface != null && message.hasOwnProperty("isDenseTypeface"))
                    object.isDenseTypeface = message.isDenseTypeface;
                if (message.alternatives && message.alternatives.length) {
                    object.alternatives = [];
                    for (var j = 0; j < message.alternatives.length; ++j)
                        object.alternatives[j] = $root.spotify.lyrics.Line.toObject(message.alternatives[j], options);
                }
                if (message.language != null && message.hasOwnProperty("language"))
                    object.language = message.language;
                if (message.backgroundColor != null && message.hasOwnProperty("backgroundColor"))
                    object.backgroundColor = $root.spotify.lyrics.ColorData.toObject(message.backgroundColor, options);
                if (message.textColor != null && message.hasOwnProperty("textColor"))
                    object.textColor = $root.spotify.lyrics.ColorData.toObject(message.textColor, options);
                return object;
            };

            /**
             * Converts this LyricsResponse to JSON.
             * @function toJSON
             * @memberof spotify.lyrics.LyricsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LyricsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LyricsResponse
             * @function getTypeUrl
             * @memberof spotify.lyrics.LyricsResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LyricsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/spotify.lyrics.LyricsResponse";
            };

            return LyricsResponse;
        })();

        return lyrics;
    })();

    return spotify;
})();

module.exports = $root;
