import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { ModalBackground, ModalProvider, useModal } from '../src/modal';
import { ToasterProvider, useToaster } from '../src/toaster';
import ExampleNotification from './Notification';

const App: Component = () => {
  return (
    <ModalProvider>
      <ToasterProvider config={{ duration: 5000, max: 1 }}>
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

              <button
                type="button"
                onClick={() =>
                  addToast(
                    ExampleNotification,
                    { message: 'custom duration' },
                    { duration: 500 },
                  )
                }
              >
                open custom duration toast
              </button>

              <div style="width: 200px; height: 200px; background: red;">
                <ModalProvider
                  Background={() => <ModalBackground backgroundColor="green" />}
                  nested
                >
                  {() => {
                    const { setModal } = useModal();
                    return (
                      <button
                        onClick={() =>
                          setModal({
                            Component: () => {
                              const { closeModal } = useModal();

                              return (
                                <div class="bg-white p-6 rounded-xl shadow w-80 h-48">
                                  <h1 class="text-3xl font-bold mb-1">
                                    Simple Modal
                                  </h1>

                                  <p class="text-gray-600">
                                    This is a simple modal example created with
                                    Guillotin.
                                  </p>

                                  <button
                                    type="button"
                                    onClick={closeModal}
                                    class="transition duration-250 ease-in-out bg-red-600 hover:bg-red-700 rounded-lg px-6 py-3 text-white font-bold mt-4"
                                  >
                                    You can close it
                                  </button>
                                </div>
                              );
                            },
                          })
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

const ExampleModal = (props) => {
  return (
    <ModalContainer>
      <div>
        <h1>Simple Modal</h1>

        <p>This is a simple modal example created with Guillotin.</p>

        <button type="button" onClick={props.closeModal}>
          You can close it
        </button>
      </div>
    </ModalContainer>
  );
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
