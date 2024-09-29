<template>
  <a-menu-item :key="menuItem.key">
    <component :is="menuItem.icon" v-if="menuItem.icon" />
    <span>{{ menuItem.label }}</span>
  </a-menu-item>
</template>

<script lang="ts">
import MenuSidebarItemType from './../../../types/Menu/MenuSidebarItemType'
import { defineComponent, PropType } from 'vue'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'MenuSidebarItem',
  components: { UserOutlined, VideoCameraOutlined, UploadOutlined },
  props: {
    menuItem: {
      type: Object as PropType<MenuSidebarItemType>,
      required: true
    }
  }
})
</script>
