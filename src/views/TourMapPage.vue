<template>
  <div class="map-page">
    <section class="map-page__header">
      <div class="container">
        <h1 class="section-title">导览地图</h1>
        <p class="section-subtitle">在交互式地图上探索蒋巷村12个地标景点</p>
      </div>
    </section>

    <section class="map-page__content">
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

    <section class="map-page__legend">
      <div class="container">
        <div class="map-page__legend-card">
          <div class="map-page__legend-heading">
            <div>
              <span>地图识别</span>
              <h3>地标图例</h3>
            </div>
            <p>颜色、形状与文字共同区分类别，图例与地图标记完全对应。</p>
          </div>
          <div class="map-page__legend-grid">
            <div v-for="cat in legendCategories" :key="cat.value" class="map-page__legend-item">
              <span class="map-page__legend-symbol" :style="{ clipPath: cat.shapePath }" aria-hidden="true">
                <span :style="{ backgroundColor: cat.color, clipPath: cat.shapePath }"></span>
              </span>
              <span>{{ cat.label }}</span>
            </div>
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

const legendCategories = computed(() => store.landmarkCategoryList.filter(category => category.value !== 'all'))
</script>

<style scoped lang="scss">
.map-page {
  &__header {
    background-color: #16482b;
    background-image: var(--bg-dark-green-ink);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    padding: calc(64px + 3rem) 0 2rem;

    .section-title { color: #fff; }
    .section-subtitle { color: rgba(255, 255, 255, 0.7); }
  }

  &__content {
    padding: 2.5rem 0;
    background-color: #f8fbf9;
    background-image: var(--bg-paper-ink);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__legend {
    padding: 0 0 4rem;
    background-color: #f8fbf9;
    background-image: var(--bg-paper-ink);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__legend-card {
    padding: 1.5rem;
    border: 1px solid rgba(31, 109, 61, 0.12);
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 10px 28px rgba(31, 65, 43, 0.08);
  }

  &__legend-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;

    span {
      color: #2d8a4f;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.16em;
    }

    h3 {
      margin-top: 0.2rem;
      color: #1f6d3d;
      font-size: 1.35rem;
    }

    p {
      max-width: 440px;
      color: #6b7280;
      font-size: 0.85rem;
      line-height: 1.65;
      text-align: right;
    }

    @media (max-width: 640px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 0.5rem;

      p {
        text-align: left;
      }
    }
  }

  &__legend-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.75rem;
    margin-top: 1.5rem;
  }

  &__legend-item {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    min-height: 48px;
    padding: 0.65rem 0.8rem;
    border: 1px solid #e5eee8;
    border-radius: 10px;
    background: #fbfdfb;
    font-size: 0.85rem;
    color: #4b5563;
    transition: border-color 0.2s, background 0.2s, transform 0.2s;

    &:hover {
      border-color: #b7d8c2;
      background: #f3faf5;
      transform: translateY(-1px);
    }
  }

  &__legend-symbol {
    position: relative;
    width: 25px;
    height: 25px;
    flex: 0 0 25px;
    background: #fff;
    filter: drop-shadow(0 2px 2px rgba(20, 45, 29, 0.22));

    > span {
      position: absolute;
      inset: 3px;
    }
  }

  @media (max-width: 480px) {
    &__content {
      padding: 1.5rem 0;
    }

    &__legend-card {
      padding: 1rem;
    }

    &__legend-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.55rem;
    }

    &__legend-item {
      min-height: 44px;
      padding: 0.55rem 0.6rem;
      font-size: 0.78rem;
    }
  }
}
</style>
