# Jiangxiang Village Social Practice Website

A responsive web application showcasing Jiangxiang Village (蒋巷村) — a model of rural revitalization in Changshu, Jiangsu Province, China. Built as a social practice project covering the village's history, honors, eco-tourism, agricultural products, and photography.

<div align="center">

**English** | [**中文简体**](README_ZH.md)

</div>

## Features

- **Featured Video** — Verified official-media programme links, with source labels and poster attribution
- **Tour Map** — Interactive Leaflet map with 12 landmarks, category filtering, and popup cards
- **Village Introduction** — Scrollable history timeline (1966–2024), honors grid (17 village + 7 leader awards), leadership visits, and modern value infographics
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

The site will be available at `http://localhost:5162`.

#### Custom Port

Set the `PORT` environment variable (any platform) or pass Vite's `--port` flag:

```bash
# Environment variable (default 5162)
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

The repository does not contain a local promotional video. The video page links to a verified CCTV program page and does not download or re-host the copyrighted program.

### Images

All images are stored locally in `public/images/` organized by category:

```
public/images/
├── hero/          # Hero background
├── history/       # Timeline images
├── landmarks/     # Map landmark images
├── photos/        # Photo gallery
└── products/      # Product images
```

The media inventory was audited in August 2026. Clearly unrelated images, misleading packaging images, duplicate physical files, and broken video references were removed.

See [MEDIA_SOURCES.md](MEDIA_SOURCES.md) for per-file provenance and copyright status. No online image should be added to the repository without recording its source and reuse status there.

## Content Sources

All textual content about Jiangxiang Village is based on publicly available sources, including:

- People's Daily (people.com.cn)
- Jiangsu Civil Affairs Bureau (mzt.jiangsu.gov.cn)
- Suzhou Municipal Government (suzhou.gov.cn)
- CCTV (cctv.com)
- China Daily (chinadaily.com.cn)
- Sina Finance (finance.sina.com.cn)
- CNR (cnr.cn)
- The Paper (thepaper.cn)

## Key Facts (2024)

| Metric | Value |
|--------|-------|
| Total output value | 1 billion yuan |
| Per capita disposable income | 68,000 yuan |
| Collective net assets | 360 million yuan |
| Green coverage | 60%+ |
| Households | 200 |
| Population | 878 |
| Area | 3 km² |
| National honors | ~100 |

## Deployment

The built `dist/` folder is static and can be deployed to any static hosting service:

- **Vercel**: `vercel deploy dist`
- **Netlify**: Drag-and-drop the `dist/` folder
- **GitHub Pages**: Push `dist/` contents to a `gh-pages` branch

## License

[GNU General Public License v3.0](LICENSE)
