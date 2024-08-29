<template>
  <div class="logo" v-if="collapsed === false">
    <img class="logo-image" src="../../../../../public/images/logo-admin.png" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ImageSidebarView',
  props: {
    collapsed: Boolean
  }
})
</script>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.logo .logo-image {
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 150px;
}
</style>
