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
import Logo from './components/Common/Menu/Logo.vue'
import MenuSidebar from './components/Common/Menu/MenuSidebar.vue'
import HeaderAdmin from '@/admin/components/Common/MainAdmin/HeaderAdmin.vue'
import ContentAdmin from '@/admin/components/Common/MainAdmin/ContentAdmin.vue'

const isCollapsed = ref<boolean>(false)

const handleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value
}

export default defineComponent({
  components: { Logo, MenuSidebar, HeaderAdmin, ContentAdmin },
  data() {
    return {
      isCollapsed,
      handleCollapsed
    }
  }
})
</script>

<style setup lang="scss">
@import url('./styles/style.scss');
</style>
