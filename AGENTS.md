# Development Workflow - Jiangxiang Village Website

## Project Setup Tasks

### Task 1: Initialize Vue Project
- [ ] Run `npm create vue@latest jiangxiang-village`
- [ ] Configure TypeScript (optional)
- [ ] Install dependencies: Element Plus, Tailwind CSS, Leaflet, Video.js, Pinia, Vue Router
- [ ] Setup Vite config
- [ ] Setup Tailwind CSS config
- [ ] Create folder structure

### Task 2: Setup Routing
- [ ] Create router configuration
- [ ] Define routes for all pages
- [ ] Implement navigation guards (if needed)

---

## Component Development Tasks

### Task 3: Common Components
- [ ] `Navbar.vue` - Responsive navigation with mobile menu
- [ ] `Footer.vue` - Contact info, links, copyright
- [ ] `Loading.vue` - Loading spinner/skeleton

### Task 4: Video Section
- [ ] `VideoPlayer.vue` - Custom video player wrapper
- [ ] `VideoGallery.vue` - Video grid with filtering
- [ ] Implement embed code generation for mini-programs

### Task 5: Map Section
- [ ] `TourMap.vue` - Leaflet map container
- [ ] `LandmarkPopup.vue` - Custom popup component
- [ ] Add custom markers and icons
- [ ] Implement route highlighting

### Task 6: Village Introduction
- [ ] `VillageHistory.vue` - Scrollable timeline
- [ ] `Honors.vue` - Awards grid with modals
- [ ] `ModernValue.vue` - Infographic section

### Task 7: Special Features
- [ ] `ProductShowcase.vue` - Product cards with packaging
- [ ] `PhotoGallery.vue` - Masonry gallery with lightbox
- [ ] Implement tab filtering for seasons/themes

---

## Data Preparation Tasks

### Task 8: Content Data
- [ ] Create `history.js` - Village history timeline data
- [ ] Create `honors.js` - Awards and recognition data
- [ ] Create `landmarks.js` - Map points with coordinates
- [ ] Create `products.js` - Agricultural products catalog
- [ ] Create `photos.js` - Photo gallery metadata

### Task 9: Media Assets
- [ ] Collect/record promotional videos
- [ ] Photograph landmarks and scenery
- [ ] Design product packaging mockups
- [ ] Organize photos by season/theme

---

## Integration Tasks

### Task 10: State Management
- [ ] Create Pinia store for village data
- [ ] Implement data fetching logic
- [ ] Add caching strategy

### Task 11: Responsive Design
- [ ] Mobile layout optimization
- [ ] Tablet breakpoint adjustments
- [ ] Desktop enhancement

### Task 12: Performance
- [ ] Implement lazy loading for images
- [ ] Add video lazy loading
- [ ] Optimize bundle size
- [ ] Configure code splitting

---

## Testing & Polish

### Task 13: Cross-browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

### Task 14: Final Polish
- [ ] SEO meta tags
- [ ] Open Graph tags
- [ ] Accessibility (a11y) review
- [ ] Loading states
- [ ] Error handling

---

## Development Commands

```bash
# Setup
npm create vue@latest .
npm install
npm install element-plus @element-plus/icons-vue
npm install -D tailwindcss postcss autoprefixer
npm install leaflet video.js pinia vue-router

# Development
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## Git Workflow

1. Create feature branch: `git checkout -b feature/video-section`
2. Commit changes: `git commit -m "feat: add video player component"`
3. Push to remote: `git push origin feature/video-section`
4. Create PR for review
5. Merge to main after approval

## File Naming Conventions

- Components: PascalCase (`VideoPlayer.vue`)
- Views: PascalCase (`Home.vue`)
- Utils: camelCase (`formatDate.js`)
- Constants: UPPER_SNAKE_CASE (`API_URL.js`)
- Styles: kebab-case (`video-player.scss`)
