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

<script lang="ts" setup>
import type OperationType from '@/admin/types/UserManagerment/RolesAndPermissions/Permission/OperationType'
import type GroupOperationType from '@/admin/types/UserManagerment/RolesAndPermissions/Permission/GroupOperationType'
import { defineComponent, type PropType } from 'vue'
import DefaultEnabledOperation from '@/admin/components/UserManagerment/RolesAndPermissions/Permission/Operation/DefaultEnabledOperation.vue'
import DefaultDisabledOperation from '@/admin/components/UserManagerment/RolesAndPermissions/Permission/Operation/DefaultDisabledOperation.vue'
import EnabledOperation from '@/admin/components/UserManagerment/RolesAndPermissions/Permission/Operation/EnabledOperation.vue'
import DisabledOperation from '@/admin/components/UserManagerment/RolesAndPermissions/Permission/Operation/DisabledOperation.vue'
import DisabledOverrideOperation from '@/admin/components/UserManagerment/RolesAndPermissions/Permission/Operation/DisabledOverrideOperation.vue'
import EnabledOverrideOperation from '@/admin/components/UserManagerment/RolesAndPermissions/Permission/Operation/EnabledOverrideOperation.vue'

const props = defineProps({
  operation: {
    type: Object as PropType<OperationType | GroupOperationType>,
    required: false
  }
})

defineComponent({
  name: 'GroupActionAdmin',
  components: {
    DefaultEnabledOperation,
    DefaultDisabledOperation,
    EnabledOperation,
    DisabledOperation,
    EnabledOverrideOperation,
    DisabledOverrideOperation
  }
})
</script>
