import { Component, onMount } from 'solid-js';
import { mergeProps, Dynamic } from 'solid-js/web';
import ModalBackground, { ModalBackgroundComponent } from './Background';
import Fade from '../utils/Fade';
import type { Props as BackgroundProps } from './Background';
import { ModalContextProvider, useModal } from './Context';
import { Nest, Container } from '../utils/Nestable';

type Props = {
  zIndex?: number;
  Background?: ModalBackgroundComponent;
  nested?: boolean;
};

const ModalProvider: Component<Props> = (props) => {
  props = mergeProps(
    { zIndex: 99999, Background: ModalBackground, nested: false },
    props,
  );

  return (
    <ModalContextProvider zIndex={props.zIndex}>
      <Nest>
        {props.children}

        {() => {
          const { modal, closeModal } = useModal();

          onMount(() => {
            window.addEventListener('keydown', (e) => {
              if (!!modal.Component && e.code === 'Escape') {
                closeModal();
              }
            });
          });

          return (
            <Fade when={!!modal.Component}>
              <Dynamic<BackgroundProps> component={props.Background} />

              <Container
                style={`z-index: ${props.zIndex + 1}`}
                x="center"
                y="center"
                nested={props.nested}
              >
                <Dynamic<{ closeModal: () => void; [k: string]: any }>
                  component={modal.Component}
                  closeModal={closeModal}
                  {...modal.data}
                />
              </Container>
            </Fade>
          );
        }}
      </Nest>
    </ModalContextProvider>
  );
};

export default ModalProvider;
