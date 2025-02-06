<template>
  <button class="ad-button" :type="type">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { type PropType, defineComponent, defineProps } from 'vue'

type ButtonTypes = 'button' | 'submit' | 'reset' | undefined

var props = defineProps({
  type: {
    type: String as PropType<ButtonTypes>,
    required: false,
    default: 'button',
    validator: (value: string) => {
      const _buttonTypes = ['button', 'submit', 'reset']
      return _buttonTypes.includes(value)
    }
  }
})

const component = defineComponent({
  name: 'Button'
})
</script>
