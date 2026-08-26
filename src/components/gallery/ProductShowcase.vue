<template>
  <div class="product-showcase">
    <div class="product-showcase__categories">
      <button
        v-for="cat in categories"
        :key="cat.value"
        class="product-showcase__category"
        :class="{ 'product-showcase__category--active': active === cat.value }"
        @click="$emit('update:active', cat.value)"
      >
        {{ cat.label }}
      </button>
    </div>

    <p v-if="activeCategory?.description" class="product-showcase__category-description">
      {{ activeCategory.description }}
    </p>

    <div class="product-showcase__grid">
      <div
        v-for="product in filtered"
        :key="product.id"
        class="product-showcase__card"
        @click="handleSelect(product)"
      >
        <div class="product-showcase__image">
          <img :src="product.images[0]" :alt="product.imageAlts?.[0] || product.imageAlt || product.name" loading="lazy" />
          <span class="product-showcase__badge">{{ product.badge }}</span>
        </div>
        <div class="product-showcase__body">
          <h4>{{ product.name }}</h4>
          <div class="product-showcase__price">
            {{ product.price }} <span>{{ product.unit }}</span>
          </div>
          <div class="product-showcase__features">
            <span v-for="feature in product.features.slice(0, 2)" :key="feature" class="product-showcase__feature">
              {{ feature }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <el-drawer v-model="drawerVisible" :title="selectedProduct?.name" size="min(560px, 92vw)">
      <div v-if="selectedProduct" class="product-showcase__detail">
        <el-carousel :interval="4000" height="300px" class="product-showcase__carousel">
          <el-carousel-item v-for="(img, index) in selectedProduct.images" :key="img">
            <img :src="img" :alt="selectedProduct.imageAlts?.[index] || selectedProduct.imageAlt || selectedProduct.name" class="product-showcase__carousel-img" />
          </el-carousel-item>
        </el-carousel>

        <div class="product-showcase__detail-body">
          <h2>{{ selectedProduct.name }}</h2>
          <div class="product-showcase__detail-price">
            <span class="product-showcase__detail-amount">{{ selectedProduct.price }}</span>
            <span>{{ selectedProduct.unit }}</span>
          </div>
          <span class="product-showcase__badge product-showcase__badge--lg">{{ selectedProduct.badge }}</span>

          <p class="product-showcase__detail-desc">{{ selectedProduct.desc }}</p>
          <p class="product-showcase__media-note">{{ selectedProduct.mediaNote }}</p>

          <h4>产品特点</h4>
          <div class="product-showcase__detail-features">
            <span v-for="feature in selectedProduct.features" :key="feature" class="product-showcase__feature product-showcase__feature--lg">
              <el-icon><Check /></el-icon> {{ feature }}
            </span>
          </div>

          <div class="product-showcase__packaging">
            <h4>包装视觉方案</h4>
            <div class="product-showcase__packaging-placeholder">
              <span aria-hidden="true">🎨</span>
              <div>
                <strong>包装视觉方案</strong>
                <p>{{ selectedProduct.packagingPlan }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Check } from '@element-plus/icons-vue'

const props = defineProps({
  products: { type: Array, required: true },
  categories: { type: Array, required: true },
  active: { type: String, default: 'all' },
  filtered: { type: Array, required: true }
})

const emit = defineEmits(['update:active', 'select'])

const drawerVisible = ref(false)
const selectedProduct = ref(null)
const activeCategory = computed(() => props.categories.find(category => category.value === props.active))

const handleSelect = (product) => {
  selectedProduct.value = product
  drawerVisible.value = true
  emit('select', product)
}
</script>

<style scoped lang="scss">
.product-showcase {
  &__categories {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
  }

  &__category-description {
    max-width: 760px;
    margin: -0.75rem auto 2rem;
    padding: 0.9rem 1.1rem;
    border-left: 3px solid #88cf9f;
    border-radius: 0 10px 10px 0;
    background: #f3fbf5;
    color: #4b5563;
    font-size: 0.9rem;
    line-height: 1.75;
  }

  &__category {
    padding: 0.5rem 1.25rem;
    border: 1px solid #e5e7eb;
    background: #fff;
    border-radius: 24px;
    font-size: 0.9rem;
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

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.5rem;
  }

  &__card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }
  }

  &__image {
    position: relative;
    aspect-ratio: 4 / 3;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__badge {
    position: absolute;
    top: 8px;
    left: 8px;
    background: rgba(31, 109, 61, 0.9);
    color: #fff;
    font-size: 0.7rem;
    padding: 3px 10px;
    border-radius: 10px;

    &--lg {
      position: static;
      display: inline-block;
      margin: 0.5rem 0;
    }
  }

  &__body {
    padding: 1rem;

    h4 {
      color: #333;
      font-size: 1rem;
      margin-bottom: 2px;
    }
  }

  &__price {
    font-size: 1.1rem;
    font-weight: 700;
    color: #d4a017;
    margin-bottom: 0.5rem;

    span {
      font-size: 0.8rem;
      color: #9ca3af;
      font-weight: 400;
    }
  }

  &__features {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  &__feature {
    font-size: 0.7rem;
    color: #1f6d3d;
    background: #dcf2e3;
    padding: 2px 8px;
    border-radius: 8px;

    &--lg {
      font-size: 0.85rem;
      padding: 4px 12px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
  }

  &__detail {
    padding: 0 1.5rem 1.5rem;
  }

  &__carousel {
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 1.5rem;
  }

  &__carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__detail-body h2 {
    color: #1f6d3d;
    font-size: 1.5rem;
  }

  &__detail-price {
    margin-bottom: 0.5rem;

    &-amount {
      font-size: 1.5rem;
      font-weight: 800;
      color: #d4a017;
      margin-right: 4px;
    }
  }

  &__detail-desc {
    color: #4b5563;
    line-height: 1.7;
    margin: 1rem 0;
  }

  &__media-note {
    color: #92400e;
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    line-height: 1.6;
  }

  &__detail-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  &__packaging {
    h4 {
      color: #1f6d3d;
      margin-bottom: 0.75rem;
    }
  }

  &__packaging-placeholder {
    display: flex;
    gap: 0.9rem;
    align-items: flex-start;
    padding: 1rem;
    border: 1px dashed #88cf9f;
    border-radius: 10px;
    background: #f3fbf5;
    color: #374151;

    > span {
      font-size: 1.6rem;
      line-height: 1;
    }

    strong {
      color: #1f6d3d;
    }

    p {
      margin-top: 0.35rem;
      color: #6b7280;
      font-size: 0.85rem;
      line-height: 1.6;
    }
  }

}
</style>
