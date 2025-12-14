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
             * @property {number|Long|null} [numChars] Syllable numChars
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
             * Syllable numChars.
             * @member {number|Long} numChars
             * @memberof spotify.lyrics.Syllable
             * @instance
             */
            Syllable.prototype.numChars = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
                if (message.numChars != null && Object.hasOwnProperty.call(message, "numChars"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.numChars);
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
                            message.numChars = reader.int64();
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
                if (message.numChars != null && message.hasOwnProperty("numChars"))
                    if (!$util.isInteger(message.numChars) && !(message.numChars && $util.isInteger(message.numChars.low) && $util.isInteger(message.numChars.high)))
                        return "numChars: integer|Long expected";
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
                if (object.numChars != null)
                    if ($util.Long)
                        (message.numChars = $util.Long.fromValue(object.numChars)).unsigned = false;
                    else if (typeof object.numChars === "string")
                        message.numChars = parseInt(object.numChars, 10);
                    else if (typeof object.numChars === "number")
                        message.numChars = object.numChars;
                    else if (typeof object.numChars === "object")
                        message.numChars = new $util.LongBits(object.numChars.low >>> 0, object.numChars.high >>> 0).toNumber();
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
                        object.numChars = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.numChars = options.longs === String ? "0" : 0;
                }
                if (message.startTimeMs != null && message.hasOwnProperty("startTimeMs"))
                    if (typeof message.startTimeMs === "number")
                        object.startTimeMs = options.longs === String ? String(message.startTimeMs) : message.startTimeMs;
                    else
                        object.startTimeMs = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeMs) : options.longs === Number ? new $util.LongBits(message.startTimeMs.low >>> 0, message.startTimeMs.high >>> 0).toNumber() : message.startTimeMs;
                if (message.numChars != null && message.hasOwnProperty("numChars"))
                    if (typeof message.numChars === "number")
                        object.numChars = options.longs === String ? String(message.numChars) : message.numChars;
                    else
                        object.numChars = options.longs === String ? $util.Long.prototype.toString.call(message.numChars) : options.longs === Number ? new $util.LongBits(message.numChars.low >>> 0, message.numChars.high >>> 0).toNumber() : message.numChars;
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

        lyrics.LyricsLine = (function() {

            /**
             * Properties of a LyricsLine.
             * @memberof spotify.lyrics
             * @interface ILyricsLine
             * @property {number|Long|null} [startTimeMs] LyricsLine startTimeMs
             * @property {string|null} [words] LyricsLine words
             * @property {Array.<spotify.lyrics.ISyllable>|null} [syllables] LyricsLine syllables
             */

            /**
             * Constructs a new LyricsLine.
             * @memberof spotify.lyrics
             * @classdesc Represents a LyricsLine.
             * @implements ILyricsLine
             * @constructor
             * @param {spotify.lyrics.ILyricsLine=} [properties] Properties to set
             */
            function LyricsLine(properties) {
                this.syllables = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LyricsLine startTimeMs.
             * @member {number|Long} startTimeMs
             * @memberof spotify.lyrics.LyricsLine
             * @instance
             */
            LyricsLine.prototype.startTimeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LyricsLine words.
             * @member {string} words
             * @memberof spotify.lyrics.LyricsLine
             * @instance
             */
            LyricsLine.prototype.words = "";

            /**
             * LyricsLine syllables.
             * @member {Array.<spotify.lyrics.ISyllable>} syllables
             * @memberof spotify.lyrics.LyricsLine
             * @instance
             */
            LyricsLine.prototype.syllables = $util.emptyArray;

            /**
             * Creates a new LyricsLine instance using the specified properties.
             * @function create
             * @memberof spotify.lyrics.LyricsLine
             * @static
             * @param {spotify.lyrics.ILyricsLine=} [properties] Properties to set
             * @returns {spotify.lyrics.LyricsLine} LyricsLine instance
             */
            LyricsLine.create = function create(properties) {
                return new LyricsLine(properties);
            };

            /**
             * Encodes the specified LyricsLine message. Does not implicitly {@link spotify.lyrics.LyricsLine.verify|verify} messages.
             * @function encode
             * @memberof spotify.lyrics.LyricsLine
             * @static
             * @param {spotify.lyrics.ILyricsLine} message LyricsLine message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LyricsLine.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.startTimeMs != null && Object.hasOwnProperty.call(message, "startTimeMs"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.startTimeMs);
                if (message.words != null && Object.hasOwnProperty.call(message, "words"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.words);
                if (message.syllables != null && message.syllables.length)
                    for (var i = 0; i < message.syllables.length; ++i)
                        $root.spotify.lyrics.Syllable.encode(message.syllables[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified LyricsLine message, length delimited. Does not implicitly {@link spotify.lyrics.LyricsLine.verify|verify} messages.
             * @function encodeDelimited
             * @memberof spotify.lyrics.LyricsLine
             * @static
             * @param {spotify.lyrics.ILyricsLine} message LyricsLine message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LyricsLine.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LyricsLine message from the specified reader or buffer.
             * @function decode
             * @memberof spotify.lyrics.LyricsLine
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {spotify.lyrics.LyricsLine} LyricsLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LyricsLine.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.spotify.lyrics.LyricsLine();
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
                            message.words = reader.string();
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
             * Decodes a LyricsLine message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof spotify.lyrics.LyricsLine
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {spotify.lyrics.LyricsLine} LyricsLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LyricsLine.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LyricsLine message.
             * @function verify
             * @memberof spotify.lyrics.LyricsLine
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LyricsLine.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.startTimeMs != null && message.hasOwnProperty("startTimeMs"))
                    if (!$util.isInteger(message.startTimeMs) && !(message.startTimeMs && $util.isInteger(message.startTimeMs.low) && $util.isInteger(message.startTimeMs.high)))
                        return "startTimeMs: integer|Long expected";
                if (message.words != null && message.hasOwnProperty("words"))
                    if (!$util.isString(message.words))
                        return "words: string expected";
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
             * Creates a LyricsLine message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof spotify.lyrics.LyricsLine
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {spotify.lyrics.LyricsLine} LyricsLine
             */
            LyricsLine.fromObject = function fromObject(object) {
                if (object instanceof $root.spotify.lyrics.LyricsLine)
                    return object;
                var message = new $root.spotify.lyrics.LyricsLine();
                if (object.startTimeMs != null)
                    if ($util.Long)
                        (message.startTimeMs = $util.Long.fromValue(object.startTimeMs)).unsigned = false;
                    else if (typeof object.startTimeMs === "string")
                        message.startTimeMs = parseInt(object.startTimeMs, 10);
                    else if (typeof object.startTimeMs === "number")
                        message.startTimeMs = object.startTimeMs;
                    else if (typeof object.startTimeMs === "object")
                        message.startTimeMs = new $util.LongBits(object.startTimeMs.low >>> 0, object.startTimeMs.high >>> 0).toNumber();
                if (object.words != null)
                    message.words = String(object.words);
                if (object.syllables) {
                    if (!Array.isArray(object.syllables))
                        throw TypeError(".spotify.lyrics.LyricsLine.syllables: array expected");
                    message.syllables = [];
                    for (var i = 0; i < object.syllables.length; ++i) {
                        if (typeof object.syllables[i] !== "object")
                            throw TypeError(".spotify.lyrics.LyricsLine.syllables: object expected");
                        message.syllables[i] = $root.spotify.lyrics.Syllable.fromObject(object.syllables[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a LyricsLine message. Also converts values to other types if specified.
             * @function toObject
             * @memberof spotify.lyrics.LyricsLine
             * @static
             * @param {spotify.lyrics.LyricsLine} message LyricsLine
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LyricsLine.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.syllables = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.startTimeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.startTimeMs = options.longs === String ? "0" : 0;
                    object.words = "";
                }
                if (message.startTimeMs != null && message.hasOwnProperty("startTimeMs"))
                    if (typeof message.startTimeMs === "number")
                        object.startTimeMs = options.longs === String ? String(message.startTimeMs) : message.startTimeMs;
                    else
                        object.startTimeMs = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeMs) : options.longs === Number ? new $util.LongBits(message.startTimeMs.low >>> 0, message.startTimeMs.high >>> 0).toNumber() : message.startTimeMs;
                if (message.words != null && message.hasOwnProperty("words"))
                    object.words = message.words;
                if (message.syllables && message.syllables.length) {
                    object.syllables = [];
                    for (var j = 0; j < message.syllables.length; ++j)
                        object.syllables[j] = $root.spotify.lyrics.Syllable.toObject(message.syllables[j], options);
                }
                return object;
            };

            /**
             * Converts this LyricsLine to JSON.
             * @function toJSON
             * @memberof spotify.lyrics.LyricsLine
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LyricsLine.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LyricsLine
             * @function getTypeUrl
             * @memberof spotify.lyrics.LyricsLine
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LyricsLine.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/spotify.lyrics.LyricsLine";
            };

            return LyricsLine;
        })();

        lyrics.Alternative = (function() {

            /**
             * Properties of an Alternative.
             * @memberof spotify.lyrics
             * @interface IAlternative
             * @property {string|null} [language] Alternative language
             * @property {Array.<string>|null} [lines] Alternative lines
             * @property {boolean|null} [rtlLang] Alternative rtlLang
             */

            /**
             * Constructs a new Alternative.
             * @memberof spotify.lyrics
             * @classdesc Represents an Alternative.
             * @implements IAlternative
             * @constructor
             * @param {spotify.lyrics.IAlternative=} [properties] Properties to set
             */
            function Alternative(properties) {
                this.lines = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Alternative language.
             * @member {string} language
             * @memberof spotify.lyrics.Alternative
             * @instance
             */
            Alternative.prototype.language = "";

            /**
             * Alternative lines.
             * @member {Array.<string>} lines
             * @memberof spotify.lyrics.Alternative
             * @instance
             */
            Alternative.prototype.lines = $util.emptyArray;

            /**
             * Alternative rtlLang.
             * @member {boolean} rtlLang
             * @memberof spotify.lyrics.Alternative
             * @instance
             */
            Alternative.prototype.rtlLang = false;

            /**
             * Creates a new Alternative instance using the specified properties.
             * @function create
             * @memberof spotify.lyrics.Alternative
             * @static
             * @param {spotify.lyrics.IAlternative=} [properties] Properties to set
             * @returns {spotify.lyrics.Alternative} Alternative instance
             */
            Alternative.create = function create(properties) {
                return new Alternative(properties);
            };

            /**
             * Encodes the specified Alternative message. Does not implicitly {@link spotify.lyrics.Alternative.verify|verify} messages.
             * @function encode
             * @memberof spotify.lyrics.Alternative
             * @static
             * @param {spotify.lyrics.IAlternative} message Alternative message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Alternative.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.language);
                if (message.lines != null && message.lines.length)
                    for (var i = 0; i < message.lines.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.lines[i]);
                if (message.rtlLang != null && Object.hasOwnProperty.call(message, "rtlLang"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.rtlLang);
                return writer;
            };

            /**
             * Encodes the specified Alternative message, length delimited. Does not implicitly {@link spotify.lyrics.Alternative.verify|verify} messages.
             * @function encodeDelimited
             * @memberof spotify.lyrics.Alternative
             * @static
             * @param {spotify.lyrics.IAlternative} message Alternative message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Alternative.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Alternative message from the specified reader or buffer.
             * @function decode
             * @memberof spotify.lyrics.Alternative
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {spotify.lyrics.Alternative} Alternative
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Alternative.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.spotify.lyrics.Alternative();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.language = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.lines && message.lines.length))
                                message.lines = [];
                            message.lines.push(reader.string());
                            break;
                        }
                    case 3: {
                            message.rtlLang = reader.bool();
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
             * Decodes an Alternative message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof spotify.lyrics.Alternative
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {spotify.lyrics.Alternative} Alternative
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Alternative.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Alternative message.
             * @function verify
             * @memberof spotify.lyrics.Alternative
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Alternative.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.language != null && message.hasOwnProperty("language"))
                    if (!$util.isString(message.language))
                        return "language: string expected";
                if (message.lines != null && message.hasOwnProperty("lines")) {
                    if (!Array.isArray(message.lines))
                        return "lines: array expected";
                    for (var i = 0; i < message.lines.length; ++i)
                        if (!$util.isString(message.lines[i]))
                            return "lines: string[] expected";
                }
                if (message.rtlLang != null && message.hasOwnProperty("rtlLang"))
                    if (typeof message.rtlLang !== "boolean")
                        return "rtlLang: boolean expected";
                return null;
            };

            /**
             * Creates an Alternative message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof spotify.lyrics.Alternative
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {spotify.lyrics.Alternative} Alternative
             */
            Alternative.fromObject = function fromObject(object) {
                if (object instanceof $root.spotify.lyrics.Alternative)
                    return object;
                var message = new $root.spotify.lyrics.Alternative();
                if (object.language != null)
                    message.language = String(object.language);
                if (object.lines) {
                    if (!Array.isArray(object.lines))
                        throw TypeError(".spotify.lyrics.Alternative.lines: array expected");
                    message.lines = [];
                    for (var i = 0; i < object.lines.length; ++i)
                        message.lines[i] = String(object.lines[i]);
                }
                if (object.rtlLang != null)
                    message.rtlLang = Boolean(object.rtlLang);
                return message;
            };

            /**
             * Creates a plain object from an Alternative message. Also converts values to other types if specified.
             * @function toObject
             * @memberof spotify.lyrics.Alternative
             * @static
             * @param {spotify.lyrics.Alternative} message Alternative
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Alternative.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.lines = [];
                if (options.defaults) {
                    object.language = "";
                    object.rtlLang = false;
                }
                if (message.language != null && message.hasOwnProperty("language"))
                    object.language = message.language;
                if (message.lines && message.lines.length) {
                    object.lines = [];
                    for (var j = 0; j < message.lines.length; ++j)
                        object.lines[j] = message.lines[j];
                }
                if (message.rtlLang != null && message.hasOwnProperty("rtlLang"))
                    object.rtlLang = message.rtlLang;
                return object;
            };

            /**
             * Converts this Alternative to JSON.
             * @function toJSON
             * @memberof spotify.lyrics.Alternative
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Alternative.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Alternative
             * @function getTypeUrl
             * @memberof spotify.lyrics.Alternative
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Alternative.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/spotify.lyrics.Alternative";
            };

            return Alternative;
        })();

        lyrics.LyricsResponse = (function() {

            /**
             * Properties of a LyricsResponse.
             * @memberof spotify.lyrics
             * @interface ILyricsResponse
             * @property {spotify.lyrics.SyncType|null} [syncType] LyricsResponse syncType
             * @property {Array.<spotify.lyrics.ILyricsLine>|null} [lines] LyricsResponse lines
             * @property {string|null} [provider] LyricsResponse provider
             * @property {string|null} [providerLyricsId] LyricsResponse providerLyricsId
             * @property {string|null} [providerDisplayName] LyricsResponse providerDisplayName
             * @property {string|null} [syncLyricsUri] LyricsResponse syncLyricsUri
             * @property {boolean|null} [isDenseTypeface] LyricsResponse isDenseTypeface
             * @property {Array.<spotify.lyrics.IAlternative>|null} [alternatives] LyricsResponse alternatives
             * @property {string|null} [language] LyricsResponse language
             * @property {boolean|null} [isRtlLanguage] LyricsResponse isRtlLanguage
             * @property {number|null} [fullscreenAction] LyricsResponse fullscreenAction
             * @property {boolean|null} [showUpsell] LyricsResponse showUpsell
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
             * @member {Array.<spotify.lyrics.ILyricsLine>} lines
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
             * @member {Array.<spotify.lyrics.IAlternative>} alternatives
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
             * LyricsResponse isRtlLanguage.
             * @member {boolean} isRtlLanguage
             * @memberof spotify.lyrics.LyricsResponse
             * @instance
             */
            LyricsResponse.prototype.isRtlLanguage = false;

            /**
             * LyricsResponse fullscreenAction.
             * @member {number} fullscreenAction
             * @memberof spotify.lyrics.LyricsResponse
             * @instance
             */
            LyricsResponse.prototype.fullscreenAction = 0;

            /**
             * LyricsResponse showUpsell.
             * @member {boolean} showUpsell
             * @memberof spotify.lyrics.LyricsResponse
             * @instance
             */
            LyricsResponse.prototype.showUpsell = false;

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
                        $root.spotify.lyrics.LyricsLine.encode(message.lines[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.provider != null && Object.hasOwnProperty.call(message, "provider"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.provider);
                if (message.providerLyricsId != null && Object.hasOwnProperty.call(message, "providerLyricsId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.providerLyricsId);
                if (message.providerDisplayName != null && Object.hasOwnProperty.call(message, "providerDisplayName"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.providerDisplayName);
                if (message.syncLyricsUri != null && Object.hasOwnProperty.call(message, "syncLyricsUri"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.syncLyricsUri);
                if (message.isDenseTypeface != null && Object.hasOwnProperty.call(message, "isDenseTypeface"))
                    writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isDenseTypeface);
                if (message.alternatives != null && message.alternatives.length)
                    for (var i = 0; i < message.alternatives.length; ++i)
                        $root.spotify.lyrics.Alternative.encode(message.alternatives[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.language);
                if (message.isRtlLanguage != null && Object.hasOwnProperty.call(message, "isRtlLanguage"))
                    writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isRtlLanguage);
                if (message.fullscreenAction != null && Object.hasOwnProperty.call(message, "fullscreenAction"))
                    writer.uint32(/* id 12, wireType 0 =*/96).int32(message.fullscreenAction);
                if (message.showUpsell != null && Object.hasOwnProperty.call(message, "showUpsell"))
                    writer.uint32(/* id 13, wireType 0 =*/104).bool(message.showUpsell);
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
                            message.lines.push($root.spotify.lyrics.LyricsLine.decode(reader, reader.uint32()));
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
                    case 7: {
                            message.syncLyricsUri = reader.string();
                            break;
                        }
                    case 8: {
                            message.isDenseTypeface = reader.bool();
                            break;
                        }
                    case 9: {
                            if (!(message.alternatives && message.alternatives.length))
                                message.alternatives = [];
                            message.alternatives.push($root.spotify.lyrics.Alternative.decode(reader, reader.uint32()));
                            break;
                        }
                    case 10: {
                            message.language = reader.string();
                            break;
                        }
                    case 11: {
                            message.isRtlLanguage = reader.bool();
                            break;
                        }
                    case 12: {
                            message.fullscreenAction = reader.int32();
                            break;
                        }
                    case 13: {
                            message.showUpsell = reader.bool();
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
                        var error = $root.spotify.lyrics.LyricsLine.verify(message.lines[i]);
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
                        var error = $root.spotify.lyrics.Alternative.verify(message.alternatives[i]);
                        if (error)
                            return "alternatives." + error;
                    }
                }
                if (message.language != null && message.hasOwnProperty("language"))
                    if (!$util.isString(message.language))
                        return "language: string expected";
                if (message.isRtlLanguage != null && message.hasOwnProperty("isRtlLanguage"))
                    if (typeof message.isRtlLanguage !== "boolean")
                        return "isRtlLanguage: boolean expected";
                if (message.fullscreenAction != null && message.hasOwnProperty("fullscreenAction"))
                    if (!$util.isInteger(message.fullscreenAction))
                        return "fullscreenAction: integer expected";
                if (message.showUpsell != null && message.hasOwnProperty("showUpsell"))
                    if (typeof message.showUpsell !== "boolean")
                        return "showUpsell: boolean expected";
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
                        message.lines[i] = $root.spotify.lyrics.LyricsLine.fromObject(object.lines[i]);
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
                        message.alternatives[i] = $root.spotify.lyrics.Alternative.fromObject(object.alternatives[i]);
                    }
                }
                if (object.language != null)
                    message.language = String(object.language);
                if (object.isRtlLanguage != null)
                    message.isRtlLanguage = Boolean(object.isRtlLanguage);
                if (object.fullscreenAction != null)
                    message.fullscreenAction = object.fullscreenAction | 0;
                if (object.showUpsell != null)
                    message.showUpsell = Boolean(object.showUpsell);
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
                    object.isRtlLanguage = false;
                    object.fullscreenAction = 0;
                    object.showUpsell = false;
                }
                if (message.syncType != null && message.hasOwnProperty("syncType"))
                    object.syncType = options.enums === String ? $root.spotify.lyrics.SyncType[message.syncType] === undefined ? message.syncType : $root.spotify.lyrics.SyncType[message.syncType] : message.syncType;
                if (message.lines && message.lines.length) {
                    object.lines = [];
                    for (var j = 0; j < message.lines.length; ++j)
                        object.lines[j] = $root.spotify.lyrics.LyricsLine.toObject(message.lines[j], options);
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
                        object.alternatives[j] = $root.spotify.lyrics.Alternative.toObject(message.alternatives[j], options);
                }
                if (message.language != null && message.hasOwnProperty("language"))
                    object.language = message.language;
                if (message.isRtlLanguage != null && message.hasOwnProperty("isRtlLanguage"))
                    object.isRtlLanguage = message.isRtlLanguage;
                if (message.fullscreenAction != null && message.hasOwnProperty("fullscreenAction"))
                    object.fullscreenAction = message.fullscreenAction;
                if (message.showUpsell != null && message.hasOwnProperty("showUpsell"))
                    object.showUpsell = message.showUpsell;
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

        lyrics.LyricsColors = (function() {

            /**
             * Properties of a LyricsColors.
             * @memberof spotify.lyrics
             * @interface ILyricsColors
             * @property {number|null} [background] LyricsColors background
             * @property {number|null} [text] LyricsColors text
             * @property {number|null} [highlightText] LyricsColors highlightText
             */

            /**
             * Constructs a new LyricsColors.
             * @memberof spotify.lyrics
             * @classdesc Represents a LyricsColors.
             * @implements ILyricsColors
             * @constructor
             * @param {spotify.lyrics.ILyricsColors=} [properties] Properties to set
             */
            function LyricsColors(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LyricsColors background.
             * @member {number} background
             * @memberof spotify.lyrics.LyricsColors
             * @instance
             */
            LyricsColors.prototype.background = 0;

            /**
             * LyricsColors text.
             * @member {number} text
             * @memberof spotify.lyrics.LyricsColors
             * @instance
             */
            LyricsColors.prototype.text = 0;

            /**
             * LyricsColors highlightText.
             * @member {number} highlightText
             * @memberof spotify.lyrics.LyricsColors
             * @instance
             */
            LyricsColors.prototype.highlightText = 0;

            /**
             * Creates a new LyricsColors instance using the specified properties.
             * @function create
             * @memberof spotify.lyrics.LyricsColors
             * @static
             * @param {spotify.lyrics.ILyricsColors=} [properties] Properties to set
             * @returns {spotify.lyrics.LyricsColors} LyricsColors instance
             */
            LyricsColors.create = function create(properties) {
                return new LyricsColors(properties);
            };

            /**
             * Encodes the specified LyricsColors message. Does not implicitly {@link spotify.lyrics.LyricsColors.verify|verify} messages.
             * @function encode
             * @memberof spotify.lyrics.LyricsColors
             * @static
             * @param {spotify.lyrics.ILyricsColors} message LyricsColors message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LyricsColors.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.background != null && Object.hasOwnProperty.call(message, "background"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.background);
                if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.text);
                if (message.highlightText != null && Object.hasOwnProperty.call(message, "highlightText"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.highlightText);
                return writer;
            };

            /**
             * Encodes the specified LyricsColors message, length delimited. Does not implicitly {@link spotify.lyrics.LyricsColors.verify|verify} messages.
             * @function encodeDelimited
             * @memberof spotify.lyrics.LyricsColors
             * @static
             * @param {spotify.lyrics.ILyricsColors} message LyricsColors message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LyricsColors.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LyricsColors message from the specified reader or buffer.
             * @function decode
             * @memberof spotify.lyrics.LyricsColors
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {spotify.lyrics.LyricsColors} LyricsColors
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LyricsColors.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.spotify.lyrics.LyricsColors();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.background = reader.int32();
                            break;
                        }
                    case 2: {
                            message.text = reader.int32();
                            break;
                        }
                    case 3: {
                            message.highlightText = reader.int32();
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
             * Decodes a LyricsColors message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof spotify.lyrics.LyricsColors
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {spotify.lyrics.LyricsColors} LyricsColors
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LyricsColors.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LyricsColors message.
             * @function verify
             * @memberof spotify.lyrics.LyricsColors
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LyricsColors.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.background != null && message.hasOwnProperty("background"))
                    if (!$util.isInteger(message.background))
                        return "background: integer expected";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isInteger(message.text))
                        return "text: integer expected";
                if (message.highlightText != null && message.hasOwnProperty("highlightText"))
                    if (!$util.isInteger(message.highlightText))
                        return "highlightText: integer expected";
                return null;
            };

            /**
             * Creates a LyricsColors message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof spotify.lyrics.LyricsColors
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {spotify.lyrics.LyricsColors} LyricsColors
             */
            LyricsColors.fromObject = function fromObject(object) {
                if (object instanceof $root.spotify.lyrics.LyricsColors)
                    return object;
                var message = new $root.spotify.lyrics.LyricsColors();
                if (object.background != null)
                    message.background = object.background | 0;
                if (object.text != null)
                    message.text = object.text | 0;
                if (object.highlightText != null)
                    message.highlightText = object.highlightText | 0;
                return message;
            };

            /**
             * Creates a plain object from a LyricsColors message. Also converts values to other types if specified.
             * @function toObject
             * @memberof spotify.lyrics.LyricsColors
             * @static
             * @param {spotify.lyrics.LyricsColors} message LyricsColors
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LyricsColors.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.background = 0;
                    object.text = 0;
                    object.highlightText = 0;
                }
                if (message.background != null && message.hasOwnProperty("background"))
                    object.background = message.background;
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                if (message.highlightText != null && message.hasOwnProperty("highlightText"))
                    object.highlightText = message.highlightText;
                return object;
            };

            /**
             * Converts this LyricsColors to JSON.
             * @function toJSON
             * @memberof spotify.lyrics.LyricsColors
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LyricsColors.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LyricsColors
             * @function getTypeUrl
             * @memberof spotify.lyrics.LyricsColors
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LyricsColors.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/spotify.lyrics.LyricsColors";
            };

            return LyricsColors;
        })();

        lyrics.ColorLyricsResponse = (function() {

            /**
             * Properties of a ColorLyricsResponse.
             * @memberof spotify.lyrics
             * @interface IColorLyricsResponse
             * @property {spotify.lyrics.ILyricsResponse|null} [lyrics] ColorLyricsResponse lyrics
             * @property {spotify.lyrics.ILyricsColors|null} [colors] ColorLyricsResponse colors
             * @property {boolean|null} [hasVocalRemoval] ColorLyricsResponse hasVocalRemoval
             * @property {spotify.lyrics.ILyricsColors|null} [vocalRemovalColors] ColorLyricsResponse vocalRemovalColors
             */

            /**
             * Constructs a new ColorLyricsResponse.
             * @memberof spotify.lyrics
             * @classdesc Represents a ColorLyricsResponse.
             * @implements IColorLyricsResponse
             * @constructor
             * @param {spotify.lyrics.IColorLyricsResponse=} [properties] Properties to set
             */
            function ColorLyricsResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ColorLyricsResponse lyrics.
             * @member {spotify.lyrics.ILyricsResponse|null|undefined} lyrics
             * @memberof spotify.lyrics.ColorLyricsResponse
             * @instance
             */
            ColorLyricsResponse.prototype.lyrics = null;

            /**
             * ColorLyricsResponse colors.
             * @member {spotify.lyrics.ILyricsColors|null|undefined} colors
             * @memberof spotify.lyrics.ColorLyricsResponse
             * @instance
             */
            ColorLyricsResponse.prototype.colors = null;

            /**
             * ColorLyricsResponse hasVocalRemoval.
             * @member {boolean} hasVocalRemoval
             * @memberof spotify.lyrics.ColorLyricsResponse
             * @instance
             */
            ColorLyricsResponse.prototype.hasVocalRemoval = false;

            /**
             * ColorLyricsResponse vocalRemovalColors.
             * @member {spotify.lyrics.ILyricsColors|null|undefined} vocalRemovalColors
             * @memberof spotify.lyrics.ColorLyricsResponse
             * @instance
             */
            ColorLyricsResponse.prototype.vocalRemovalColors = null;

            /**
             * Creates a new ColorLyricsResponse instance using the specified properties.
             * @function create
             * @memberof spotify.lyrics.ColorLyricsResponse
             * @static
             * @param {spotify.lyrics.IColorLyricsResponse=} [properties] Properties to set
             * @returns {spotify.lyrics.ColorLyricsResponse} ColorLyricsResponse instance
             */
            ColorLyricsResponse.create = function create(properties) {
                return new ColorLyricsResponse(properties);
            };

            /**
             * Encodes the specified ColorLyricsResponse message. Does not implicitly {@link spotify.lyrics.ColorLyricsResponse.verify|verify} messages.
             * @function encode
             * @memberof spotify.lyrics.ColorLyricsResponse
             * @static
             * @param {spotify.lyrics.IColorLyricsResponse} message ColorLyricsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ColorLyricsResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.lyrics != null && Object.hasOwnProperty.call(message, "lyrics"))
                    $root.spotify.lyrics.LyricsResponse.encode(message.lyrics, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.colors != null && Object.hasOwnProperty.call(message, "colors"))
                    $root.spotify.lyrics.LyricsColors.encode(message.colors, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.hasVocalRemoval != null && Object.hasOwnProperty.call(message, "hasVocalRemoval"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.hasVocalRemoval);
                if (message.vocalRemovalColors != null && Object.hasOwnProperty.call(message, "vocalRemovalColors"))
                    $root.spotify.lyrics.LyricsColors.encode(message.vocalRemovalColors, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ColorLyricsResponse message, length delimited. Does not implicitly {@link spotify.lyrics.ColorLyricsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof spotify.lyrics.ColorLyricsResponse
             * @static
             * @param {spotify.lyrics.IColorLyricsResponse} message ColorLyricsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ColorLyricsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ColorLyricsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof spotify.lyrics.ColorLyricsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {spotify.lyrics.ColorLyricsResponse} ColorLyricsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ColorLyricsResponse.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.spotify.lyrics.ColorLyricsResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.lyrics = $root.spotify.lyrics.LyricsResponse.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.colors = $root.spotify.lyrics.LyricsColors.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.hasVocalRemoval = reader.bool();
                            break;
                        }
                    case 4: {
                            message.vocalRemovalColors = $root.spotify.lyrics.LyricsColors.decode(reader, reader.uint32());
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
             * Decodes a ColorLyricsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof spotify.lyrics.ColorLyricsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {spotify.lyrics.ColorLyricsResponse} ColorLyricsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ColorLyricsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ColorLyricsResponse message.
             * @function verify
             * @memberof spotify.lyrics.ColorLyricsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ColorLyricsResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.lyrics != null && message.hasOwnProperty("lyrics")) {
                    var error = $root.spotify.lyrics.LyricsResponse.verify(message.lyrics);
                    if (error)
                        return "lyrics." + error;
                }
                if (message.colors != null && message.hasOwnProperty("colors")) {
                    var error = $root.spotify.lyrics.LyricsColors.verify(message.colors);
                    if (error)
                        return "colors." + error;
                }
                if (message.hasVocalRemoval != null && message.hasOwnProperty("hasVocalRemoval"))
                    if (typeof message.hasVocalRemoval !== "boolean")
                        return "hasVocalRemoval: boolean expected";
                if (message.vocalRemovalColors != null && message.hasOwnProperty("vocalRemovalColors")) {
                    var error = $root.spotify.lyrics.LyricsColors.verify(message.vocalRemovalColors);
                    if (error)
                        return "vocalRemovalColors." + error;
                }
                return null;
            };

            /**
             * Creates a ColorLyricsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof spotify.lyrics.ColorLyricsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {spotify.lyrics.ColorLyricsResponse} ColorLyricsResponse
             */
            ColorLyricsResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.spotify.lyrics.ColorLyricsResponse)
                    return object;
                var message = new $root.spotify.lyrics.ColorLyricsResponse();
                if (object.lyrics != null) {
                    if (typeof object.lyrics !== "object")
                        throw TypeError(".spotify.lyrics.ColorLyricsResponse.lyrics: object expected");
                    message.lyrics = $root.spotify.lyrics.LyricsResponse.fromObject(object.lyrics);
                }
                if (object.colors != null) {
                    if (typeof object.colors !== "object")
                        throw TypeError(".spotify.lyrics.ColorLyricsResponse.colors: object expected");
                    message.colors = $root.spotify.lyrics.LyricsColors.fromObject(object.colors);
                }
                if (object.hasVocalRemoval != null)
                    message.hasVocalRemoval = Boolean(object.hasVocalRemoval);
                if (object.vocalRemovalColors != null) {
                    if (typeof object.vocalRemovalColors !== "object")
                        throw TypeError(".spotify.lyrics.ColorLyricsResponse.vocalRemovalColors: object expected");
                    message.vocalRemovalColors = $root.spotify.lyrics.LyricsColors.fromObject(object.vocalRemovalColors);
                }
                return message;
            };

            /**
             * Creates a plain object from a ColorLyricsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof spotify.lyrics.ColorLyricsResponse
             * @static
             * @param {spotify.lyrics.ColorLyricsResponse} message ColorLyricsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ColorLyricsResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.lyrics = null;
                    object.colors = null;
                    object.hasVocalRemoval = false;
                    object.vocalRemovalColors = null;
                }
                if (message.lyrics != null && message.hasOwnProperty("lyrics"))
                    object.lyrics = $root.spotify.lyrics.LyricsResponse.toObject(message.lyrics, options);
                if (message.colors != null && message.hasOwnProperty("colors"))
                    object.colors = $root.spotify.lyrics.LyricsColors.toObject(message.colors, options);
                if (message.hasVocalRemoval != null && message.hasOwnProperty("hasVocalRemoval"))
                    object.hasVocalRemoval = message.hasVocalRemoval;
                if (message.vocalRemovalColors != null && message.hasOwnProperty("vocalRemovalColors"))
                    object.vocalRemovalColors = $root.spotify.lyrics.LyricsColors.toObject(message.vocalRemovalColors, options);
                return object;
            };

            /**
             * Converts this ColorLyricsResponse to JSON.
             * @function toJSON
             * @memberof spotify.lyrics.ColorLyricsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ColorLyricsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ColorLyricsResponse
             * @function getTypeUrl
             * @memberof spotify.lyrics.ColorLyricsResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ColorLyricsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/spotify.lyrics.ColorLyricsResponse";
            };

            return ColorLyricsResponse;
        })();

        return lyrics;
    })();

    return spotify;
})();

module.exports = $root;
