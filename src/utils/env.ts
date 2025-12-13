/**
 * Environment Adapter for Surge
 * Handles HTTP requests, persistence, and script completion.
 */

export interface HelperRequestOpts {
    url: string;
    method?: string; // GET, POST, etc.
    headers?: Record<string, string>;
    body?: string | Uint8Array;
    timeout?: number;
    binary?: boolean; // If true, response body is expected to be binary (Uint8Array/Buffer)
}

export class Env {
    private name: string;
    private isSurge: boolean;

    constructor(name: string) {
        this.name = name;
        this.isSurge = typeof $httpClient !== 'undefined';
    }

    get args(): string {
        return typeof $argument !== 'undefined' ? $argument : '';
    }

    get request(): any {
        return typeof $request !== 'undefined' ? $request : { url: '', headers: {} };
    }

    /**
     * Sends an HTTP request.
     */
    async fetch(opts: HelperRequestOpts): Promise<any> {
        // Normalize method
        const method = (opts.method || 'GET').toUpperCase();

        // Prepare options for Surge
        const requestOptions: any = {
            url: opts.url,
            method: method,
            headers: opts.headers || {},
            body: opts.body,
            timeout: opts.timeout ? opts.timeout / 1000 : undefined, // Surge timeout is in seconds? usually defaults. 
        };

        if (this.isSurge) {
            if (opts.binary) {
                // In Surge, for binary response, usually no special flag in request opts 
                // but $httpClient callback receives 'data' which can be binary if headers say so?
                // Actually, $httpClient usually returns string or object. 
                // For binary, we might need to check how Surge handles it. 
                // usually it's automatic or we rely on 'node-buffer' polyfill if bundled.
                // But for response, Surge passes `data`.
            }

            return new Promise((resolve, reject) => {
                $httpClient[method.toLowerCase()](requestOptions, (error: any, response: any, data: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({
                            status: response.status || 200,
                            headers: response.headers,
                            body: data, // string or object or whatever Surge returns
                        });
                    }
                });
            });
        } else {
            // Fallback for Node/Testing (using global fetch if available)
            return Promise.resolve({ error: "Not in Surge environment" });
        }
    }

    /**
     * Writes to persistent storage.
     */
    setStorage(key: string, value: string): void {
        if (this.isSurge) {
            $persistentStore.write(value, key);
        }
    }

    /**
     * Reads from persistent storage.
     */
    getStorage(key: string): string | null {
        if (this.isSurge) {
            return $persistentStore.read(key);
        }
        return null;
    }

    /**
     * Sends a system notification.
     */
    msg(title: string, subtitle: string, body: string): void {
        if (this.isSurge) {
            $notification.post(title, subtitle, body);
        } else {
            console.log(`[MSG] ${title} - ${subtitle}: ${body}`);
        }
    }

    /**
     * Completes the script execution.
     */
    done(value: any = {}): void {
        if (this.isSurge) {
            $done(value);
        }
    }
}

// Global types for Surge (to avoid TS errors)
declare const $httpClient: any;
declare const $persistentStore: any;
declare const $notification: any;
declare const $done: any;
declare const $argument: string;
declare const $request: any;

export const env = new Env('LyricsFlow');
