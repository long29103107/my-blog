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
<script lang="ts" setup>
import type { SelectProps } from 'ant-design-vue'
import { type PropType, defineProps, defineComponent } from 'vue'
import type OptionType from '@/common/types/Form/OptionType'
import { computed } from '@vue/reactivity'

var emit = defineEmits(['update:value'])

const props = defineProps({
  options: {
    type: Object as PropType<OptionType[]>,
    require: false,
    default: []
  },
  value: {
    type: String,
    require: false
  }
})

const mappedOptions = computed<SelectProps['options']>(() => {
  const result: SelectProps['options'] = []

  props.options.forEach((option: OptionType) =>
    result.push({ value: option.key, label: option.label })
  )

  return result
})

const handleChange = (value: string) => {
  const selectedOption = props.options.find((x) => x.key === value)

  emit('update:value', selectedOption?.key)
}
const handleBlur = () => {}
const handleFocus = () => {}
const filterOption = (input: string, option: any) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
}

const value = computed(() => {
  return props.value
})

defineComponent({
  name: 'SearchSelect',
  data() {
    return { value }
  }
})
</script>
