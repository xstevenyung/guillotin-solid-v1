import { useContext, createContext, mergeProps } from 'solid-js';
import type { Component } from 'solid-js';
import { For } from 'solid-js/web';
import ToasterBag from './Bag';
import type { Position, ToastComponent, Toast } from './types';
import { createStore } from 'solid-js/store';

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

const createToasterBagStore: () => ToasterBagStore = () => {
  const [state, setState] = createStore<State>({
    toasts: [],
  });

  const addToast: AddFunction = (Component, data = {}) => {
    const newToast: Toast = { id: id++, Component, data };

    setState({ toasts: [...state.toasts, newToast] });

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

const ToasterProvider: Component<{ positions?: Position[] }> = (props) => {
  props = mergeProps({ positions: availablePositions }, props);

  const bags = props.positions.reduce((acc, position) => {
    return { ...acc, [resolveKey(position)]: createToasterBagStore() };
  }, {});

  return (
    <ToasterContext.Provider value={bags}>
      {props.children}

      <div style="position: relative; width: 100%; height: 100%;">
        <For
          each={props.positions}
          children={(position) => <ToasterBag {...position} />}
        />
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
