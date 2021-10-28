import { ref, markRaw } from 'vue';
import type { Toast, AddToastFunction, DismissToastFunction } from './types';

let id = 1;

export function useToasterBag(config) {
  // const state = ref({ toasts: [] });
  const toasts = ref([]);

  const addToast: AddToastFunction = (
    Component,
    data = {},
    overrideConfig = {},
  ) => {
    const newToast: Toast = {
      id: id++,
      Component: markRaw(Component),
      data,
      config: { ...config, ...overrideConfig },
    };

    const newToasts = [...toasts.value, newToast];

    toasts.value = config.max
      ? newToasts.slice(newToasts.length - config.max)
      : newToasts;
  };

  const dismissToast: DismissToastFunction = ({ id }) => {
    toasts.value = toasts.value.filter((toast) => toast.id !== id);
  };

  return { toasts, addToast, dismissToast };
}
