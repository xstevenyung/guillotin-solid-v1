import type { Component, JSX } from 'solid-js';
import { Switch, Match } from 'solid-js/web';
import { styled } from 'solid-styled-components';
import type { Position } from '../types';

export interface Props extends Position, JSX.HTMLAttributes<any> {
  nested: boolean;
}

export const Nest = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Container: Component<Props> = styled('div')`
  position: ${(props) => (props.nested ? 'absolute' : 'fixed')};
  z-index: 99999;
  ${(props) => (props.x === 'center' ? 'left: 50%;' : `${props.x}: 0;`)}
  ${(props) => (props.y === 'center' ? 'top: 50%;' : `${props.y}: 0;`)}
  ${(props) =>
    `transform: translate(${props.x === 'center' ? '-50%' : '0'}, ${
      props.y === 'center' ? '-50%' : '0'
    });`}
`;

const Nestable: Component<Props> = (props) => {
  return (
    <Switch>
      <Match when={props.nested}>
        <Nest>
          <Container {...props} />
        </Nest>
      </Match>

      <Match when={true}>
        <Container {...props} />
      </Match>
    </Switch>
  );
};

export default Nestable;
