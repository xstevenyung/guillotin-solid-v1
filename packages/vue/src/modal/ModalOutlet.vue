<template>
  <guillotin-modal-outlet ref="el">
    <div slot="background">
      <slot name="background">
        <ModalBackground />
      </slot>
    </div>

    <div slot="content">
      <component :is="Component" v-bind="data" />
    </div>
  </guillotin-modal-outlet>
</template>

<script>
import { ModalOutlet } from '@guillotin/core';
import { modalStore } from '@guillotin/core';
import ModalBackground from './ModalBackground.vue';

let initialData = {};

const unsubscribe = modalStore.subscribe(state => {
  initialData = state;
});

export default {
  components: { ModalBackground },

  mounted() {
    customElements.define('guillotin-modal-outlet', ModalOutlet);

    if (this.zIndex !== null) {
      this.$refs.el.zIndex = this.zIndex;
    }

    this.unsubscribeFn = modalStore.subscribe(state => {
      Object.entries(state).forEach(([key, value]) => {
        this[key] = value;
      });
    });
  },

  destroyed() {
    if (!this.unsubscribeFn) return;
    this.unsubscribeFn();
  },

  props: {
    zIndex: {
      type: Number,
      default: null,
    },
  },

  data() {
    unsubscribe();
    return {
      ...initialData,
      unsubscribeFn: null,
    };
  },

  computed: {
    modalStore() {
      return modalStore;
    },
  },

  watch: {
    zIndex: {
      handler(val) {
        if (val !== null) {
          this.$refs.el.zIndex = val;
        }
      },
    },
  },
};
</script>
