# Where Is Joshua?

A one-page site for **Saturday, May 16, 2026** — wandering Manhattan with friends.

- Map of the 9-stop route (Hell's Kitchen → East Village)
- Timeline with times and notes for each stop
- Downloadable KML for Google My Maps

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

## Deploy

Auto-deploys to Netlify on push to `main`. Build command: `npm run build`, publish dir: `dist`.

## Tech

Vite + React + TypeScript · Tailwind v3 · Leaflet (OSM tiles) · Netlify.
