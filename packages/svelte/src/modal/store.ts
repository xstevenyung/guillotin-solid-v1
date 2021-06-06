import { writable } from 'svelte/store';

const modal = writable(null);

export default {
  subscribe: modal.subscribe,
};

export const setModal = modal.set;

export function closeModal() {
  return modal.set(null);
}
