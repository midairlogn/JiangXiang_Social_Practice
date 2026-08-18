import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('@/views/PromotionalVideo.vue'),
    meta: { title: 'Promotional Video' }
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/TourMapPage.vue'),
    meta: { title: 'Tour Map' }
  },
  {
    path: '/village',
    name: 'village',
    component: () => import('@/views/VillageIntro.vue'),
    meta: { title: 'Village Introduction' }
  },
  {
    path: '/features',
    name: 'features',
    component: () => import('@/views/SpecialFeatures.vue'),
    meta: { title: 'Special Features' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | Jiangxiang Village` : 'Jiangxiang Village'
})

export default router
