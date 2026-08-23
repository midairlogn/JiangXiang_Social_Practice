# Development Guide - Jiangxiang Village Website

## Project Status: Implemented

All core features are built and the project compiles successfully (`npm run build`).

### Completed

- [x] Vue 3 + Vite project initialized with all dependencies
- [x] Routing configured (hash mode, 5 routes)
- [x] Pinia store for village data
- [x] Common components: `Navbar.vue`, `Footer.vue`, `Loading.vue`
- [x] Video section: `VideoPlayer.vue` (Video.js), `VideoGallery.vue` with mini-program embed code generator
- [x] Map section: `TourMap.vue` (Leaflet, 12 landmarks, category filter, fly-to, popups)
- [x] Village intro: `VillageHistory.vue` (timeline), `Honors.vue` (grid + tabs + modals), `ModernValue.vue` (stats + 5-stage path + value cards)
- [x] Special features: `ProductShowcase.vue` (6 products, truthful packaging-design placeholders), `PhotoGallery.vue` (9 retained photos, seasonal filters + lightbox)
- [x] Data files: `history.js`, `honors.js`, `landmarks.js`, `products.js`, `photos.js`, `videos.js`
- [x] Media inventory audited; unrelated, duplicate, and misleading assets removed
- [x] Broken local-video references removed; verified external video source retained
- [x] Per-file provenance and copyright review recorded in `MEDIA_SOURCES.md`
- [x] `resources/` added to `.gitignore`
- [x] `README.md` and `README_ZH.md` written
- [x] Full UI and content localization to Chinese
- [x] Team name "六朝松小纵队" integrated (photo credits, footer, hero tagline)
- [x] Removed redundant bilingual fields (titleCN/nameCN/leaderCN), Chinese is primary

---

## Remaining TODOs

### Media Provenance

- [ ] Obtain explicit reuse permission for retained reporting images marked in `MEDIA_SOURCES.md`
- [ ] Replace location-pending images with team-owned or formally authorized Jiangxiang Village photos
- [ ] Replace generic product illustrations with team-owned product photography
- [ ] Record the source URL, credit, permission status, and intended page for every new media file

### Content Enhancements
- [ ] Add more verified official video pages only when their source and availability have been checked
- [ ] Replace landmark coordinates in `src/data/landmarks.js` with verified GPS data
- [ ] Add actual product packaging design mockups
- [ ] Collect real seasonal photography (spring/summer/autumn/winter)

### Performance
- [ ] Compress images to WebP format
- [ ] Add `loading="lazy"` verification on all `<img>` tags
- [ ] Consider dynamic import for Element Plus icons to reduce bundle size
- [ ] Add PWA service worker for offline support

### Polish
- [ ] Cross-browser testing (Chrome, Firefox, Safari, mobile)
- [ ] Accessibility (a11y) review — ARIA labels, keyboard nav, contrast
- [ ] Add error boundary component
- [ ] Verify Open Graph meta tags render correctly

---

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (default http://localhost:5173)
npm run dev -- --port 8080   # Start on a custom port (or set PORT env var)
npm run build        # Production build → dist/
npm run preview      # Preview production build
```

## Project Structure

```
src/
├── assets/styles/        # main.scss (global styles + Tailwind)
├── components/
│   ├── common/           # Navbar, Footer, Loading
│   ├── video/            # VideoPlayer, VideoGallery
│   ├── map/              # TourMap (Leaflet)
│   ├── village/          # VillageHistory, Honors, ModernValue
│   └── gallery/          # ProductShowcase, PhotoGallery
├── data/                 # history, honors, landmarks, products, photos, videos
├── router/               # index.js (5 routes, lazy-loaded)
├── stores/               # village.js (Pinia)
└── views/                # Home, PromotionalVideo, TourMapPage, VillageIntro, SpecialFeatures
```

## Conventions

- **Components**: PascalCase (`VideoPlayer.vue`)
- **Views**: PascalCase (`Home.vue`)
- **Data files**: camelCase (`history.js`)
- **Styles**: scoped SCSS in `.vue` files, kebab-case class names
- **Image paths**: `/images/<category>/<name>.<ext>` (relative to `public/`)
- **Content language**: Chinese (中文) for all UI text and data content
- **Code identifiers**: English (variable names, CSS classes, component names)
- **Commit messages**: English, conventional commits (`feat:`, `fix:`, `docs:`, `chore:`)
- **Team name**: 六朝松小纵队 (used in photo credits, footer copyright, hero tagline)

## Git Workflow

```bash
git checkout -b feature/<name>     # Create feature branch
git add <files>                    # Stage changes
git commit -m "feat: <description>"  # Commit
git push origin feature/<name>     # Push
# Create PR for review
```
