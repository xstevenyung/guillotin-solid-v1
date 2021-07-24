import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { ModalOutlet, setModal } from '../src/modal';
import { ToasterBag, addNotification } from '../src/toaster';
import ExampleNotification from './Notification';

const App: Component = () => {
  return (
    <Main>
      <ModalOutlet />

      <ToasterBag x="center" />

      <button
        type="button"
        onClick={() => setModal({ Component: ExampleModal, data: {} })}
      >
        open modal
      </button>

      <button
        type="button"
        onClick={() =>
          addNotification(ExampleNotification, { message: 'Test test' })
        }
      >
        open toast
      </button>
    </Main>
  );
};

export default App;

// const ExampleToast = props => {
//   return <p>{props.context.percentage()}</p>;
// };

const ExampleModal = () => {
  return <ModalContainer>My custom modal</ModalContainer>;
};

const ModalContainer: Component = styled('div')`
  padding: 1rem;
  background-color: white;
`;

const Main = styled('main')`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vh;
`;
