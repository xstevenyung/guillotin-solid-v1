import type { Component } from 'solid-js';
import { createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';

let id = 1;

export type Notification = {
  id: number;
  Component: Component;
  data: object;
};

type State = {
  notifications: Notification[];
};

const ToasterBagContext = createContext<{
  state: State;
  addNotification: (Component, data?: object) => Notification;
  dismissNotification: (notification: Notification) => void;
}>();

export const ToasterBagContextProvider: Component = (props) => {
  const [state, setState] = createStore<State>({
    notifications: [],
  });

  const addNotification = (Component: Component, data = {}) => {
    const newNotification: Notification = { id: id++, Component, data };

    setState({ notifications: [...state.notifications, newNotification] });

    return newNotification;
  };

  const dismissNotification = ({ id }: Notification) => {
    return setState({
      notifications: state.notifications.filter(
        (notification) => notification.id !== id,
      ),
    });
  };

  return (
    <ToasterBagContext.Provider
      value={{ state, addNotification, dismissNotification }}
      children={props.children}
    />
  );
};

export const useToasterBag = () => {
  return useContext(ToasterBagContext);
};
