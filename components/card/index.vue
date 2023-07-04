<script setup lang="ts">
// const card = ref(null);
// const { x, y } = useMouse();
// const range = 20;
// function calc(a: number, b: number) {
//   return ((a / b) * range - range / 2).toFixed(1);
// }

// const show = ref(false);

// let cardStyle: ComputedRef<{
//   transition: string;
//   transform: string;
// }>;

// let width = 0;
// let height = 0;

// onMounted(() => {
//   width = window.innerWidth;
//   height = window.innerHeight;
//   show.value = true;
// });

// cardStyle = computed(() => ({
//   transition: ".3s ease-out all",
//   transform: `
//     rotateX(${calc(x.value, width)}deg)
//     rotateY(${calc(y.value, height)}deg)`,
// }));
</script>

<template>
  <div
    class="w-11/12 sm:w-8/12 md:w-7/12 relative top-[15%] bg-white rounded-2xl shadow-2xl border-2 select-none p-4 duration-300"
  >
    <div class="text-2xl font-bold sm:text-3xl md:text-4xl py-2">
      Calculator
    </div>
    <ElTabs ref="card" style="--el-color-primary: #59b268">
      <ElTabPane label="Starter" class="h-[50vh]">
        <LazyHeaderMain />
      </ElTabPane>
      <ElTabPane label="Money ($)">
        <LazyFormWithDollar />
      </ElTabPane>
      <ElTabPane label="Time"> Some test </ElTabPane>
    </ElTabs>
  </div>
</template>

<style scoped></style>
