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
import '@guillotin/core';
import { modalStore } from '@guillotin/core';
import ModalBackground from './ModalBackground.vue';

let initialData = {};

const unsubscribe = modalStore.subscribe(state => {
  initialData = state;
});

export default {
  components: { ModalBackground },

  mounted() {
    if (this.zIndex !== null) {
      this.$refs.el.zIndex = this.zIndex;
    }

    modalStore.subscribe(state => {
      Object.entries(state).forEach(([key, value]) => {
        this[key] = value;
      });
    });
  },

  props: {
    zIndex: {
      type: Number,
      default: null,
    },
  },

  data() {
    unsubscribe();
    return initialData;
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
