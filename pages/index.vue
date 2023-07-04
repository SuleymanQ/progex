<script setup lang="ts">
useHead({
  title: "Progex Calculator",
});
</script>

<template>
  <div
    class="w-full h-full bg-gradient-to-br item-start from-[#8bd96b] to-[#59b268]"
  >
    <LazyCard />
  </div>
</template>

<style>
.center {
  @apply flex items-center justify-center;
}
.item-start {
  @apply flex items-start justify-center;
}
</style>
