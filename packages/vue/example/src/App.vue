<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ToasterBag />

    <ModalOutlet>
      <template v-slot:background>
        <ModalBackground backgroundColor="green" />
      </template>
    </ModalOutlet>

    <button type="button" @click="open">Open modal</button>

    <button type="button" @click="toast">Toast it!</button>
  </div>
</template>

<script>
import { ModalOutlet, ModalBackground, setModal } from '@guillotin/vue';
import { ToasterBag, addNotification } from '@guillotin/vue';
import HelloWorld from './components/HelloWorld.vue';
import Notification from './components/Notification.vue';

export default {
  components: {
    ModalOutlet,
    ModalBackground,
    ToasterBag,
  },

  methods: {
    open() {
      setModal(HelloWorld, { msg: 'Steven here' });
    },

    toast() {
      addNotification(Notification, { message: "Steven's notification" });
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
