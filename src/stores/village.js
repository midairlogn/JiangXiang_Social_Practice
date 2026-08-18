import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { villageOverview, historyTimeline } from '@/data/history'
import { villageHonors, leaderHonors, leadershipVisits } from '@/data/honors'
import { landmarks, landmarkCategories } from '@/data/landmarks'
import { products, productCategories } from '@/data/products'
import { photos, photoThemes } from '@/data/photos'
import { videos, videoCategories } from '@/data/videos'

export const useVillageStore = defineStore('village', () => {
  const overview = ref(villageOverview)
  const history = ref(historyTimeline)
  const honors = ref(villageHonors)
  const leaders = ref(leaderHonors)
  const visits = ref(leadershipVisits)
  const allLandmarks = ref(landmarks)
  const landmarkCategoryList = ref(landmarkCategories)
  const allProducts = ref(products)
  const productCategoryList = ref(productCategories)
  const allPhotos = ref(photos)
  const photoThemeList = ref(photoThemes)
  const allVideos = ref(videos)
  const videoCategoryList = ref(videoCategories)

  const honorCount = computed(() => honors.value.length + leaders.value.length)

  return {
    overview,
    history,
    honors,
    leaders,
    visits,
    allLandmarks,
    landmarkCategoryList,
    allProducts,
    productCategoryList,
    allPhotos,
    photoThemeList,
    allVideos,
    videoCategoryList,
    honorCount
  }
})
