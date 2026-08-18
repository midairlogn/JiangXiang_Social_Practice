<template>
  <div class="home">
    <section class="hero">
      <video class="hero__bg" autoplay muted loop playsinline poster="/images/hero/hero-bg.svg">
        <source src="/videos/jiangxiang-social-practice.mp4" type="video/mp4" />
      </video>
      <div class="hero__overlay"></div>
      <div class="hero__content">
        <p class="hero__tagline">六朝松小纵队 · 社会实践项目</p>
        <h1 class="hero__title">蒋巷村</h1>
        <h2 class="hero__subtitle">新时代的桃花源</h2>
        <p class="hero__desc">
          从血吸虫病流行的穷乡僻壤到产值十亿的生态社区——探索常德盛带领下的蒋巷乡村振兴奇迹。
        </p>
        <div class="hero__actions">
          <router-link to="/video" class="hero__btn hero__btn--primary">
            <el-icon><VideoCamera /></el-icon> 观看宣传片
          </router-link>
          <router-link to="/village" class="hero__btn hero__btn--outline">
            <el-icon><Reading /></el-icon> 走进蒋巷
          </router-link>
        </div>
      </div>
      <div class="hero__scroll">
        <span>向下滚动</span>
        <div class="hero__scroll-line"></div>
      </div>
    </section>

    <section class="overview section-padding">
      <div class="container">
        <h2 class="section-title">村庄概览</h2>
        <p class="section-subtitle">江苏省常熟市支塘镇蒋巷村</p>
        <div class="overview__grid">
          <div v-for="stat in store.overview.stats" :key="stat.label" class="overview__card">
            <div class="overview__value">{{ stat.value }}<span>{{ stat.unit }}</span></div>
            <div class="overview__label">{{ stat.label }}</div>
            <div class="overview__year">{{ stat.year }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="path section-padding" style="background: #f0f9f4;">
      <div class="container">
        <h2 class="section-title">发展路径</h2>
        <p class="section-subtitle">五阶段蜕变——从贫困走向富裕</p>
        <div class="path__grid">
          <div v-for="(stage, i) in store.overview.developmentPath" :key="i" class="path__card">
            <div class="path__num">{{ i + 1 }}</div>
            <div class="path__icon"><el-icon :size="28"><component :is="stage.icon" /></el-icon></div>
            <h3>{{ stage.title }}</h3>
            <p class="path__desc">{{ stage.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="nav-cards section-padding">
      <div class="container">
        <h2 class="section-title">探索项目</h2>
        <p class="section-subtitle">五大板块，全方位展示蒋巷村</p>
        <div class="nav-cards__grid">
          <router-link v-for="card in navCards" :key="card.path" :to="card.path" class="nav-cards__card">
            <div class="nav-cards__icon"><el-icon :size="36"><component :is="card.icon" /></el-icon></div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.desc }}</p>
            <span class="nav-cards__arrow">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <section class="motto section-padding" style="background: linear-gradient(135deg, #1f6d3d, #16482b);">
      <div class="container motto__container">
        <p class="motto__text">"{{ store.overview.motto }}"</p>
        <p class="motto__author">— 蒋巷村党委第一书记 常德盛</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useVillageStore } from '@/stores/village'

const store = useVillageStore()

const navCards = [
  { path: '/video', title: '宣传片', desc: '观看社会实践纪录片和精选视频，获取小程序内嵌代码。', icon: 'VideoCamera' },
  { path: '/map', title: '导览地图', desc: '在交互式地图上探索12个地标景点——从生态园到有机稻田。', icon: 'MapLocation' },
  { path: '/village', title: '村庄介绍', desc: '蒋巷村史时间线、近百项荣誉、领导视察和现代价值。', icon: 'OfficeBuilding' },
  { path: '/features', title: '特色展示', desc: '蒋巷特色农产品包装视觉方案和四季美景摄影图。', icon: 'Star' }
]
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &__bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(15, 58, 33, 0.7), rgba(22, 72, 43, 0.5));
    z-index: 1;
  }

  &__content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: #fff;
    padding: 0 1.5rem;
    max-width: 800px;
  }

  &__tagline {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 0.85rem;
    color: #88cf9f;
    margin-bottom: 0.75rem;
  }

  &__title {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 0.25rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  &__subtitle {
    font-size: 1.5rem;
    color: #d4a017;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  &__desc {
    font-size: 1.05rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 2rem;
  }

  &__actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 2rem;
    border-radius: 30px;
    font-weight: 600;
    transition: all 0.25s;

    &--primary {
      background: #1f6d3d;
      color: #fff;

      &:hover {
        background: #2d8a4f;
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(45, 138, 79, 0.4);
      }
    }

    &--outline {
      border: 2px solid #fff;
      color: #fff;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }

  &__scroll {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    pointer-events: none;
  }

  &__scroll-line {
    width: 1px;
    height: 30px;
    background: rgba(255, 255, 255, 0.4);
    margin: 6px auto 0;
    animation: scrollLine 2s ease-in-out infinite;
  }
}

@keyframes scrollLine {
  0%, 100% { transform: scaleY(0.5); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
}

.overview {
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  &__card {
    text-align: center;
    background: #fff;
    padding: 2rem 1rem;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    border-top: 4px solid #1f6d3d;
    transition: transform 0.25s;

    &:hover {
      transform: translateY(-4px);
    }
  }

  &__value {
    font-size: 2.25rem;
    font-weight: 800;
    color: #1f6d3d;

    span {
      font-size: 1rem;
      color: #6b7280;
      font-weight: 500;
    }
  }

  &__label {
    color: #4b5563;
    margin-top: 0.25rem;
    font-size: 0.9rem;
  }

  &__year {
    color: #9ca3af;
    font-size: 0.75rem;
  }
}

.path {
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.25rem;
  }

  &__card {
    text-align: center;
    padding: 2rem 1.25rem;
    background: #fff;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    position: relative;
    transition: all 0.25s;

    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
      transform: translateY(-3px);
    }
  }

  &__num {
    position: absolute;
    top: -14px;
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

  &__icon {
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

  &__card h3 {
    color: #1f6d3d;
    font-size: 1.05rem;
  }

  &__desc {
    font-size: 0.8rem;
    color: #6b7280;
    line-height: 1.5;
  }
}

.nav-cards {
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.5rem;
  }

  &__card {
    position: relative;
    background: #fff;
    padding: 2rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    transition: all 0.25s;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: #1f6d3d;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

      &::before {
        transform: scaleX(1);
      }

      .nav-cards__arrow {
        transform: translateX(4px);
        color: #1f6d3d;
      }
    }

    h3 {
      color: #1f6d3d;
      font-size: 1.15rem;
      margin: 1rem 0 0.5rem;
    }

    p {
      color: #6b7280;
      font-size: 0.85rem;
      line-height: 1.6;
    }
  }

  &__icon {
    color: #1f6d3d;
  }

  &__arrow {
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    font-size: 1.5rem;
    color: #9ca3af;
    transition: all 0.25s;
  }
}

.motto {
  &__container {
    text-align: center;
    color: #fff;
  }

  &__text {
    font-size: 1.75rem;
    font-style: italic;
    margin-bottom: 0.75rem;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  &__author {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
  }
}
</style>
