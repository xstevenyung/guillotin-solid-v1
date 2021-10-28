<script lang="ts">
import { defineComponent, PropType, provide } from 'vue';
import { Config } from './types';
import ToasterBag from './Bag.vue';
import { availablePositions, DEFAULT_CONFIG, BAGS } from './constants';
import { useToasterBag } from './useToasterBag';
import { resolveKey } from './utils';

export default defineComponent({
  components: { ToasterBag },

  props: {
    // positions: {
    //   type: Array as PropType<Position[]>,
    //   default: availablePositions,
    // },

    nested: { type: Boolean, default: false },

    config: { type: Object as PropType<Partial<Config>>, default: {} },
  },

  setup(props) {
    const config = { ...DEFAULT_CONFIG, ...props.config };

    const bags = availablePositions.reduce((acc, position) => {
      return {
        ...acc,
        [resolveKey(position)]: useToasterBag(config),
      };
    }, {});

    provide(BAGS, bags);

    return { availablePositions, bags, resolveKey };
  },
});
</script>

<template>
  <div>
    <slot />

    <div class="provider-container">
      <ToasterBag
        v-for="position in availablePositions"
        :key="resolveKey(position)"
        v-bind="{ position, nested }"
      />
    </div>
  </div>
</template>

<style scoped>
.provider-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
