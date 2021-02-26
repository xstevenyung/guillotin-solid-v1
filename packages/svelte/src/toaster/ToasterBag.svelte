<script lang="ts">
  import { notifications, dismiss } from './stores';
</script>

<div class="container">
  {#each $notifications as { Component, id, ...forwardedProps } (id)}
    <svelte:component
      this={Component}
      {...forwardedProps}
      dismiss={() => dismiss(id)}
    />
  {/each}
</div>

<style>
  .container {
    position: fixed;
    right: 0;
    bottom: 0;
  }
</style>
