<template>
  <div class="grid" :class="[numberCols, gapCols]"><slot /></div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    cols: {
      type: String,
      required: false,
      default: '1'
    },
    gap: {
      type: String,
      required: false,
      default: '4'
    }
  },
  setup(props) {
    const numberCols = computed(() => `grid-cols-${props.cols}`)
    const gapCols = computed(() => `gap-${props.gap}`)

    return { numberCols, gapCols }
  }
})
</script>

<style lang="scss">
@import url('./style.scss');
</style>
