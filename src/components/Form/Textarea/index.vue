<template>
  <textarea
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :class="classes"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from 'vue'

const props = defineProps({
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
    type: String,
    required: false
  }
})

const component = defineComponent({
  name: 'Textarea'
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>
