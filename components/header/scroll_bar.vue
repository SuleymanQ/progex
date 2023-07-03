<script setup lang="ts"></script>

<template>
  <div
    class="w-4 h-10 rounded-2xl border absolute bottom-20 flex justify-center p-1"
  >
    <div class="w-2 h-2 bg-white rounded-2xl anime-back"></div>
  </div>
</template>

<style scoped>
@keyframes scroll-animation {
  from {
    transform: translateY(1.25rem);
  }
  to {
    transform: translateY(0);
  }
}
.anime-back {
  animation: scroll-animation 1.5s infinite;
}
</style>
