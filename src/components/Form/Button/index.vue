<template>
  <button class="ad-button" :type="type">
    <slot />
  </button>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'

type ButtonTypes = 'button' | 'submit' | 'reset' | undefined

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String as PropType<ButtonTypes>,
      required: false,
      default: 'button',
      validator: (value: string) => {
        const _buttonTypes = ['button', 'submit', 'reset']
        return _buttonTypes.includes(value)
      }
    }
  },
  setup(props) {
    return {}
  }
})
</script>
