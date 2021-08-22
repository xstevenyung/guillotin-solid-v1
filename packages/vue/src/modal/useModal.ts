import { inject } from 'vue';
import { MODAL } from './constants';
import type { Ref, Component } from 'vue';

export type State = { Modal: Ref<Component | null>; data: Ref<Object> };

export function useModal() {
  const state = inject<State>(MODAL);

  function setModal(Component, data = {}) {
    state.Modal.value = Component;
    state.data.value = data;
  }

  function closeModal() {
    state.Modal.value = null;
    state.data.value = {};
  }

  return { setModal, closeModal };
}
