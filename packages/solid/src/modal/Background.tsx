import type { Component } from 'solid-js';
import { mergeProps } from 'solid-js/web';
import { styled } from 'solid-styled-components';
import { useModal } from './Context';

export type Props = {
  opacity?: number;
  backgroundColor?: string;
};

export type ModalBackgroundComponent = Component<Props>;

const ModalBackground: ModalBackgroundComponent = (props) => {
  const { closeModal, zIndex } = useModal();

  props = mergeProps(
    {
      backgroundColor: 'rgba(229, 231, 235)',
      opacity: 0.8,
    },
    props,
  );

  return <Container {...props} zIndex={zIndex} onClick={closeModal} />;
};

export default ModalBackground;

interface ContainerProps extends Props {
  onClick: () => void;
  zIndex: number;
}

const Container: Component<ContainerProps> = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${(props) => props.zIndex};
  background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => props.opacity};
`;
