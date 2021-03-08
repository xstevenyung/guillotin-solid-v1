<script>
  import { notifications, dismiss } from './stores';
  import ToastWrapper from './ToastWrapper.svelte';
</script>

<div class="bag">
  {#each $notifications as { Component, id, ...forwardedProps }}
    <ToastWrapper dismiss={() => dismiss(id)}>
      <svelte:component
        this={Component}
        {...forwardedProps}
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
