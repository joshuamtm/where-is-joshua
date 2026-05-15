# Where Is Joshua?

A one-page site for **Saturday, May 16, 2026** — wandering Manhattan with friends.

- Map of the 9-stop route (Hell's Kitchen → East Village)
- Timeline with times and notes for each stop
- Live location link (updated the morning of)
- Downloadable KML for Google My Maps

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

## Deploy

Auto-deploys to Netlify on push to `main`. Build command: `npm run build`, publish dir: `dist`.

## On the day

1. Open Google Maps → Location sharing → Share new location → Share via link.
2. Paste the URL into `src/config.ts` as `LIVE_LOCATION_URL`.
3. `git commit -am "go" && git push`. Netlify rebuilds in ~60 seconds.

## Tech

Vite + React + TypeScript · Tailwind v3 · Leaflet (OSM tiles) · Netlify.

See `CLAUDE.md` for the full brief.
