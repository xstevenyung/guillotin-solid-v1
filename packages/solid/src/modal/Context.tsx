import { createContext, useContext } from 'solid-js';
import { createStore, SetStoreFunction } from 'solid-js/store';
import type { Component } from 'solid-js';

type ModalStore = {
  Component: Component;
  data: object;
};

const closedState: ModalStore = { Component: null, data: {} };

const ModalContext = createContext<{
  modal: ModalStore;
  setModal: SetStoreFunction<ModalStore>;
  closeModal: () => void;
  zIndex: number;
}>();

export const ModalContextProvider: Component<{ zIndex: number }> = (props) => {
  const [modal, setModal] = createStore<ModalStore>({ ...closedState });

  const closeModal = () => setModal({ ...closedState });

  return (
    <ModalContext.Provider
      value={{ modal, setModal, closeModal, zIndex: props.zIndex }}
      children={props.children}
    />
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
