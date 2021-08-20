<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    close: Function,
  },
});
</script>

<template>
  <div class="container">
    <p>Hello</p>
    <button type="button" @click="close">Close</button>
  </div>
</template>

<style scoped>
.container {
  background-color: black;
  color: white;
  padding: 4rem;
}
</style>
