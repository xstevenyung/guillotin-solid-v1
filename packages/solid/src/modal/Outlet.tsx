import { Component, onMount } from 'solid-js';
import { mergeProps, Dynamic } from 'solid-js/web';
import { styled } from 'solid-styled-components';
import ModalBackground, { ModalBackgroundComponent } from './Background';
import Fade from '../utils/Fade';
import type { Props as BackgroundProps } from './Background';
import { ModalContextProvider, useModal } from './Context';

type Props = {
  zIndex?: number;
  Background?: ModalBackgroundComponent;
};

const ModalOutlet: Component<Props> = (props) => {
  props = mergeProps({ zIndex: 99999, Background: ModalBackground }, props);

  return (
    <ModalContextProvider>
      <div style="position: relative;">
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
              <Dynamic<BackgroundProps>
                component={props.Background}
                closeModal={closeModal}
                zIndex={props.zIndex}
              />

              <Content style={`z-index: ${props.zIndex + 1}`}>
                <Dynamic<{ closeModal: () => void; [k: string]: any }>
                  component={modal.Component}
                  closeModal={closeModal}
                  {...modal.data}
                />
              </Content>
            </Fade>
          );
        }}
      </div>
    </ModalContextProvider>
  );
};

export default ModalOutlet;

const Content = styled('div')`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
