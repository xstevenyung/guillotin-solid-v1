<svelte:options tag="guillotin-modal-outlet" />

<script>
  import modal from './store';
  import { fade } from 'svelte/transition';

  export let zIndex = 99999;
</script>

<svelte:window
  on:keydown={e => {
    if ($modal.Component && e.code === 'Escape') {
      modal.closeModal();
    }
  }}
/>

{#if $modal.Component}
  <div transition:fade={{ duration: 200 }} class="container">
    <div style={`z-index: ${zIndex}`}>
      <slot name="background" />
    </div>

    <div class="content" style={`z-index: ${zIndex + 1}`}>
      <slot name="content" />
    </div>
  </div>
{/if}

<style>
  .content {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
  }
</style>
