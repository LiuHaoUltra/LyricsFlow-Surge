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
 * Creates a Spotify LyricsResponse Protobuf message from TypeF data.
 * @param lyricData TypeF LyricsData object.
 * @returns Uint8Array containing the encoded Protobuf message.
 */
export function createLyricsResponse(lyricData: TypeFLyricsData): Uint8Array {
    const lines = lyricData.lines.map(line => {
        const syllables = line.words ? line.words.map(word =>
            spotify.lyrics.Syllable.create({
                startTimeMs: Math.round(word.st * 1000),
                endTimeMs: Math.round(word.et * 1000),
                content: word.txt
            })
        ) : [];

        return spotify.lyrics.Line.create({
            startTimeMs: Math.round(line.st * 1000),
            content: line.txt, // Note: Translation handling can be added here if needed (e.g. appending to content)
            syllables: syllables
        });
    });

    const syncType = (lyricData.type === 'syllable')
        ? spotify.lyrics.SyncType.SYLLABLE_SYNCED
        : spotify.lyrics.SyncType.LINE_SYNCED;

    const response = spotify.lyrics.LyricsResponse.create({
        syncType: syncType,
        lines: lines,
        provider: "Surge-LyricsFlow",
        providerLyricsId: "custom-id",
        providerDisplayName: "LyricsFlow",
        syncLyricsUri: "",
        isDenseTypeface: false,
        alternatives: [],
        backgroundColor: { red: 0, green: 0, blue: 0, alpha: 255 },
        textColor: { red: 255, green: 255, blue: 255, alpha: 255 }
    });

    return spotify.lyrics.LyricsResponse.encode(response).finish();
}
