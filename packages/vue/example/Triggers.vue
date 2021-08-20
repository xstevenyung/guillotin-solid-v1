<script lang="ts">
import { defineComponent } from 'vue';
import { useModal } from '../src/modal/useModal';
import Modal from './Modal.vue';

export default defineComponent({
  setup() {
    const { setModal } = useModal();

    return { setModal, Modal };
  },
});
</script>

<template>
  <button type="button" @click="setModal(Modal)">Open</button>
</template>
