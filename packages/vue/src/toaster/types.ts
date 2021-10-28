import type { Ref, Component } from 'vue';

export type Config = {
  duration: number;
  max: number;
};

export type Context = {
  percentage: Ref<number>;
};

export type ToastComponent = Component<ToastProps>;

export type ToastProps = {
  context: Context;
  dismiss: () => void;
};

export type Toast = {
  id: number;
  Component: Component;
  data: object;
  config: Config;
};

export type AddToastFunction = (
  Component: ToastComponent,
  data?: object,
  overrideConfig?: Partial<Config>,
) => void;

export type DismissToastFunction = (toast: Pick<Toast, 'id'>) => void;

export * from '../types';
