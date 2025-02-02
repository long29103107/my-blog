<template>
  <div>
    <tab :tabData="tabData" :activeKey="activeKey.value" />
  </div>
</template>

<script lang="ts" setup>
import Tab from '@/common/components/Tab/index.vue'
import type TabType from '@/components/Tab/TabType'
import { defineComponent, ref } from 'vue'
import Profile from '@/admin/components/UserManagerment/Profile/index.vue'
import RolesAndPermissions from '@/admin/components/UserManagerment/RolesAndPermissions/index.vue'

const activeKey = ref<String>('1')

const tabData: TabType[] = [
  { key: '1', label: 'Profile', component: Profile },
  { key: '2', label: 'Roles and Permissions', component: RolesAndPermissions }
]

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
