import { spotify } from '../protobuf/spotify/lyrics';

// Interfaces matching TypeF response
export interface TypeFWord {
    txt: string;
    st: number; // seconds
    et: number; // seconds
}

export interface TypeFLine {
    st: number; // seconds
    et: number;
    txt: string;
    trans?: string;
    words?: TypeFWord[];
}

export interface TypeFLyricsData {
    type: string;
    lines: TypeFLine[];
    metadata?: any;
}

/**
 * Creates a Spotify ColorLyricsResponse Protobuf message from TypeF data.
 * @param lyricData TypeF LyricsData object.
 * @returns Uint8Array containing the encoded Protobuf message.
 */
export function createLyricsResponse(lyricData: TypeFLyricsData): Uint8Array {
    const lines = lyricData.lines.map(line => {
        // Convert words to Syllable format (startTimeMs, numChars)
        const syllables = line.words ? line.words.map(word =>
            spotify.lyrics.Syllable.create({
                startTimeMs: Math.round(word.st * 1000),
                numChars: word.txt.length  // Spotify uses character count, not endTime
            })
        ) : [];

        return spotify.lyrics.LyricsLine.create({
            startTimeMs: Math.round(line.st * 1000),
            words: line.txt,  // Changed from 'content' to 'words'
            syllables: syllables
        });
    });

    const syncType = (lyricData.type === 'syllable')
        ? spotify.lyrics.SyncType.SYLLABLE_SYNCED
        : spotify.lyrics.SyncType.LINE_SYNCED;

    // Create the inner LyricsResponse
    // Build alternatives from translations (this enables the translation button!)
    const hasTranslations = lyricData.lines.some(line => line.trans);
    const alternatives = hasTranslations ? [
        spotify.lyrics.Alternative.create({
            language: "zh-Hans",
            lines: lyricData.lines.map(line => line.trans || ""),
            rtlLang: false
        })
    ] : [];

    // Detect primary language from lyrics content
    const primaryLanguage = hasTranslations ? "ja" : "en"; // Assume Japanese if has translations

    const lyricsResponse = spotify.lyrics.LyricsResponse.create({
        syncType: syncType,
        lines: lines,
        provider: "LyricsFlow",
        providerLyricsId: "custom-id",
        providerDisplayName: "LyricsFlow by TypeF",
        syncLyricsUri: "",
        isDenseTypeface: true,
        alternatives: alternatives,
        language: primaryLanguage,
        isRtlLanguage: false,
        fullscreenAction: 0,
        showUpsell: false
    });

    // Wrap in ColorLyricsResponse (this is what Spotify actually expects!)
    const colorLyricsResponse = spotify.lyrics.ColorLyricsResponse.create({
        lyrics: lyricsResponse,
        colors: spotify.lyrics.LyricsColors.create({
            background: -8421504,  // Gray background
            text: -16777216,       // Black text (0xFF000000 as signed int)
            highlightText: -1      // White highlight (0xFFFFFFFF as signed int)
        }),
        hasVocalRemoval: false,
        vocalRemovalColors: spotify.lyrics.LyricsColors.create({
            background: -8421504,
            text: -16777216,
            highlightText: -1
        })
    });

    return spotify.lyrics.ColorLyricsResponse.encode(colorLyricsResponse).finish();
}

