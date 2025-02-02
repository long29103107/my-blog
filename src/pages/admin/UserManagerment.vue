<template>
  <div>
    <tab :tabData="tabData" :activeKey="activeKey.value" />
  </div>
</template>

<script lang="ts">
import Tab from '@/components/Tab/index.vue'
import type TabType from '@/components/Tab/TabType'
import { defineComponent, ref } from 'vue'
import Profile from '@/views/admin/UserManagerment/Profile/index.vue'
import RolesAndPermissions from '@/views/admin/UserManagerment/RolesAndPermissions/index.vue'

export default defineComponent({
  name: 'UserManagermentAdmin',
  components: { Tab, Profile, RolesAndPermissions },
  setup() {
    const activeKey = ref<String>('1')

    const tabData: TabType[] = [
      { key: '1', label: 'Profile', component: Profile },
      { key: '2', label: 'Roles and Permissions', component: RolesAndPermissions }
    ]

    return {
      tabData,
      activeKey
    }
  }
})
</script>
