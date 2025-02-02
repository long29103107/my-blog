<template>
  <span class="group-operation_action">
    <enabled-override-operation v-if="operation?.isOverrided && operation.currentStatus" />
    <enabled-operation v-else />

    <default-enabled-operation v-if="operation?.defaultStatus" />
    <default-disabled-operation v-else />

    <disabled-override-operation v-if="operation?.isOverrided && !operation.currentStatus" />
    <disabled-operation v-else />
  </span>
</template>

<script lang="ts">
import type OperationType from '@/types/admin/UserManagerment/RolesAndPermissions/Permission/OperationType'
import type GroupOperationType from '@/types/admin/UserManagerment/RolesAndPermissions/Permission/GroupOperationType'
import { defineComponent, type PropType } from 'vue'
import DefaultEnabledOperation from '@/views/admin/UserManagerment/RolesAndPermissions/Permission/Operation/DefaultEnabledOperation.vue'
import DefaultDisabledOperation from '@/views/admin/UserManagerment/RolesAndPermissions/Permission/Operation/DefaultDisabledOperation.vue'
import EnabledOperation from '@/views/admin/UserManagerment/RolesAndPermissions/Permission/Operation/EnabledOperation.vue'
import DisabledOperation from '@/views/admin/UserManagerment/RolesAndPermissions/Permission/Operation/DisabledOperation.vue'
import DisabledOverrideOperation from '@/views/admin/UserManagerment/RolesAndPermissions/Permission/Operation/DisabledOverrideOperation.vue'
import EnabledOverrideOperation from '@/views/admin/UserManagerment/RolesAndPermissions/Permission/Operation/EnabledOverrideOperation.vue'

export default defineComponent({
  name: 'GroupActionAdmin',
  components: {
    DefaultEnabledOperation,
    DefaultDisabledOperation,
    EnabledOperation,
    DisabledOperation,
    EnabledOverrideOperation,
    DisabledOverrideOperation
  },
  props: {
    operation: {
      type: Object as PropType<OperationType | GroupOperationType>,
      required: false
    }
  }
})
</script>
