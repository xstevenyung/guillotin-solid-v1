<template>
  <guillotin-toast-wrapper ref="el">
    <slot />
  </guillotin-toast-wrapper>
</template>

<script>
export default {
  props: { dismiss: Function },

  mounted() {
    this.$refs.el.dismiss = this.dismiss;
  },
};
</script>
