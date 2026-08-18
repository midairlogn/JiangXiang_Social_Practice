<template>
  <div class="tour-map">
    <div ref="mapRef" class="tour-map__container"></div>

    <div class="tour-map__sidebar">
      <div class="tour-map__header">
        <h3>Explore Landmarks</h3>
        <p>{{ filteredLandmarks.length }} locations found</p>
      </div>

      <div class="tour-map__categories">
        <button
          v-for="cat in categories"
          :key="cat.value"
          class="tour-map__category"
          :class="{ 'tour-map__category--active': activeCategory === cat.value }"
          @click="$emit('update:activeCategory', cat.value)"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="tour-map__list">
        <div
          v-for="landmark in filteredLandmarks"
          :key="landmark.id"
          class="tour-map__item"
          :class="{ 'tour-map__item--active': selectedLandmark?.id === landmark.id }"
          @click="$emit('select-landmark', landmark)"
        >
          <img :src="landmark.image" :alt="landmark.name" loading="lazy" />
          <div class="tour-map__item-info">
            <h4>{{ landmark.name }}</h4>
            <p>{{ landmark.nameCN }}</p>
            <span class="tour-map__tag">{{ landmark.category }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import L from 'leaflet'

const props = defineProps({
  landmarks: { type: Array, required: true },
  center: { type: Array, default: () => [31.5686, 121.0492] },
  zoom: { type: Number, default: 15 },
  categories: { type: Array, required: true },
  activeCategory: { type: String, default: 'all' },
  filteredLandmarks: { type: Array, required: true },
  selectedLandmark: { type: Object, default: null }
})

const emit = defineEmits(['select-landmark'])

const mapRef = ref(null)
let map = null
let markersLayer = null

const createIcon = (category) => {
  const colors = {
    nature: '#2d8a4f',
    culture: '#d4a017',
    agriculture: '#8b5e3c',
    residential: '#3b82f6',
    industry: '#6b7280',
    entertainment: '#ec4899',
    accommodation: '#a855f7',
    welfare: '#f59e0b'
  }
  const color = colors[category] || '#1f6d3d'
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background:${color};width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;"><span style="transform:rotate(45deg);color:#fff;font-size:12px;">📍</span></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28]
  })
}

const initMap = () => {
  if (!mapRef.value) return

  map = L.map(mapRef.value, {
    center: props.center,
    zoom: props.zoom,
    scrollWheelZoom: true
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map)

  markersLayer = L.layerGroup().addTo(map)
  addMarkers()
}

const addMarkers = () => {
  if (!markersLayer || !map) return
  markersLayer.clearLayers()

  props.filteredLandmarks.forEach((landmark) => {
    const marker = L.marker(landmark.coordinates, {
      icon: createIcon(landmark.category),
      title: landmark.name
    })

    const popupContent = `
      <div style="width:240px;">
        <img src="${landmark.image}" alt="${landmark.name}" style="width:100%;height:120px;object-fit:cover;border-radius:8px;margin-bottom:8px;" />
        <h4 style="margin:0 0 4px;color:#1f6d3d;">${landmark.name}</h4>
        <p style="margin:0 0 4px;font-size:0.85rem;color:#6b7280;">${landmark.nameCN}</p>
        <p style="margin:0 0 8px;font-size:0.8rem;color:#4b5563;line-height:1.4;">${landmark.desc.substring(0, 100)}...</p>
        <p style="margin:0;font-size:0.75rem;color:#9ca3af;">${landmark.visiting}</p>
      </div>
    `

    marker.bindPopup(popupContent, { maxWidth: 280 })
    marker.on('click', () => {
      emit('select-landmark', landmark)
    })
    marker.addTo(markersLayer)
  })
}

const flyToLandmark = (landmark) => {
  if (map && landmark) {
    map.flyTo(landmark.coordinates, 17, { duration: 1.2 })
    setTimeout(() => {
      markersLayer.eachLayer((layer) => {
        if (layer.getLatLng().lat === landmark.coordinates[0] &&
            layer.getLatLng().lng === landmark.coordinates[1]) {
          layer.openPopup()
        }
      })
    }, 1300)
  }
}

onMounted(async () => {
  await nextTick()
  initMap()
  setTimeout(() => {
    if (map) map.invalidateSize()
  }, 100)
})

onBeforeUnmount(() => {
  if (map) {
    map.remove()
    map = null
  }
})

watch(() => props.filteredLandmarks, () => {
  addMarkers()
}, { deep: true })

watch(() => props.selectedLandmark, (newVal) => {
  if (newVal) flyToLandmark(newVal)
})
</script>

<style scoped lang="scss">
.tour-map {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 1.5rem;
  height: 600px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 400px auto;
    height: auto;
  }

  &__container {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  &__sidebar {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 900px) {
      max-height: 500px;
    }
  }

  &__header {
    padding: 1rem 1.25rem;
    border-bottom: 1px solid #f0f0f0;

    h3 {
      color: #1f6d3d;
      font-size: 1.15rem;
    }

    p {
      font-size: 0.8rem;
      color: #9ca3af;
      margin-top: 2px;
    }
  }

  &__categories {
    display: flex;
    gap: 0.4rem;
    padding: 0.75rem 1.25rem;
    flex-wrap: wrap;
    border-bottom: 1px solid #f0f0f0;
  }

  &__category {
    padding: 4px 10px;
    border: 1px solid #e5e7eb;
    background: #f9fafb;
    border-radius: 16px;
    font-size: 0.75rem;
    cursor: pointer;
    transition: all 0.2s;
    color: #6b7280;

    &:hover {
      border-color: #88cf9f;
      color: #1f6d3d;
    }

    &--active {
      background: #1f6d3d;
      color: #fff;
      border-color: #1f6d3d;
    }
  }

  &__list {
    overflow-y: auto;
    flex: 1;
    padding: 0.5rem;
  }

  &__item {
    display: flex;
    gap: 0.75rem;
    padding: 0.6rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover, &--active {
      background: #f0f9f4;
    }

    img {
      width: 64px;
      height: 64px;
      object-fit: cover;
      border-radius: 8px;
      flex-shrink: 0;
    }
  }

  &__item-info {
    h4 {
      font-size: 0.9rem;
      color: #333;
      margin-bottom: 2px;
    }

    p {
      font-size: 0.75rem;
      color: #9ca3af;
      margin-bottom: 4px;
    }
  }

  &__tag {
    display: inline-block;
    font-size: 0.65rem;
    text-transform: uppercase;
    color: #1f6d3d;
    background: #dcf2e3;
    padding: 1px 6px;
    border-radius: 8px;
  }
}
</style>
