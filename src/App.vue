<template>
  <div id="app">
    <Navbar v-if="!isHome || scrolled" />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <SiteFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/common/Navbar.vue'
import SiteFooter from '@/components/common/Footer.vue'

const route = useRoute()
const scrolled = ref(false)

const isHome = computed(() => route.path === '/')

const handleScroll = () => {
  scrolled.value = window.scrollY > 60
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
