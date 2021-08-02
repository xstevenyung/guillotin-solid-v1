---
sidebar_position: 3
---

# Modal

A fully-managed, renderless dialog component packed with keyboard features, perfect for building completely custom modal and dialog windows for your next application.

## Quick Start

This example will illustrate how to create your first custom modal.

```jsx title="src/index.jsx"
import { ModalProvider, useModal } from '@guillotin/solid';
import { render } from "solid-js/web";

const App = () => {
  return (
    {/* 1. We wrap our app with `ModalProvider`, behind the scene, Guillotin provide a Solid Context */}
    <ModalProvider>
      {/* This is where your app lives */}
      <Trigger />
    </ModalProvider>
  );
};

const Trigger = () => {
  // Access our modal context
  const {
    setModal, // Function to open your custom modal component
    closeModal, // Function to close the current open modal
  } = useModal()

  return (
    <button
      onClick={() => setModal(CustomModal)} // 2. We open our custom modal using `setModal`
      type="button"
    >
      Open my modal
    </button>
  )
}

// Each modal receive `props.closeModal` function that you can call to close the modal
const CustomModal = (props) => {
  <div style="padding: 1rem; background-color: #FFF;">
    <h1>My first modal</h1>

    <button
      onClick={props.closeModal} // 3. Call `props.closeModal` once you want to close the modal
      type="button"
    >
      Close this modal
    </button>
  </div>
}

render(() => <App />, document.getElementById('root'));
```
