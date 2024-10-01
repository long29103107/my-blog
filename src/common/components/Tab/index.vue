<template>
  <a-tab-pane :key="tabDataItem.key" :tab="tabDataItem.label">{{ tabDataItem.content }}</a-tab-pane>
</template>

<script lang="ts" setup>
import { type PropType, defineComponent, defineProps } from 'vue'
import type TabType from '@/common/types/Tab/TabType'

const props = defineProps({
  tabDataItem: {
    type: Object as PropType<TabType>,
    required: true
  }
})

defineComponent({

}})
</script>
