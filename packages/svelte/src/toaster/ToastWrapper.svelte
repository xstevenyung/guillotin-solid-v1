<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  export let dismiss;
  export let duration = 3000;

  const TICK = 100;
  const animationDuration = 200;

  let remainingDuration = duration - animationDuration;

  let timerRunning = true;

  let clientWidth;

  onMount(() => {
    const interval = setInterval(() => {
      if (timerRunning) {
        remainingDuration -= TICK;
      }

      if (remainingDuration <= 0) {
        dismiss();
      }
    }, TICK);

    return () => clearInterval(interval);
  });
</script>

<div
  bind:clientWidth
  transition:fly={{
    x: clientWidth,
    delay: 0,
    duration: animationDuration,
  }}
  on:mouseenter={() => (timerRunning = false)}
  on:mouseleave={() => (timerRunning = true)}
>
  <slot />
</div>

<style>
  div {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>
