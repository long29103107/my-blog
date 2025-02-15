<template>
  <div class="header-componenent">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-7">
        <div class="header-componenent__logo">
          <a href="">
            <img src="/public/images/logo-admin.png" alt="Logo" class="cursor-pointer" />
          </a>
        </div>
      </div>
      <div class="col-span-5 header-componenent__right">
        <div class="header-componenent__page">
          <a href="" class="text-white-700 cursor-pointer text-size-12 p-3">Home</a>
          <a href="" class="text-white-700 cursor-pointer text-size-12 p-3">Articles</a>
          <a href="" class="text-white-700 cursor-pointer text-size-12 p-3">Contact us</a>
        </div>
        <div class="header-componenent__icon">
          <github-outlined class="github cursor-pointer" />
          <github-outlined class="github cursor-pointer" />
          <github-outlined class="github cursor-pointer" />
          <github-outlined class="github cursor-pointer" />
          <github-outlined class="github cursor-pointer" />
        </div>
        <div class="header-componenent__search">
          <search-outlined :style="{ fontSize: '20px', color: 'white' }" class="cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { GithubOutlined, SearchOutlined } from '@ant-design/icons-vue'
import { defineComponent } from 'vue'

const component = defineComponent({ components: { GithubOutlined } })
</script>
