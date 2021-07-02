<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ModalOutlet />

    <button type="button" @click="open">Open modal</button>
  </div>
</template>

<script>
import { ModalOutlet, setModal } from '@guillotin/vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    ModalOutlet,
  },

  methods: {
    open() {
      setModal(HelloWorld, { msg: 'Steven here' });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
