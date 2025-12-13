import { env } from './utils/env';
import { logger } from './utils/logger';

const META_KEY_PREFIX = 'spotify_meta_';

async function handleRequest() {
    const url = env.request.url;
    // 确保只处理歌词接口
    if (url.includes('/color-lyrics/v2/track/')) {
        try {
            const parts = url.split('/');
            const trackIndex = parts.indexOf('track');
            let trackId = '';
            // 提取 Track ID
            if (trackIndex !== -1 && parts[trackIndex + 1]) {
                trackId = parts[trackIndex + 1].split('?')[0];
            }

            if (trackId) {
                await fetchAndCacheMetadata(trackId);
            }
        } catch (err) {
            logger.error(`[Request] Error: ${err}`);
        }
    }
    env.done({});
}

async function fetchAndCacheMetadata(trackId: string) {
    const headers = env.request.headers || {};
    // 关键：复用当前请求的 Authorization 头
    const authHeader = headers['Authorization'] || headers['authorization'];

    if (!authHeader) {
        logger.warn(`[Request] No Auth Header`);
        return;
    }

    // 修正：直接请求 Spotify 官方 Web API (返回 JSON)
    const metaUrl = `https://api.spotify.com/v1/tracks/${trackId}`;

    try {
        const response = await env.fetch({
            url: metaUrl,
            method: 'GET',
            headers: {
                'Authorization': authHeader,
                'Accept': 'application/json'
            }
        });

        if (response.status === 200 && response.body) {
            const data = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

            // 提取需要的元数据
            const meta = {
                trackName: data.name,
                artist: data.artists ? data.artists.map((a: any) => a.name).join(', ') : 'Unknown',
                album: data.album ? data.album.name : 'Unknown',
                duration: data.duration_ms
            };

            // 写入持久化缓存
            env.setStorage(`${META_KEY_PREFIX}${trackId}`, JSON.stringify(meta));
            logger.info(`[Request] Cached metadata: ${meta.trackName}`);
        } else {
            logger.warn(`[Request] Metadata fetch failed: ${response.status}`);
        }
    } catch (err) {
        logger.error(`[Request] Fetch Error: ${err}`);
    }
}

handleRequest().catch(err => {
    env.done({});
});