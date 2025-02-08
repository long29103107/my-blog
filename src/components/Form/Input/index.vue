<template>
  <input
    :type="type"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :class="classes"
    :value="modelValue"
    @input="handleClick"
  />
</template>

<script lang="ts" setup>
import { type PropType, defineComponent, defineEmits } from 'vue'

type InputTypes = 'text' | 'email' | 'password' | 'checkbox' | 'radio' | undefined

const props = defineProps({
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

const handleClick = (event: Event) => {
  emit(
    'update:modelValue',
    props.type == 'checkbox'
      ? (event?.target as HTMLInputElement).checked
      : (event?.target as HTMLInputElement).value
  )
}

const conponent = defineComponent({
  name: 'Input'
})
</script>
