<template>
  <select :name="name" :id="id" :class="classes" :value="modelValue" @input="handleInput">
    <option v-for="option in options" :key="JSON.stringify(option)" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import { defineComponent, type PropType, defineProps, defineEmits } from 'vue'
import type OptionTypes from './OptionTypes'

const props = defineProps({
  id: {
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
    type: String,
    required: false
  },
  options: {
    type: Array as PropType<OptionTypes[]>,
    required: false,
    default: []
  }
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const component = defineComponent({
  name: 'Select'
})
</script>
