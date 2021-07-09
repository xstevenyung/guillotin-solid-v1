import { Component, mergeProps } from 'solid-js';
import { For, Dynamic } from 'solid-js/web';
import { styled } from 'solid-styled-components';
import { dismissNotification, notifications } from './store';
import ToastWrapper from './ToastWrapper';
import { TransitionGroup } from 'solid-transition-group';

type XPosition = 'right' | 'left' | 'center';

type YPosition = 'top' | 'bottom';

type Props = {
  x?: XPosition;
  y?: YPosition;
};

const ToasterBag: Component<Props> = (props) => {
  props = mergeProps({ x: 'right', y: 'bottom' }, props);

  return (
    <Container x={props.x} y={props.y}>
      <TransitionGroup name="scale">
        <For each={notifications()}>
          {(notification) => (
            <WrapperContainer>
              <ToastWrapper dismiss={() => dismissNotification(notification)}>
                {(context) => (
                  <Dynamic
                    component={notification.Component}
                    context={context}
                    {...notification.data}
                  />
                )}
              </ToastWrapper>
            </WrapperContainer>
          )}
        </For>
      </TransitionGroup>
    </Container>
  );
};

export default ToasterBag;

const Container = styled('div')`
  padding: 1rem;
  position: fixed;
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
