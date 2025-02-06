<template>
  <close-square-two-tone class="cursor-pointer font-size-25px" two-tone-color="#f13c3cbd" />
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { CloseSquareTwoTone } from '@ant-design/icons-vue'
const component = defineComponent({
  name: 'DisabledOperationAdmin',
  components: { CloseSquareTwoTone }
})
</script>
