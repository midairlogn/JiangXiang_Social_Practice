<template>
  <div class="modern-value">
    <div class="modern-value__intro">
      <p class="modern-value__motto">{{ overview.motto }}</p>
      <p class="modern-value__motto-cn">{{ overview.mottoCN }}</p>
    </div>

    <div class="modern-value__stats">
      <div v-for="stat in overview.stats" :key="stat.label" class="modern-value__stat">
        <div class="modern-value__stat-value">
          {{ stat.value }}<span class="modern-value__stat-unit">{{ stat.unit }}</span>
        </div>
        <div class="modern-value__stat-label">{{ stat.label }}</div>
        <div class="modern-value__stat-year">{{ stat.year }}</div>
      </div>
    </div>

    <div class="modern-value__path">
      <h3 class="modern-value__path-title">Five-Stage Development Path</h3>
      <p class="modern-value__path-subtitle">A model of "看得懂、学得会" (understandable and replicable) rural revitalization</p>
      <div class="modern-value__path-grid">
        <div
          v-for="(stage, i) in overview.developmentPath"
          :key="i"
          class="modern-value__stage"
        >
          <div class="modern-value__stage-number">{{ i + 1 }}</div>
          <div class="modern-value__stage-icon">
            <el-icon :size="32"><component :is="stage.icon" /></el-icon>
          </div>
          <h4>{{ stage.title }}</h4>
          <p class="modern-value__stage-cn">{{ stage.titleCN }}</p>
          <p class="modern-value__stage-desc">{{ stage.desc }}</p>
        </div>
      </div>
    </div>

    <div class="modern-value__values">
      <div class="modern-value__value-card">
        <div class="modern-value__value-icon">🌱</div>
        <h4>Ecological Civilization</h4>
        <p>60%+ green coverage, zero-carbon solar village, circular economy with sewage treatment and straw gasification. "Environment is the root of the village."</p>
      </div>
      <div class="modern-value__value-card">
        <div class="modern-value__value-icon">🤝</div>
        <h4>Common Prosperity</h4>
        <p>All 192 households own villas. Per capita income of 62,500 yuan with 10,000 yuan annual dividends. Full five-insurance coverage. "No one left behind on the path to prosperity."</p>
      </div>
      <div class="modern-value__value-card">
        <div class="modern-value__value-icon">📚</div>
        <h4>Spiritual Civilization</h4>
        <p>Reading culture since 1997 with free newspaper subscriptions. Village conventions (18 articles, revised 6 times). "Enrich pockets, then enrich minds."</p>
      </div>
      <div class="modern-value__value-card">
        <div class="modern-value__value-icon">🏛️</div>
        <h4>Democratic Governance</h4>
        <p>National democratic rule-of-law model village. Transparent village affairs, collective decision-making, and active civic participation in community management.</p>
      </div>
      <div class="modern-value__value-card">
        <div class="modern-value__value-icon">⚡</div>
        <h4>Zero-Carbon Future</h4>
        <p>20,000 sqm of solar panels generating up to 100 million kWh annually. Reducing carbon emissions by 2,825 tons per year. A replicable green development path.</p>
      </div>
      <div class="modern-value__value-card">
        <div class="modern-value__value-icon">👴</div>
        <h4>Elderly Care Model</h4>
        <p>158 free elderly apartments, 250-bed nursing home with integrated medical services. Monthly pensions of 600-2,300 yuan. National elder-friendly community.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  overview: { type: Object, required: true }
})
</script>

<style scoped lang="scss">
.modern-value {
  &__intro {
    text-align: center;
    background: linear-gradient(135deg, #1f6d3d, #16482b);
    color: #fff;
    padding: 2.5rem 1.5rem;
    border-radius: 16px;
    margin-bottom: 2rem;
  }

  &__motto {
    font-size: 1.25rem;
    font-style: italic;
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  &__motto-cn {
    font-size: 1rem;
    color: #88cf9f;
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  &__stat {
    text-align: center;
    background: #fff;
    padding: 1.5rem 1rem;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    border-top: 4px solid #1f6d3d;
  }

  &__stat-value {
    font-size: 2rem;
    font-weight: 800;
    color: #1f6d3d;
  }

  &__stat-unit {
    font-size: 1rem;
    color: #6b7280;
    font-weight: 500;
    margin-left: 4px;
  }

  &__stat-label {
    font-size: 0.9rem;
    color: #4b5563;
    margin-top: 0.25rem;
  }

  &__stat-year {
    font-size: 0.75rem;
    color: #9ca3af;
  }

  &__path {
    margin-bottom: 3rem;
  }

  &__path-title {
    text-align: center;
    color: #1f6d3d;
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }

  &__path-subtitle {
    text-align: center;
    color: #6b7280;
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  &__path-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    position: relative;
  }

  &__stage {
    text-align: center;
    padding: 1.5rem 1rem;
    background: #f9fafb;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    transition: all 0.25s;
    position: relative;

    &:hover {
      background: #fff;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
      transform: translateY(-3px);
    }
  }

  &__stage-number {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 28px;
    height: 28px;
    background: #d4a017;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.85rem;
  }

  &__stage-icon {
    width: 56px;
    height: 56px;
    margin: 0.5rem auto 0.75rem;
    border-radius: 50%;
    background: #dcf2e3;
    color: #1f6d3d;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__stage {
    h4 {
      color: #1f6d3d;
      font-size: 1rem;
    }
  }

  &__stage-cn {
    font-size: 0.8rem;
    color: #9ca3af;
    margin-bottom: 0.5rem;
  }

  &__stage-desc {
    font-size: 0.78rem;
    color: #6b7280;
    line-height: 1.5;
  }

  &__values {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.25rem;
  }

  &__value-card {
    padding: 1.5rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: all 0.25s;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom-color: #1f6d3d;
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    }

    h4 {
      color: #1f6d3d;
      font-size: 1.05rem;
      margin: 0.5rem 0;
    }

    p {
      font-size: 0.85rem;
      color: #6b7280;
      line-height: 1.6;
    }
  }

  &__value-icon {
    font-size: 2rem;
  }
}
</style>
