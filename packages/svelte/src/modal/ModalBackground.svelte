<script>
  export let close;
  export let backgroundColor = 'rgba(229, 231, 235)';
  export let opacity = 0.8;
  export let zIndex = 99999;
</script>

<div
  on:click={close}
  class="background"
  style={`opacity: ${opacity}; background-color: ${backgroundColor}; z-index: ${zIndex}`}
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
