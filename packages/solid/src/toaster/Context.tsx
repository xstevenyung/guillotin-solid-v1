import type { Component } from 'solid-js';
import { createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import type { ToastComponent } from './types';

let id = 1;

export type Toast = {
  id: number;
  Component: Component;
  data: object;
};

type State = {
  toasts: Toast[];
};

type AddFunction = (Component: ToastComponent, data?: object) => Toast;

type DismissFunction = (toast: Toast) => void;

const ToasterBagContext = createContext<{
  state: State;
  addToast: AddFunction;
  dismissToast: DismissFunction;
}>();

export const ToasterBagContextProvider: Component = (props) => {
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

  return (
    <ToasterBagContext.Provider
      value={{ state, addToast, dismissToast }}
      children={props.children}
    />
  );
};

export const useToasterBag = () => {
  return useContext(ToasterBagContext);
};
