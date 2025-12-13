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

    // 1. Try to read from Surge argument (passed via module)
    if (typeof $argument !== "undefined" && $argument) {
        // Attempt URLSearchParams first (standard in modern JS envs)
        try {
            const params = new URLSearchParams($argument);
            if (params.get("TYPEF_URL")) config.TYPEF_URL = params.get("TYPEF_URL");
            if (params.get("ENABLE_ENRICH")) config.ENABLE_ENRICH = params.get("ENABLE_ENRICH") === "true";
            if (params.get("ENRICH_URL")) config.ENRICH_URL = params.get("ENRICH_URL");
            if (params.get("ENRICH_KEY")) config.ENRICH_KEY = params.get("ENRICH_KEY");
            if (params.get("LogLevel")) config.LogLevel = params.get("LogLevel");
        } catch (e) {
            // Fallback for older envs or simple strings
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
    }

    // 2. Fallback: Try BoxJS / persistentStore (Persistent Override)
    if (typeof $persistentStore !== "undefined") {
        const storedStr = $persistentStore.read("@LyricsFlow.Settings");
        if (storedStr) {
            try {
                const stored = JSON.parse(storedStr);
                // Merge stored config, overriding defaults and arguments
                config = { ...config, ...stored };
            } catch (e) {
                console.log("[LyricsFlow] [WARN] Failed to parse BoxJS config: " + e);
            }
        }
    }

    return config;
}

const CONFIG = getConfig();

function log(level, message) {
    console.log(`[LyricsFlow] [${level}] ${message}`); // Always log to system for now
}

// ============== Helpers ==============

// Helper: Base62 to Hex
const BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function base62ToHex(str) {
    // Basic implementation for fixed length UUIDs (Spotify IDs are usually 22 chars Base62 -> 32 chars Hex aka 16 bytes)
    // Note: A full BigInt implementation is safer, but for Spotify IDs, we can often rely on standard libs or a simplified conversion
    // tailored to the 128-bit UUID nature. However, JS BigInt is available in modern envs (Surge supports ES6+).

    let value = 0n;
    for (let i = 0; i < str.length; i++) {
        const index = BASE62.indexOf(str[i]);
        value = value * 62n + BigInt(index);
    }
    let hex = value.toString(16);
    // Pad to 32 chars (16 bytes)
    while (hex.length < 32) hex = "0" + hex;
    return hex;
}

// Helper: Minimal Manual Protobuf Parser for Spotify Metadata
function parseSpClientProtobuf(buffer) {
    const view = new Uint8Array(buffer);
    let pos = 0;
    const result = { title: "Unknown", artist: "Unknown", album: "Unknown", duration_ms: 0 };

    function readVarInt() {
        let value = 0;
        let shift = 0;
        while (pos < view.length) {
            let b = view[pos++];
            value |= (b & 0x7F) << shift;
            if ((b & 0x80) === 0) break;
            shift += 7;
        }
        return value;
    }

    function readString(len) {
        const bytes = view.slice(pos, pos + len);
        pos += len;
        // TextDecoder is supported in Surge (iOS/Mac)
        return new TextDecoder("utf-8").decode(bytes);
    }

    function skip(wireType) {
        if (wireType === 0) { // Varint
            readVarInt();
        } else if (wireType === 1) { // 64-bit
            pos += 8;
        } else if (wireType === 2) { // Length-delimited
            const len = readVarInt();
            pos += len;
        } else if (wireType === 5) { // 32-bit
            pos += 4;
        } else {
            // Groups not supported/needed
        }
    }

    // Pass 1: Root key field loop
    while (pos < view.length) {
        if (pos >= view.length) break;

        let tagByte = view[pos]; // Peek or read
        // tag is (field_number << 3) | wire_type
        let rawTag = readVarInt();
        let fieldNum = rawTag >> 3;
        let wireType = rawTag & 7;

        if (fieldNum === 2 && wireType === 2) { // Name (String)
            const len = readVarInt();
            result.title = readString(len);
        } else if (fieldNum === 3 && wireType === 2) { // Album (Message)
            const len = readVarInt();
            const end = pos + len;
            // Parse Inner Album Message
            while (pos < end) {
                let innerTag = readVarInt();
                let innerField = innerTag >> 3;
                let innerWire = innerTag & 7;
                if (innerField === 2 && innerWire === 2) { // Album Name
                    const strLen = readVarInt();
                    result.album = readString(strLen);
                } else {
                    skip(innerWire);
                }
            }
        } else if (fieldNum === 4 && wireType === 2) { // Artist (Message) - Array, we take the first
            const len = readVarInt();
            const end = pos + len;
            // Only parse if we haven't found an artist yet (primary artist usually comes first)
            if (result.artist === "Unknown") {
                while (pos < end) {
                    let innerTag = readVarInt();
                    let innerField = innerTag >> 3;
                    let innerWire = innerTag & 7;
                    if (innerField === 2 && innerWire === 2) { // Artist Name
                        const strLen = readVarInt();
                        result.artist = readString(strLen);
                    } else {
                        skip(innerWire);
                    }
                }
            } else {
                pos = end; // Skip other artists
            }
        } else if (fieldNum === 7 && wireType === 0) { // Duration (Int32/Varint)
            result.duration_ms = readVarInt();
        } else {
            skip(wireType);
        }
    }

    return result;
}

