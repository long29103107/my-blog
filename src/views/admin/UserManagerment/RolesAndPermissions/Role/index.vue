<template>
  <a-row>
    <a-col :span="24" class="cursor-pointer">
      <list-role />
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import SearchSelect from '@/components/Form/SearchSelect/index.vue'
import ListRole from './ListRole.vue'
import { defineComponent, ref } from 'vue'

const component = defineComponent({
  name: 'RoleAdmin',
  components: { SearchSelect, ListRole }
})
</script>

<style lang="scss">
.role-dropdown {
  padding: 6px 12px;
}
</style>
