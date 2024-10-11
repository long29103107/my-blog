<template>
  <a-menu-item :key="menuItem.key">
    <component :is="menuItem.icon" v-if="menuItem.icon" />
    <span
      ><router-link :to="menuItem.path"> {{ menuItem.label }}</router-link></span
    >
  </a-menu-item>
</template>

<script setup lang="ts">
import type MenuSidebarItemType from '../../../types/Common/Menu/MenuSidebarItemType'
import { defineComponent, type PropType } from 'vue'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'

const props = defineProps({
  menuItem: {
    type: Object as PropType<MenuSidebarItemType>,
    required: true
  }
})

const componenent = defineComponent({
  name: 'MenuSidebarItem',
  components: { UserOutlined, VideoCameraOutlined, UploadOutlined }
})
</script>
