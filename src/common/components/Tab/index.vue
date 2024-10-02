<template>
  <a-tabs :activeKey="activeKey" @change="handleTabChange">
    <a-tab-pane v-for="item in tabData" :key="item.key" :tab="item.label">
      <component :is="item.component" v-if="item.component" />
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
import { type PropType, defineProps, defineEmits } from 'vue'
import type TabType from '@/common/types/Tab/TabType'

const props = defineProps({
  tabData: {
    type: Object as PropType<TabType[]>,
    required: true,
    default: []
  },
  activeKey: {
    type: String,
    required: false
  }
})

const emit = defineEmits(['update:activeKey'])

const handleTabChange = (key: string) => {
  emit('update:activeKey', key)
}
</script>
