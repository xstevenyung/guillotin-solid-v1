import { inject } from 'vue';
import { MODAL } from './constants';
import type { Ref, Component } from 'vue';

export type State = { Modal: Ref<Component | null> };

export function useModal() {
  const state = inject<State>(MODAL);

  function setModal(Component) {
    state.Modal.value = Component;
  }

  function closeModal() {
    state.Modal.value = null;
  }

  return { setModal, closeModal };
}
