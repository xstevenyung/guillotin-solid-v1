<script>
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { linear } from 'svelte/easing';

  export let dismiss;
  export let duration = 3000;
  export let TICK = 100;
  export let animationDuration = 200;

  let remainingDuration = duration;

  let timerRunning = true;

  onMount(() => {
    const interval = setInterval(() => {
      if (timerRunning) {
        remainingDuration -= TICK;
      }
    }, TICK);

    return () => clearInterval(interval);
  });

  $: if (remainingDuration - animationDuration <= 0) {
    dismiss();
  }

  const percentage = tweened(100, {
    duration: TICK,
    easing: linear,
  });

  $: {
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
