<template>
  <a-tabs :activeKey="activeKey">
    <a-tab-pane v-for="item in tabData" :key="item.key" :tab="item.label">
      {{ item.content }}
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
import { type PropType, defineProps } from 'vue'
import type TabType from '@/common/types/Tab/TabType'

const props = defineProps({
  tabData: {
    type: Object as PropType<TabType[]>,
    required: true,
    default: []
  },
  activeKey: {
    type: String,
    required: true
  }
})
</script>
