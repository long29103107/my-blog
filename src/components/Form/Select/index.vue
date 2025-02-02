<template>
  <select
    :name="name"
    :id="id"
    :class="classes"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event?.target as HTMLLInputElement).value)"
  >
    <option v-for="option in options" :key="JSON.stringify(option)" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { defineComponent, PropType } from 'vue'
import OptionTypes from './OptionTypes'

export default defineComponent({
  name: 'Select',
  props: {
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
  }
})
</script>
