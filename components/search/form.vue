<script setup lang="ts">
import { isDark, toggleDark } from "@/composables/dark";
</script>

<template>
  <ElButton @click="toggleDark()">Is Dark: {{ isDark }}</ElButton>
  <ElForm size="large">
    <ElFormItem>
      <ElInput>
        <template #prepend>
          <ElSelect>
            <ElOption value="amount">Amount</ElOption>
            <ElOption value="time">Time</ElOption>
            <ElOption value="$">$</ElOption>
          </ElSelect>
        </template>
      </ElInput>
    </ElFormItem>
  </ElForm>
</template>

<style scoped></style>
