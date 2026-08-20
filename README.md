# Jiangxiang Village Social Practice Website

A responsive web application showcasing Jiangxiang Village (蒋巷村) — a model of rural revitalization in Changshu, Jiangsu Province, China. Built as a social practice project covering the village's history, honors, eco-tourism, agricultural products, and photography.

<div align="center">

**English** | [**中文简体**](README_ZH.md)

</div>

## Features

- **Promotional Video** — Curated video gallery with a custom Video.js player and embed code generator for WeChat mini-programs
- **Tour Map** — Interactive Leaflet map with 12 landmarks, category filtering, and popup cards
- **Village Introduction** — Scrollable history timeline (1966–2022), honors grid (16 village + 7 leader awards), leadership visits, and modern value infographics
- **Special Features** — Agricultural product showcase with packaging design concepts and a seasonal masonry photo gallery (spring/summer/autumn/winter × scenery/life/labor)

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Vue 3 (Composition API) |
| Build Tool | Vite 5 |
| UI Library | Element Plus |
| Styling | SCSS + Tailwind CSS |
| Map | Leaflet.js |
| Video | Video.js |
| State | Pinia |
| Routing | Vue Router (hash mode) |

## Project Structure

```
src/
├── assets/styles/       # Global SCSS
├── components/
│   ├── common/          # Navbar, Footer, Loading
│   ├── video/           # VideoPlayer, VideoGallery
│   ├── map/             # TourMap (Leaflet)
│   ├── village/         # VillageHistory, Honors, ModernValue
│   └── gallery/         # ProductShowcase, PhotoGallery
├── data/                # JS data files (history, honors, landmarks, products, photos, videos)
├── router/              # Vue Router config
├── stores/              # Pinia store
└── views/               # Page-level views (Home, PromotionalVideo, TourMapPage, VillageIntro, SpecialFeatures)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

#### Custom Port

Set the `PORT` environment variable (any platform) or pass Vite's `--port` flag:

```bash
# Environment variable (default 5173)
# macOS/Linux:  PORT=8080 npm run dev
# Windows (PS): $env:PORT=8080; npm run dev

# Or via Vite flag (works on all platforms)
npm run dev -- --port 8080
```

### Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

## Media Assets

### Video

The promotional video is stored at `public/videos/jiangxiang-social-practice.mp4` (174 MB). It is referenced in the hero section and the video gallery.

### Images

All images are stored locally in `public/images/` organized by category:

```
public/images/
├── hero/          # Hero background
├── history/       # Timeline images
├── landmarks/     # Map landmark images
├── photos/        # Photo gallery
├── posters/       # Video poster frames
└── products/      # Product & packaging images
```

Most images are currently SVG placeholders (green with "Jiangxiang Village" text). To replace with real photos:

1. Add your photos to `public/images/<category>/` with the same base filename but `.jpg` extension
2. Update the corresponding path in `src/data/*.js` (change `.svg` to `.jpg`)
3. A backup copy of all assets is in `resources/images/` (gitignored)

### Re-downloading Placeholder Images

The `download-images.ps1` script can be modified and re-run to download real images from any URL source.

## Content Sources

All textual content about Jiangxiang Village is based on publicly available sources, including:

- People's Daily Online (en.people.cn)
- Jiangsu Civil Affairs Bureau (mzt.jiangsu.gov.cn)
- Suzhou English Portal (english.suzhou.gov.cn)
- CCTV News (news.cntv.cn)
- China Daily (chinadaily.com.cn)
- Sina Finance (finance.sina.com.cn)
- CNR Jiangsu (js.cnr.cn)
- The Paper / Pengpai News (thepaper.cn)

## Key Facts (2022–2024)

| Metric | Value |
|--------|-------|
| Total output value | 1 billion yuan |
| Per capita disposable income | 62,500 yuan |
| Collective net assets | 360 million yuan |
| Green coverage | 60%+ |
| Households | 192 |
| Population | 875 |
| Area | 3 km² |
| National honors | ~100 |

## Deployment

The built `dist/` folder is static and can be deployed to any static hosting service:

- **Vercel**: `vercel deploy dist`
- **Netlify**: Drag-and-drop the `dist/` folder
- **GitHub Pages**: Push `dist/` contents to a `gh-pages` branch

## License

[GNU General Public License v3.0](LICENSE)
