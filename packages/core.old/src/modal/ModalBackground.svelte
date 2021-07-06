<svelte:options tag={null} />

<script>
  import modal from "./store"
  
  export let backgroundColor = 'rgba(229, 231, 235)';
  export let opacity = 0.8;
</script>

<div
  on:click={modal.closeModal}
  class="background"
  style={`opacity: ${opacity}; background-color: ${backgroundColor};`}
/>

<style>
  .background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
