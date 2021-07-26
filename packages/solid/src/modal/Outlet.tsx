import { Component, onMount } from 'solid-js';
import { mergeProps, Dynamic } from 'solid-js/web';
import { styled } from 'solid-styled-components';
import ModalBackground from './Background';
import { modal, closeModal } from './store';
import Fade from '../utils/Fade';
import type { Props as BackgroundProps } from './Background';

type Props = {
  zIndex?: number;
  Background?: Component;
};

const ModalOutlet: Component<Props> = (props) => {
  props = mergeProps({ zIndex: 99999, Background: ModalBackground }, props);

  onMount(() => {
    window.addEventListener('keydown', (e) => {
      if (!!modal.Component && e.code === 'Escape') {
        closeModal();
      }
    });
  });

  return (
    <div style="position: relative;">
      {props.children}

      <Fade when={!!modal.Component}>
        <Dynamic<BackgroundProps>
          component={props.Background}
          closeModal={closeModal}
          zIndex={props.zIndex}
        />

        <Content style={`z-index: ${props.zIndex + 1}`}>
          <Dynamic
            component={modal.Component}
            closeModal={closeModal}
            {...modal.data}
          />
        </Content>
      </Fade>
    </div>
  );
};

export default ModalOutlet;

const Content = styled('div')`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
