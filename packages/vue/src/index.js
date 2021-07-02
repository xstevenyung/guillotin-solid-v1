import Vue from 'vue';
import { modalStore } from '@guillotin/core';

Vue.config.ignoredElements = [/^guillotin\-\w*/];

export const { setModal, closeModal } = modalStore;
export { default as ModalOutlet } from './ModalOutlet.vue';
export { default as ModalBackground } from './ModalBackground.vue';
