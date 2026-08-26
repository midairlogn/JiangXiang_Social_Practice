<template>
  <div class="village-page">
    <section class="village-page__header">
      <div class="container">
        <h1 class="section-title">村庄介绍</h1>
        <p class="section-subtitle">历史 · 荣誉 · 现代价值——读懂蒋巷振兴之路</p>
        <div class="village-page__overview">
          <div class="village-page__info-card">
            <div class="village-page__info-head">
              <h2>{{ store.overview.name }}</h2>
              <p class="village-page__location">
                <el-icon><LocationInformation /></el-icon>
                {{ store.overview.location }}
              </p>
            </div>

            <div class="village-page__stats">
              <div class="village-page__stat">
                <div class="village-page__stat-icon"><el-icon><HomeFilled /></el-icon></div>
                <div class="village-page__stat-num">{{ store.overview.households }}</div>
                <div class="village-page__stat-label">户农家</div>
              </div>
              <div class="village-page__stat">
                <div class="village-page__stat-icon"><el-icon><User /></el-icon></div>
                <div class="village-page__stat-num">{{ store.overview.population }}</div>
                <div class="village-page__stat-label">常住人口</div>
              </div>
              <div class="village-page__stat">
                <div class="village-page__stat-icon"><el-icon><Crop /></el-icon></div>
                <div class="village-page__stat-num">{{ store.overview.area }}</div>
                <div class="village-page__stat-label">村域面积</div>
              </div>
            </div>

            <div class="village-page__party">
              <div class="village-page__party-item">
                <div class="village-page__party-avatar"><el-icon :size="20"><Avatar /></el-icon></div>
                <div class="village-page__party-text">
                  <span>村党委书记</span>
                  <strong>{{ store.overview.partySecretary }}</strong>
                </div>
              </div>
              <div class="village-page__party-item">
                <div class="village-page__party-avatar"><el-icon :size="20"><Avatar /></el-icon></div>
                <div class="village-page__party-text">
                  <span>党委第一书记（老书记）</span>
                  <strong>{{ store.overview.firstSecretary }}</strong>
                </div>
              </div>
            </div>
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
    background-color: #16482b;
    background-image: var(--bg-dark-green-ink);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    padding: calc(64px + 3rem) 0 2rem;

    .section-title { color: #fff; }
    .section-subtitle { color: rgba(255, 255, 255, 0.7); }
  }

  &__content {
    background-color: #f9fafb;
    background-image: var(--bg-paper-ink);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__overview {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  &__info-card {
    width: 100%;
    max-width: 760px;
    padding: 2.25rem 2rem;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(12px);
    text-align: center;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
  }

  &__info-head {
    h2 {
      color: #fff;
      font-size: 2.25rem;
      font-weight: 800;
      letter-spacing: 2px;
      margin-bottom: 0.75rem;
      display: inline-block;

      &::after {
        content: '';
        display: block;
        width: 48px;
        height: 3px;
        margin: 0.5rem auto 0;
        background: #d4a017;
        border-radius: 2px;
      }
    }
  }

  &__location {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.95rem;
    padding: 0.35rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 999px;
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 1.75rem 0;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  &__stat {
    padding: 1.25rem 0.5rem;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    transition: transform 0.25s;

    &:hover {
      transform: translateY(-3px);
      background: rgba(255, 255, 255, 0.1);
    }
  }

  &__stat-icon {
    width: 40px;
    height: 40px;
    margin: 0 auto 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(212, 160, 23, 0.18);
    color: #f0c674;
  }

  &__stat-num {
    font-size: 1.5rem;
    font-weight: 800;
    color: #fff;
    line-height: 1.1;
  }

  &__stat-label {
    margin-top: 0.25rem;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.65);
  }

  &__party {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
    padding: 0.6rem 1.25rem;
    border-radius: 999px;
    background: rgba(212, 160, 23, 0.15);
    border: 1px solid rgba(212, 160, 23, 0.35);
  }

  &__party-item {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__party-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #d4a017;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  &__party-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.2;

    span {
      font-size: 0.72rem;
      color: rgba(255, 255, 255, 0.7);
    }

    strong {
      color: #fff;
      font-size: 1.05rem;
      font-weight: 700;
    }
  }

  &__tabs {
    :deep(.el-tabs__header) {
      margin-bottom: 2.5rem;
    }

    :deep(.el-tabs__nav-wrap)::after {
      display: none;
    }

    :deep(.el-tabs__nav-wrap) {
      display: flex;
      justify-content: center;
    }

    :deep(.el-tabs__nav-scroll) {
      overflow: visible;
    }

    :deep(.el-tabs__nav) {
      display: inline-flex !important;
      gap: 0.5rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    :deep(.el-tabs__active-bar) {
      display: none;
    }

    :deep(.el-tabs__item) {
      height: auto;
      line-height: 1.5;
      padding: 0.6rem 1.5rem !important;
      margin: 0;
      border: 1px solid #d1d5db !important;
      border-radius: 999px !important;
      background: #fff;
      color: #6b7280;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.25s;

      &:hover {
        border-color: #88cf9f;
        color: #1f6d3d;
      }

      &.is-active {
        background: #1f6d3d;
        border-color: #1f6d3d;
        color: #fff;
        box-shadow: 0 4px 12px rgba(31, 109, 61, 0.25);
      }
    }
  }
}
</style>
