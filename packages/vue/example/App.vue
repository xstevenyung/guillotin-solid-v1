<script lang="ts">
import { defineComponent } from 'vue';
import { ModalProvider, ModalBackground } from '../src/index';
import Triggers from './Triggers.vue';

export default defineComponent({
  components: { ModalProvider, Triggers, ModalBackground },
});
</script>

<template>
  <ModalProvider>
    <template v-slot:background="{ close }">
      <ModalBackground @click="close" />
    </template>

    <Triggers />
  </ModalProvider>
</template>
