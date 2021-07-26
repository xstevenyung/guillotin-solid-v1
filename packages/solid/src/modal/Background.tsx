import type { Component } from 'solid-js';
import { mergeProps } from 'solid-js/web';
import { styled } from 'solid-styled-components';

export type Props = {
  zIndex: number;
  backgroundColor?: string;
  opacity?: number;
  closeModal: () => any;
};

const ModalBackground: Component<Props> = (props) => {
  props = mergeProps(
    {
      backgroundColor: 'rgba(229, 231, 235)',
      opacity: 0.8,
    },
    props,
  );

  return <Container {...props} onClick={props.closeModal} />;
};

export default ModalBackground;

interface ContainerProps extends Omit<Props, 'closeModal'> {
  onClick: () => void;
}

const Container: Component<ContainerProps> = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${(props) => props.zIndex};
  background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => props.opacity};
`;
