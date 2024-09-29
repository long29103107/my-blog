<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible class="admin-layout">
      <logo />
      <menu-sidebar />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0 15px">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="handleCollape" />
        <menu-fold-outlined v-else class="trigger" @click="handleCollape" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { ref, defineComponent } from 'vue'

import Logo from './components/Common/Menu/Logo.vue'
import MenuSidebar from './components/Common/Menu/MenuSidebar.vue'

const collapsed = ref<boolean>(false)

export default defineComponent({
  components: { Logo, MenuSidebar, MenuUnfoldOutlined, MenuFoldOutlined },
  methods: {
    handleCollape() {
      collapsed.value = !collapsed.value
    }
  },
  data() {
    return {
      collapsed
    }
  }
})
</script>

<style>
.admin-layout {
  min-height: 100vh;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

.layout-admin {
  min-height: 100vh;
}
</style>
