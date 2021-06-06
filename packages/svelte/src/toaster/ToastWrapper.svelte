<script>
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { linear } from 'svelte/easing';

  export let dismiss;
  export let duration = 3000;

  const TICK = 100;
  const animationDuration = 200;

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
    percentage.set(
      Math.round(
        ((remainingDuration - animationDuration - TICK) * 100) / duration,
      ),
    );
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
