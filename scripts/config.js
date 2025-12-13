/**
 * Config Helper for LyricsFlow
 */

const DEFAULT_CONFIG = {
    TYPEF_URL: "http://127.0.0.1:8000",
    ENABLE_ENRICH: false,
    ENRICH_URL: "",
    ENRICH_KEY: ""
};

function getConfig() {
    let stored = {};
    if (typeof $persistantStore !== "undefined") {
        const storedStr = $persistantStore.read("LyricsFlow_Config");
        if (storedStr) {
            try {
                stored = JSON.parse(storedStr);
            } catch (e) {
                console.log("Failed to parse config: " + e);
            }
        }
    }

    // Merge defaults
    return { ...DEFAULT_CONFIG, ...stored };
}

module.exports = {
    getConfig
};
