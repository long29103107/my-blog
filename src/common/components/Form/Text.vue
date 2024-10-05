<template>
  <component class="ad-text" :is="tag" v-bind="props.tag === 'label' ? { for: props.for } : {}">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  tag: {
    type: String,
    required: true,
    default: 'p',
    validator: (value: string) => {
      const _tagTypes = ['h1', 'h2', 'h3', 'p', 'span', 'label']
      return _tagTypes.includes(value)
    }
  },
  for: {
    type: String,
    required: false
  }
})
</script>
