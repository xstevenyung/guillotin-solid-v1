import type { Component } from "solid-js";
import { styled } from "solid-styled-components"
import { ModalOutlet, setModal } from "../src/modal";

const App: Component = () => {
  return (
    <>
    <ModalOutlet />

    <button type="button" onClick={() => setModal({Component: ExampleModal })}>open modal</button>
    </>
  );
};

export default App;


const ExampleModal = () => {
  return (<ModalContainer>
  My custom modal
  </ModalContainer>
  )
}

const ModalContainer: Component = styled('div')`
padding: 1rem;
background-color: white;
`