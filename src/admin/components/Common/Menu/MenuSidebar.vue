<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <menu-sidebar-item v-for="item in dataMenu" :menuItem="item" :key="item.key" />
  </a-menu>
</template>

<script setup lang="ts">
import type MenuSidebarItemType from '../../../types/Common/Menu/MenuSidebarItemType'
import MenuSidebarItem from './MenuSidebarItem.vue'
import { ref, defineComponent } from 'vue'
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons-vue'

const dataMenu: MenuSidebarItemType[] = [
  { key: '1', label: 'Dashboard', icon: VideoCameraOutlined, path: '/admin' },
  { key: '2', label: 'User Managerment', icon: UserOutlined, path: '/admin/user-managerment' }
]
const selectedKeys = ref<string[]>(['1'])

const componenent = defineComponent({
  name: 'MenuSidebar',
  components: { MenuSidebarItem },
  data() {
    return {
      selectedKeys,
      dataMenu
    }
  }
})
</script>
