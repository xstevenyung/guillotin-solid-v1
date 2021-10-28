<script lang="ts">
import { Transition, provide, defineComponent, shallowRef, ref } from 'vue';
import Background from './Background.vue';
import { MODAL } from './constants';
import Positionable from './Positionable.vue';

export default defineComponent({
  components: { Transition, Background, Positionable },

  setup() {
    const Modal = shallowRef(null);
    const data = ref({});

    function close() {
      Modal.value = null;
      data.value = {};
    }

    provide(MODAL, { Modal, data, close });

    return { Modal, close, data };
  },
});
</script>

<template>
  <div>
    <slot />

    <Transition name="fade">
      <div v-if="Modal">
        <div :style="{ 'z-index': 99999 }">
          <slot name="background" v-bind="{ close }">
            <Background @click="close" />
          </slot>
        </div>

        <Positionable x="center" y="center" :style="{ 'z-index': 10000 }">
          <Component :is="Modal" :close="close" v-bind="data" />
        </Positionable>
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
