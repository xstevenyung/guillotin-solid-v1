import { Component, mergeProps } from 'solid-js';
import { For, Dynamic } from 'solid-js/web';
import { styled } from 'solid-styled-components';
import { dismissNotification, notifications } from './store';
import ToastWrapper from './ToastWrapper';

type XPosition = 'right' | 'left' | 'center';

type YPosition = 'top' | 'bottom';

type Props = {
  x?: XPosition;
  y?: YPosition;
};

const ToasterBag: Component<Props> = props => {
  props = mergeProps({ x: 'right', y: 'bottom' }, props);

  return (
    <Container x={props.x} y={props.y}>
      <For each={notifications()}>
        {notification => (
          <ToastWrapper dismiss={() => dismissNotification(notification)}>
            {context => (
              <Dynamic
                component={notification.Component}
                context={context}
                {...notification.data}
              />
            )}
          </ToastWrapper>
        )}
      </For>
    </Container>
  );
};

export default ToasterBag;

const Container = styled('div')`
  padding: 1rem;
  position: fixed;
  z-index: 99999;
  ${props =>
    props.x === 'center'
      ? 'left: 50%; transform: translateX(-50%);'
      : `${props.x}: 0;`}
  ${props => props.y}: 0;
`;
