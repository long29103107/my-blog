<template>
  <a-select
    :value="value"
    show-search
    placeholder="Select a person"
    style="width: 100%"
    :options="mappedOptions"
    :filter-option="filterOption"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  ></a-select>
</template>
<script lang="ts">
import { defineComponent, computed, type PropType } from 'vue'
import type { SelectProps } from 'ant-design-vue'
import type OptionType from './OptionType'

export default defineComponent({
  name: 'SearchSelect',
  props: {
    options: {
      type: Array as PropType<OptionType[]>,
      required: false,
      default: () => []
    },
    value: {
      type: String,
      required: false
    }
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const mappedOptions = computed<SelectProps['options']>(() => {
      return props.options.map((option) => ({
        value: option.key,
        label: option.label
      }))
    })

    const handleChange = (value: string) => {
      const selectedOption = props.options.find((x) => x.key === value)
      emit('update:value', selectedOption?.key)
    }

    const filterOption = (input: string, option: any) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }

    const handleFocus = () => {}
    const handleBlur = () => {}

    return {
      mappedOptions,
      handleChange,
      filterOption,
      handleFocus,
      handleBlur
    }
  }
})
</script>
