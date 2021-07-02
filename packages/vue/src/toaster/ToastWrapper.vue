<template>
  <guillotin-toast-wrapper ref="el">
    <slot />
  </guillotin-toast-wrapper>
</template>

<script>
import { ToastWrapper } from '@guillotin/core';

export default {
  props: { dismiss: Function, percentage: {} },

  mounted() {
    if (!customElements.get('guillotin-toast-wrapper')) {
      customElements.define('guillotin-toast-wrapper', ToastWrapper);
    }

    this.$refs.el.percentage = this.percentage;
    this.$refs.el.dismiss = this.dismiss;
  },
};
</script>
