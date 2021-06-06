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
