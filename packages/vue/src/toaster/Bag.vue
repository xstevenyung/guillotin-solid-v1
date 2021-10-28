<script lang="ts">
import { defineComponent, inject, PropType, watch, watchEffect } from 'vue';
import { Position } from './types';
import Nestable from '../shared/Nestable.vue';
import ToastList from './ToastList.vue';
import { resolveKey } from './utils';
import { BAGS } from './constants';

export default defineComponent({
  components: { Nestable, ToastList },

  props: {
    position: {
      type: Object as PropType<Position>,
      default: { x: 'right', y: 'bottom' },
    },

    nested: { type: Boolean, default: false },
  },

  setup(props) {
    const bags = inject(BAGS);

    const { toasts, dismissToast } = bags[resolveKey(props.position)];

    return { toasts, dismissToast, resolveKey };
  },
});
</script>

<template>
  <Nestable v-bind="{ position, nested }">
    <TransitionGroup name="scale">
      <ToastList
        :key="resolveKey(position)"
        v-bind="{ toasts, dismissToast }"
      />
    </TransitionGroup>
  </Nestable>
</template>
