import { Component, onMount } from 'solid-js';
import { mergeProps, Dynamic, Show } from 'solid-js/web';
import { styled } from 'solid-styled-components';
import ModalBackground from './Background';
import { modal, closeModal } from './store';

type Props = {
  zIndex?: number;
};

const ModalOutlet: Component<Props> = (props) => {
  props = mergeProps({ zIndex: 99999 }, props);

  onMount(() => {
    window.addEventListener('keydown', (e) => {
      if (!!modal.Component && e.code === 'Escape') {
        closeModal();
      }
    });
  });

  return (
    <Show when={!!modal.Component}>
      <div>
        <div style={`z-index: ${props.zIndex}`}>
          <ModalBackground onClick={closeModal} zIndex={props.zIndex} />
        </div>

        <Content style={`z-index: ${props.zIndex + 1}`}>
          {/* {...$modal.data} */}
          <Dynamic component={modal.Component} handleClose={closeModal} />
        </Content>
      </div>
    </Show>
  );
};

export default ModalOutlet;

const Content = styled('div')`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
  background-color: #fff;
`;
