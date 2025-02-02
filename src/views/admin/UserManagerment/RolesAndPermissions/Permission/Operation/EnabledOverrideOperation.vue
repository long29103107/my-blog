<template>
  <check-square-filled class="cursor-pointer font-size-25px" :style="{ color: '#16b101bf' }" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CheckSquareFilled } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'EnbledOverrideOperationAdmin',
  components: { CheckSquareFilled }
})
</script>
