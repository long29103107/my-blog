<template>
  <a-tabs :activeKey="activeKey" @change="handleTabChange">
    <a-tab-pane v-for="item in tabData" :key="item.key" :tab="item.label">
      <component :is="item.component" v-if="item.component" />
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import { type PropType, defineProps, defineEmits } from 'vue'
import type TabType from '@/components/Tab/TabType'

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

export default defineComponent({
  props: {
    cols: {
      type: String,
      required: false,
      default: '1'
    },
    gap: {
      type: String,
      required: false,
      default: '4'
    }
  },
  setup(props) {
    const numberCols = computed(() => `grid-cols-${props.cols}`)
    const gapCols = computed(() => `gap-${props.gap}`)

    return { numberCols, gapCols }
  }
})
</script>
