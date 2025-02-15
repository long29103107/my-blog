<template>
  <a-layout>
    <header-component />

    <div id="user-template">
      <router-view></router-view>
    </div>

    <!-- <footer-component /> -->
  </a-layout>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import HeaderComponent from '@/views/client/Common/HeaderComponent/index.vue'
import FooterComponent from '@/views/client/Common/FooterComponent/index.vue'
import { RouterView } from 'vue-router'

const component = defineComponent({ components: { HeaderComponent, FooterComponent } })
</script>

<style lang="scss">
@import url('../styles/client/style.module.scss');
</style>
