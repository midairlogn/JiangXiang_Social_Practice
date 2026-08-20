<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <div class="footer__col footer__col--brand">
          <h3 class="footer__title">🌾 蒋巷村</h3>
          <p class="footer__desc">
            江苏省常熟市乡村振兴典范。从血吸虫病流行的穷乡僻壤到产值十亿的生态社区——两代书记接力书写的蒋巷奇迹。
          </p>
          <p class="footer__motto">"穷不会生根，富不是天生。"</p>
        </div>

        <div class="footer__col">
          <h4 class="footer__subtitle">快速导航</h4>
          <ul class="footer__links">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/video">宣传片</router-link></li>
            <li><router-link to="/map">导览地图</router-link></li>
            <li><router-link to="/village">村庄介绍</router-link></li>
            <li><router-link to="/features">特色展示</router-link></li>
          </ul>
        </div>

        <div class="footer__col">
          <h4 class="footer__subtitle">联系方式</h4>
          <ul class="footer__contact">
            <li>📍 江苏省常熟市支塘镇</li>
            <li>📮 毗邻沙家浜风景区</li>
            <li>🚗 3分钟上高速，204国道与锡太公路交汇</li>
            <li>🌐 国家4A级旅游景区</li>
          </ul>
        </div>

        <div class="footer__col">
          <h4 class="footer__subtitle">村庄数据</h4>
          <ul class="footer__stats">
            <li><span>200</span> 户</li>
            <li><span>878</span> 人</li>
            <li><span>3 km²</span> 面积</li>
            <li><span>60%+</span> 绿化覆盖率</li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>
          © {{ year }} 六朝松小纵队 · 蒋巷村社会实践项目。基于 Vue 3 构建。
          <span class="footer__credit">内容来源于蒋巷村公开资料。</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const year = computed(() => new Date().getFullYear())
</script>

<style scoped lang="scss">
.footer {
  background: linear-gradient(135deg, #16482b 0%, #0f3a21 100%);
  color: rgba(255, 255, 255, 0.85);
  padding: 3rem 0 1.5rem;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  &__title {
    font-size: 1.3rem;
    color: #fff;
    margin-bottom: 0.75rem;
  }

  &__desc {
    font-size: 0.875rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.75rem;
  }

  &__motto {
    font-style: italic;
    color: #88cf9f;
    font-size: 0.9rem;
  }

  &__subtitle {
    color: #fff;
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }

  &__links, &__contact, &__stats {
    list-style: none;

    li {
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
      color: rgba(255, 255, 255, 0.7);

      a {
        color: rgba(255, 255, 255, 0.7);
        transition: color 0.2s;

        &:hover {
          color: #88cf9f;
        }
      }
    }
  }

  &__stats li span {
    color: #d4a017;
    font-weight: 700;
    font-size: 1rem;
  }

  &__bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 1.5rem;
    text-align: center;

    p {
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  &__credit {
    display: block;
    margin-top: 0.25rem;
    font-size: 0.75rem;
  }
}
</style>
