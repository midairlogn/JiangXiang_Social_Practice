<template>
  <div class="village-page" style="padding-top: 64px;">
    <section class="village-page__header">
      <div class="container">
        <h1 class="section-title">村庄介绍</h1>
        <p class="section-subtitle">蒋巷村的历史、荣誉与现代价值</p>
        <div class="village-page__overview">
          <div class="village-page__info">
            <h2>{{ store.overview.name }}</h2>
            <p class="village-page__location">📍 {{ store.overview.location }}</p>
            <div class="village-page__stats">
              <span><strong>{{ store.overview.households }}</strong> 户</span>
              <span><strong>{{ store.overview.population }}</strong> 人</span>
              <span><strong>{{ store.overview.area }}</strong> 面积</span>
            </div>
            <p class="village-page__party">村党委第一书记：{{ store.overview.partySecretary }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="village-page__content section-padding">
      <div class="container">
        <el-tabs v-model="activeTab" class="village-page__tabs">
          <el-tab-pane label="村史" name="history">
            <h2 class="section-title">历史时间线</h2>
            <p class="section-subtitle">从血吸虫病流行的穷乡僻壤到乡村振兴典范</p>
            <VillageHistory :history="store.history" />
          </el-tab-pane>

          <el-tab-pane label="荣誉表彰" name="honors">
            <h2 class="section-title">荣誉表彰</h2>
            <p class="section-subtitle">获国家级、省级及国际荣誉近{{ store.honorCount }}项</p>
            <Honors
              :village-honors="store.honors"
              :leader-honors="store.leaders"
              :visits="store.visits"
            />
          </el-tab-pane>

          <el-tab-pane label="现代价值" name="modern">
            <h2 class="section-title">现代价值</h2>
            <p class="section-subtitle">可复制可推广的乡村振兴和可持续发展范本</p>
            <ModernValue :overview="store.overview" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useVillageStore } from '@/stores/village'
import VillageHistory from '@/components/village/VillageHistory.vue'
import Honors from '@/components/village/Honors.vue'
import ModernValue from '@/components/village/ModernValue.vue'

const store = useVillageStore()
const activeTab = ref('history')
</script>

<style scoped lang="scss">
.village-page {
  &__header {
    background: linear-gradient(135deg, #1f6d3d, #16482b);
    color: #fff;
    padding: 3rem 0 2rem;

    .section-title { color: #fff; }
    .section-subtitle { color: rgba(255, 255, 255, 0.7); }
  }

  &__overview {
    margin-top: 1.5rem;
  }

  &__info {
    h2 {
      color: #88cf9f;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }

  &__location {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  &__stats {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    span {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9rem;

      strong {
        color: #d4a017;
        font-size: 1.25rem;
      }
    }
  }

  &__party {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }

  &__tabs {
    :deep(.el-tabs__item) {
      font-size: 1rem;
      font-weight: 500;
    }
  }
}
</style>
