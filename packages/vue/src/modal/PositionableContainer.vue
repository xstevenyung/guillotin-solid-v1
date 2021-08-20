<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { XPosition, YPosition } from '../types';

export default defineComponent({
  props: {
    x: { type: String as PropType<XPosition>, required: true },
    y: { type: String as PropType<YPosition>, required: true },
  },
});
</script>

<template>
  <div
    :class="{
      'x-center': x === 'center',
      'y-center': y === 'center',
    }"
    :style="{
      ...(x !== 'center' ? { [x]: 0 } : {}),
      ...(y !== 'center' ? { [y]: 0 } : {}),
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
div {
  position: fixed;
  z-index: 99999;
}

div.nested {
  position: absolute;
}

div.x-center {
  left: 50%;
  transform: translate(-50%, 0);
}

div.y-center {
  top: 50%;
  transform: translate(-50%, 0);
}

div.x-center.y-center {
  transform: translate(-50%, -50%);
}
</style>
