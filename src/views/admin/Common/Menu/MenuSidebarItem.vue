<template>
  <a-menu-item :key="menuItem.key">
    <component :is="menuItem.icon" v-if="menuItem.icon" />
    <span
      ><router-link :to="menuItem.path"> {{ menuItem.label }}</router-link></span
    >
  </a-menu-item>
</template>

<script lang="ts">
import type MenuSidebarItemType from '@/types/admin/Menu/MenuSidebarItemType'
import { defineComponent, type PropType } from 'vue'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'MenuSidebarItemAdmin',
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
  },
  props: {
    menuItem: {
      type: Object as PropType<MenuSidebarItemType>,
      required: true
    }
  }
})
</script>
