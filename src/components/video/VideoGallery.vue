<template>
  <div class="video-gallery">
    <div class="video-gallery__main">
      <VideoPlayer :video="currentVideo" :key="currentVideo.id" />
      <div class="video-gallery__info">
        <h3 class="video-gallery__title">{{ currentVideo.title }}</h3>
        <p class="video-gallery__desc">{{ currentVideo.desc }}</p>
        <el-button type="primary" :icon="Share" @click="showEmbedDialog = true">
          Get Embed Code
        </el-button>
      </div>
    </div>

    <div class="video-gallery__list">
      <h4 class="video-gallery__list-title">Playlist</h4>
      <div class="video-gallery__cards">
        <div
          v-for="video in filteredVideos"
          :key="video.id"
          class="video-gallery__card"
          :class="{ 'video-gallery__card--active': video.id === currentVideo.id }"
          @click="$emit('select', video)"
        >
          <div class="video-gallery__thumb">
            <img :src="video.poster" :alt="video.title" loading="lazy" />
            <div class="video-gallery__thumb-overlay">
              <el-icon :size="32"><VideoPlay /></el-icon>
            </div>
            <span class="video-gallery__badge" v-if="video.isLocal">Local</span>
            <span class="video-gallery__badge video-gallery__badge--external" v-else>External</span>
          </div>
          <div class="video-gallery__card-info">
            <h5>{{ video.title }}</h5>
            <p>{{ video.duration }}</p>
          </div>
        </div>
      </div>
    </div>

    <el-dialog v-model="showEmbedDialog" title="Embed Code for Mini Programs" width="600">
      <el-tabs v-model="embedTab">
        <el-tab-pane label="Mini Program" name="miniprogram">
          <p class="video-gallery__embed-note">Copy this embed code to use in WeChat Mini Programs. Replace VIDEO_URL and POSTER_URL with your hosted media URLs.</p>
          <el-input v-model="miniProgramEmbed" type="textarea" :rows="4" readonly />
          <el-button type="primary" :icon="CopyDocument" @click="copyToClipboard(miniProgramEmbed)" class="video-gallery__copy-btn">Copy Code</el-button>
        </el-tab-pane>
        <el-tab-pane label="Web iframe" name="web">
          <p class="video-gallery__embed-note">Embed code for web pages and blog posts.</p>
          <el-input v-model="webEmbed" type="textarea" :rows="4" readonly />
          <el-button type="primary" :icon="CopyDocument" @click="copyToClipboard(webEmbed)" class="video-gallery__copy-btn">Copy Code</el-button>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Share, CopyDocument, VideoPlay } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import VideoPlayer from './VideoPlayer.vue'
import { embedConfig } from '@/data/videos'

const props = defineProps({
  videos: { type: Array, required: true },
  currentVideo: { type: Object, required: true },
  filteredVideos: { type: Array, required: true }
})

defineEmits(['select'])

const showEmbedDialog = ref(false)
const embedTab = ref('miniprogram')

const videoUrl = computed(() => {
  return props.currentVideo.src || props.currentVideo.externalUrl || 'YOUR_VIDEO_URL'
})
const posterUrl = computed(() => props.currentVideo.poster || 'YOUR_POSTER_URL')

const miniProgramEmbed = computed(() =>
  embedConfig.miniProgram.template
    .replace('{{VIDEO_URL}}', videoUrl.value)
    .replace('{{POSTER_URL}}', posterUrl.value)
)

const webEmbed = computed(() =>
  embedConfig.web.template.replace('{{VIDEO_URL}}', videoUrl.value)
)

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    ElMessage.success('Embed code copied to clipboard!')
  } catch {
    ElMessage.error('Failed to copy. Please copy manually.')
  }
}
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

  &__embed-note {
    color: #6b7280;
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
    line-height: 1.5;
  }

  &__copy-btn {
    margin-top: 0.75rem;
  }
}
</style>
