<template>
  <guillotin-modal-background ref="el" />
</template>

<script>
import { ModalBackground } from '@guillotin/core';

export default {
  props: {
    backgroundColor: {
      type: String,
      default: null,
    },

    opacity: {
      type: Number,
      default: null,
    },
  },

  mounted() {
    customElements.define('guillotin-modal-background', ModalBackground);

    if (this.backgroundColor !== null) {
      this.$refs.el.backgroundColor = this.backgroundColor;
    }

    if (this.opacity !== null) {
      this.$refs.el.opacity = this.opacity;
    }
  },

  watch: {
    backgroundColor: {
      handler(val) {
        if (val !== null) {
          this.$refs.el.backgroundColor = val;
        }
      },
    },

    opacity: {
      handler(val) {
        if (val !== null) {
          this.$refs.el.opacity = val;
        }
      },
    },
  },
};
</script>
