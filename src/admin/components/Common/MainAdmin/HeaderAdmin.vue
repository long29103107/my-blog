<template>
  <a-layout-header style="background: #fff; padding: 0 15px">
    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="handleCollape" />
    <menu-fold-outlined v-else class="trigger" @click="handleCollape" />
  </a-layout-header>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

const props = defineProps(['collapsed'])
const emit = defineEmits(['update:collapsed'])

const props = defineProps({
  collapsed: {
    type: Boolean,
    required: false,
    default: false
  }
})

const component = defineComponent({
  name: 'HeaderAdmin',
  component: [MenuUnfoldOutlined, MenuFoldOutlined],
  methods: {
    handleCollape() {
      //this.$emit('update:modelValue', !collapsed)
    }
  }
})
</script>
