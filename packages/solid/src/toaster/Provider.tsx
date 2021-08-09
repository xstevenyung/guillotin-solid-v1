import {
  useContext,
  createContext,
  mergeProps,
  createMemo,
  createEffect,
} from 'solid-js';
import type { Component } from 'solid-js';
import { For } from 'solid-js/web';
import ToasterBag from './Bag';
import type { Position, ToastComponent, Toast, Config } from './types';
import { createStore } from 'solid-js/store';
import { DEFAULT_CONFIG } from './constants';

let id = 1;

export const ToasterContext = createContext();

const availablePositions: Position[] = [
  { x: 'right', y: 'bottom' },
  { x: 'left', y: 'bottom' },
  { x: 'center', y: 'bottom' },
  { x: 'right', y: 'top' },
  { x: 'left', y: 'top' },
  { x: 'center', y: 'top' },
];

type State = {
  toasts: Toast[];
};

type AddFunction = (Component: ToastComponent, data?: object) => Toast;

type DismissFunction = (toast: Toast) => void;

type ToasterBagStore = {
  state: State;
  addToast: AddFunction;
  dismissToast: DismissFunction;
};

const createToasterBagStore: (config: Config) => ToasterBagStore = (config) => {
  const [state, setState] = createStore<State>({
    toasts: [],
  });

  const addToast: AddFunction = (Component, data = {}) => {
    const newToast: Toast = { id: id++, Component, data };

    const newToasts = [...state.toasts, newToast];

    setState({
      toasts: config.max
        ? newToasts.slice(newToasts.length - config.max)
        : newToasts,
    });

    return newToast;
  };

  const dismissToast: DismissFunction = ({ id }) => {
    return setState({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    });
  };

  return { state, addToast, dismissToast };
};

const resolveKey = ({ x, y }: Position) => {
  return [x, y].join('-');
};

const ToasterProvider: Component<{
  positions?: Position[];
  nested?: boolean;
  config?: Partial<Config>;
}> = (props) => {
  props = mergeProps(
    { positions: availablePositions, nested: false, config: {} },
    props,
  );

  const config = createMemo<Config>(() => ({
    ...DEFAULT_CONFIG,
    ...props.config,
  }));

  const bags = props.positions.reduce((acc, position) => {
    return { ...acc, [resolveKey(position)]: createToasterBagStore(config()) };
  }, {});

  return (
    <ToasterContext.Provider value={bags}>
      {props.children}

      <div style="position: relative; width: 100%; height: 100%;">
        <For each={props.positions}>
          {(position) => (
            <ToasterBag {...position} nested={props.nested} config={config()} />
          )}
        </For>
      </div>
    </ToasterContext.Provider>
  );
};

export default ToasterProvider;

export const useToaster: (position: Position) => ToasterBagStore = (
  position,
) => {
  const bags = useContext(ToasterContext);
  return bags[resolveKey(position)];
};
