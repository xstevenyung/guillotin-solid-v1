<script lang="ts">
import { defineComponent } from 'vue';
import { ModalProvider, ModalBackground, ToasterProvider } from '../src/index';
import ModalTriggers from './ModalTriggers.vue';
import ToasterTriggers from './ToasterTriggers.vue';

export default defineComponent({
  components: {
    ModalProvider,
    ModalTriggers,
    ModalBackground,
    ToasterTriggers,
    ToasterProvider,
  },
});
</script>

<template>
  <ToasterProvider>
    <ModalProvider>
      <template v-slot:background="{ close }">
        <ModalBackground @click="close" />
      </template>

      <ModalTriggers />

      <ToasterTriggers />
    </ModalProvider>
  </ToasterProvider>
</template>
