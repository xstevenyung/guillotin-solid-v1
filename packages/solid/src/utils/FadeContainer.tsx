import { Transition } from 'solid-transition-group';
import { Show } from 'solid-js/web';
import { styled } from 'solid-styled-components';

const FadeContainer = (props) => {
  return (
    <Transition name="fade">
      <Show when={props.when}>
        <Container>{props.children}</Container>
      </Show>
    </Transition>
  );
};

const Container = styled('div')`
  &.fade-enter-active {
    animation: fade-in ease-out 0.2s;
  }
  &.fade-exit-active {
    animation: fade-in ease-out 0.2s reverse;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default FadeContainer;
