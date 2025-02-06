<template>
  <check-square-filled class="cursor-pointer font-size-25px" :style="{ color: '#16b101bf' }" />
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { CheckSquareFilled } from '@ant-design/icons-vue'

const component = defineComponent({
  name: 'EnbledOverrideOperationAdmin',
  components: { CheckSquareFilled }
})
</script>
