<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <div class="footer__col footer__col--brand">
          <h3 class="footer__title">🌾 Jiangxiang Village</h3>
          <p class="footer__desc">
            A model of rural revitalization in Changshu, Jiangsu. From a disease-ridden swamp to a billion-yuan
            ecological community — the Jiangxiang miracle led by Chang Desheng.
          </p>
          <p class="footer__motto">"Poverty has no roots; wealth is not destined."</p>
        </div>

        <div class="footer__col">
          <h4 class="footer__subtitle">Quick Links</h4>
          <ul class="footer__links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/video">Promotional Video</router-link></li>
            <li><router-link to="/map">Tour Map</router-link></li>
            <li><router-link to="/village">Village Introduction</router-link></li>
            <li><router-link to="/features">Special Features</router-link></li>
          </ul>
        </div>

        <div class="footer__col">
          <h4 class="footer__subtitle">Contact</h4>
          <ul class="footer__contact">
            <li>📍 Zhitang Town, Changshu City, Jiangsu Province</li>
            <li>📮 Near Shajiabang Scenic Area</li>
            <li>🚗 3 min to highway, via G204 & Xitai Rd</li>
            <li>🌐 National 4A Tourist Attraction</li>
          </ul>
        </div>

        <div class="footer__col">
          <h4 class="footer__subtitle">Village Stats</h4>
          <ul class="footer__stats">
            <li><span>192</span> Households</li>
            <li><span>875</span> Residents</li>
            <li><span>3 km²</span> Area</li>
            <li><span>60%+</span> Green Coverage</li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>
          © {{ year }} Jiangxiang Village Social Practice Project. Built with Vue 3.
          <span class="footer__credit">Content based on publicly available sources about Jiangxiang Village (蒋巷村).</span>
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
