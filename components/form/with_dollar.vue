<script setup lang="ts">
const store = useMoneyStore();
</script>

<template>
  <Form v-model="store.form">
    <ElFormItem label="Base">
      <ElInputNumber v-model="store.form.base" />
    </ElFormItem>
    <ElFormItem label="Percentage">
      <ElInputNumber v-model="store.form.percentage" />
    </ElFormItem>
    <ElFormItem label="Times">
      <ElInputNumber v-model="store.form.times" />
    </ElFormItem>
  </Form>
</template>

<style scoped></style>
