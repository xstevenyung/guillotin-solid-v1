<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { XPosition, YPosition } from '../types';

export default defineComponent({
  props: {
    x: { type: String as PropType<XPosition>, required: true },
    y: { type: String as PropType<YPosition>, required: true },
    nested: { type: Boolean, default: false },
  },
});
</script>

<template>
  <div class="container" :class="{ nested }">
    <div
      class="positioner"
      :class="{
        'x-center': x === 'center',
        'y-center': y === 'center',
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  z-index: 99999;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
}

.container.nested {
  position: absolute;
}

.positioner {
  display: flex;
  width: 100%;
  height: 100%;
}

.x-center {
  justify-content: center;
}

.y-center {
  align-items: center;
}
</style>
