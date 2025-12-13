import { LogLevel } from './utils/logger';

export interface Config {
    typefUrl: string;
    enableEnrich: boolean;
    enrichUrl?: string;
    enrichKey?: string;
    logLevel: LogLevel;
}

const DEFAULT_CONFIG: Config = {
    typefUrl: 'http://127.0.0.1:8000',
    enableEnrich: false,
    logLevel: LogLevel.WARN,
};

export function parseConfig(argsStr: string): Config {
    const config = { ...DEFAULT_CONFIG };

    if (!argsStr) return config;

    // Manual parsing for environment compatibility (URLSearchParams might not exist in strict constrained envs, 
    // but usually exists in modern JS runtimes. We'll use split for safety in Surge.)
    const pairs = argsStr.split('&');

    for (const pair of pairs) {
        const [key, value] = pair.split('=');
        if (!key) continue;

        const decodedValue = decodeURIComponent(value || '');

        switch (key.trim()) {
            case 'TYPEF_URL':
                config.typefUrl = decodedValue;
                break;
            case 'ENABLE_ENRICH':
                config.enableEnrich = decodedValue.toLowerCase() === 'true';
                break;
            case 'ENRICH_URL':
                config.enrichUrl = decodedValue;
                break;
            case 'ENRICH_KEY':
                config.enrichKey = decodedValue;
                break;
            case 'LogLevel':
                // Map string to LogLevel is handled by Logger, but here we store enum directly for type safety if needed.
                // Or we can just pass string if Interface allowed it. 
                // Let's simple mapping here to keep Config clean.
                switch (decodedValue.toUpperCase()) {
                    case 'OFF': config.logLevel = LogLevel.OFF; break;
                    case 'ERROR': config.logLevel = LogLevel.ERROR; break;
                    case 'WARN': config.logLevel = LogLevel.WARN; break;
                    case 'INFO': config.logLevel = LogLevel.INFO; break;
                    case 'DEBUG': config.logLevel = LogLevel.DEBUG; break;
                    default: config.logLevel = LogLevel.WARN;
                }
                break;
        }
    }

    return config;
}
