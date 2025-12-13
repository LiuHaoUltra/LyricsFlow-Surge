/**
 * LyricsFlow - Spotify Lyrics Enhancer
 * Surge Script - Self-contained (no require)
 */
console.log("[LyricsFlow] [INIT] Script Loaded"); // Immediate execution check

// ============== Config ==============
const DEFAULT_CONFIG = {
    TYPEF_URL: "http://127.0.0.1:8000",
    ENABLE_ENRICH: false,
    ENRICH_URL: "",
    ENRICH_KEY: "",
    LogLevel: "WARN"
};

function getConfig() {
    let config = { ...DEFAULT_CONFIG };

    // Try to read from Surge argument (passed via module)
    if (typeof $argument !== "undefined" && $argument) {
        const parts = $argument.split("&");
        parts.forEach(part => {
            const [key, value] = part.split("=");
            if (key === "TYPEF_URL" && value) config.TYPEF_URL = decodeURIComponent(value);
            if (key === "ENABLE_ENRICH") config.ENABLE_ENRICH = value === "true";
            if (key === "ENRICH_URL" && value) config.ENRICH_URL = decodeURIComponent(value);
            if (key === "ENRICH_KEY" && value) config.ENRICH_KEY = decodeURIComponent(value);
            if (key === "LogLevel" && value) config.LogLevel = value;
        });
    }

    return config;
}

const CONFIG = getConfig();

function log(level, message) {
    console.log(`[LyricsFlow] [${level}] ${message}`); // Always log to system for now
}

// ============== Helpers ==============

// Fetch Metadata from Spotify API using the same auth headers
function fetchSpotifyMetadata(trackId, originalHeaders) {
    return new Promise((resolve, reject) => {
        const url = `https://api.spotify.com/v1/tracks/${trackId}`;
        const headers = {
            "Authorization": originalHeaders["Authorization"] || originalHeaders["authorization"],
            "Accept": "application/json"
        };

        $httpClient.get({ url, headers }, (error, response, data) => {
            if (error) {
                log("ERROR", `Metadata Network Error: ${error}`);
                reject(error);
                return;
            }
            if (response.status !== 200) {
                log("ERROR", `Metadata Status Error: ${response.status}`);
                reject(`Spotify API Error: ${response.status}`);
                return;
            }
            try {
                const track = JSON.parse(data);
                resolve({
                    title: track.name,
                    artist: track.artists[0]?.name || "Unknown",
                    album: track.album?.name || "Unknown",
                    duration_ms: track.duration_ms
                });
            } catch (e) {
                log("ERROR", `Metadata Parse Error: ${e}`);
                reject(e);
            }
        });
    });
}

// Call TypeF API
function fetchLyricsFromTypeF(metadata) {
    return new Promise((resolve, reject) => {
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
            duration_ms: Math.floor(metadata.duration_ms),
            ai_config: CONFIG.ENABLE_ENRICH ? {
                base_url: CONFIG.ENRICH_URL,
                api_key: CONFIG.ENRICH_KEY
            } : null
        };

        log("DEBUG", `TypeF Request: ${JSON.stringify(body)}`);

        $httpClient.post({ url, headers, body: JSON.stringify(body) }, (error, response, data) => {
            if (error) {
                log("ERROR", `TypeF Network Error: ${error}`);
                reject(error);
            } else if (response.status === 200) {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    log("ERROR", `TypeF Parse Error: ${e}`);
                    reject("JSON Parse Error: " + e);
                }
            } else {
                log("ERROR", `TypeF API Error: ${response.status} - ${data}`);
                reject(`TypeF Error: ${response.status}`);
            }
        });
    });
}

// Convert TypeF JSON to Spotify JSON
// @param {Object} typeFData - The lyrics data from TypeF API
// @param {string} [languageCode="zh"] - ISO language code (e.g., "zh", "en", "ja", "ko")
function convertToSpotifyFormat(typeFData, languageCode = "zh") {
    const lines = typeFData.lines.map(line => {
        let finalWords = line.txt;
        if (line.trans) {
            // Append translation with a newline for Dual-Sub effect
            finalWords += `\n${line.trans}`;
        }

        return {
            startTimeMs: Math.round(line.st * 1000).toString(),
            words: finalWords,
            syllables: [],
            endTimeMs: Math.round(line.et * 1000).toString()
        };
    });

    // Determine if language is RTL (Right-to-Left)
    const rtlLanguages = ["ar", "he", "fa", "ur"];
    const isRtl = rtlLanguages.includes(languageCode.toLowerCase());

    return {
        lyrics: {
            syncType: "LINE_SYNCED",
            lines: lines,
            provider: "LyricsFlow",
            providerLyricsId: typeFData.source || "lyricsflow",
            providerDisplayName: "LyricsFlow Enhanced",
            syncLyricsUri: "",
            isDenseTypeface: false,
            alternatives: [],
            language: languageCode,
            isRtlLanguage: isRtl,
            fullscreenAction: "FULLSCREEN_LYRICS",
            showUpsell: false
        },
        colors: {
            background: -1000,
            text: -16777216,
            highlightTaskbar: -1000
        },
        hasVocalRemoval: false
    };
}

// ============== Main Handler ==============
(async () => {
    try {
        const url = $request.url;
        const trackIdMatch = url.match(/track\/([^\/?]+)/); // Match anything not / or ?
        const trackId = trackIdMatch ? trackIdMatch[1] : null;

        if (!trackId) {
            log("WARN", "No track ID found in URL.");
            $done({});
            return;
        }

        log("INFO", `Intercepted Track ID: ${trackId}`);
        log("INFO", `Original Content-Type: ${$response.headers['Content-Type'] || $response.headers['content-type']}`);
        log("INFO", `Original Status: ${$response.status}`);

        // 1. Fetch Metadata from Spotify (using original headers for Auth)
        const metadata = await fetchSpotifyMetadata(trackId, $request.headers);
        log("INFO", `Metadata: ${metadata.title} - ${metadata.artist}`);

        // 2. Fetch Lyrics from TypeF
        const lyricsData = await fetchLyricsFromTypeF(metadata);

        // 3. Convert and Return
        if (lyricsData && lyricsData.lines && lyricsData.lines.length > 0) {
            // Use original_lang from TypeF response if available, fallback to "zh"
            const languageCode = lyricsData.original_lang || "zh";
            const spotifyLyrics = convertToSpotifyFormat(lyricsData, languageCode);
            log("INFO", `Success! Returning ${lyricsData.lines.length} lines.`);

            $done({
                body: JSON.stringify(spotifyLyrics),
                headers: {
                    ...$response.headers, // Inherit CROS etc
                    "Content-Type": "application/json; charset=utf-8"
                }
            });
        } else {
            log("WARN", "No lyrics found via TypeF, passing through original.");
            $done({});
        }

    } catch (e) {
        log("ERROR", `Error: ${e}`);
        $done({});
    }
})();
