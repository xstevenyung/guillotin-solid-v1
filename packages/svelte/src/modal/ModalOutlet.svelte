<script>
	import {ModalOutlet as BaseModalOutlet, ModalBackground as BaseModalBackground, modalStore} from "@guillotin/core"

	export let zIndex =	99999;
</script>

<BaseModalOutlet {zIndex}>
  <div slot="background">
    <slot name="background">
      <BaseModalBackground />
    </slot>
  </div>

  <div slot="content">
    {#if $modalStore.Component}
      <svelte:component
        this={$modalStore.Component}
        {...$modalStore.data}
        close={modalStore.closeModal}
      />
    {/if}
  </div>
</BaseModalOutlet>
