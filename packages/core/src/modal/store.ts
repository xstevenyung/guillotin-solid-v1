import Background from './Background'
import { createStore } from 'solid-js/store'

const closeState = {
  Component: null,
  Background: () => Background,
  data: {},
}

const [modal, setModal] = createStore({ ...closeState })

const closeModal = () => setModal({ ...closeState })

export { modal, setModal, closeModal }
