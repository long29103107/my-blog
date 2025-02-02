<template>
  <check-square-two-tone class="cursor-pointer font-size-25px" two-tone-color="#16b101bf" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CheckSquareTwoTone } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'EnbledOperationAdmin',
  components: { CheckSquareTwoTone }
})
</script>
