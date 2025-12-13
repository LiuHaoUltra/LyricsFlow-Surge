/**
 * LyricsFlow - Request Modifier
 * Forces Spotify to accept JSON lyrics
 */

const url = $request.url;
const method = $request.method;

if (url.indexOf("color-lyrics/v2/track") !== -1) {
    console.log("[LyricsFlow] [REQ] Force Accept: application/json");
    $done({
        headers: {
            ...$request.headers,
            "Accept": "application/json",
            "app-platform": "WebPlayer" // Trick to ensure JSON?
        }
    });
} else {
    $done({});
}
