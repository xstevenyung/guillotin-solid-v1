import { writable } from 'svelte/store';

const modal = writable({ Component: null, data: {} });

export default {
  subscribe: modal.subscribe,

  setModal: (Component, data = {}) => {
    return modal.set({ Component, data });
  },

  closeModal: () => {
    return modal.set({ Component: null, data: {} });
  },
};
