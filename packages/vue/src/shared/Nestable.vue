<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { Position } from '../types';

export default defineComponent({
  props: {
    position: { type: Object as PropType<Position>, required: true },
    nested: { type: Boolean, default: false },
  },
});
</script>

<template>
  <div :class="{ nested }">
    <div
      v-bind="$attrs"
      class="nestable-container"
      :style="[
        {
          'z-index': 99999,
          position: nested ? 'absolute' : 'fixed',
          transform: `translate(
            ${position.x === 'center' ? '-50%' : '0'},
            ${position.y === 'center' ? '-50%' : '0'}
          )`,
        },
        position.x === 'center' ? { left: '50%' } : { [position.x]: 0 },
        position.y === 'center' ? { top: '50%' } : { [position.y]: 0 },
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.nested {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
