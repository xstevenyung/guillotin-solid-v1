import { DEFAULT_DURATION, TICK } from './constants';
import {
  Component,
  createSignal,
  // JSXElement,
  onCleanup,
  createEffect,
  createContext,
} from 'solid-js';
// import type { Accessor} from "solid-js"

// type Context = {
//   percentage: Accessor<number>;
// };

export type Props = {
  dismiss: () => any;
  duration?: number;
  // children: (context: Context) => JSXElement;
};

const ToastWrapper: Component<Props> = props => {
  const [remainingDuration, setRemainingDuration] = createSignal(
    props.duration || DEFAULT_DURATION,
  );
  const tick = () => setRemainingDuration(remainingDuration() - TICK);
  const [timerRunning, setTimerRunning] = createSignal(true);

  createEffect(() => {
    if (remainingDuration() <= 0) {
      props.dismiss();
    }
  });

  const percentage = () => {
    const computed = Math.round(
      (remainingDuration() * 100) / props.duration || DEFAULT_DURATION,
    );
    return computed >= 0 ? computed : 0;
  };

  const interval = setInterval(() => {
    if (timerRunning()) {
      tick();
    }
  }, TICK);

  onCleanup(() => {
    clearInterval(interval);
  });

  return (
    <div
      // transition:scale={{
      //   duration: animationDuration,
      // }}
      onMouseEnter={() => setTimerRunning(false)}
      onmouseleave={() => setTimerRunning(true)}
    >
      {/* TODO: dynamic percentage */}
      <ToastContext.Provider value={{ percentage }}>
        {props.children}
      </ToastContext.Provider>
    </div>
  );
};

export default ToastWrapper;

/*
<script>
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { linear } from 'svelte/easing';
  import {
    DEFAULT_ANIMATION_DURATION,
    DEFAULT_DURATION,
    TICK,
  } from './constants';

  export let dismiss;
  export let duration = DEFAULT_DURATION;
  export let animationDuration = DEFAULT_ANIMATION_DURATION;

  let remainingDuration = duration;

  let timerRunning = true;

  onMount(() => {
    if (remainingDuration === null) {
      return;
    }

    const interval = setInterval(() => {
      if (timerRunning) {
        remainingDuration -= TICK;
      }
    }, TICK);

    return () => clearInterval(interval);
  });

  $: if (
    remainingDuration !== null &&
    remainingDuration - animationDuration <= 0
  ) {
    dismiss();
  }

  const percentage = tweened(100, {
    duration: TICK,
    easing: linear,
  });

  $: if (remainingDuration !== null) {
    const value = Math.round(
      ((remainingDuration - animationDuration - TICK) * 100) / duration,
    );
    percentage.set(value >= 0 ? value : 0);
  }
</script>

<div
  transition:scale={{
    duration: animationDuration,
  }}
  on:mouseenter={() => (timerRunning = false)}
  on:mouseleave={() => (timerRunning = true)}
>
  <slot percentage={$percentage} />
</div>

<style>
  div {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style> 
*/
