<template>
  <div class="village-history">
    <div class="village-history__line"></div>
    <div class="village-history__items">
      <div
        v-for="(item, index) in history"
        :key="index"
        class="village-history__item"
        :class="{ 'village-history__item--left': index % 2 === 0 }"
      >
        <div class="village-history__card">
          <div class="village-history__year">{{ item.year }}</div>
          <div class="village-history__content">
            <h3 class="village-history__title">{{ item.title }}</h3>
            <p class="village-history__desc">{{ item.desc }}</p>
          </div>
          <div class="village-history__image">
            <img :src="item.image" :alt="item.title" loading="lazy" />
          </div>
        </div>
        <div class="village-history__dot"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  history: { type: Array, required: true }
})
</script>

<style scoped lang="scss">
.village-history {
  position: relative;
  padding: 2rem 0;

  &__line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #1f6d3d, #88cf9f, #1f6d3d);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }

  &__items {
    position: relative;
  }

  &__item {
    position: relative;
    width: 50%;
    padding: 1.5rem 2rem;
    margin-bottom: 1rem;

    &--left {
      margin-right: auto;
      padding-right: 3rem;
      text-align: right;

      .village-history__card {
        flex-direction: row-reverse;
      }

      .village-history__image {
        margin-right: 1rem;
        margin-left: 0;
      }
    }

    &:not(&--left) {
      margin-left: 50%;
      padding-left: 3rem;
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0 !important;
      padding-left: 50px !important;
      padding-right: 0 !important;
      text-align: left !important;

      .village-history__card {
        flex-direction: row !important;
      }
    }
  }

  &__card {
    display: flex;
    gap: 1rem;
    background: #fff;
    border-radius: 12px;
    padding: 1.25rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    transition: transform 0.25s, box-shadow 0.25s;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }
  }

  &__year {
    font-size: 1.75rem;
    font-weight: 800;
    color: #1f6d3d;
    background: #dcf2e3;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    display: inline-block;
    align-self: flex-start;
    flex-shrink: 0;
  }

  &__content {
    flex: 1;
  }

  &__title {
    font-size: 1.1rem;
    color: #1f6d3d;
    margin-bottom: 2px;
  }

  &__title-cn {
    font-size: 0.85rem;
    color: #9ca3af;
    margin-bottom: 0.5rem;
  }

  &__desc {
    font-size: 0.85rem;
    color: #4b5563;
    line-height: 1.6;
  }

  &__image {
    flex-shrink: 0;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  &__dot {
    position: absolute;
    top: 2rem;
    width: 16px;
    height: 16px;
    background: #d4a017;
    border: 3px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 3px #1f6d3d;
    z-index: 2;

    &--left {
      right: -8px;
    }

    .village-history__item--left & {
      right: -8px;

      @media (max-width: 768px) {
        left: 12px;
        right: auto;
      }
    }

    .village-history__item:not(.village-history__item--left) & {
      left: -8px;

      @media (max-width: 768px) {
        left: 12px;
      }
    }
  }
}
</style>
