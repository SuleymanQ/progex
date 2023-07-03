<script setup lang="ts">
const header = ref(null);
const parallax = reactive(useParallax(header));

const cardStyle = computed(() => ({
  transition: ".3s ease-out all",
  transform: `rotateX(${parallax.roll * 60}deg) rotateY(${
    parallax.tilt * 90
  }deg)`,
}));
</script>

<template>
  <div
    ref="header"
    class="w-full h-full flex flex-col items-center justify-center"
  >
    <LazyHeaderLogo :style="cardStyle" />
    <HeaderText />
  </div>
</template>

<style scoped></style>
