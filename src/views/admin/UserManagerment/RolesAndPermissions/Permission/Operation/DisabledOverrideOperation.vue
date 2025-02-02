<template>
  <close-square-filled class="cursor-pointer font-size-25px" :style="{ color: '#f13c3cbd' }" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CloseSquareFilled } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'DisabledOverrideOperationAdmin',
  components: { CloseSquareFilled }
})
</script>
