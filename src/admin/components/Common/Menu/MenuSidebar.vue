<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <menu-sidebar-item v-for="item in dataMenu" :menuItem="item" :key="item.key" />
  </a-menu>
</template>

<script lang="ts">
import MenuSidebarItemType from '../../../types/Menu/MenuSidebarItemType'
import MenuSidebarItem from './MenuSidebarItem.vue'
import { ref, defineComponent } from 'vue'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'

const dataMenu: MenuSidebarItemType[] = [
  { key: '1', label: 'Home', icon: UserOutlined },
  { key: '2', label: 'Home 1', icon: VideoCameraOutlined },
  { key: '3', label: 'Home 2', icon: UploadOutlined }
]

export default defineComponent({
  name: 'MenuSidebar',
  components: { MenuSidebarItem },
  data() {
    return {
      selectedKeys: ref<string[]>(['1']),
      dataMenu
    }
  }
})
</script>
