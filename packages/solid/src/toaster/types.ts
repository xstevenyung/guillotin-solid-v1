import type { Accessor, Component } from 'solid-js';

export type Context = {
  percentage: Accessor<number>;
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
};

export * from '../types';
