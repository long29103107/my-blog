<template>
  <close-square-two-tone class="cursor-pointer font-size-25px" two-tone-color="#9c0707" />
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { CloseSquareTwoTone } from '@ant-design/icons-vue'

defineComponent({
  name: 'DefaultDisabledOperationAdmin',
  components: { CloseSquareTwoTone }
})
</script>
