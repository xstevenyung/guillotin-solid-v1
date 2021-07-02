<template>
  <guillotin-toaster-bag ref="el">
    <div slot="content">
      <div v-for="notification in notifications" :key="notification.id">
        <ToastWrapper
          :dismiss="() => toasterStore.dismiss(notification.id)"
          :percentage="notification.percentage"
        >
          <component
            :is="notification.Component"
            v-bind="notification"
            :dismiss="() => toasterStore.dismiss(notification.id)"
          />
        </ToastWrapper>
      </div>
      <!-- {#each $toasterStore as { Component, id, duration = toasterConstants.DEFAULT_DURATION, animationDuration = toasterConstants.DEFAULT_ANIMATION_DURATION, ...forwardedProps } (id)}
      <ToastWrapper
        dismiss={() => toasterStore.dismiss(id)}
        let:percentage
        {duration}
        {animationDuration}
      >
        <svelte:component
          this={Component}
          {...forwardedProps}
          {percentage}
          dismiss={() => toasterStore.dismiss(id)}
        />
      </ToastWrapper>
    {/each} -->
    </div>
  </guillotin-toaster-bag>
</template>

<script>
import { ToasterBag } from '@guillotin/core';
import { toasterStore } from '@guillotin/core';
import ToastWrapper from './ToastWrapper.vue';

let initialData = [];

const unsubscribe = toasterStore.subscribe(notifications => {
  initialData = notifications;
});

export default {
  components: { ToastWrapper },

  // TODO: handle types from core
  mounted() {
    customElements.define('guillotin-toaster-bag', ToasterBag);

    this.$refs.el.x = this.x;
    this.$refs.el.y = this.y;

    this.unsubscribeFn = toasterStore.subscribe(notifications => {
      this.notifications = notifications;
    });
  },

  destroyed() {
    if (!this.unsubscribeFn) return;
    this.unsubscribeFn();
  },

  props: {
    x: {
      type: String,
      default: 'right',
    },
    y: {
      type: String,
      default: 'bottom',
    },
  },

  data() {
    unsubscribe();

    return {
      notifications: initialData,
      unsubscribeFn: null,
    };
  },

  computed: {
    toasterStore() {
      return toasterStore;
    },
  },

  watch: {
    x(val) {
      this.$refs.el.x = val;
    },
    y(val) {
      this.$refs.el.y = val;
    },
  },
};
</script>
