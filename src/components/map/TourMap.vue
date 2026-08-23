<template>
  <div class="tour-map">
    <div ref="mapRef" class="tour-map__container"></div>

    <div class="tour-map__sidebar">
      <div class="tour-map__header">
        <h3>探索地标</h3>
        <p>{{ filteredLandmarks.length }} 个景点</p>
      </div>

      <div class="tour-map__categories">
        <button
          v-for="cat in categories"
          :key="cat.value"
          class="tour-map__category"
          :class="{ 'tour-map__category--active': activeCategory === cat.value }"
          @click="$emit('update:activeCategory', cat.value)"
        >
          <span
            v-if="cat.value !== 'all'"
            class="tour-map__category-shape"
            :style="{ backgroundColor: cat.color, clipPath: cat.shapePath }"
            aria-hidden="true"
          ></span>
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
          <img v-if="landmark.image" :src="landmark.image" :alt="landmark.imageAlt || landmark.name" loading="lazy" />
          <div v-else class="tour-map__item-placeholder" aria-hidden="true">
            <el-icon :size="24"><Picture /></el-icon>
          </div>
          <div class="tour-map__item-info">
            <h4>{{ landmark.name }}</h4>
            <span class="tour-map__tag">
              <span
                class="tour-map__tag-shape"
                :style="{
                  backgroundColor: categoryMeta(landmark.category).color,
                  clipPath: categoryMeta(landmark.category).shapePath
                }"
                aria-hidden="true"
              ></span>
              {{ categoryMeta(landmark.category).label }}
            </span>
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

const emit = defineEmits(['select-landmark', 'update:activeCategory'])

const mapRef = ref(null)
let map = null
let markersLayer = null

const categoryMeta = (category) => props.categories.find(item => item.value === category) || {
  label: category,
  color: '#1f6d3d',
  shape: 'circle',
  shapePath: 'circle(48% at 50% 50%)'
}

const createIcon = (category) => {
  const { color, shapePath, label } = categoryMeta(category)
  return L.divIcon({
    className: 'tour-map-marker',
    html: `
      <div
        class="tour-map-marker__shape"
        role="img"
        aria-label="${label}地标"
        style="clip-path:${shapePath};"
      >
        <span style="background:${color};clip-path:${shapePath};"></span>
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -20]
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

    const popupImage = landmark.image
      ? `<img src="${landmark.image}" alt="${landmark.imageAlt || landmark.name}" style="width:100%;height:120px;object-fit:cover;border-radius:8px;margin-bottom:8px;" />`
      : ''

    const popupContent = `
      <div style="width:240px;">
        ${popupImage}
        <h4 style="margin:0 0 4px;color:#1f6d3d;">${landmark.name}</h4>
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
    border: 1px solid rgba(31, 109, 61, 0.12);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 12px 30px rgba(31, 65, 43, 0.12);
    z-index: 1;
  }

  &__sidebar {
    background: #fff;
    border: 1px solid rgba(31, 109, 61, 0.1);
    border-radius: 16px;
    box-shadow: 0 12px 30px rgba(31, 65, 43, 0.09);
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
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
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

  &__category-shape {
    width: 10px;
    height: 10px;
    flex: 0 0 10px;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.15));
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
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;

    &:hover, &--active {
      background: #f0f9f4;
      border-color: #d7eadc;
      transform: translateX(2px);
    }

    img,
    .tour-map__item-placeholder {
      width: 64px;
      height: 64px;
      border-radius: 8px;
      flex-shrink: 0;
    }

    img {
      object-fit: cover;
    }
  }

  &__item-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
    background: #f3f4f6;
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
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.65rem;
    text-transform: uppercase;
    color: #1f6d3d;
    background: #dcf2e3;
    padding: 1px 6px;
    border-radius: 8px;
  }

  &__tag-shape {
    width: 8px;
    height: 8px;
    flex: 0 0 8px;
  }

  :global(.tour-map-marker) {
    border: 0;
    background: transparent;
  }

  :global(.tour-map-marker__shape) {
    position: relative;
    width: 34px;
    height: 34px;
    background: #fff;
    filter: drop-shadow(0 3px 4px rgba(20, 45, 29, 0.35));
    transition: transform 0.2s ease, filter 0.2s ease;
  }

  :global(.tour-map-marker__shape > span) {
    position: absolute;
    inset: 3px;
  }

  :global(.tour-map-marker:hover .tour-map-marker__shape) {
    transform: translateY(-2px) scale(1.08);
    filter: drop-shadow(0 5px 6px rgba(20, 45, 29, 0.4));
  }
}
</style>
