import { Component, onMount } from 'solid-js';
import { mergeProps, Dynamic, Show } from 'solid-js/web';
import { styled } from 'solid-styled-components';
import ModalBackground from './Background';
import { modal, closeModal } from './store';

type Props = {
  zIndex?: number;
};

const ModalOutlet: Component<Props> = props => {
  props = mergeProps({ zIndex: 99999 }, props);

  onMount(() => {
    window.addEventListener('keydown', e => {
      if (!!modal.Component && e.code === 'Escape') {
        closeModal();
      }
    });
  });

  return (
    <Show when={!!modal.Component}>
      <div>
        <div style={`z-index: ${props.zIndex}`}>
          <ModalBackground onClick={closeModal} zIndex={props.zIndex} />
        </div>

        <Content style={`z-index: ${props.zIndex + 1}`}>
          {/* {...$modal.data} */}
          <Dynamic component={modal.Component} handleClose={closeModal} />
        </Content>
      </div>
    </Show>
  );
};

export default ModalOutlet;

const Content = styled('div')`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
  background-color: #fff;
`;

{
  /* <script>
  import ModalBackground from './ModalBackground.svelte';
  import modal, { closeModal } from './store';
  import { fade } from 'svelte/transition';

  export let zIndex = 99999;
</script>

<svelte:window
  on:keydown={(e) => {
    if ($modal.Component && e.code === 'Escape') {
      closeModal();
    }
  }}
/>

{#if $modal.Component}
  <div transition:fade={{ duration: 200 }} class="container">
    <slot name="background" close={closeModal}>
      <ModalBackground close={closeModal} {zIndex} />
    </slot>

    <div class="content" style={`z-index: ${zIndex + 1}`}>
      <svelte:component
        this={$modal.Component}
        {...$modal.data}
        close={closeModal}
      />
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
</style> */
}
