<script lang="ts">
import { defineComponent } from 'vue';
import { useToaster } from '../src';
import Toast from './Toast.vue';

export default defineComponent({
  setup() {
    const { addToast } = useToaster({ x: 'right', y: 'top' });

    function send() {
      return addToast(Toast);
    }

    return { send };
  },
});
</script>

<template>
  <button type="button" @click="send">Send Toaster</button>
</template>
