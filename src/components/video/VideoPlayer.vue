<template>
  <div class="video-player">
    <button
      v-if="video.embedUrl && !showEmbed"
      type="button"
      class="video-player__embed-cover"
      :aria-label="`播放${video.title}`"
      @click="showEmbed = true"
    >
      <img :src="video.poster" :alt="video.posterAlt || `${video.title}视频封面`" />
      <span class="video-player__embed-cover-overlay">
        <span class="video-player__embed-play" aria-hidden="true">
          <el-icon :size="34"><VideoPlay /></el-icon>
        </span>
        <span class="video-player__embed-label">点击播放</span>
      </span>
    </button>

    <iframe
      v-else-if="video.embedUrl"
      class="video-player__iframe"
      :src="video.embedUrl"
      :title="`${video.title}｜哔哩哔哩播放器`"
      frameborder="0"
      scrolling="no"
      loading="lazy"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>

    <video
      v-else-if="video.isLocal && video.src"
      ref="videoRef"
      class="video-js vjs-default-skin vjs-big-play-centered"
      :poster="video.poster"
      controls
      preload="auto"
      :data-setup="JSON.stringify({ fluid: true, playbackRates: [0.5, 1, 1.5, 2] })"
    >
      <source :src="video.src" type="video/mp4" />
      <p class="vjs-no-js">请启用 JavaScript 并使用支持 HTML5 视频的浏览器。</p>
    </video>

    <a
      v-else-if="video.externalUrl"
      class="video-player__external"
      :href="video.externalUrl"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`${video.externalAction || '前往官方页面观看'}：${video.title}`"
    >
      <img :src="video.poster" :alt="video.posterAlt || video.title" />
      <span class="video-player__external-overlay">
        <el-icon :size="52"><VideoPlay /></el-icon>
        <strong>{{ video.externalAction || '前往官方页面观看' }}</strong>
        <small>{{ video.sourceLabel }}</small>
      </span>
    </a>

    <div v-else class="video-player__placeholder">
      <el-icon :size="48"><VideoCamera /></el-icon>
      <p>视频即将上线</p>
      <p class="video-player__placeholder-desc">{{ video.desc }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { VideoPlay } from '@element-plus/icons-vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const props = defineProps({
  video: {
    type: Object,
    required: true
  }
})

const videoRef = ref(null)
const showEmbed = ref(false)
let player = null

const initPlayer = () => {
  if (videoRef.value && props.video.isLocal && props.video.src) {
    if (player) {
      player.dispose()
    }
    videojs(videoRef.value, {
      fluid: true,
      playbackRates: [0.5, 1, 1.5, 2],
      poster: props.video.poster,
      controlBar: {
        remainingTimeDisplay: false,
        currentTimeDisplay: true,
        durationDisplay: true,
        timeDivider: true
      }
    }).ready(function () {
      player = this
    })
  }
}

onMounted(() => {
  initPlayer()
})

onBeforeUnmount(() => {
  if (player) {
    player.dispose()
    player = null
  }
})

watch(() => props.video, () => {
  showEmbed.value = false
  if (player) {
    player.dispose()
    player = null
  }
  initPlayer()
}, { deep: true })
</script>

<style scoped lang="scss">
.video-player {
  width: 100%;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 16 / 9;

  &__embed-cover {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    overflow: hidden;
    cursor: pointer;
    background: #0f3a21;
    color: #fff;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.55rem;
      background: rgba(15, 58, 33, 0.08);
    }

    &:hover .video-player__embed-play {
      transform: scale(1.06);
    }

    &:focus-visible {
      outline: 3px solid #fff;
      outline-offset: -5px;
    }
  }

  &__embed-play {
    width: 64px;
    height: 64px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 3px;
    background: rgba(15, 58, 33, 0.76);
    box-shadow: 0 4px 14px rgba(15, 58, 33, 0.2);
    transition: transform 0.2s ease;
  }

  &__embed-label {
    font-size: 0.85rem;
    font-weight: 600;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);
  }

  &__iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }

  :deep(.video-js) {
    width: 100%;
    height: 100%;
    font-size: 14px;
  }

  &__placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.6);
    gap: 0.5rem;
    background: linear-gradient(135deg, #16482b, #0f3a21);

    p {
      font-size: 1.1rem;
    }
  }

  &__external {
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
    color: #fff;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      background: rgba(15, 58, 33, 0.58);
      transition: background 0.2s;

      strong {
        font-size: 1.05rem;
      }

      small {
        color: rgba(255, 255, 255, 0.75);
      }
    }

    &:hover &-overlay {
      background: rgba(15, 58, 33, 0.72);
    }
  }

  &__placeholder-desc {
    font-size: 0.85rem !important;
    max-width: 400px;
    text-align: center;
    padding: 0 1rem;
    color: rgba(255, 255, 255, 0.4);
  }
}
</style>
