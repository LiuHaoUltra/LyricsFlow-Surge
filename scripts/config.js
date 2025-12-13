/**
 * Config Helper for LyricsFlow
 * Reads from Surge arguments or $persistentStore
 */

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
        const params = new URLSearchParams($argument);
        if (params.get("TYPEF_URL")) config.TYPEF_URL = params.get("TYPEF_URL");
        if (params.get("ENABLE_ENRICH")) config.ENABLE_ENRICH = params.get("ENABLE_ENRICH") === "true";
        if (params.get("ENRICH_URL")) config.ENRICH_URL = params.get("ENRICH_URL");
        if (params.get("ENRICH_KEY")) config.ENRICH_KEY = params.get("ENRICH_KEY");
        if (params.get("LogLevel")) config.LogLevel = params.get("LogLevel");
    }

    // Fallback: Try BoxJS / persistentStore
    if (typeof $persistentStore !== "undefined") {
        const storedStr = $persistentStore.read("@LyricsFlow.Settings");
        if (storedStr) {
            try {
                const stored = JSON.parse(storedStr);
                config = { ...config, ...stored };
            } catch (e) {
                console.log("Failed to parse BoxJS config: " + e);
            }
        }
    }

    return config;
}

module.exports = {
    getConfig
};
