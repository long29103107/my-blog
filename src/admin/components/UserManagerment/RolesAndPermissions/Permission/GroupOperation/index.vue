<template>
  <ul class="group-operation">
    <li class="group-operation_item">
      <div class="group-operation_box">
        <span class="group-operation_label">label</span>
        <span class="group-operation_action">
          <enabled-override-operation />
          <enabled-operation />
          <default-disabled-operation />
          <disabled-operation />
        </span>
      </div>
    </li>
    <li class="group-operation_item">
      <div class="group-operation_box">
        <span class="group-operation_label">label</span>
        <span class="group-operation_action">
          <disabled-override-operation />
          <enabled-operation />
          <default-enbled-operation />
          <disabled-operation />
        </span>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import DefaultEnbledOperation from '../Operation/DefaultEnbledOperation.vue'
import DefaultDisabledOperation from '../Operation/DefaultDisabledOperation.vue'
import EnabledOperation from '../Operation/EnabledOperation.vue'
import DisabledOperation from '../Operation/DisabledOperation.vue'
import DisabledOverrideOperation from '../Operation/DisabledOverrideOperation.vue'
import EnabledOverrideOperation from '../Operation/EnabledOverrideOperation.vue'

defineComponent({
  name: 'GroupOperationAdmin'
  //components: { DefaultEnbledOperation }
})
</script>

<style lang="scss" setup>
@import url('../../../../../styles/style.scss');
</style>
