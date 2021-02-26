<script lang="ts">
  import { Timer } from './Timer';
  import { fly } from 'svelte/transition';

  export let dismiss;
  export let duration = 3000;

  let clientWidth;

  const timer = new Timer(dismiss, duration);

  let timerRunning = true;

  $: timerRunning ? timer.resume() : timer.pause();
</script>

<div
  bind:clientWidth
  transition:fly={{
    x: clientWidth,
    delay: 0,
    duration: 200,
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
