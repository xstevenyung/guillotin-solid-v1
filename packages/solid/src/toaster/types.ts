import type { Accessor, Component } from 'solid-js';

export type XPosition = 'right' | 'left' | 'center';

export type YPosition = 'top' | 'bottom';

export type Context = {
  percentage: Accessor<number>;
};

export type ToastComponent = Component<ToastProps>;

export type ToastProps = {
  context: Context;
  dismiss: () => void;
};
