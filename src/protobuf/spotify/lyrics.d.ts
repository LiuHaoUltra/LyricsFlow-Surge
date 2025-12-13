import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace spotify. */
export namespace spotify {

    /** Namespace lyrics. */
    namespace lyrics {

        /** SyncType enum. */
        enum SyncType {
            UNSYNCED = 0,
            LINE_SYNCED = 1,
            SYLLABLE_SYNCED = 2
        }

        /** Properties of a ColorData. */
        interface IColorData {

            /** ColorData red */
            red?: (number|null);

            /** ColorData green */
            green?: (number|null);

            /** ColorData blue */
            blue?: (number|null);

            /** ColorData alpha */
            alpha?: (number|null);
        }

        /** Represents a ColorData. */
        class ColorData implements IColorData {

            /**
             * Constructs a new ColorData.
             * @param [properties] Properties to set
             */
            constructor(properties?: spotify.lyrics.IColorData);

            /** ColorData red. */
            public red: number;

            /** ColorData green. */
            public green: number;

            /** ColorData blue. */
            public blue: number;

            /** ColorData alpha. */
            public alpha: number;

            /**
             * Creates a new ColorData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ColorData instance
             */
            public static create(properties?: spotify.lyrics.IColorData): spotify.lyrics.ColorData;

            /**
             * Encodes the specified ColorData message. Does not implicitly {@link spotify.lyrics.ColorData.verify|verify} messages.
             * @param message ColorData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: spotify.lyrics.IColorData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ColorData message, length delimited. Does not implicitly {@link spotify.lyrics.ColorData.verify|verify} messages.
             * @param message ColorData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: spotify.lyrics.IColorData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ColorData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ColorData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): spotify.lyrics.ColorData;

            /**
             * Decodes a ColorData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ColorData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): spotify.lyrics.ColorData;

            /**
             * Verifies a ColorData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ColorData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ColorData
             */
            public static fromObject(object: { [k: string]: any }): spotify.lyrics.ColorData;

            /**
             * Creates a plain object from a ColorData message. Also converts values to other types if specified.
             * @param message ColorData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: spotify.lyrics.ColorData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ColorData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ColorData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Syllable. */
        interface ISyllable {

            /** Syllable startTimeMs */
            startTimeMs?: (number|Long|null);

            /** Syllable endTimeMs */
            endTimeMs?: (number|Long|null);

            /** Syllable content */
            content?: (string|null);
        }

        /** Represents a Syllable. */
        class Syllable implements ISyllable {

            /**
             * Constructs a new Syllable.
             * @param [properties] Properties to set
             */
            constructor(properties?: spotify.lyrics.ISyllable);

            /** Syllable startTimeMs. */
            public startTimeMs: (number|Long);

            /** Syllable endTimeMs. */
            public endTimeMs: (number|Long);

            /** Syllable content. */
            public content: string;

            /**
             * Creates a new Syllable instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Syllable instance
             */
            public static create(properties?: spotify.lyrics.ISyllable): spotify.lyrics.Syllable;

            /**
             * Encodes the specified Syllable message. Does not implicitly {@link spotify.lyrics.Syllable.verify|verify} messages.
             * @param message Syllable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: spotify.lyrics.ISyllable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Syllable message, length delimited. Does not implicitly {@link spotify.lyrics.Syllable.verify|verify} messages.
             * @param message Syllable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: spotify.lyrics.ISyllable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Syllable message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Syllable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): spotify.lyrics.Syllable;

            /**
             * Decodes a Syllable message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Syllable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): spotify.lyrics.Syllable;

            /**
             * Verifies a Syllable message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Syllable message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Syllable
             */
            public static fromObject(object: { [k: string]: any }): spotify.lyrics.Syllable;

            /**
             * Creates a plain object from a Syllable message. Also converts values to other types if specified.
             * @param message Syllable
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: spotify.lyrics.Syllable, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Syllable to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Syllable
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Line. */
        interface ILine {

            /** Line content */
            content?: (string|null);

            /** Line startTimeMs */
            startTimeMs?: (number|Long|null);

            /** Line syllables */
            syllables?: (spotify.lyrics.ISyllable[]|null);
        }

        /** Represents a Line. */
        class Line implements ILine {

            /**
             * Constructs a new Line.
             * @param [properties] Properties to set
             */
            constructor(properties?: spotify.lyrics.ILine);

            /** Line content. */
            public content: string;

