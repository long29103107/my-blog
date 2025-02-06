<template>
  <check-square-two-tone class="cursor-pointer font-size-25px" two-tone-color="#16b101bf" />
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { CheckSquareTwoTone } from '@ant-design/icons-vue'

const component = defineComponent({
  name: 'EnbledOperationAdmin',
  components: { CheckSquareTwoTone }
})
</script>
