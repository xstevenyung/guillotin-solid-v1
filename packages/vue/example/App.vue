<script lang="ts">
import { defineComponent } from 'vue';
import { ModalProvider } from '../src/index';
import Triggers from './Triggers.vue';

export default defineComponent({
  components: { ModalProvider, Triggers },
});
</script>

<template>
  <ModalProvider>
    <Triggers />
  </ModalProvider>
</template>
