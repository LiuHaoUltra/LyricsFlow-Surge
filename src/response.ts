import { env } from './utils/env';
import { logger } from './utils/logger';
import { parseConfig } from './config';
import { createLyricsResponse, TypeFLyricsData } from './utils/protoHelper';

const META_KEY_PREFIX = 'spotify_meta_';

async function handleResponse() {
    const url = env.request.url;
    const config = parseConfig(env.args);
    (logger as any).level = config.logLevel;

    logger.debug(`[Response] Intercepted: ${url}`);

    if (url.includes('/color-lyrics/v2/track/')) {
        try {
            // 1. Get Track ID
            const parts = url.split('/');
            const trackIndex = parts.indexOf('track');
            let trackId = '';
            if (trackIndex !== -1 && parts[trackIndex + 1]) {
                trackId = parts[trackIndex + 1].split('?')[0];
            }

            if (!trackId) {
                logger.warn(`[Response] No track ID found.`);
                env.done({});
                return;
            }

            // 2. Get Metadata
            const metaStr = env.getStorage(`${META_KEY_PREFIX}${trackId}`);
            if (!metaStr) {
                logger.warn(`[Response] No metadata cached for ${trackId}.`);
                env.done({});
                return;
            }

            const meta = JSON.parse(metaStr);
            logger.info(`[Response] Processing for: ${meta.trackName} - ${meta.artist}`);

            // 3. Request Lyrics from TypeF
            // Defaulting to standard path /api/v1/lyrics/match unless configured otherwise
            // User said: POST {TYPEF_URL}/api/v1/lyrics/search? No, models said /match.
            // I'll stick to /api/v1/match or similar. I'll use /match per analysis.
            // Assuming TYPEF_URL includes the base, e.g. http://127.0.0.1:8000
            // Request path: /api/v1/match? Nope, lets try /match directly if user sets root?
            // Default TYPEF_URL is http://127.0.0.1:8000.
            // Endpoints in main.py usually mount with prefix. 
            // I'll use `${config.typefUrl}/match` if the user didn't specify path.
            // Actually, standard FastAPI is often just `/match` if defined in root, or `/api/v1/match`.
            // Let's assume `/api/v1/lyrics/match` based on structure `app/api/endpoints/lyrics.py`.
            const apiUrl = `${config.typefUrl.replace(/\/$/, '')}/api/v1/lyrics/match`;

            const payload = {
                title: meta.trackName,
                artist: meta.artist,
                album: meta.album,
                duration_ms: meta.duration || 0,
                // style_instruction: config.enableEnrich ? "enrich" : undefined // if needed
            };

            logger.debug(`[Response] Calling TypeF: ${apiUrl} with ${JSON.stringify(payload)}`);

            const resp = await env.fetch({
                url: apiUrl,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (resp.status === 200 && resp.body) {
                const data = typeof resp.body === 'string' ? JSON.parse(resp.body) : resp.body;
                const lyricsData = data as TypeFLyricsData;

                // 4. Convert to Protobuf
                const protobufBytes = createLyricsResponse(lyricsData);

                // 5. Return
                logger.info(`[Response] Success. Returning ${protobufBytes.length} bytes.`);
                env.done({
                    status: 200,
                    headers: {
                        ...env.request.headers, // headers from response? No, usually empty or copy.
                        // Actually Surge response script: we modify the existing response.
                        // If we pass `headers`, we replace them.
                        'Content-Type': 'application/protobuf',
                        'Content-Length': String(protobufBytes.length)
                    },
                    body: protobufBytes
                });
                return;

            } else {
                logger.warn(`[Response] TypeF returned ${resp.status}`);
            }

        } catch (err) {
            logger.error(`[Response] Error: ${err}`);
        }
    }

    // Fallback: return original response
    env.done({});
}

handleResponse().catch(err => {
    logger.error("Global Response Error:", err);
    env.done({});
});
