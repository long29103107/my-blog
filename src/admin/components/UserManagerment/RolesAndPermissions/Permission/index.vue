<template>
  <group-operation />
</template>

<script lang="ts" setup>
import GroupOperation from '@/admin/components/UserManagerment/RolesAndPermissions/Permission/GroupOperation/index.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'GroupOperationAdmin',
  components: { GroupOperation }
})
</script>
