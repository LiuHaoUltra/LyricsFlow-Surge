# LyricsFlow-Surge

A Surge module to inject custom lyrics into Spotify using the LyricsFlow ecosystem.

## Features
- **Metadata Caching**: Intercepts requests to cache song metadata.
- **Custom Lyrics**: Fetches lyrics from your self-hosted **LyricsFlow-TypeF** backend.
- **Protobuf Injection**: Constructs valid Spotify Protobuf responses (including syllable-sync support).

## Installation

1. **Build the Project**:
   ```bash
   npm install
   npm run build
   ```
   This generates `dist/request.js` and `dist/response.js`.

2. **Backend Setup**:
   Ensure your [LyricsFlow-TypeF](../TypeF) server is running (default: `http://127.0.0.1:8000`).

3. **Install in Surge**:
   - Copy `LyricsFlow.sgmodule` and the `dist` folder to your Surge configuration directory (or upload to a Gist).
   - Enable the module in Surge.
   - **Important**: Trust the MitM certificate for `spclient.wg.spotify.com`.

## Configuration
Arguments can be modified in the `.sgmodule` file:
- `TYPEF_URL`: URL of your TypeF backend (e.g. `http://192.168.1.5:8000`).
- `ENABLE_ENRICH`: `true`/`false` to enable AI enrichment (if supported by backend).
- `LogLevel`: `DEBUG`, `INFO`, `WARN`, `ERROR`.

## Development
- **Protobuf**: Edit `src/protobuf/spotify/lyrics.proto`.
- **Logic**: Edit `src/request.ts` (Metadata) or `src/response.ts` (Lyrics Fetch).