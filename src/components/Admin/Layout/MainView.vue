<template>
  <a-layout>
    <a-layout-header style="background: #fff; padding: 0" />
    <a-layout-content style="margin: 0 16px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>User</a-breadcrumb-item>
        <a-breadcrumb-item>Bill</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
        <RouterView />
        <!--switch content layout-->
      </div>
    </a-layout-content>
    <footer-view></footer-view>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FooterView from '@/components/Admin/FooterView.vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'MainView',
  components: {
    FooterView,
    RouterView
  }
})
</script>
