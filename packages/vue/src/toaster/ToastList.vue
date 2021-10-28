<script lang="ts">
import { defineComponent, PropType, markRaw } from 'vue';
import ToastItem from './ToastItem.vue';
import { DismissToastFunction, Toast } from './types';

export default defineComponent({
  components: { ToastItem },

  props: {
    toasts: { type: Array as PropType<Toast[]>, required: true },

    dismissToast: {
      type: Function as PropType<DismissToastFunction>,
      required: true,
    },
  },

  setup() {
    return { markRaw };
  },
});
</script>

<template>
  <div>
    <ToastItem
      v-for="toast in toasts"
      :key="toast.id"
      v-bind="{ toast }"
      :dismiss="() => dismissToast(toast)"
    />
  </div>
</template>
