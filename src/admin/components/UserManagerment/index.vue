<template>
  <div>
    <tab :tabData="tabData" :activeKey="activeKey" @update:activeKey="handleActiveTab" />
  </div>
</template>

<script lang="ts" setup>
import Tab from '@/common/components/Tab/index.vue'
import type TabType from '@/common/types/Tab/TabType'
import { defineComponent, ref } from 'vue'

const activeKey = ref<String>('1')

const tabData: TabType[] = [
  {
    key: '1',
    label: 'tab 1',
    content: 'content 1'
  },
  {
    key: '2',
    label: 'tab 2',
    content: 'content 2'
  },
  {
    key: '3',
    label: 'tab 3',
    content: 'content 3'
  }
]

const handleActiveTab = (value: String) => {
  activeKey.value = value
}

defineComponent({
  name: 'UserManagermentAdmin',
  components: { Tab },
  data() {
    return {
      tabData,
      activeKey
    }
  }
})
</script>
