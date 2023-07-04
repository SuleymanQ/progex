<script setup lang="ts">
const store = useMoneyStore();
</script>

<template>
  <ElForm class="w-full h-full p-2 overflow-auto">
    <slot />
    <ElFormItem>
      <ElButton
        @click="store.calc()"
        size="large"
        class="w-1/2 mx-auto shadow-md"
        type="success"
      >
        Generate
      </ElButton>
      <ElButton @click="store.reset()" type="info"> Reset </ElButton>
    </ElFormItem>
    <ElFormItem>
      {{ store.result }}
    </ElFormItem>
  </ElForm>
</template>

<style scoped></style>
