<template>
  <div class="video-gallery">
    <div class="video-gallery__main">
      <VideoPlayer :video="currentVideo" :key="currentVideo.id" />
      <div class="video-gallery__info">
        <h3 class="video-gallery__title">{{ currentVideo.title }}</h3>
        <p class="video-gallery__desc">{{ currentVideo.desc }}</p>
        <a
          v-if="currentVideo.embedUrl && currentVideo.externalUrl"
          class="video-gallery__external-action"
          :href="currentVideo.externalUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ currentVideo.externalAction || '前往官方页面观看' }}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>

    <div class="video-gallery__list">
      <h4 class="video-gallery__list-title">播放列表</h4>
      <div class="video-gallery__cards">
        <div
          v-for="video in filteredVideos"
          :key="video.id"
          class="video-gallery__card"
          :class="{ 'video-gallery__card--active': video.id === currentVideo.id }"
          @click="$emit('select', video)"
        >
          <div class="video-gallery__thumb">
            <img :src="video.poster" :alt="video.posterAlt || video.title" loading="lazy" />
            <div class="video-gallery__thumb-overlay">
              <el-icon :size="32"><VideoPlay /></el-icon>
            </div>
            <span class="video-gallery__badge" v-if="video.isLocal">本地</span>
            <span
              v-else
              class="video-gallery__badge video-gallery__badge--external"
              :class="{ 'video-gallery__badge--featured': video.featured }"
            >
              {{ video.featured ? '团队作品' : (video.sourceLabel || '外部') }}
            </span>
          </div>
          <div class="video-gallery__card-info">
            <h5>{{ video.title }}</h5>
            <p>{{ video.duration }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { VideoPlay } from '@element-plus/icons-vue'
import VideoPlayer from './VideoPlayer.vue'

const props = defineProps({
  videos: { type: Array, required: true },
  currentVideo: { type: Object, required: true },
  filteredVideos: { type: Array, required: true }
})

defineEmits(['select'])
</script>

<style scoped lang="scss">
.video-gallery {
  &__main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
  }

  &__title {
    font-size: 1.5rem;
    color: #1f6d3d;
    margin-bottom: 0.75rem;
  }

  &__desc {
    color: #6b7280;
    margin-bottom: 1.5rem;
    line-height: 1.7;
    font-size: 0.95rem;
  }

  &__external-action {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.65rem 1.1rem;
    border-radius: 999px;
    background: #1f6d3d;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
    transition: background 0.2s, transform 0.2s;

    &:hover {
      background: #16482b;
      transform: translateY(-1px);
    }
  }

  &__list-title {
    color: #1f6d3d;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
  }

  &__card {
    cursor: pointer;
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: all 0.25s;
    border: 2px solid transparent;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    &--active {
      border-color: #1f6d3d;
      box-shadow: 0 4px 16px rgba(31, 109, 61, 0.2);
    }
  }

  &__thumb {
    position: relative;
    aspect-ratio: 16 / 9;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__thumb-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.35);
    color: #fff;
    opacity: 0;
    transition: opacity 0.2s;

    .video-gallery__card:hover & {
      opacity: 1;
    }
  }

  &__badge {
    position: absolute;
    top: 8px;
    right: 8px;
    background: #1f6d3d;
    color: #fff;
    font-size: 0.7rem;
    padding: 2px 8px;
    border-radius: 10px;

    &--external {
      background: #6b7280;
    }

    &--featured {
      background: #d4a017;
    }
  }

  &__card-info {
    padding: 0.75rem;

    h5 {
      color: #333;
      font-size: 0.95rem;
      margin-bottom: 0.25rem;
    }

    p {
      color: #9ca3af;
      font-size: 0.8rem;
    }
  }
}
</style>
