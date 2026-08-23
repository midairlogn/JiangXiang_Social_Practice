<template>
  <div class="photo-gallery">
    <div class="photo-gallery__themes">
      <button
        v-for="theme in themes"
        :key="theme.value"
        class="photo-gallery__theme"
        :class="{ 'photo-gallery__theme--active': active === theme.value }"
        @click="$emit('update:active', theme.value)"
      >
        {{ theme.label }}
      </button>
    </div>

    <p
      v-if="activeTheme?.description"
      class="photo-gallery__theme-description"
      :class="{ 'photo-gallery__theme-description--winter': active === 'winter' }"
    >
      {{ activeTheme.description }}
    </p>

    <div v-if="filtered.length" class="photo-gallery__masonry">
      <div
        v-for="(photo, index) in visiblePhotos"
        :key="photo.id"
        class="photo-gallery__item"
        :style="{ animationDelay: `${(index % 16) * 0.04}s` }"
        role="button"
        tabindex="0"
        @click="openLightbox(photo)"
        @keydown.enter="openLightbox(photo)"
        @keydown.space.prevent="openLightbox(photo)"
      >
        <img :src="photo.src" :alt="photo.alt || photo.title" loading="lazy" />
        <div class="photo-gallery__overlay">
          <h4>{{ photo.title }}</h4>
          <p>{{ seasonLabel(photo.season) }} · {{ themeLabel(photo.theme) }}</p>
          <p class="photo-gallery__media-type">{{ photo.mediaType }}</p>
        </div>
      </div>
    </div>

    <div v-if="filtered.length && hasMore" class="photo-gallery__actions">
      <button class="photo-gallery__more" type="button" @click="showMore">
        展示更多图片（还有 {{ remainingCount }} 张）
      </button>
    </div>

    <el-dialog v-model="lightboxVisible" :show-close="true" width="80%" class="photo-gallery__lightbox">
      <div v-if="selectedPhoto" class="photo-gallery__lightbox-content">
        <img :src="selectedPhoto.src" :alt="selectedPhoto.alt || selectedPhoto.title" />
        <div class="photo-gallery__lightbox-info">
          <h3>{{ selectedPhoto.title }}</h3>
          <p>季节：{{ seasonLabel(selectedPhoto.season) }}</p>
          <p>主题：{{ themeLabel(selectedPhoto.theme) }}</p>
          <p>素材说明：{{ selectedPhoto.mediaType }}</p>
          <p>来源记录：{{ selectedPhoto.credit }}</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  photos: { type: Array, required: true },
  themes: { type: Array, required: true },
  active: { type: String, default: 'all' },
  filtered: { type: Array, required: true }
})

const emit = defineEmits(['update:active', 'select'])

const lightboxVisible = ref(false)
const selectedPhoto = ref(null)
const visibleLimit = ref(16)

const activeTheme = computed(() => props.themes.find(theme => theme.value === props.active))
const visiblePhotos = computed(() => props.filtered.slice(0, visibleLimit.value))
const remainingCount = computed(() => Math.max(0, props.filtered.length - visiblePhotos.value.length))
const hasMore = computed(() => remainingCount.value > 0)

const seasonLabels = {
  spring: '春',
  summer: '夏',
  autumn: '秋',
  winter: '冬',
  'year-round': '四季'
}

const seasonLabel = value => seasonLabels[value] || value
const themeLabel = value => props.themes.find(theme => theme.value === value)?.label || value

watch(
  () => [props.active, props.filtered.length],
  () => {
    visibleLimit.value = 16
  }
)

const showMore = () => {
  visibleLimit.value += 12
}

const openLightbox = (photo) => {
  selectedPhoto.value = photo
  lightboxVisible.value = true
  emit('select', photo)
}
</script>

<style scoped lang="scss">
.photo-gallery {
  &__themes {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
  }

  &__theme-description {
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

  &__theme-description--winter {
    border-left-color: #7b9caf;
    background: linear-gradient(135deg, #f3f8fa, #edf4f6);
    color: #435b68;
  }

  &__theme {
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

  &__masonry {
    column-count: 4;
    column-gap: 1rem;

    @media (max-width: 1024px) {
      column-count: 3;
    }
    @media (max-width: 768px) {
      column-count: 2;
    }
    @media (max-width: 480px) {
      column-count: 1;
    }
  }

  &__actions {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  }

  &__more {
    padding: 0.7rem 1.5rem;
    border: 1px solid #88cf9f;
    border-radius: 999px;
    background: #fff;
    color: #1f6d3d;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #1f6d3d;
      border-color: #1f6d3d;
      color: #fff;
      box-shadow: 0 4px 12px rgba(31, 109, 61, 0.2);
    }
  }

  &__item {
    break-inside: avoid;
    margin-bottom: 1rem;
    border: 1px solid rgba(31, 109, 61, 0.1);
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 4px 14px rgba(31, 65, 43, 0.07);
    cursor: pointer;
    animation: fadeIn 0.5s ease-out backwards;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

    img {
      width: 100%;
      display: block;
      transition: transform 0.3s;
    }

    &:hover img {
      transform: scale(1.05);
    }

    &:hover {
      border-color: rgba(31, 109, 61, 0.25);
      box-shadow: 0 10px 24px rgba(31, 65, 43, 0.14);
      transform: translateY(-3px);
    }

    &:focus-visible {
      outline: 3px solid rgba(45, 138, 79, 0.3);
      outline-offset: 3px;
    }

    &:hover .photo-gallery__overlay {
      opacity: 1;
    }
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent 60%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.25s;

    h4 {
      color: #fff;
      font-size: 1rem;
    }

    p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.75rem;
      margin-top: 2px;
    }
  }

  &__media-type {
    font-size: 0.7rem !important;
    color: rgba(255, 255, 255, 0.5) !important;
  }

  @media (hover: none) {
    &__overlay {
      opacity: 1;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.76), transparent 68%);
    }

    &__item:hover {
      transform: none;
    }
  }

  &__lightbox {
    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 100%;
      max-height: 70vh;
      object-fit: contain;
      border-radius: 8px;
    }

    &-info {
      margin-top: 1rem;
      text-align: center;

      h3 {
        color: #1f6d3d;
        margin-bottom: 0.5rem;
      }

      p {
        color: #6b7280;
        font-size: 0.9rem;
      }
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
