<script>
  import { notifications, dismiss } from './stores';
  import ToastWrapper from './ToastWrapper.svelte';
</script>

<div class="bag">
  {#each $notifications as { Component, id, ...forwardedProps } (id)}
    <ToastWrapper dismiss={() => dismiss(id)} let:percentage>
      <svelte:component
        this={Component}
        {...forwardedProps}
        {percentage}
        dismiss={() => dismiss(id)}
      />
    </ToastWrapper>
  {/each}
</div>

<style>
  .bag {
    padding: 1rem;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 99999;
  }
</style>
