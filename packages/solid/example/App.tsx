import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { ModalBackground, ModalProvider, useModal } from '../src/modal';
import { ToasterProvider, useToaster } from '../src/toaster';
import ExampleNotification from './Notification';

const App: Component = () => {
  return (
    <ModalProvider>
      <ToasterProvider>
        {() => {
          const { setModal } = useModal();
          const { addToast } = useToaster({ x: 'left', y: 'top' });

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
                  addToast(ExampleNotification, { message: 'Test test' })
                }
              >
                open toast
              </button>

              <div style="width: 200px; height: 200px; background: red;">
                <ModalProvider
                  Background={() => <ModalBackground backgroundColor="green" />}
                >
                  {() => {
                    const { setModal } = useModal();
                    return (
                      <button
                        onClick={() =>
                          setModal({ Component: () => <div>Hello</div> })
                        }
                        type="button"
                      >
                        Open Nested Modal
                      </button>
                    );
                  }}
                </ModalProvider>
              </div>

              <div style="width: 600px; height: 600px; background: gray;">
                <ToasterProvider nested positions={[{ x: 'center', y: 'top' }]}>
                  {() => {
                    const { addToast } = useToaster({ x: 'center', y: 'top' });

                    return (
                      <button
                        onClick={() =>
                          addToast(ExampleNotification, {
                            message: "I'm nested",
                          })
                        }
                        type="button"
                      >
                        Open Nested Toast
                      </button>
                    );
                  }}
                </ToasterProvider>
              </div>
            </Main>
          );
        }}
      </ToasterProvider>
    </ModalProvider>
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
  min-height: 150vh;
  min-width: 100vh;
`;
