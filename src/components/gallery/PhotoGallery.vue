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

    <div class="photo-gallery__masonry">
      <div
        v-for="photo in filtered"
        :key="photo.id"
        class="photo-gallery__item"
        :style="{ animationDelay: `${photo.id * 0.05}s` }"
        @click="openLightbox(photo)"
      >
        <img :src="photo.src" :alt="photo.title" loading="lazy" />
        <div class="photo-gallery__overlay">
          <h4>{{ photo.title }}</h4>
          <p>{{ photo.season }} · {{ photo.theme }}</p>
          <p class="photo-gallery__photographer">{{ photo.photographer }}</p>
        </div>
      </div>
    </div>

    <el-dialog v-model="lightboxVisible" :show-close="true" width="80%" class="photo-gallery__lightbox">
      <div v-if="selectedPhoto" class="photo-gallery__lightbox-content">
        <img :src="selectedPhoto.src" :alt="selectedPhoto.title" />
        <div class="photo-gallery__lightbox-info">
          <h3>{{ selectedPhoto.title }}</h3>
          <p>季节：{{ selectedPhoto.season }}</p>
          <p>主题：{{ selectedPhoto.theme }}</p>
          <p>拍摄者：{{ selectedPhoto.photographer }}</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  photos: { type: Array, required: true },
  themes: { type: Array, required: true },
  active: { type: String, default: 'all' },
  filtered: { type: Array, required: true }
})

const emit = defineEmits(['update:active', 'select'])

const lightboxVisible = ref(false)
const selectedPhoto = ref(null)

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

  &__item {
    break-inside: avoid;
    margin-bottom: 1rem;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    animation: fadeIn 0.5s ease-out backwards;

    img {
      width: 100%;
      display: block;
      transition: transform 0.3s;
    }

    &:hover img {
      transform: scale(1.05);
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

  &__photographer {
    font-size: 0.7rem !important;
    color: rgba(255, 255, 255, 0.5) !important;
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
