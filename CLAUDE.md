# CLAUDE.md — Where Is Joshua

## Context

Saturday May 16, 2026, I'm wandering Manhattan with friends. We have a route through Hell's Kitchen, the High Line, Greenwich Village, and the East Village, anchored by the 9th Ave Food Festival in the morning and DanceFest at Tompkins Square Park in the afternoon. I want one URL I can send to friends so they can see (a) the plan and (b) where I am right now via Google Maps live location share. Friends use any phone, any OS, no account needed.

## What to build

A single-page React app deployed to Netlify. One screen, mobile-first.

**Layout, top to bottom:**

1. **Header.** Title "Where Is Joshua?" with the date (Saturday, May 16, 2026) and a one-line tagline ("Wandering Manhattan. Catch up if you can.").
2. **Live-location call to action.** A prominent button: "📍 See Joshua's live location." Opens the Google Maps share URL (from `src/config.ts` — see below) in a new tab. If the URL isn't set yet, the button shows "Live location starts at 9 AM" and is disabled.
3. **Route map.** A Leaflet map centered on Manhattan, showing all 9 stops as numbered pins connected by a polyline. Tapping a pin opens a popup with the stop name, time, and note.
4. **Timeline.** Below the map, a vertical list of the 9 stops in order. Each entry shows: number, time, name, one-line note. The timeline is the accessible fallback for the map and the primary scroll experience on small phones.
5. **Footer.** Quick links: "Text me" (sms: link to a phone number from config), "Download KML" (link to `/route.kml` in public/), and a small "Built in a night with Claude Code" credit.

## Tech stack

Use these. Do not substitute.

- **Vite + React + TypeScript** (`npm create vite@latest -- --template react-ts`)
- **Tailwind CSS** for styling
- **Leaflet** + **react-leaflet** for the map (OpenStreetMap tiles, no API key needed)
- **Netlify** for deploy (include a `netlify.toml`)

No Supabase, no backend, no auth. Static site only. The live location URL is updated by editing `src/config.ts` and pushing — Netlify auto-deploys.

## Visual design

- **Mobile-first.** Single column, comfortable tap targets, no horizontal scroll.
- **NYC vibe, lightly playful.** Not corporate. Not MTM-branded — this is personal.
- **Color:** A bold accent for the route line and CTA button. Suggest a bright pink/magenta (`#e91e63`-ish) for the route line to match the KML, and a confident blue for the CTA. Background near-white, dark text. Don't over-design.
- **Typography:** System font stack is fine. One weight for body, one for headers.
- **Map height:** ~60vh on mobile, capped at 500px on desktop.

## The route data

Create `src/data/route.ts` with this exact content:

```typescript
export type Stop = {
  ordinal: number;
  time: string;
  name: string;
  shortName: string;
  lat: number;
  lng: number;
  note: string;
  durationMin: number;
};

export const stops: Stop[] = [
  {
    ordinal: 1,
    time: "9:00 AM",
    name: "Masseria Caffè",
    shortName: "Coffee start",
    lat: 40.7684962,
    lng: -73.9856429,
    note: "Strong espresso, no laptops. Pastries are real. Sets the tone before the food assault.",
    durationMin: 45,
  },
  {
    ordinal: 2,
    time: "10:00 AM",
    name: "9th Ave Food Festival (north entry)",
    shortName: "Food Festival",
    lat: 40.767931,
    lng: -73.9857354,
    note: "Enter at 57th, graze south to 42nd. 51st year, mile-long. Don't fill up on the first three blocks.",
    durationMin: 90,
  },
  {
    ordinal: 3,
    time: "12:00 PM",
    name: "High Line (30th St entrance)",
    shortName: "High Line",
    lat: 40.7528349,
    lng: -74.0022969,
    note: "Walk south on the elevated park. Full bloom in mid-May.",
    durationMin: 45,
  },
  {
    ordinal: 4,
    time: "12:45 PM",
    name: "Little Island",
    shortName: "Little Island",
    lat: 40.7420024,
    lng: -74.010299,
    note: "Hudson views, 15 minutes. Pier 55.",
    durationMin: 30,
  },
  {
    ordinal: 5,
    time: "1:45 PM",
    name: "Caffè Reggio",
    shortName: "Village pit stop",
    lat: 40.7303079,
    lng: -74.0003706,
    note: "1927. America's first cappuccino machine is still on the bar. Sit, regroup.",
    durationMin: 45,
  },
  {
    ordinal: 6,
    time: "2:30 PM",
    name: "Washington Square Park",
    shortName: "Washington Sq",
    lat: 40.7308838,
    lng: -73.997332,
    note: "Cut through east. Pianist, chess, the usual.",
    durationMin: 20,
  },
  {
    ordinal: 7,
    time: "2:50 PM",
    name: "Astor Place & St Marks",
    shortName: "Catch the parade",
    lat: 40.7295384,
    lng: -73.9898709,
    note: "Parade turns east on St Marks. Fall in with the dancers for the final stretch.",
    durationMin: 25,
  },
  {
    ordinal: 8,
    time: "3:30 PM",
    name: "Tompkins Square Park (DanceFest)",
    shortName: "DanceFest",
    lat: 40.7264295,
    lng: -73.9817841,
    note: "Multiple stages, teaching stage, DJ area. 3–7 PM. The day's anchor.",
    durationMin: 150,
  },
  {
    ordinal: 9,
    time: "6:15 PM",
    name: "Veselka",
    shortName: "Dinner",
    lat: 40.7290155,
    lng: -73.9871139,
    note: "Pierogies, borscht, latkes. Three blocks from Tompkins. Open 24h on Saturday.",
    durationMin: 75,
  },
];
```

