import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('@/views/PromotionalVideo.vue'),
    meta: { title: '宣传片' }
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/TourMapPage.vue'),
    meta: { title: '导览地图' }
  },
  {
    path: '/village',
    name: 'village',
    component: () => import('@/views/VillageIntro.vue'),
    meta: { title: '村庄介绍' }
  },
  {
    path: '/features',
    name: 'features',
    component: () => import('@/views/SpecialFeatures.vue'),
    meta: { title: '特色展示' }
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
  document.title = to.meta.title ? `${to.meta.title} | 蒋巷村` : '蒋巷村'
})

export default router
