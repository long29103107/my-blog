<template>
  <textarea
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :class="classes"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event?.target as HTMLLInputElement).value)"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Textarea',
  props: {
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
  }
})
</script>
