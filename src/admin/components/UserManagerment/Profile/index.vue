<template>
  <div id="profile">
    <a-row>
      <a-col :span="4" class="profile_boximage">
        <img
          src="/public/images/default-avatar.jpg"
          alt="Avatar"
          class="profile_image cursor-pointer"
        />
      </a-col>
      <a-col :span="20">
        <a-row>
          <a-col :span="12">col-12</a-col>
          <a-col :span="12">col-12</a-col>
        </a-row>
        <a-row>
          <button>Save</button>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup></script>

<style setup lang="scss">
@import url('../../../styles//user-management/profile.module.scss');
</style>
