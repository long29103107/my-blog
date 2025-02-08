<template>
  <a-tabs :activeKey="activeKey" @change="handleTabChange">
    <a-tab-pane v-for="item in tabData" :key="item.key" :tab="item.label">
      <component :is="item.component" v-if="item.component" />
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
import { type PropType, defineComponent, computed, defineProps, defineEmits } from 'vue'
import type TabType from './TabType'

const props = defineProps({
  cols: {
    type: String,
    required: false,
    default: '1'
  },
  gap: {
    type: String,
    required: false,
    default: '4'
  },
  tabData: {
    type: Object as PropType<TabType[]>,
    required: true,
    default: []
  },
  activeKey: {
    type: Number,
    required: false
  }
})
const emit = defineEmits(['update:activeKey'])

const numberCols = computed(() => `grid-cols-${props.cols}`)

const gapCols = computed(() => `gap-${props.gap}`)

const handleTabChange = (key: string) => {
  emit('update:activeKey', key)
}

const component = defineComponent({
  name: 'Tab'
})
</script>
