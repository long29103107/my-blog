<script setup lang="ts">
import { PropType } from "vue"

defineProps({
    id:{
        type: String,
        required: false
    },
    placeholder:{
        type: String,
        required: false
    },
    name:{
        type: String,
        required: false
    },
    classes:{
        type: String,
        required: false
    },
    modelValue: {
        type: String,
        required: false
    }
})
</script>

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