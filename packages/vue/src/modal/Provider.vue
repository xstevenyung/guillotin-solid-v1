<script lang="ts">
import { Transition, provide, defineComponent, shallowRef } from 'vue';
import Background from './Background.vue';
import { MODAL } from './constants';
import PositionableContainer from './PositionableContainer.vue';

export default defineComponent({
  components: { Transition, Background, PositionableContainer },

  setup() {
    const Modal = shallowRef(null);

    provide(MODAL, { Modal });

    return { Modal };
  },
});
</script>

<template>
  <div>
    <slot />

    <Transition name="fade">
      <div v-if="Modal">
        <div :style="{ 'z-index': 99999 }">
          <Background @click="Modal = null" />
        </div>

        <PositionableContainer
          x="center"
          y="center"
          :style="{ 'z-index': 10000 }"
        >
          <Component :is="Modal" :closeModal="() => (Modal = null)" />
        </PositionableContainer>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active {
  animation: fade-in ease-out 0.2s;
}

.fade-leave-active {
  animation: fade-in ease-out 0.2s reverse;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
