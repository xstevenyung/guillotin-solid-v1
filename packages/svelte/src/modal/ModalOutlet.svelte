<script>
  import ModalBackground from './ModalBackground.svelte';
  import modal, { closeModal } from './store';
  import { fade } from 'svelte/transition';

  export let zIndex = 99999;
</script>

{#if $modal}
  <div transition:fade={{ duration: 200 }} class="container">
    <slot name="background" close={closeModal}>
      <ModalBackground close={closeModal} {zIndex} />
    </slot>

    <div class="content" style={`z-index: ${zIndex + 1}`}>
      <svelte:component this={$modal} close={closeModal} />
    </div>
  </div>
{/if}

<style>
  .content {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
    background-color: #fff;
  }
</style>
