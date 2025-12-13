import { env } from './utils/env';
import { logger } from './utils/logger';

// Key prefix for storing metadata in persistent store
const META_KEY_PREFIX = 'spotify_meta_';

async function handleRequest() {
    const url = env.request.url;
    logger.debug(`[Request] Intercepted: ${url}`);

    if (url.includes('/color-lyrics/v2/track/')) {
        try {
            // 1. Extract Track ID
            // URL format: .../track/{trackId}?....
            // We can split by '/' and find the segment after 'track'
            const parts = url.split('/');
            const trackIndex = parts.indexOf('track');
            let trackId = '';
            if (trackIndex !== -1 && parts[trackIndex + 1]) {
                // Remove query params if any
                trackId = parts[trackIndex + 1].split('?')[0];
            }

            if (trackId) {
                logger.info(`[Request] Found Track ID: ${trackId}`);
                await fetchAndCacheMetadata(trackId);
            } else {
                logger.warn(`[Request] Could not extract Track ID from URL: ${url}`);
            }

        } catch (err) {
            logger.error(`[Request] Error processing request: ${err}`);
        }
    }

    // Always release the request
    env.done({});
}

async function fetchAndCacheMetadata(trackId: string) {
    // 2. Construct Metadata Request
    // Using the same Authorization header from the original request
    const headers = env.request.headers || {};
    const authHeader = headers['Authorization'] || headers['authorization'];

    if (!authHeader) {
        logger.warn(`[Request] No Authorization header found. Cannot fetch metadata.`);
        return;
    }

    const metaUrl = `https://api.spotify.com/v1/tracks?ids=${trackId}`;

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
            if (data.tracks && data.tracks.length > 0) {
                const track = data.tracks[0];
                const meta = {
                    trackName: track.name,
                    artist: track.artists ? track.artists.map((a: any) => a.name).join(', ') : 'Unknown',
                    album: track.album ? track.album.name : 'Unknown',
                    duration: track.duration_ms
                };

                // 3. Store in Persistent Store
                const key = `${META_KEY_PREFIX}${trackId}`;
                env.setStorage(key, JSON.stringify(meta));
                logger.info(`[Request] Cached metadata for ${trackId}: ${meta.trackName}`);
            }
        } else {
            logger.warn(`[Request] Metadata fetch failed: ${response.status}`);
        }
    } catch (err) {
        logger.error(`[Request] Metadata fetch error: ${err}`);
    }
}

// Global execution
handleRequest().catch(err => {
    logger.error("Global Request Handler Error:", err);
    env.done({});
});
