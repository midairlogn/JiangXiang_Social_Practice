# Jiangxiang Village Social Practice Website - Project Plan

## Project Overview

A responsive web application showcasing Jiangxiang Village's culture, history, and attractions through multimedia content and interactive features.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Vue 3 + Composition API |
| Build Tool | Vite |
| UI Library | Element Plus |
| Styling | SCSS + Tailwind CSS |
| Map Integration | Leaflet.js |
| Video | Video.js |
| State Management | Pinia |
| Router | Vue Router |
| Deployment | Vercel / Netlify |

## Project Structure

```
jiangxiang-village/
├── public/
│   ├── videos/              # Promotional videos
│   ├── images/              # Static images
│   │   ├── seasons/         # Spring, Summer, Autumn, Winter
│   │   ├── products/        # Agricultural products
│   │   ├── landmarks/       # Map markers
│   │   └── honors/          # Awards and honors
│   └── models/              # 3D models (if any)
├── src/
│   ├── assets/
│   │   ├── styles/
│   │   │   ├── main.scss
│   │   │   └── variables.scss
│   │   └── fonts/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.vue
│   │   │   ├── Footer.vue
│   │   │   └── Loading.vue
│   │   ├── video/
│   │   │   ├── VideoPlayer.vue
│   │   │   └── VideoGallery.vue
│   │   ├── map/
│   │   │   ├── TourMap.vue
│   │   │   └── LandmarkPopup.vue
│   │   ├── village/
│   │   │   ├── VillageHistory.vue
│   │   │   ├── Honors.vue
│   │   │   └── ModernValue.vue
│   │   └── gallery/
│   │       ├── PhotoGallery.vue
│   │       └── ProductShowcase.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── PromotionalVideo.vue
│   │   ├── TourMap.vue
│   │   ├── VillageIntro.vue
│   │   ├── SpecialFeatures.vue
│   │   └── Contact.vue
│   ├── router/
│   │   └── index.js
│   ├── stores/
│   │   └── village.js
│   ├── data/
│   │   ├── history.js
│   │   ├── honors.js
│   │   ├── landmarks.js
│   │   ├── products.js
│   │   └── photos.js
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Page Architecture

### 1. Home Page
- Hero section with background video
- Quick navigation cards
- Featured content preview

### 2. Promotional Video Section
- Video player with playlist
- Category filtering
- Share functionality (embed code for mini-programs)

### 3. Tour Map Section
- Interactive Leaflet map
- Custom markers for landmarks
- Popup cards with images and descriptions
- Route planning feature

### 4. Village Introduction
- **History Timeline**: Scrollable timeline component
- **Honors Gallery**: Grid display with modal details
- **Modern Value**: Infographic-style presentation

### 5. Special Features
- **Agricultural Products**:
  - Product cards with packaging design mockups
  - 360° product viewer (optional)
  - Order/inquiry button
- **Photography Gallery**:
  - Tab-based organization (seasons/themes)
  - Lightbox viewer
  - Masonry layout

## Data Structure

### Landmarks
```javascript
{
  id: 1,
  name: "Jiangxiang Village Entrance",
  coordinates: [lat, lng],
  description: "...",
  image: "/images/landmarks/entrance.jpg",
  category: "landmark"
}
```

### Products
```javascript
{
  id: 1,
  name: "Jiangxiang Rice",
  category: "grain",
  description: "...",
  images: ["/images/products/rice-1.jpg"],
  packagingDesign: "/images/products/rice-packaging.jpg"
}
```

### Photos
```javascript
{
  id: 1,
  src: "/images/seasons/spring-1.jpg",
  title: "Spring Blossoms",
  season: "spring",
  theme: "scenery",
  photographer: "..."
}
```

## Responsive Design

| Device | Breakpoint | Layout |
|--------|------------|--------|
| Mobile | < 768px | Single column, hamburger menu |
| Tablet | 768px - 1024px | Two columns |
| Desktop | > 1024px | Full layout with sidebar |

## Performance Optimization

- Lazy loading for images and videos
- Code splitting by route
- Image compression and WebP format
- CDN for static assets
- Service worker for offline support (PWA)

## Deployment

1. Build: `npm run build`
2. Deploy to Vercel/Netlify
3. Configure custom domain
4. Set up analytics (optional)

## Timeline

| Phase | Duration | Tasks |
|-------|----------|-------|
| Setup | 3 days | Project init, routing, layout |
| Video Section | 4 days | Player, gallery, embed |
| Map Section | 5 days | Leaflet integration, markers |
| Village Intro | 4 days | History, honors, value |
| Special Features | 6 days | Products, photography |
| Polish | 3 days | Responsive, optimization |
| **Total** | **25 days** | |
