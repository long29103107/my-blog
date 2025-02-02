<template>
  <a-layout>
    <a-layout-sider
      v-model:collapsed="isCollapsed"
      :trigger="null"
      collapsible
      class="admin-layout"
    >
      <logo />
      <menu-sidebar />
    </a-layout-sider>
    <a-layout>
      <header-admin :collapsed="isCollapsed" @update:collapsed="handleCollapsed" />

      <content-admin />
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Logo from '@/views/admin/Common/Menu/Logo.vue'
import MenuSidebar from '@/views/admin/Common/Menu/MenuSidebar.vue'
import HeaderAdmin from '@/views/admin/Common/MainAdmin/HeaderAdmin.vue'
import ContentAdmin from '@/views/admin/Common/MainAdmin/ContentAdmin.vue'

export default defineComponent({
  name: 'AdminLayout',
  components: { Logo, MenuSidebar, HeaderAdmin, ContentAdmin },
  setup() {
    const isCollapsed = ref<boolean>(window.innerWidth < 768 ? true : false)

    const handleCollapsed = () => {
      isCollapsed.value = !isCollapsed.value
    }

    return {
      isCollapsed,
      handleCollapsed
    }
  }
})
</script>

<style lang="scss">
@import url('../styles/admin/style.module.scss');
</style>
