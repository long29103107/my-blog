<template>
  <a-layout-header style="background: #fff; padding: 0 15px">
    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="toggleSidebar" />
    <menu-fold-outlined v-else class="trigger" @click="toggleSidebar" />
  </a-layout-header>
</template>

<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits, ref } from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

const props = defineProps({
  collapsed: {
    type: Boolean,
    required: false,
    default: false
  }
})

const isCollapsed = ref<boolean>()

const emit = defineEmits(['update:collapsed'])

// Method to toggle collapsed state and emit event
const toggleSidebar = () => {
  isCollapsed.value = !props.collapsed
  emit('update:collapsed', isCollapsed.value)
}

const component = defineComponent({
  name: 'HeaderAdmin',
  components: { MenuUnfoldOutlined, MenuFoldOutlined }
})
</script>
