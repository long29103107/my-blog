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

<script setup lang="ts">
import { PropType } from 'vue'

type InputTypes = 'text' | 'email' | 'password' | 'checkbox' | 'radio' | undefined

defineProps({
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
})

const emit = defineEmits(['update:modelValue'])

const handleInput = () => {
  emit('update:activeKey', key)
}
</script>
