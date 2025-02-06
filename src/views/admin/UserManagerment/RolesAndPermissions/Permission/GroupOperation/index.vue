<template>
  <ul class="group-operation">
    <li
      class="group-operation_item group-operation_item--box-shadow card"
      v-for="operation in operations"
      :key="operation.id"
    >
      <div class="group-operation_box">
        <span class="group-operation_label"
          ><b>{{ operation.label }}</b></span
        >
        <group-action-operation :operation="operation" />
      </div>
      <operation :childOperations="operation.childOperations" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { defineComponent, defineProps, type PropType } from 'vue'
import type GroupOperationType from '@/types/admin/UserManagerment/RolesAndPermissions/Permission/GroupOperationType'
import Operation from '@/views/admin/UserManagerment/RolesAndPermissions/Permission/Operation/index.vue'
import GroupActionOperation from '@/views/admin/UserManagerment/RolesAndPermissions/Permission/Operation/GroupActionOperation.vue'

const props = defineProps({
  operations: {
    type: Array as PropType<GroupOperationType[]>,
    required: false,
    default: []
  }
})

const component = defineComponent({
  name: 'GroupOperationAdmin',
  components: { GroupActionOperation }
})
</script>
