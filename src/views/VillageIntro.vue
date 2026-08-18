<template>
  <div class="village-page" style="padding-top: 64px;">
    <section class="village-page__header">
      <div class="container">
        <h1 class="section-title">Village Introduction</h1>
        <p class="section-subtitle">History, honors, and modern values of Jiangxiang Village</p>
        <div class="village-page__overview">
          <div class="village-page__info">
            <h2>蒋巷村 · {{ store.overview.name }}</h2>
            <p class="village-page__location">📍 {{ store.overview.location }} · {{ store.overview.locationCN }}</p>
            <div class="village-page__stats">
              <span><strong>{{ store.overview.households }}</strong> Households</span>
              <span><strong>{{ store.overview.population }}</strong> Residents</span>
              <span><strong>{{ store.overview.area }}</strong> Area</span>
            </div>
            <p class="village-page__party">Party Secretary: {{ store.overview.partySecretary }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="village-page__content section-padding">
      <div class="container">
        <el-tabs v-model="activeTab" class="village-page__tabs">
          <el-tab-pane label="Village History" name="history">
            <h2 class="section-title">History Timeline</h2>
            <p class="section-subtitle">From a disease-ridden swamp to a model of rural prosperity</p>
            <VillageHistory :history="store.history" />
          </el-tab-pane>

          <el-tab-pane label="Honors & Awards" name="honors">
            <h2 class="section-title">Honors & Recognition</h2>
            <p class="section-subtitle">{{ store.honorCount }}+ national, provincial, and international honors earned</p>
            <Honors
              :village-honors="store.honors"
              :leader-honors="store.leaders"
              :visits="store.visits"
            />
          </el-tab-pane>

          <el-tab-pane label="Modern Value" name="modern">
            <h2 class="section-title">Modern Value</h2>
            <p class="section-subtitle">A replicable model for rural revitalization and sustainable development</p>
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
