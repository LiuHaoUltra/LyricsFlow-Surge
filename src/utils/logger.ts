export enum LogLevel {
    OFF = 0,
    ERROR = 1,
    WARN = 2,
    INFO = 3,
    DEBUG = 4,
}

export class Logger {
    private level: LogLevel;
    private prefix: string;

    constructor(level: string | LogLevel = LogLevel.INFO, prefix: string = '') {
        this.level = typeof level === 'string' ? this.parseLevel(level) : level;
        this.prefix = prefix;
    }

    public setLevel(level: LogLevel) {
        this.level = level;
    }

    private parseLevel(level: string): LogLevel {
        switch (level.toUpperCase()) {
            case 'OFF': return LogLevel.OFF;
            case 'ERROR': return LogLevel.ERROR;
            case 'WARN': return LogLevel.WARN;
            case 'INFO': return LogLevel.INFO;
            case 'DEBUG': return LogLevel.DEBUG;
            default: return LogLevel.INFO;
        }
    }

    private format(level: string, message: string, ...args: any[]): string {
        const timestamp = new Date().toISOString().split('T')[1].slice(0, -1);
        return `[${timestamp}] [${level}] ${this.prefix}${message}`;
    }

    error(message: string, ...args: any[]): void {
        if (this.level >= LogLevel.ERROR) {
            console.log(this.format('ERROR', message), ...args);
        }
    }

    warn(message: string, ...args: any[]): void {
        if (this.level >= LogLevel.WARN) {
            console.log(this.format('WARN', message), ...args);
        }
    }

    info(message: string, ...args: any[]): void {
        if (this.level >= LogLevel.INFO) {
            console.log(this.format('INFO', message), ...args);
        }
    }

    debug(message: string, ...args: any[]): void {
        if (this.level >= LogLevel.DEBUG) {
            console.log(this.format('DEBUG', message), ...args);
        }
    }
}

export const logger = new Logger(); // Default instance
