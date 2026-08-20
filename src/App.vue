<template>
  <div id="app">
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <SiteFooter />
  </div>
</template>

<script setup>
import Navbar from '@/components/common/Navbar.vue'
import SiteFooter from '@/components/common/Footer.vue'
</script>