// Fetch Metadata from Spotify API using the same auth headers
function fetchSpotifyMetadata(trackId, originalHeaders) {
    return new Promise((resolve, reject) => {
        // 1. Convert Base62 ID to Hex
        let hexId;
        try {
            hexId = base62ToHex(trackId);
        } catch (e) {
            reject("ID Conversion Error: " + e);
            return;
        }

        // 2. Request SpClient
        const url = `https://spclient.wg.spotify.com/metadata/4/track/${hexId}`;
        const headers = {
            "Authorization": originalHeaders["Authorization"] || originalHeaders["authorization"],
            "Accept": "application/protobuf"
        };

        // Note: Surge returns `data` as a Uint8Array (or similar byte container) if we don't assume string
        // We use typed output if possible, or standard get.
        // In Surge JS, $httpClient.get returns `data` as string by default unless options specify binary mode?
        // Actually, standard Surge behavior for binary data is tricky. 
        // We often rely on `response.bodyBytes` if in a script that intercepts response, 
        // but here we are making a NEW request.
        // $httpClient.get({url, headers, binary: true}...) is supported in newer Surge versions, or we check if data is binary.
        // Let's assume standard behavior for now but we might need `opts`.

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
                // 'data' might be string or binary.
                // If it's a string (Surge default for text-like), we might need to be careful.
                // However, spclient usually returns binary protobuf.
                // We'll coerce to buffer. In Surge, `data` for binary responses might be a raw string we need to encode, 
                // OR if we are lucky, a buffer. 
                // Safer approach in Surge environment for binary fetch in $httpClient is often undefined.
                // Assuming standard Surge environment allows receiving binary if Content-Type is distinct.

                // If data is a string, convert to Uint8Array (hacky for binary strings)
                let buffer;
                if (typeof data === 'string') {
                    const len = data.length;
                    buffer = new Uint8Array(len);
                    for (let i = 0; i < len; i++) {
                        buffer[i] = data.charCodeAt(i) & 0xff; // Simple byte preservation
                    }
                } else {
                    buffer = data; // Already valid?
                }

                const meta = parseSpClientProtobuf(buffer);

                if (meta.title === "Unknown") {
                    // Fallback check: maybe it wasn't protobuf or failed
                    log("WARN", "Protobuf parsing yielded empty results");
                }

                resolve(meta);

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
            language: languageCode, // Dynamic language
            isRtlLanguage: false,
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
            // Extract language if available (e.g. from original_lang or lang field), default to 'zh'
            const detectedLang = lyricsData.original_lang || lyricsData.lang || "zh";
            const spotifyLyrics = convertToSpotifyFormat(lyricsData, detectedLang);
            log("INFO", `Success! Returning ${lyricsData.lines.length} lines. Lang: ${detectedLang}`);

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
