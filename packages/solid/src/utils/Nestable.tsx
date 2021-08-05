import type { Component } from 'solid-js';
import { Switch, Match } from 'solid-js/web';
import { styled } from 'solid-styled-components';
import type { Position } from '../types';

export interface Props extends Position {
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
  ${(props) =>
    props.x === 'center'
      ? 'left: 50%; transform: translateX(-50%);'
      : `${props.x}: 0;`}
  ${(props) =>
    props.y === 'center'
      ? 'top: 50%; transform: translateX(-50%);'
      : `${props.y}: 0;`}
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
