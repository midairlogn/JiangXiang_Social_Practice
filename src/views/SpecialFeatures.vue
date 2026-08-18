<template>
  <div class="features-page" style="padding-top: 64px;">
    <section class="features-page__header">
      <div class="container">
        <h1 class="section-title">特色展示</h1>
        <p class="section-subtitle">蒋巷特色农产品与四季美景摄影</p>
      </div>
    </section>

    <section class="features-page__content section-padding">
      <div class="container">
        <el-tabs v-model="activeTab" class="features-page__tabs">
          <el-tab-pane label="农产品展示" name="products">
            <h2 class="section-title">产品展示</h2>
            <p class="section-subtitle">展示蒋巷特色农产品包装视觉方案</p>
            <ProductShowcase
              :products="store.allProducts"
              :categories="store.productCategoryList"
              :filtered="filteredProducts"
              v-model:active="productCategory"
            />
          </el-tab-pane>

          <el-tab-pane label="美景摄影" name="photos">
            <h2 class="section-title">美景摄影图</h2>
            <p class="section-subtitle">分四季与主题——人民生活、景致、劳动，层次丰富</p>
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
    padding: 3rem 0 2rem;

    .section-title { color: #fff; }
    .section-subtitle { color: rgba(255, 255, 255, 0.7); }
  }

  &__tabs {
    :deep(.el-tabs__item) {
      font-size: 1rem;
      font-weight: 500;
    }
  }
}
</style>
