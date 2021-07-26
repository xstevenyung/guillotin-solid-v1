import type { Accessor } from 'solid-js';

export type XPosition = 'right' | 'left' | 'center';

export type YPosition = 'top' | 'bottom';

export type Context = {
  percentage: Accessor<number>;
};

export type ToastProps = {
  context: Context;
};
