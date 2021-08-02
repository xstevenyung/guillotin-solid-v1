---
sidebar_position: 3
---

# Modal

A fully-managed, renderless dialog component packed with keyboard features, perfect for building completely custom modal and dialog windows for your next application.

## Simple Example

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

// All modal receive a function `props.closeModal` that you can call to close the modal
const CustomModal = (props) => {
  return (
    <div style="padding: 1rem; background-color: #FFF;">
      <h1>My first modal</h1>

      <button
        onClick={props.closeModal} // 3. Call `props.closeModal` once you want to close the modal
        type="button"
      >
        Close this modal
      </button>
    </div>
  )
}

render(() => <App />, document.getElementById('root'));
```

Or try in CodeSandBox.

## Pass data to your modal component

It's likely that you want to pass data to your modal. You can pass an object of data as the second parameter of `setModal`.

```jsx
import { useModal } from '@guillotin/solid';

const Trigger = () => {
  const { setModal } = useModal();

  return (
    <button
      onClick={() =>
        setModal(CustomModal, {
          // We send data message which will be available under `props.message` in our modal
          // Note: we can send anything to our modal, under the hood, Guillotin uses Solid's Store
          message: 'Hello',
        })
      }
      type="button"
    >
      Open my modal
    </button>
  );
};

const CustomModal = (props) => {
  return (
    <div style="padding: 1rem; background-color: #FFF;">
      {/* We access our data via props */}
      <h1>{props.message}</h1>

      <button onClick={props.closeModal} type="button">
        Close this modal
      </button>
    </div>
  );
};
```

## Changing modal background

Guillotin always try to give you general default to make elements work out-of-the-box. But in some cases, you will need to be able to customize the background which is behind your modal.

Guillotin makes it easy to create your own custom background by using `<ModalBackground />`.

```jsx
import { ModalProvider, ModalBackground } from '@guillotin/solid';

const App = () => {
  return (
    <ModalProvider
      Background={() => (
        <ModalBackground
          backgroundColor="#1F2937" // Optional: you can define the color value, default to: `rgba(229, 231, 235)`
          opacity={0.5} // Optional: define custom opacity, the value should be between 0 and 1. default to `0.8`
        />
      )}
    >
      {/* This is where your app lives */}
    </ModalProvider>
  );
};
```

## Nested Modal Provider

It's possible to use mulitple Guillotin's Modal Provider nested into each other thanks to Solid's powerful Context API.

```jsx
import { ModalProvider } from '@guillotin/solid';

const App = () => {
  return (
    <ModalProvider>
      {/* Any call to `useModal` will display over our whole page */}

      <div style="width: 200px; height: 200px;">
        <ModalProvider>
          {/* Any call to `useModal` will display over our nested container */}
        </ModalProvider>
      </div>
    </ModalProvider>
  );
};
```

## Advanced

### Use custom `z-index`

By default, `<ModalProvider />` uses `zIndex: 99999` to make sure your modal display over most elements but depending of your project structure and needs, you might need to increase or decrease this value.

```jsx
import { ModalProvider } from '@guillotin/solid';

const App = () => {
  return (
    // You can customize the z-index value on the `ModalProvider`
    <ModalProvider zIndex={123}>
      {/* The rest of your app here */}
    </ModalProvider>
  );
};
```

## API References

```jsx
import { ModalProvider, ModalBackground, useModal } from '@guillotin/solid';

const App = () => {
  <ModalProvider zIndex={99999} Background={ModalBackground}>
    <Content />
  </ModalProvider>;
};

const Content = () => {
  const { setModal, closeModal } = useModal();
  return null;
};
```
