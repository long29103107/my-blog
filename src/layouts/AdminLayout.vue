<template>
  <a-layout style="min-height: 100vh">
    <!-- Sidebar admin -->
    <sidebar-view></sidebar-view>

    <!-- Main -->
    <main-view></main-view>
  </a-layout>
</template>

<script lang="ts">
import MainView from '@/components/Admin/Layout/MainView.vue'
import SidebarView from '@/components/Admin/Layout/Sidebar/SidebarView.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AdminLayoutView',
  components: { MainView, SidebarView }
})
</script>
