<template>
  <a-menu-item :key="menuItem.key">
    <component :is="menuItem.icon" v-if="menuItem.icon" />
    <span
      ><router-link :to="menuItem.path"> {{ menuItem.label }}</router-link></span
    >
  </a-menu-item>
</template>

<script lang="ts" setup>
import type MenuSidebarItemType from '@/types/admin/Menu/MenuSidebarItemType'
import { defineComponent, defineProps, type PropType } from 'vue'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'

const props = defineProps({
  menuItem: {
    type: Object as PropType<MenuSidebarItemType>,
    required: true
  }
})

const component = defineComponent({
  name: 'MenuSidebarItemAdmin',
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
  }
})
</script>
