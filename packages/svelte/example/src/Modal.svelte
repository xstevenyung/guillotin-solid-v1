<script>
  import { modalStore } from '@guillotin/svelte';
  import SecondModal from './SecondModal.svelte';

  export let close;
</script>

<div class="container">
  <button type="button" on:click={() => modalStore.setModal(SecondModal)}
    >Open second modal</button
  >
  <button type="button" on:click={close}>Close</button>
</div>

<style>
  .container {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 0.5rem;
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    overflow: hidden;
  }
</style>
