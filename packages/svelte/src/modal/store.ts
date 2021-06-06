import { writable } from 'svelte/store';

const modal = writable({ Component: null, data: {} });

export default {
  subscribe: modal.subscribe,
};

export const setModal = (Component, data = {}) => {
  return modal.set({ Component, data });
};

export function closeModal() {
  return modal.set({ Component: null, data: {} });
}
