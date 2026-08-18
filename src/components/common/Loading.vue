<template>
  <div class="loading">
    <div class="loading__spinner"></div>
    <p class="loading__text">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: 'Loading...'
  }
})
</script>

<style scoped lang="scss">
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;

  &__spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #dcf2e3;
    border-top-color: #1f6d3d;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-bottom: 1rem;
  }

  &__text {
    color: #6b7280;
    font-size: 0.9rem;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
