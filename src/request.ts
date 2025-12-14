import { env } from './utils/env';
import { logger } from './utils/logger';
import { parseConfig } from './config';

const META_KEY_PREFIX = 'spotify_meta_';
const METADATA_FETCH_TIMEOUT = 5000; // 5 seconds max for metadata

/**
 * Request Script - Following DualSubs Architecture
 * 1. Inject subtype=LyricsFlow into URL to trigger response script
 * 2. Fetch metadata with timeout (don't block too long!)
 * 3. Return modified request
 */
async function handleRequest() {
    try {
        const config = parseConfig(env.args);
        (logger as any).level = config.logLevel;

        const url = new URL(env.request.url);
        logger.info(`[Request] Intercepted: ${url.pathname}`);

        // Only process color-lyrics requests
        if (url.pathname.startsWith('/color-lyrics/v2/track/')) {
            const pathParts = url.pathname.split('/');
            const trackId = pathParts[4];

            if (trackId) {
                logger.debug(`[Request] Track ID: ${trackId}`);

                // 1. Inject subtype param
                url.searchParams.set('subtype', 'LyricsFlow');
                logger.info(`[Request] Injected subtype=LyricsFlow`);

                // 2. Fetch metadata with timeout - don't block forever!
                await fetchMetadataWithTimeout(trackId, METADATA_FETCH_TIMEOUT);

                // 3. Update request URL
                env.request.url = url.toString();
            }
        }
    } catch (e) {
        logger.error(`[Request] Error: ${e}`);
    }

    // ALWAYS call done() - critical to prevent hangs!
    env.done(env.request);
}

/**
 * Fetch metadata with timeout to prevent hanging
 */
async function fetchMetadataWithTimeout(trackId: string, timeoutMs: number): Promise<void> {
    const headers = env.request.headers || {};
    const authHeader = headers['Authorization'] || headers['authorization'];

    if (!authHeader) {
        logger.warn(`[Request] No Auth Header`);
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
            },
            timeout: timeoutMs
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

            env.setStorage(`${META_KEY_PREFIX}${trackId}`, JSON.stringify(meta));
            logger.info(`[Request] Cached: ${meta.trackName} - ${meta.artist}`);
        } else {
            logger.warn(`[Request] Metadata status: ${response.status}`);
        }
    } catch (e) {
        logger.error(`[Request] Metadata fetch failed: ${e}`);
        // Don't throw - let the script continue
    }
}

// Execute with safety wrapper
handleRequest().catch(err => {
    logger.error(`[Request] Fatal: ${err}`);
    env.done(env.request);
});