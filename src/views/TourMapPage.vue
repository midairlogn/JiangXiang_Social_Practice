<template>
  <div class="map-page" style="padding-top: 64px;">
    <section class="map-page__header">
      <div class="container">
        <h1 class="section-title">Tour Map</h1>
        <p class="section-subtitle">Explore Jiangxiang Village's 12 landmarks on an interactive map</p>
      </div>
    </section>

    <section class="map-page__content" style="padding: 2rem 0;">
      <div class="container">
        <TourMap
          :landmarks="store.allLandmarks"
          :categories="store.landmarkCategoryList"
          :filtered-landmarks="filteredLandmarks"
          v-model:active-category="activeCategory"
          :selected-landmark="selectedLandmark"
          @select-landmark="selectedLandmark = $event"
        />
      </div>
    </section>

    <section class="map-page__legend" style="padding: 2rem 0 4rem;">
      <div class="container">
        <h3 class="section-title" style="font-size: 1.5rem;">Landmark Legend</h3>
        <div class="map-page__legend-grid">
          <div v-for="cat in categoryColors" :key="cat.value" class="map-page__legend-item">
            <span class="map-page__legend-dot" :style="{ background: cat.color }"></span>
            {{ cat.label }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVillageStore } from '@/stores/village'
import TourMap from '@/components/map/TourMap.vue'

const store = useVillageStore()
const activeCategory = ref('all')
const selectedLandmark = ref(null)

const filteredLandmarks = computed(() => {
  if (activeCategory.value === 'all') return store.allLandmarks
  return store.allLandmarks.filter(l => l.category === activeCategory.value)
})

const categoryColors = [
  { value: 'nature', label: 'Nature & Ecology', color: '#2d8a4f' },
  { value: 'culture', label: 'Culture & History', color: '#d4a017' },
  { value: 'agriculture', label: 'Agriculture', color: '#8b5e3c' },
  { value: 'residential', label: 'Residential', color: '#3b82f6' },
  { value: 'industry', label: 'Industry', color: '#6b7280' },
  { value: 'entertainment', label: 'Entertainment', color: '#ec4899' },
  { value: 'accommodation', label: 'Accommodation', color: '#a855f7' },
  { value: 'welfare', label: 'Welfare', color: '#f59e0b' }
]
</script>

<style scoped lang="scss">
.map-page {
  &__header {
    background: linear-gradient(135deg, #1f6d3d, #16482b);
    color: #fff;
    padding: 3rem 0 2rem;

    .section-title { color: #fff; }
    .section-subtitle { color: rgba(255, 255, 255, 0.7); }
  }

  &__legend-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  }

  &__legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: #4b5563;
  }

  &__legend-dot {
    width: 16px;
    height: 16px;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    border: 2px solid #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
}
</style>
