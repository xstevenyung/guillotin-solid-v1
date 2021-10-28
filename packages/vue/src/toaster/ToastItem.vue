<script lang="ts">
import {
  computed,
  defineComponent,
  onUnmounted,
  PropType,
  ref,
  watchEffect,
} from 'vue';
import { Toast } from './types';
import { TICK } from './constants';

export default defineComponent({
  props: {
    toast: { type: Object as PropType<Toast>, required: true },
    dismiss: { type: Function, required: true },
  },

  setup(props) {
    const remainingDuration = ref(props.toast.config.duration);
    const timerRunning = ref(true);

    function tick() {
      remainingDuration.value = remainingDuration.value - TICK;
    }

    watchEffect(() => {
      if (remainingDuration.value <= 0) {
        props.dismiss();
      }
    });

    const percentage = computed(() => {
      const computed = Math.round(
        (remainingDuration.value * 100) / props.toast.config.duration,
      );

      return computed >= 0 ? computed : 0;
    });

    const interval = setInterval(() => {
      if (timerRunning.value) tick();
    }, TICK);

    onUnmounted(() => {
      clearInterval(interval);
    });

    return { remainingDuration, timerRunning, percentage };
  },
});
</script>

<template>
  <div class="wrapper">
    <div @mouseover="timerRunning = false" @mouseout="timerRunning = true">
      <component
        :is="toast.Component"
        v-bind="{ dismiss, percentage, ...toast.data }"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

.wrapper.scale-enter-active {
  animation: scale-in 0.1s ease-in-out;
}

.wrapper.scale-exit-active {
  animation: disappear-out 0.1s linear;
}

@keyframes scale-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes disappear-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
