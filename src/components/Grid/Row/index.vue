<template>
  <div class="grid" :class="[numberCols, gapCols]"><slot /></div>
</template>

<script lang="ts" setup>
import { defineComponent, computed, defineProps } from 'vue'

const props = defineProps({
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
})

const numberCols = computed(() => `grid-cols-${props.cols}`)
const gapCols = computed(() => `gap-${props.gap}`)

const component = defineComponent({
  name: 'GridRow'
})
</script>

<style lang="scss">
@import url('./style.scss');
</style>