## Config

Create `src/config.ts`:

```typescript
// Update this with the Google Maps live location share URL on the morning of the wander.
// To generate: open Google Maps → tap profile → Location sharing → Share new location →
//   Share via link → "Anyone with the link can see" → copy URL.
// Leave empty string until ready; the button will show a disabled "starts at 9 AM" state.
export const LIVE_LOCATION_URL = "";

// SMS link target for the "Text me" footer button.
export const CONTACT_PHONE = "+1XXXXXXXXXX";
```

## Files to commit

```
where-is-joshua/
├── CLAUDE.md                 ← this file
├── README.md                 ← short, one-screen
├── package.json
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
├── .gitignore
├── public/
│   ├── favicon.svg
│   └── route.kml             ← copy from project root before committing
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── config.ts
    ├── data/
    │   └── route.ts
    └── components/
        ├── Header.tsx
        ├── LiveLocationButton.tsx
        ├── RouteMap.tsx
        ├── Timeline.tsx
        └── Footer.tsx
```

## Build steps (run these in order)

```bash
# 1. Scaffold
npm create vite@latest where-is-joshua -- --template react-ts
cd where-is-joshua

# 2. Install
npm install
npm install leaflet react-leaflet
npm install -D tailwindcss postcss autoprefixer @types/leaflet
npx tailwindcss init -p

# 3. Wire up Tailwind (content paths in tailwind.config.js, directives in src/index.css)

# 4. Drop in the files per the structure above

# 5. Copy the KML
cp ../saturday-may-16-route.kml public/route.kml

# 6. Verify locally
npm run dev
# Confirm: map renders, all 9 pins visible, polyline connects them in order, timeline matches map, CTA button is disabled with config.ts URL empty, footer links work.

# 7. Git + GitHub
git init
git add -A
git commit -m "Initial: where is joshua"
gh repo create where-is-joshua --public --source=. --push

# 8. Netlify
# Connect the GitHub repo at netlify.com, build command `npm run build`, publish directory `dist`.
# Optionally add netlify.toml so it just works on first deploy.
```

## Acceptance criteria

The build is done when all of these are true:

- [ ] `npm run dev` shows the page with no console errors.
- [ ] Map centers on Manhattan with all 9 numbered pins visible without scrolling on a phone (test in Chrome devtools iPhone 14 view).
- [ ] Tapping each pin shows the correct stop name, time, and note.
- [ ] The polyline connects pins 1→2→3→…→9 in order.
- [ ] Timeline below the map lists all 9 stops in order with the same data as the pins.
- [ ] CTA button:
  - When `LIVE_LOCATION_URL` is empty: shows "Live location starts at 9 AM," disabled.
  - When `LIVE_LOCATION_URL` is set: shows "📍 See Joshua's live location," opens URL in a new tab.
- [ ] Footer "Text me" opens the SMS app with the configured number.
- [ ] Footer "Download KML" downloads `/route.kml`.
- [ ] No layout breaks at 375px width (small iPhone) or 1440px (laptop).
- [ ] Site deploys to Netlify and loads in under 2 seconds on a phone.

## Tomorrow morning workflow (for Joshua, not Claude Code)

1. ~8:30 AM: Open Google Maps on the phone, start a live location share via link, set duration to 10 hours, copy the URL.
2. Paste the URL into `src/config.ts` as the value of `LIVE_LOCATION_URL`.
3. `git commit -am "go" && git push`. Netlify auto-deploys in ~60 seconds.
4. Send the Netlify URL to friends.

## Things to deliberately skip

- No PWA, no service worker, no offline support.
- No analytics, no tracking, no cookies.
- No dark mode toggle (just pick a clean look).
- No multi-day support, no other broadcasters.
- No reverse-geocoding, no "near such-and-such block" labels.
- No history / breadcrumb trail. Google Maps shows live position only.

## Reference materials

- `saturday-may-16-route.kml` — same 9 stops, importable into Google My Maps if anyone wants a different view.
- `where-is-joshua-prd.md` — the more ambitious original PRD with Supabase + custom broadcaster. Context only; do **not** build that version.
