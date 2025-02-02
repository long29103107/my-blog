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
          ? ($event?.target as HTMLLInputElement).checked
          : ($event?.target as HTMLLInputElement).value
      )
    "
  />
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

type InputTypes = 'text' | 'email' | 'password' | 'checkbox' | 'radio'

export default defineComponent({
  props: {
    type: {
      type: String as PropType<InputTypes>,
      required: false,
      default: 'text',
      validator: (value: string) => {
        return ['text', 'email', 'password', 'checkbox', 'radio'].includes(value)
      }
    },
    id: String,
    placeholder: String,
    name: String,
    classes: String,
    modelValue: [String, Boolean]
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const handleInput = () => {
      emit('update:modelValue', props.modelValue)
    }

    return { handleInput }
  }
})
</script>
