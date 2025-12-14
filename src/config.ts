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
    logLevel: LogLevel.DEBUG,  // 默认 DEBUG 方便调试
};

// BoxJS/persistentStore key prefix
const STORAGE_PREFIX = '@LyricsFlow.Settings.';

// Declare $persistentStore for TypeScript
declare const $persistentStore: any;

/**
 * 从 persistentStore 读取配置 (BoxJS 兼容)
 */
function getStorageValue(key: string): string | null {
    if (typeof $persistentStore !== 'undefined') {
        return $persistentStore.read(`${STORAGE_PREFIX}${key}`);
    }
    return null;
}

/**
 * 检查值是否是未替换的占位符
 */
function isPlaceholder(value: string): boolean {
    if (!value) return true;
    // 检查 {XXX} 或 %7BXXX%7D (URL encoded)
    return /^\{.*\}$/.test(value) || /%7B.*%7D/i.test(value);
}

/**
 * 解析配置
 * 优先级: persistentStore (BoxJS) > $argument > 默认值
 */
export function parseConfig(argsStr: string): Config {
    const config = { ...DEFAULT_CONFIG };

    // 1. 首先尝试从 persistentStore 读取 (BoxJS)
    const storedUrl = getStorageValue('TYPEF_URL');
    if (storedUrl && !isPlaceholder(storedUrl)) {
        config.typefUrl = storedUrl;
    }

    const storedEnrich = getStorageValue('ENABLE_ENRICH');
    if (storedEnrich) {
        config.enableEnrich = storedEnrich.toLowerCase() === 'true';
    }

    const storedEnrichUrl = getStorageValue('ENRICH_URL');
    if (storedEnrichUrl) {
        config.enrichUrl = storedEnrichUrl;
    }

    const storedEnrichKey = getStorageValue('ENRICH_KEY');
    if (storedEnrichKey) {
        config.enrichKey = storedEnrichKey;
    }

    const storedLogLevel = getStorageValue('LogLevel');
    if (storedLogLevel) {
        config.logLevel = parseLogLevel(storedLogLevel);
    }

    // 2. 如果 persistentStore 没有有效的 TYPEF_URL，尝试从 $argument 解析
    if (argsStr && isPlaceholder(config.typefUrl)) {
        const pairs = argsStr.split('&');
        for (const pair of pairs) {
            const [key, value] = pair.split('=');
            if (!key) continue;
            const decodedValue = decodeURIComponent(value || '');

            // 跳过未替换的占位符
            if (isPlaceholder(decodedValue)) continue;

            switch (key.trim()) {
                case 'TYPEF_URL':
                    if (!isPlaceholder(decodedValue)) {
                        config.typefUrl = decodedValue;
                    }
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
                    config.logLevel = parseLogLevel(decodedValue);
                    break;
            }
        }
    }

    return config;
}

function parseLogLevel(value: string): LogLevel {
    switch (value.toUpperCase()) {
        case 'OFF': return LogLevel.OFF;
        case 'ERROR': return LogLevel.ERROR;
        case 'WARN': return LogLevel.WARN;
        case 'INFO': return LogLevel.INFO;
        case 'DEBUG': return LogLevel.DEBUG;
        default: return LogLevel.DEBUG;
    }
}

