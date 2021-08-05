import type { Accessor, Component } from 'solid-js';

export type XPosition = 'right' | 'left' | 'center';

export type YPosition = 'top' | 'bottom';

export type Position = {
  x: XPosition;
  y: YPosition;
};

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
