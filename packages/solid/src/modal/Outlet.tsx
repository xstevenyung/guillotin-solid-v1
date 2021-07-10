import { Component, onMount } from 'solid-js';
import { mergeProps, Dynamic } from 'solid-js/web';
import { styled } from 'solid-styled-components';
import ModalBackground from './Background';
import { modal, closeModal } from './store';
import FadeContainer from '../utils/FadeContainer';

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
    <FadeContainer when={!!modal.Component}>
      <div style={`z-index: ${props.zIndex}`}>
        <Dynamic
          component={props.Background}
          handleClose={closeModal}
          zIndex={props.zIndex}
        />
      </div>

      <Content style={`z-index: ${props.zIndex + 1}`}>
        {/* {...$modal.data} */}
        <Dynamic component={modal.Component} handleClose={closeModal} />
      </Content>
    </FadeContainer>
  );
};

export default ModalOutlet;

const Content = styled('div')`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
