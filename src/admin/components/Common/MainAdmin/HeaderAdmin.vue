<template>
  <a-layout-header style="background: #fff; padding: 0 15px">
    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="toggleSidebar" />
    <menu-fold-outlined v-else class="trigger" @click="toggleSidebar" />
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'HeaderAdmin',
  components: { MenuUnfoldOutlined, MenuFoldOutlined },
  props: {
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props, { emit }) {
    const isCollapsed = ref<boolean>()

    // Method to toggle collapsed state and emit event
    const toggleSidebar = () => {
      isCollapsed.value = !props.collapsed
      emit('update:collapsed', isCollapsed.value)
    }

    return {
      isCollapsed,
      toggleSidebar
    }
  }
})
</script>
