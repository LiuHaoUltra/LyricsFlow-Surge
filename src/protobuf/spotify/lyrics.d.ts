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

            /** Syllable numChars */
            numChars?: (number|Long|null);
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

            /** Syllable numChars. */
            public numChars: (number|Long);

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

        /** Properties of a LyricsLine. */
        interface ILyricsLine {

            /** LyricsLine startTimeMs */
            startTimeMs?: (number|Long|null);

            /** LyricsLine words */
            words?: (string|null);

            /** LyricsLine syllables */
            syllables?: (spotify.lyrics.ISyllable[]|null);
        }

        /** Represents a LyricsLine. */
        class LyricsLine implements ILyricsLine {

            /**
             * Constructs a new LyricsLine.
             * @param [properties] Properties to set
             */
            constructor(properties?: spotify.lyrics.ILyricsLine);

            /** LyricsLine startTimeMs. */
            public startTimeMs: (number|Long);

            /** LyricsLine words. */
            public words: string;

            /** LyricsLine syllables. */
            public syllables: spotify.lyrics.ISyllable[];

            /**
             * Creates a new LyricsLine instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LyricsLine instance
             */
            public static create(properties?: spotify.lyrics.ILyricsLine): spotify.lyrics.LyricsLine;

            /**
             * Encodes the specified LyricsLine message. Does not implicitly {@link spotify.lyrics.LyricsLine.verify|verify} messages.
             * @param message LyricsLine message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: spotify.lyrics.ILyricsLine, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LyricsLine message, length delimited. Does not implicitly {@link spotify.lyrics.LyricsLine.verify|verify} messages.
             * @param message LyricsLine message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: spotify.lyrics.ILyricsLine, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LyricsLine message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LyricsLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): spotify.lyrics.LyricsLine;

            /**
             * Decodes a LyricsLine message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LyricsLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): spotify.lyrics.LyricsLine;

            /**
             * Verifies a LyricsLine message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LyricsLine message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LyricsLine
             */
            public static fromObject(object: { [k: string]: any }): spotify.lyrics.LyricsLine;

            /**
             * Creates a plain object from a LyricsLine message. Also converts values to other types if specified.
             * @param message LyricsLine
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: spotify.lyrics.LyricsLine, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LyricsLine to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LyricsLine
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Alternative. */
        interface IAlternative {

            /** Alternative language */
            language?: (string|null);

            /** Alternative lines */
            lines?: (string[]|null);

            /** Alternative rtlLang */
            rtlLang?: (boolean|null);
        }

        /** Represents an Alternative. */
        class Alternative implements IAlternative {

            /**
             * Constructs a new Alternative.
             * @param [properties] Properties to set
             */
            constructor(properties?: spotify.lyrics.IAlternative);

            /** Alternative language. */
            public language: string;

            /** Alternative lines. */
            public lines: string[];

            /** Alternative rtlLang. */
            public rtlLang: boolean;

            /**
             * Creates a new Alternative instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Alternative instance
             */
            public static create(properties?: spotify.lyrics.IAlternative): spotify.lyrics.Alternative;

            /**
             * Encodes the specified Alternative message. Does not implicitly {@link spotify.lyrics.Alternative.verify|verify} messages.
             * @param message Alternative message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: spotify.lyrics.IAlternative, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Alternative message, length delimited. Does not implicitly {@link spotify.lyrics.Alternative.verify|verify} messages.
             * @param message Alternative message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: spotify.lyrics.IAlternative, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Alternative message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Alternative
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): spotify.lyrics.Alternative;

            /**
             * Decodes an Alternative message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Alternative
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): spotify.lyrics.Alternative;

            /**
             * Verifies an Alternative message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Alternative message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Alternative
             */
            public static fromObject(object: { [k: string]: any }): spotify.lyrics.Alternative;

            /**
             * Creates a plain object from an Alternative message. Also converts values to other types if specified.
             * @param message Alternative
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: spotify.lyrics.Alternative, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Alternative to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Alternative
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
            lines?: (spotify.lyrics.ILyricsLine[]|null);

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
            alternatives?: (spotify.lyrics.IAlternative[]|null);

            /** LyricsResponse language */
            language?: (string|null);

            /** LyricsResponse isRtlLanguage */
            isRtlLanguage?: (boolean|null);

            /** LyricsResponse fullscreenAction */
            fullscreenAction?: (number|null);

            /** LyricsResponse showUpsell */
            showUpsell?: (boolean|null);
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
            public lines: spotify.lyrics.ILyricsLine[];

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
            public alternatives: spotify.lyrics.IAlternative[];

            /** LyricsResponse language. */
            public language: string;

            /** LyricsResponse isRtlLanguage. */
            public isRtlLanguage: boolean;

            /** LyricsResponse fullscreenAction. */
            public fullscreenAction: number;

            /** LyricsResponse showUpsell. */
            public showUpsell: boolean;

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

        /** Properties of a LyricsColors. */
        interface ILyricsColors {

            /** LyricsColors background */
            background?: (number|null);

            /** LyricsColors text */
            text?: (number|null);

            /** LyricsColors highlightText */
            highlightText?: (number|null);
        }

        /** Represents a LyricsColors. */
        class LyricsColors implements ILyricsColors {

            /**
             * Constructs a new LyricsColors.
             * @param [properties] Properties to set
             */
            constructor(properties?: spotify.lyrics.ILyricsColors);

            /** LyricsColors background. */
            public background: number;

            /** LyricsColors text. */
            public text: number;

            /** LyricsColors highlightText. */
            public highlightText: number;

            /**
             * Creates a new LyricsColors instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LyricsColors instance
             */
            public static create(properties?: spotify.lyrics.ILyricsColors): spotify.lyrics.LyricsColors;

            /**
             * Encodes the specified LyricsColors message. Does not implicitly {@link spotify.lyrics.LyricsColors.verify|verify} messages.
             * @param message LyricsColors message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: spotify.lyrics.ILyricsColors, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LyricsColors message, length delimited. Does not implicitly {@link spotify.lyrics.LyricsColors.verify|verify} messages.
             * @param message LyricsColors message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: spotify.lyrics.ILyricsColors, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LyricsColors message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LyricsColors
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): spotify.lyrics.LyricsColors;

            /**
             * Decodes a LyricsColors message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LyricsColors
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): spotify.lyrics.LyricsColors;

            /**
             * Verifies a LyricsColors message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LyricsColors message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LyricsColors
             */
            public static fromObject(object: { [k: string]: any }): spotify.lyrics.LyricsColors;

            /**
             * Creates a plain object from a LyricsColors message. Also converts values to other types if specified.
             * @param message LyricsColors
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: spotify.lyrics.LyricsColors, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LyricsColors to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LyricsColors
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ColorLyricsResponse. */
        interface IColorLyricsResponse {

            /** ColorLyricsResponse lyrics */
            lyrics?: (spotify.lyrics.ILyricsResponse|null);

            /** ColorLyricsResponse colors */
            colors?: (spotify.lyrics.ILyricsColors|null);

            /** ColorLyricsResponse hasVocalRemoval */
            hasVocalRemoval?: (boolean|null);

            /** ColorLyricsResponse vocalRemovalColors */
            vocalRemovalColors?: (spotify.lyrics.ILyricsColors|null);
        }

        /** Represents a ColorLyricsResponse. */
        class ColorLyricsResponse implements IColorLyricsResponse {

            /**
             * Constructs a new ColorLyricsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: spotify.lyrics.IColorLyricsResponse);

            /** ColorLyricsResponse lyrics. */
            public lyrics?: (spotify.lyrics.ILyricsResponse|null);

            /** ColorLyricsResponse colors. */
            public colors?: (spotify.lyrics.ILyricsColors|null);

            /** ColorLyricsResponse hasVocalRemoval. */
            public hasVocalRemoval: boolean;

            /** ColorLyricsResponse vocalRemovalColors. */
            public vocalRemovalColors?: (spotify.lyrics.ILyricsColors|null);

            /**
             * Creates a new ColorLyricsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ColorLyricsResponse instance
             */
            public static create(properties?: spotify.lyrics.IColorLyricsResponse): spotify.lyrics.ColorLyricsResponse;

            /**
             * Encodes the specified ColorLyricsResponse message. Does not implicitly {@link spotify.lyrics.ColorLyricsResponse.verify|verify} messages.
             * @param message ColorLyricsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: spotify.lyrics.IColorLyricsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ColorLyricsResponse message, length delimited. Does not implicitly {@link spotify.lyrics.ColorLyricsResponse.verify|verify} messages.
             * @param message ColorLyricsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: spotify.lyrics.IColorLyricsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ColorLyricsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ColorLyricsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): spotify.lyrics.ColorLyricsResponse;

            /**
             * Decodes a ColorLyricsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ColorLyricsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): spotify.lyrics.ColorLyricsResponse;

            /**
             * Verifies a ColorLyricsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ColorLyricsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ColorLyricsResponse
             */
            public static fromObject(object: { [k: string]: any }): spotify.lyrics.ColorLyricsResponse;

            /**
             * Creates a plain object from a ColorLyricsResponse message. Also converts values to other types if specified.
             * @param message ColorLyricsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: spotify.lyrics.ColorLyricsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ColorLyricsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ColorLyricsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
