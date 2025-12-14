import { env } from './utils/env';
import { logger } from './utils/logger';
import { parseConfig } from './config';

const META_KEY_PREFIX = 'spotify_meta_';

/**
 * Request Script - Following DualSubs Architecture
 * 1. Inject subtype=LyricsFlow into URL to trigger response script
 * 2. Fetch metadata in parallel (non-blocking)
 * 3. Return modified request immediately
 */
async function handleRequest() {
    const config = parseConfig(env.args);
    (logger as any).level = config.logLevel;

    const url = new URL(env.request.url);
    logger.info(`[Request] Intercepted: ${url.pathname}`);

    // Only process color-lyrics requests
    if (url.pathname.startsWith('/color-lyrics/v2/track/')) {
        // Extract track ID from path
        const pathParts = url.pathname.split('/');
        const trackId = pathParts[4]; // /color-lyrics/v2/track/{trackId}

        if (trackId) {
            logger.debug(`[Request] Track ID: ${trackId}`);

            // 1. Inject subtype param - THIS TRIGGERS THE RESPONSE SCRIPT
            url.searchParams.set('subtype', 'LyricsFlow');
            logger.info(`[Request] Injected subtype=LyricsFlow`);

            // 2. Fetch metadata in parallel (non-blocking, fire-and-forget)
            fetchMetadataAsync(trackId).catch(e =>
                logger.error(`[Request] Metadata fetch error: ${e}`)
            );

            // 3. Update request URL with new params
            env.request.url = url.toString();
        }
    }

    // Always call done() with the (possibly modified) request
    env.done(env.request);
}

/**
 * Async metadata fetch - runs in background, doesn't block request
 */
async function fetchMetadataAsync(trackId: string) {
    const headers = env.request.headers || {};
    const authHeader = headers['Authorization'] || headers['authorization'];

    if (!authHeader) {
        logger.warn(`[Request] No Auth Header, skipping metadata fetch`);
        return;
    }

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
            const data = typeof response.body === 'string'
                ? JSON.parse(response.body)
                : response.body;

            const meta = {
                trackName: data.name,
                artist: data.artists ? data.artists.map((a: any) => a.name).join(', ') : 'Unknown',
                album: data.album ? data.album.name : 'Unknown',
                duration: data.duration_ms
            };

            // Store with track ID as key
            env.setStorage(`${META_KEY_PREFIX}${trackId}`, JSON.stringify(meta));
            logger.info(`[Request] Cached: ${meta.trackName} - ${meta.artist}`);
        } else {
            logger.warn(`[Request] Metadata fetch returned ${response.status}`);
        }
    } catch (err) {
        logger.error(`[Request] Fetch error: ${err}`);
    }
}

// Execute
handleRequest().catch(err => {
    logger.error(`[Request] Global Error: ${err}`);
    env.done(env.request);
});