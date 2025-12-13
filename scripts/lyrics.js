/**
 * LyricsFlow - Spotify Lyrics Enhancer
 * Surge Script - Self-contained (no require)
 */
// ... [CONFIG and getConfig function remains the same] ...
const CONFIG = getConfig();
// ... [log function remains the same] ...


// ============== Helpers ==============

// 修正：使用已知的内部 JSON API 端点 /track-api/v1/tracks/{trackId}
function fetchSpotifyMetadata(trackId, originalHeaders) {
    return new Promise((resolve, reject) => {
        // 实际的 JSON API 地址，使用原始的 trackId (Base62)
        const url = `https://spclient.wg.spotify.com/track-api/v1/tracks/${trackId}`;

        const headers = {
            // 必须传递授权头，才能获取元数据
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
                // 有些地区或客户端可能返回 404 或其他非 200 状态
                log("ERROR", `Metadata Status Error: ${response.status} - ${data}`);
                reject(`Spotify API Error: ${response.status}`);
                return;
            }
            try {
                const track = JSON.parse(data);
                // 确保解析路径与 JSON 响应结构匹配
                resolve({
                    title: track.metadata.title,
                    artist: track.metadata.artist,
                    album: track.metadata.album,
                    duration_ms: parseInt(track.metadata.duration),
                });
            } catch (e) {
                log("ERROR", `Metadata Parse Error: ${e}`);
                reject(e);
            }
        });
    });
}

// ... [fetchLyricsFromTypeF function remains the same] ...

// ... [convertToSpotifyFormat function remains the same] ...

// ============== Main Handler ==============
(async () => {
    try {
        const url = $request.url;
        const trackIdMatch = url.match(/track\/([^\/?]+)/); // Match anything not / or ?
        const trackId = trackIdMatch ? trackIdMatch[1] : null;

        if (!trackId) {
            log("WARN", "No track ID found in URL. Passing through original.");
            $done({});
            return;
        }

        // 1. Fetch Metadata from Spotify
        const metadata = await fetchSpotifyMetadata(trackId, $request.headers);
        log("INFO", `Metadata: ${metadata.title} - ${metadata.artist}`);

        // 2. Fetch Lyrics from TypeF
        const lyricsData = await fetchLyricsFromTypeF(metadata);

        // 3. Convert and Return
        if (lyricsData && lyricsData.lines && lyricsData.lines.length > 0) {
            // 语言代码处理（沿用您上次的修改）
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
            // 关键：如果 TypeF 没有找到歌词，我们必须让原始请求的响应通过
            // 如果原始请求有歌词，它会显示；如果原始没有，则不显示。
            log("WARN", "No lyrics found via TypeF, passing through original response.");
            $done({});
        }

    } catch (e) {
        log("ERROR", `Error: ${e}. Script failed, returning original response.`);
        // 关键：确保失败时不会阻止原始响应（即使原始是空的）
        $done({});
    }
})();