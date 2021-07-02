<script>
  import { ToasterBag, ToastWrapper, toasterStore, toasterConstants } from "@guillotin/core"

  // TODO: handle types from core
  export let x = 'right';
  export let y = 'bottom';
</script>

<ToasterBag {x} {y}>
  <div slot="content">
    {#each $toasterStore as { Component, id, percentage, duration = toasterConstants.DEFAULT_DURATION, animationDuration = toasterConstants.DEFAULT_ANIMATION_DURATION, ...forwardedProps } (id)}
      <ToastWrapper
        dismiss={() => toasterStore.dismiss(id)}
        {duration}
        {animationDuration}
        {percentage}
      >
        <svelte:component
          this={Component}
          {...forwardedProps}
          {percentage}
          dismiss={() => toasterStore.dismiss(id)}
        />
      </ToastWrapper>
    {/each}
  </div>
</ToasterBag>
