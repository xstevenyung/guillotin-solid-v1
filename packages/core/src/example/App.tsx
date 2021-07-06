import type { Component } from "solid-js";
import styles from "./App.module.css";
import { ModalOutlet, setModal } from "../modal";
import Modal from "./Modal"

const App: Component = () => {
  return (
    <>
      <ModalOutlet />

      <div class={styles.App}>
        <header class={styles.header}>
          <button type="button" onClick={() => setModal({ Component: Modal })}>Open Modal</button>
        </header>
      </div>
    </>
  );
};

export default App;
