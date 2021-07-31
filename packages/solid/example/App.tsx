import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { ModalBackground, ModalOutlet, useModal } from '../src/modal';
import { ToasterBag, useToasterBag } from '../src/toaster';
import ExampleNotification from './Notification';

const App: Component = () => {
  return (
    <ModalOutlet>
      <ToasterBag x="center">
        {() => {
          const { setModal } = useModal();
          const { addNotification } = useToasterBag();

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

              <div style="width: 200px; height: 200px; background: red;">
                <ModalOutlet
                  Background={(props) => (
                    <ModalBackground zIndex={props.zIndex} />
                  )}
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
                </ModalOutlet>
              </div>

              <div style="width: 600px; height: 600px; background: gray;">
                <ToasterBag x="center">
                  {() => {
                    const { addNotification } = useToasterBag();
                    return (
                      <button
                        onClick={() =>
                          addNotification(ExampleNotification, {
                            message: "I'm nested",
                          })
                        }
                        type="button"
                      >
                        Open Nested Toast
                      </button>
                    );
                  }}
                </ToasterBag>
              </div>
            </Main>
          );
        }}
      </ToasterBag>
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
