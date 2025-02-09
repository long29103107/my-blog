<template>
  <div class="header-componenent">
    <div class="header-componenent__logo">
      <img src="/public/images/logo-admin.png" alt="" />
    </div>
    <div class="header-componenent__page">
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Articles</a>
      <a href="">Contact us</a>
    </div>
    <div class="header-componenent__icon">
      <github-outlined />
      <github-outlined />
      <github-outlined />
      <github-outlined />
    </div>
    <div class="header-componenent__search">
      <search-outlined />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { GithubOutlined, SearchOutlined } from '@ant-design/icons-vue'
import { defineComponent } from 'vue'

const component = defineComponent({
  components: { GithubOutlined }
})
</script>
