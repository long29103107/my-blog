<template>
  <input
    :type="type"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :class="classes"
    :value="modelValue"
    @input="
      $emit(
        'update:modelValue',
        type == 'checkbox'
          ? ($event?.target as HTMLInputElement).checked
          : ($event?.target as HTMLInputElement).value
      )
    "
  />
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'

type InputTypes = 'text' | 'email' | 'password' | 'checkbox' | 'radio' | undefined

export default defineComponent({
  name: 'Input',
  props: {
    type: {
      type: String as PropType<InputTypes>,
      required: false,
      default: 'text',
      validator: (value: string) => {
        const _buttonTypes = ['text', 'email', 'password', 'checkbox', 'radio']
        return _buttonTypes.includes(value)
      }
    },
    id: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    classes: {
      type: String,
      required: false
    },
    modelValue: {
      type: [String, Boolean],
      required: false
    }
  }
})
</script>
