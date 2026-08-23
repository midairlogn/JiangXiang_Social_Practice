<template>
  <div class="features-page">
    <section class="features-page__header">
      <div class="container">
        <h1 class="section-title">特色展示</h1>
        <p class="section-subtitle">蒋巷特色农产品与四季美景摄影</p>
        <p class="features-page__intro">
          蒋巷村的特色，既写在水网、田园与四季草木之中，也体现在农业生产、乡村产业和村民的日常生活里。本页以产品与影像为线索，串联生态、劳动和公共文化空间，呈现江南村庄在传承中不断生长的当代面貌。
        </p>
      </div>
    </section>

    <section class="features-page__content section-padding">
      <div class="container">
        <el-tabs v-model="activeTab" class="features-page__tabs">
          <el-tab-pane label="农产品展示" name="products">
            <h2 class="section-title">产品展示</h2>
            <p class="section-subtitle">蒋巷相关产品与原创包装策划</p>
            <ProductShowcase
              :products="store.allProducts"
              :categories="store.productCategoryList"
              :filtered="filteredProducts"
              v-model:active="productCategory"
            />
          </el-tab-pane>

          <el-tab-pane label="美景摄影" name="photos">
            <h2 class="section-title">四季美景摄影</h2>
            <p class="section-subtitle">按四季与主题分类，呈现生活、景致与劳动之美</p>
            <PhotoGallery
              :photos="store.allPhotos"
              :themes="store.photoThemeList"
              :filtered="filteredPhotos"
              v-model:active="photoTheme"
            />
          </el-tab-pane>
        </el-tabs>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVillageStore } from '@/stores/village'
import ProductShowcase from '@/components/gallery/ProductShowcase.vue'
import PhotoGallery from '@/components/gallery/PhotoGallery.vue'

const store = useVillageStore()
const activeTab = ref('products')
const productCategory = ref('all')
const photoTheme = ref('all')

const filteredProducts = computed(() => {
  if (productCategory.value === 'all') return store.allProducts
  return store.allProducts.filter(p => p.category === productCategory.value)
})

const filteredPhotos = computed(() => {
  if (photoTheme.value === 'all') return store.allPhotos
  return store.allPhotos.filter(p => p.season === photoTheme.value || p.theme === photoTheme.value)
})
</script>

<style scoped lang="scss">
.features-page {
  &__header {
    background: linear-gradient(135deg, #1f6d3d, #16482b);
    color: #fff;
    padding: calc(64px + 3rem) 0 2rem;

    .section-title { color: #fff; }
    .section-subtitle {
      color: rgba(255, 255, 255, 0.75);
      margin-bottom: 1rem;
    }
  }

  &__intro {
    max-width: 780px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.88);
    font-size: 0.95rem;
    line-height: 1.85;
    text-align: center;

    @media (max-width: 640px) {
      font-size: 0.9rem;
      line-height: 1.75;
      text-align: left;
    }
  }

  &__tabs {
    :deep(.el-tabs__header) {
      margin-bottom: 2.5rem;
    }

    :deep(.el-tabs__nav-wrap)::after {
      display: none;
    }

    :deep(.el-tabs__nav-wrap) {
      display: flex;
      justify-content: center;
    }

    :deep(.el-tabs__nav-scroll) {
      overflow: visible;
    }

    :deep(.el-tabs__nav) {
      display: inline-flex !important;
      gap: 0.5rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    :deep(.el-tabs__active-bar) {
      display: none;
    }

    :deep(.el-tabs__item) {
      height: auto;
      line-height: 1.5;
      padding: 0.6rem 1.5rem !important;
      margin: 0;
      border: 1px solid #d1d5db !important;
      border-radius: 999px !important;
      background: #fff;
      color: #6b7280;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.25s;

      &:hover {
        border-color: #88cf9f;
        color: #1f6d3d;
      }

      &.is-active {
        background: #1f6d3d;
        border-color: #1f6d3d;
        color: #fff;
        box-shadow: 0 4px 12px rgba(31, 109, 61, 0.25);
      }
    }
  }
}
</style>
