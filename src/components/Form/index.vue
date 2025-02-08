<template>
  <input
    :type="type"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :class="classes"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<script lang="ts" setup>
import { defineComponent, type PropType, defineProps, defineEmits } from 'vue'

type InputTypes = 'text' | 'email' | 'password' | 'checkbox' | 'radio'

const props = defineProps({
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
})

const emit = defineEmits(['update:modelValue'])

const handleInput = () => {
  emit('update:modelValue', props.modelValue)
}

const component = defineComponent({
  name: 'TextArea'
})

// @input="
//       $emit(
//         'update:modelValue',
//         type == 'checkbox'
//           ? ($event?.target as HTMLLInputElement).checked
//           : ($event?.target as HTMLLInputElement).value
//       )
//     "
</script>
