<template>
  <li class="group-operation_item">
    <div class="group-operation_box" style="display: block; padding-top: 0; padding-bottom: 0">
      <ul class="group-operation">
        <li class="group-operation_item" v-for="operation in childOperations" :key="operation.id">
          <div class="group-operation_box" :style="{ padding: '10px 0 10px 10px' }">
            <span class="group-operation_label">{{ operation.label }}</span>
            <group-action-operation :operation="operation" />
          </div>
        </li>
      </ul>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { defineComponent, type PropType } from 'vue'
import type OperationType from '@/admin/types/UserManagerment/RolesAndPermissions/Permission/OperationType'
import GroupActionOperation from '@/admin/components/UserManagerment/RolesAndPermissions/Permission/Operation/GroupActionOperation.vue'

var props = defineProps({
  childOperations: {
    type: Object as PropType<OperationType[]>,
    required: false,
    default: []
  }
})

defineComponent({
  name: 'OperationAdmin',
  components: { GroupActionOperation }
})
</script>
