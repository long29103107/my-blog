<template>
  <div id="security">
    <a-row>
      <a-col :xs="24" :lg="8">
        <role />
      </a-col>
      <a-col :xs="24" :lg="16">
        <permission />
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import Role from './Role/index.vue'
import Permission from './Permission/index.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RoleAndPermissionAdmin',
  components: { Role, Permission }
})
</script>
