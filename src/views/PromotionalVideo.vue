<template>
  <div class="video-page">
    <section class="video-page__header">
      <div class="container">
        <h1 class="section-title">专题视频</h1>
        <p class="section-subtitle">透过镜头，走进将巷</p>
      </div>
    </section>

    <section class="video-page__content section-padding">
      <div class="container">
        <div class="video-page__categories">
          <button
            v-for="cat in store.videoCategoryList"
            :key="cat.value"
            class="video-page__category"
            :class="{ 'video-page__category--active': activeCategory === cat.value }"
            @click="activeCategory = cat.value"
          >
            {{ cat.label }}
          </button>
        </div>

        <VideoGallery
          :videos="store.allVideos"
          :current-video="currentVideo"
          :filtered-videos="filteredVideos"
          @select="currentVideo = $event"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVillageStore } from '@/stores/village'
import VideoGallery from '@/components/video/VideoGallery.vue'

const store = useVillageStore()
const activeCategory = ref('all')
const currentVideo = ref(store.allVideos[0])

const filteredVideos = computed(() => {
  if (activeCategory.value === 'all') return store.allVideos
  return store.allVideos.filter(v => v.category === activeCategory.value)
})
</script>

<style scoped lang="scss">
.video-page {
  &__header {
    background-color: #16482b;
    background-image: var(--bg-dark-green-ink);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    padding: calc(64px + 3rem) 0 2rem;

    .section-title {
      color: #fff;
    }

    .section-subtitle {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  &__content {
    background-color: #f9fafb;
    background-image: var(--bg-paper-ink);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__categories {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
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
}
</style>
