<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<template>
  <div
    :style="{
      'background-color': 'rgba(229, 231, 235)',
      opacity: 0.8,
      ...$attrs.style,
    }"
  />
</template>

<style scoped>
div {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
