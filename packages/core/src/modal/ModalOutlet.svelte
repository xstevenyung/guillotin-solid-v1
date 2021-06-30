<svelte:options tag="guillotin-modal-outlet" />

<script>
  // import ModalBackground from './ModalBackground.svelte';
  import modal from './store';
  import { fade } from 'svelte/transition';

  export let zIndex = 99999;
  // export let close;

  // export let close;
  // export let backgroundColor = 'rgba(229, 231, 235)';
  // export let opacity = 0.8;
  // export let zIndex = 99999;
</script>

<svelte:window
  on:keydown={e => {
    if ($modal.Component && e.code === 'Escape') {
      // closeModal();
      modal.closeModal();
    }
  }}
/>

{#if $modal.Component}
  <div transition:fade={{ duration: 200 }} class="container">
    <!-- <slot name="background" close={closeModal}> -->
    <div style={`z-index: ${zIndex}`}>
      <slot name="background">
        <!-- <div
            on:click={closeModal}
            class="background"
            style={`opacity: ${opacity}; background-color: ${backgroundColor}; z-index: ${zIndex}`}
          /> -->
        <!-- <ModalBackground close={closeModal} {zIndex} /> -->
      </slot>
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
    transform: translate(-50%);
    background-color: transparent;
  }
</style>
