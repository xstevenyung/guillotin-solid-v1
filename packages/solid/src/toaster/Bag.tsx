import type { Component } from 'solid-js';
import { mergeProps } from 'solid-js';
import { For, Dynamic } from 'solid-js/web';
import { styled } from 'solid-styled-components';
import ToastWrapper from './ToastWrapper';
import { TransitionGroup } from 'solid-transition-group';
import type { ToastProps, XPosition, YPosition } from './types';
import { ToasterBagContextProvider, useToasterBag } from './Context';

type Props = {
  x?: XPosition;
  y?: YPosition;
};

const ToasterBag: Component<Props> = (props) => {
  props = mergeProps({ x: 'right', y: 'bottom' }, props);

  return (
    <ToasterBagContextProvider>
      <div style="position: relative; width: 100%; height: 100%;">
        {props.children}

        <Container x={props.x} y={props.y}>
          <TransitionGroup name="scale">
            <NotificationList />
          </TransitionGroup>
        </Container>
      </div>
    </ToasterBagContextProvider>
  );
};

export default ToasterBag;

const NotificationList = () => {
  const { state, dismissToast } = useToasterBag();

  return (
    <For
      each={state.toasts}
      children={(toast) => {
        const dismiss = () => {
          dismissToast(toast);
        };

        return (
          <WrapperContainer>
            <ToastWrapper
              dismiss={dismiss}
              // @ts-ignore
              children={(context) => (
                <Dynamic<ToastProps>
                  component={toast.Component}
                  dismiss={dismiss}
                  context={context}
                  {...toast.data}
                />
              )}
            />
          </WrapperContainer>
        );
      }}
    ></For>
  );
};

const Container: Component<Props> = styled('div')`
  padding: 1rem;
  position: absolute;
  z-index: 99999;
  ${(props) =>
    props.x === 'center'
      ? 'left: 50%; transform: translateX(-50%);'
      : `${props.x}: 0;`}
  ${(props) => props.y}: 0;
`;

const WrapperContainer = styled('div')`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;

  &.scale-enter-active {
    animation: scale-in 0.1s ease-in-out;
  }

  &.scale-exit-active {
    animation: disappear-out 0.1s linear;
  }

  @keyframes scale-in {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes disappear-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
