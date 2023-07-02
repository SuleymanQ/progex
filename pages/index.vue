<script setup lang="ts">
const { $anime } = useNuxtApp();

onMounted(() => {
  $anime({
    targets: "#ping",
    translateX: 250,
    loop: 2,
    duration: 2000
  });
});
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <div id="ping" class="w-20 h-20 bg-orange-200"></div>
  </div>
</template>
