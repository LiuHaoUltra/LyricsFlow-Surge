/**
 * LyricsFlow - Spotify Lyrics Enhancer
 */

const { getConfig } = require('./config.js');

const CONFIG = getConfig();

// Helper: Fetch Metadata from Spotify API using the same auth headers
async function fetchSpotifyMetadata(trackId, originalHeaders) {
    const url = `https://api.spotify.com/v1/tracks/${trackId}`;
    const headers = {
        ...originalHeaders,
        "Accept": "application/json"
    };

    return new Promise((resolve, reject) => {
        $httpClient.get({ url, headers }, (error, response, data) => {
            if (error) {
                console.log(`[Metadata] Network Error: ${error}`);
                reject(error);
                return;
            }
            if (response.status !== 200) {
                console.log(`[Metadata] Status Error: ${response.status}`);
                reject(`Spotify API Error: ${response.status}`);
                return;
            }
            try {
                const track = JSON.parse(data);
                resolve({
                    title: track.name,
                    artist: track.artists[0]?.name || "Unknown",
                    album: track.album?.name || "Unknown",
                    duration_ms: track.duration_ms // Keep as MS for TypeF
                });
            } catch (e) {
                console.log(`[Metadata] Parse Error: ${e}`);
                reject(e);
            }
        });
    });
}

// HelperFunctions: Call TypeF API
async function fetchLyricsFromTypeF(metadata) {
    const url = `${CONFIG.TYPEF_URL}/v1/match`;
    const headers = {
        "Content-Type": "application/json",
        "User-Agent": "LyricsFlow-Surge/1.0"
    };

    // Construct Body matching TypeF Schema (SongMetadata)
    const body = {
        title: metadata.title,
        artist: metadata.artist,
        album: metadata.album,
        duration_ms: Math.floor(metadata.duration_ms), // Ensure integer
        ai_config: CONFIG.ENABLE_ENRICH ? {
            base_url: CONFIG.ENRICH_URL,
            api_key: CONFIG.ENRICH_KEY
        } : null
    };

    console.log(`[TypeF] Requesting: ${JSON.stringify(body)}`);

    return new Promise((resolve, reject) => {
        $httpClient.post({ url, headers, body }, (error, response, data) => {
            if (error) {
                console.log(`[TypeF] Network Error: ${error}`);
                reject(error);
            } else if (response.status === 200) {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject("JSON Parse Error: " + e);
                }
            } else {
                console.log(`[TypeF] API Error: ${response.status} - ${data}`);
                reject(`TypeF Error: ${response.status}`);
            }
        });
    });
}

// Convert TypeF JSON to Spotify JSON
function convertToSpotifyFormat(typeFData) {
    // Spotify Color Lyrics v2 Structure
    const lines = typeFData.lines.map(line => {
        return {
            startTimeMs: Math.round(line.st * 1000).toString(),
            words: line.txt,
            syllables: [], // TypeF has syllables, but for now map line-by-line for safety
            endTimeMs: Math.round(line.et * 1000).toString()
        };
    });

    return {
        lyrics: {
            syncType: "LINE_SYNCED",
            lines: lines,
            provider: "LyricsFlow",
            providerLyricsId: typeFData.source || "custom",
            providerDisplayName: "LyricsFlow Enhanced",
            syncLyricsUri: "",
            isDenseTypeface: false,
            alternatives: [],
            language: "zh",
        }
    };
}

// Main Handler
(async () => {
    try {
        const url = $request.url;
        const trackIdMatch = url.match(/track\/([a-zA-Z0-9]+)/);
        const trackId = trackIdMatch ? trackIdMatch[1] : null;

        if (!trackId) {
            console.log("No track ID found in URL.");
            $done({});
            return;
        }

        console.log(`[LyricsFlow] Intercepted Track ID: ${trackId}`);

        // 1. Fetch Metadata from Spotify (using original headers for Auth)
        const metadata = await fetchSpotifyMetadata(trackId, $request.headers);
        console.log(`[LyricsFlow] Metadata: ${metadata.title} - ${metadata.artist}`);

        // 2. Fetch Lyrics from TypeF
        const lyricsData = await fetchLyricsFromTypeF(metadata);

        // 3. Convert and Return
        if (lyricsData && lyricsData.lines) {
            const spotifyLyrics = convertToSpotifyFormat(lyricsData);
            console.log(`[LyricsFlow] Success! Returning custom lyrics.`);
            $done({
                body: JSON.stringify(spotifyLyrics),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    ...$response?.headers // Keep original headers if available, though typically we construct new
                }
            });
        } else {
            console.log("[LyricsFlow] No lyrics found via TypeF, falling back.");
            $done({});
        }

    } catch (e) {
        console.log(`[LyricsFlow] Error: ${e}`);
        $done({});
    }
})();
