import { createStore } from 'solid-js/store';

const closedState = { Component: null, data: {} };

const [modal, setModal] = createStore({ ...closedState });

const closeModal = () => setModal({ ...closedState });

export { modal, setModal, closeModal };
