# McWindsurf

A desktop web application for windsurfers to log sessions, track ocean equipment, and manage windsurfing spots — built with Next.js 14 and Supabase.

---

## What it does

**Session logging (Tow)** — Record windsurfing and SUP sessions with weather conditions, wind power, wind direction, swell, and equipment used.

**Equipment inventory** — Track your full quiver: sails, boards, masts, booms, and sundry items. Each piece of gear has a dedicated detail page with technical specs, financial info, and invoice attachments.

**Locations** — Save and manage your favourite windsurfing spots with Google Maps integration.

**Admin settings** — Configure lookup data used across the app: categories, disciplines, wind power ratings, wind directions, ocean swell types, and sports.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Database | Supabase |
| Auth | NextAuth v5 (session-based, Google OAuth) |
| Styling | Tailwind CSS |
| Image hosting | Cloudinary |
| Maps | Mapbox GL / react-map-gl |
| Data grids | AG Grid, Syncfusion |
| Charts | AG Charts |
| Icons | Heroicons |

---

## Getting started

### Prerequisites

- Node.js 18+
- A Supabase project
- A Cloudinary account
- A Mapbox account
- Google OAuth credentials (for NextAuth)

### Installation

```bash
git clone https://github.com/your-username/mcwindsurf.git
cd mcwindsurf
npm install
```

### Environment variables

Create a `.env.local` file in the root with the following:

```env
NEXTAUTH_URL=http://localhost:3002
NEXTAUTH_SECRET=your_secret

SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key

AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3002](http://localhost:3002) in your browser.

---

## Project structure

```
app/
├── _components/       # Shared UI components
├── _lib/              # Server actions, data fetching, auth, helpers
├── _styles/           # Global CSS
├── account/           # User profile and admin settings
├── boards/            # Board inventory
├── booms/             # Boom inventory
├── locations/         # Windsurfing spots
├── masts/             # Mast inventory
├── sails/             # Sail inventory
├── sundry/            # Other gear
└── tow/               # Session logs
```

---

## Authentication & route protection

Authentication is handled by NextAuth v5. The following routes require a valid session and are protected via middleware:

- `/account/**`
- `/masts/**`, `/sails/**`, `/boards/**`, `/booms/**`
- `/locations/**`
- `/tow/**`

Unauthenticated users are redirected to the login page.

---

## Notes

- This app is designed for **desktop use only**.
- The dev server runs on port **3002** (not the default 3000).