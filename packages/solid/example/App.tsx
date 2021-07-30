import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { ModalOutlet, useModal } from '../src/modal';
import { ToasterBag, addNotification } from '../src/toaster';
import ExampleNotification from './Notification';

const App: Component = () => {
  return (
    <ModalOutlet>
      <ToasterBag x="center" />

      {() => {
        const { setModal } = useModal();
        return (
          <Main>
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
      }}
    </ModalOutlet>
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
