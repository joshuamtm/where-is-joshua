# CLAUDE.md — Where Is Joshua

## Context

A one-page site documenting a Saturday May 16, 2026 wander through Manhattan with friends — Hell's Kitchen → High Line → Greenwich Village → East Village, anchored by the 9th Ave Food Festival and Tompkins Square Park DanceFest.

The site is a static record of the route: map + timeline + downloadable KML.

## Tech stack

- **Vite + React + TypeScript**
- **Tailwind CSS v3** for styling
- **Leaflet** + **react-leaflet** for the map (OpenStreetMap tiles, no API key)
- **Netlify** for deploy

No backend, no auth, no analytics.

## Visual design

- Mobile-first single column
- Bright pink/magenta accent (`#e91e63`) for the route line
- System font stack
- Map height ~60vh on mobile, capped at 500px on desktop

## Route data

`src/data/route.ts` — 9 stops with time, name, lat/lng, note, durationMin.

## Config

`src/config.ts` holds the SMS contact phone for the footer "Text me" button.

## Components

- `Header` — title and date
- `Intro` — short framing paragraphs
- `RouteMap` — Leaflet map with numbered pins and connecting polyline
- `Timeline` — vertical list of all 9 stops
- `Footer` — "Text me" SMS link, "Download KML" link, credit

## Things deliberately not included

- No PWA, no service worker, no offline support
- No analytics, no tracking, no cookies
- No dark mode toggle
