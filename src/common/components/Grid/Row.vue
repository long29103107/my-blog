<script setup lang="ts">
import { defineProps, computed } from 'vue'
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
</script>

<template>
  <div class="grid" :class="[numberCols, gapCols]"><slot /></div>
</template>

<style lang="scss" setup>
@import url('../../styles/Grid/style.scss');
</style>
