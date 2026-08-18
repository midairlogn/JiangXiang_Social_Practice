<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled, 'navbar--solid': !isHome }">
    <div class="navbar__container">
      <router-link to="/" class="navbar__logo">
        <span class="navbar__logo-icon">🌾</span>
        <span class="navbar__logo-text">Jiangxiang Village</span>
      </router-link>

      <ul class="navbar__menu" :class="{ 'navbar__menu--open': mobileMenuOpen }">
        <li v-for="item in navItems" :key="item.path">
          <router-link :to="item.path" class="navbar__link" @click="closeMobileMenu">
            <el-icon v-if="item.icon"><component :is="item.icon" /></el-icon>
            <span>{{ item.label }}</span>
          </router-link>
        </li>
      </ul>

      <button class="navbar__toggle" @click="toggleMobileMenu" :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'">
        <span :class="{ 'navbar__toggle-line--open': mobileMenuOpen }"></span>
        <span :class="{ 'navbar__toggle-line--open': mobileMenuOpen }"></span>
        <span :class="{ 'navbar__toggle-line--open': mobileMenuOpen }"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const isHome = computed(() => route.path === '/')

const navItems = [
  { label: 'Home', path: '/', icon: 'HomeFilled' },
  { label: 'Video', path: '/video', icon: 'VideoCamera' },
  { label: 'Map', path: '/map', icon: 'MapLocation' },
  { label: 'Village', path: '/village', icon: 'OfficeBuilding' },
  { label: 'Features', path: '/features', icon: 'Star' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 60
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;

  &--solid, &--scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(10px);
  }

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 1.15rem;
    color: #fff;
    transition: color 0.3s;

    .navbar--scrolled &, .navbar--solid & {
      color: #1f6d3d;
    }
  }

  &__logo-icon {
    font-size: 1.5rem;
  }

  &__menu {
    display: flex;
    gap: 0.25rem;
    list-style: none;
    align-items: center;

    @media (max-width: 768px) {
      position: fixed;
      top: 64px;
      left: 0;
      right: 0;
      flex-direction: column;
      background: rgba(255, 255, 255, 0.98);
      padding: 1rem;
      gap: 0;
      transform: translateY(-150%);
      transition: transform 0.3s ease;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

      &--open {
        transform: translateY(0);
      }
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    font-size: 0.95rem;
    transition: all 0.2s;

    &:hover, &.router-link-exact-active {
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
    }

    .navbar--scrolled &, .navbar--solid & {
      color: #4b5563;

      &:hover, &.router-link-exact-active {
        background: rgba(31, 109, 61, 0.1);
        color: #1f6d3d;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 0.75rem 1rem;
      color: #4b5563 !important;
      border-radius: 6px;

      &:hover, &.router-link-exact-active {
        background: rgba(31, 109, 61, 0.1) !important;
        color: #1f6d3d !important;
      }
    }
  }

  &__toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;

    @media (max-width: 768px) {
      display: flex;
    }

    span {
      width: 24px;
      height: 2px;
      background: #fff;
      transition: all 0.3s;

      .navbar--scrolled &, .navbar--solid & {
        background: #1f6d3d;
      }
    }
  }
}
</style>
