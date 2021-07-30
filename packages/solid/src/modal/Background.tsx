import type { Component } from 'solid-js';
import { mergeProps } from 'solid-js/web';
import { styled } from 'solid-styled-components';

export type Props = {
  zIndex: number;
  closeModal?: () => any;
  opacity?: number;
  backgroundColor?: string;
};

export type ModalBackgroundComponent = Component<Props>;

const ModalBackground: ModalBackgroundComponent = (props) => {
  props = mergeProps(
    {
      backgroundColor: 'rgba(229, 231, 235)',
      opacity: 0.8,
    },
    props,
  );

  return (
    <Container
      {...props}
      onClick={() => props?.closeModal && props.closeModal()}
    />
  );
};

export default ModalBackground;

interface ContainerProps extends Omit<Props, 'closeModal'> {
  onClick: () => void;
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
