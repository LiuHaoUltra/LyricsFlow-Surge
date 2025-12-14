import { env } from './utils/env';
import { logger } from './utils/logger';
import { parseConfig } from './config';
import { createLyricsResponse, TypeFLyricsData } from './utils/protoHelper';

const META_KEY_PREFIX = 'spotify_meta_';

/**
 * Response Script - Following DualSubs Architecture
 * This script ONLY triggers when URL has subtype=LyricsFlow (injected by request script)
 * This ensures metadata is cached before this script runs
 */
async function handleResponse() {
    const config = parseConfig(env.args);
    (logger as any).level = config.logLevel;

    const url = new URL(env.request.url);
    logger.info(`[Response] Processing: ${url.pathname}`);

    // Extract track ID
    const pathParts = url.pathname.split('/');
    const trackId = pathParts[4]; // /color-lyrics/v2/track/{trackId}

    if (!trackId) {
        logger.warn(`[Response] No track ID found`);
        env.done(env.response);
        return;
    }

    // Get cached metadata
    const metaStr = env.getStorage(`${META_KEY_PREFIX}${trackId}`);
    if (!metaStr) {
        logger.warn(`[Response] No cached metadata for ${trackId}`);
        env.done(env.response);
        return;
    }

    let meta: any;
    try {
        meta = JSON.parse(metaStr);
    } catch (e) {
        logger.error(`[Response] Failed to parse metadata: ${e}`);
        env.done(env.response);
        return;
    }

    logger.info(`[Response] Found metadata: ${meta.trackName} - ${meta.artist}`);

    // Validate TypeF URL
    if (!config.typefUrl || config.typefUrl.includes('{TYPEF_URL}')) {
        logger.error(`[Response] TYPEF_URL not configured!`);
        env.done(env.response);
        return;
    }

    // Call TypeF API
    const apiUrl = `${config.typefUrl.replace(/\/$/, '')}/v1/match`;
    const payload = {
        title: meta.trackName,
        artist: meta.artist,
        album: meta.album,
        duration_ms: meta.duration || 0
    };

    logger.debug(`[Response] Calling TypeF: ${apiUrl}`);

    try {
        const resp = await env.fetch({
            url: apiUrl,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            timeout: 25000
        });

        if (resp.status === 200 && resp.body) {
            const data = typeof resp.body === 'string' ? JSON.parse(resp.body) : resp.body;
            const lyricsData = data as TypeFLyricsData;

            // Convert to Protobuf
            const protobufBytes = createLyricsResponse(lyricsData);
            logger.info(`[Response] Success: ${protobufBytes.length} bytes`);

            // Modify response
            const response = env.response;
            response.body = protobufBytes;

            // Clean headers
            if (response.headers) {
                delete response.headers['content-length'];
                delete response.headers['Content-Length'];
                delete response.headers['transfer-encoding'];
                delete response.headers['Transfer-Encoding'];
            }

            env.done(response);
            return;
        } else {
            logger.warn(`[Response] TypeF returned ${resp.status}`);
            env.done(env.response);
            return;
        }
    } catch (err) {
        logger.error(`[Response] TypeF error: ${err}`);
        env.done(env.response);
        return;
    }
}

// Execute
handleResponse().catch(err => {
    logger.error(`[Response] Global Error: ${err}`);
    env.done(env.response);
});
