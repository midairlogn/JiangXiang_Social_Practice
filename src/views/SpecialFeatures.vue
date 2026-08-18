<template>
  <div class="features-page" style="padding-top: 64px;">
    <section class="features-page__header">
      <div class="container">
        <h1 class="section-title">Special Features</h1>
        <p class="section-subtitle">Agricultural products & seasonal photography gallery</p>
      </div>
    </section>

    <section class="features-page__content section-padding">
      <div class="container">
        <el-tabs v-model="activeTab" class="features-page__tabs">
          <el-tab-pane label="Agricultural Products" name="products">
            <h2 class="section-title">Product Showcase</h2>
            <p class="section-subtitle">Featuring packaging design concepts for Jiangxiang specialty products</p>
            <ProductShowcase
              :products="store.allProducts"
              :categories="store.productCategoryList"
              :filtered="filteredProducts"
              v-model:active="productCategory"
            />
          </el-tab-pane>

          <el-tab-pane label="Photography Gallery" name="photos">
            <h2 class="section-title">Scenery Photography</h2>
            <p class="section-subtitle">Seasons & themes — people's life, scenery, labor, and the changing countryside</p>
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
