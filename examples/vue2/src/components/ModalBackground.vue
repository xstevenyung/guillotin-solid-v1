<template>
  <guillotin-modal-background ref="el"></guillotin-modal-background>
</template>

<script>
import '@guillotin/core';

export default {
  props: {
    close: Function,

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
    if (this.close !== null) {
      this.$refs.el.close = this.close;
      console.log(this.$refs.el);
    }

    if (this.backgroundColor !== null) {
      this.$refs.el.backgroundColor = this.backgroundColor;
    }

    if (this.opacity !== null) {
      this.$refs.el.opacity = this.opacity;
    }
  },

  watch: {
    close: {
      handler(val) {
        if (val !== null) {
          this.$refs.el.close = val;
        }
      },
    },

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
