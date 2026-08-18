<template>
  <div class="video-player" ref="containerRef">
    <video
      ref="videoRef"
      class="video-js vjs-default-skin vjs-big-play-centered"
      :poster="video.poster"
      controls
      preload="auto"
      :data-setup="JSON.stringify({ fluid: true, playbackRates: [0.5, 1, 1.5, 2] })"
    >
      <source v-if="video.src" :src="video.src" type="video/mp4" />
      <source v-if="video.externalUrl" :src="video.externalUrl" type="video/mp4" />
      <p class="vjs-no-js">To view this video please enable JavaScript and consider upgrading to a web browser that supports HTML5 video.</p>
    </video>

    <div v-if="!video.src && !video.externalUrl" class="video-player__placeholder">
      <el-icon :size="48"><VideoCamera /></el-icon>
      <p>Video coming soon</p>
      <p class="video-player__placeholder-desc">{{ video.desc }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const props = defineProps({
  video: {
    type: Object,
    required: true
  }
})

const videoRef = ref(null)
const containerRef = ref(null)
let player = null

const initPlayer = () => {
  if (videoRef.value && (props.video.src || props.video.externalUrl)) {
    if (player) {
      player.dispose()
    }
    videojs(videoRef.value, {
      fluid: true,
      playbackRates: [0.5, 1, 1.5, 2],
      poster: props.video.poster
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

  &__placeholder-desc {
    font-size: 0.85rem !important;
    max-width: 400px;
    text-align: center;
    padding: 0 1rem;
    color: rgba(255, 255, 255, 0.4);
  }
}
</style>