            /** Line startTimeMs. */
            public startTimeMs: (number|Long);

            /** Line syllables. */
            public syllables: spotify.lyrics.ISyllable[];

            /**
             * Creates a new Line instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Line instance
             */
            public static create(properties?: spotify.lyrics.ILine): spotify.lyrics.Line;

            /**
             * Encodes the specified Line message. Does not implicitly {@link spotify.lyrics.Line.verify|verify} messages.
             * @param message Line message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: spotify.lyrics.ILine, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Line message, length delimited. Does not implicitly {@link spotify.lyrics.Line.verify|verify} messages.
             * @param message Line message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: spotify.lyrics.ILine, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Line message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Line
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): spotify.lyrics.Line;

            /**
             * Decodes a Line message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Line
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): spotify.lyrics.Line;

            /**
             * Verifies a Line message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Line message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Line
             */
            public static fromObject(object: { [k: string]: any }): spotify.lyrics.Line;

            /**
             * Creates a plain object from a Line message. Also converts values to other types if specified.
             * @param message Line
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: spotify.lyrics.Line, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Line to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Line
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LyricsResponse. */
        interface ILyricsResponse {

            /** LyricsResponse syncType */
            syncType?: (spotify.lyrics.SyncType|null);

            /** LyricsResponse lines */
            lines?: (spotify.lyrics.ILine[]|null);

            /** LyricsResponse provider */
            provider?: (string|null);

            /** LyricsResponse providerLyricsId */
            providerLyricsId?: (string|null);

            /** LyricsResponse providerDisplayName */
            providerDisplayName?: (string|null);

            /** LyricsResponse syncLyricsUri */
            syncLyricsUri?: (string|null);

            /** LyricsResponse isDenseTypeface */
            isDenseTypeface?: (boolean|null);

            /** LyricsResponse alternatives */
            alternatives?: (spotify.lyrics.ILine[]|null);

            /** LyricsResponse language */
            language?: (string|null);

            /** LyricsResponse backgroundColor */
            backgroundColor?: (spotify.lyrics.IColorData|null);

            /** LyricsResponse textColor */
            textColor?: (spotify.lyrics.IColorData|null);
        }

        /** Represents a LyricsResponse. */
        class LyricsResponse implements ILyricsResponse {

            /**
             * Constructs a new LyricsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: spotify.lyrics.ILyricsResponse);

            /** LyricsResponse syncType. */
            public syncType: spotify.lyrics.SyncType;

            /** LyricsResponse lines. */
            public lines: spotify.lyrics.ILine[];

            /** LyricsResponse provider. */
            public provider: string;

            /** LyricsResponse providerLyricsId. */
            public providerLyricsId: string;

            /** LyricsResponse providerDisplayName. */
            public providerDisplayName: string;

            /** LyricsResponse syncLyricsUri. */
            public syncLyricsUri: string;

            /** LyricsResponse isDenseTypeface. */
            public isDenseTypeface: boolean;

            /** LyricsResponse alternatives. */
            public alternatives: spotify.lyrics.ILine[];

            /** LyricsResponse language. */
            public language: string;

            /** LyricsResponse backgroundColor. */
            public backgroundColor?: (spotify.lyrics.IColorData|null);

            /** LyricsResponse textColor. */
            public textColor?: (spotify.lyrics.IColorData|null);

            /**
             * Creates a new LyricsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LyricsResponse instance
             */
            public static create(properties?: spotify.lyrics.ILyricsResponse): spotify.lyrics.LyricsResponse;

            /**
             * Encodes the specified LyricsResponse message. Does not implicitly {@link spotify.lyrics.LyricsResponse.verify|verify} messages.
             * @param message LyricsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: spotify.lyrics.ILyricsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LyricsResponse message, length delimited. Does not implicitly {@link spotify.lyrics.LyricsResponse.verify|verify} messages.
             * @param message LyricsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: spotify.lyrics.ILyricsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LyricsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LyricsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): spotify.lyrics.LyricsResponse;

            /**
             * Decodes a LyricsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LyricsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): spotify.lyrics.LyricsResponse;

            /**
             * Verifies a LyricsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LyricsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LyricsResponse
             */
            public static fromObject(object: { [k: string]: any }): spotify.lyrics.LyricsResponse;

            /**
             * Creates a plain object from a LyricsResponse message. Also converts values to other types if specified.
             * @param message LyricsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: spotify.lyrics.LyricsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LyricsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LyricsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
