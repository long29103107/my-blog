<template>
  <div id="profile">
    <a-row>
      <a-col :sm="24" :md="8" :lg="6" :xl="4" class="profile_boximage">
        <img
          src="/public/images/default-avatar.jpg"
          alt="Avatar"
          class="profile_image cursor-pointer"
        />
      </a-col>
      <a-col :sm="24" :md="16" :lg="18" :xl="20">
        <form-profile class="profile-form" />
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import FormProfile from './FormProfile/index.vue'

const component = defineComponent({
  name: 'ProfileAdmin',
  components: {
    FormProfile
  }
})
</script>

<style lang="scss" scoped>
.profile-form {
  margin-top: 20px;
}
</style>
