<script setup lang="ts">
const card = ref(null);
const { x, y } = useMouse();
const range = 20;

function calc(a: number, b: number) {
  return ((a / b) * range - range / 2).toFixed(1);
}

const cardStyle = computed(() => ({
  transition: ".3s ease-out all",
  transform: `
    rotateX(${calc(x.value, window.innerWidth)}deg) 
    rotateY(${calc(y.value, window.innerHeight)}deg)`,
}));
</script>

<template>
  <div
    ref="card"
    :style="cardStyle"
    class="w-11/12 sm:w-8/12 md:w-7/12 h-3/5 bg-white rounded-2xl center flex-col shadow-2xl border-2"
  >
    <HeaderLogo />
    <HeaderText />
  </div>
</template>

<style scoped></style>
