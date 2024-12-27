<template>
  <a-row>
    <a-col :span="24" class="cursor-pointer">
      <list-role />
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import SearchSelect from '@/common/components/Form/SearchSelect.vue'
import ListRole from './ListRole.vue'
import type OptionType from '@/common/types/Form/OptionType'
import { defineComponent, ref } from 'vue'

defineComponent({
  name: 'RoleAdmin',
  components: {
    SearchSelect,
    ListRole
  },
  data() {
    return { options, value }
  }
})
</script>

<style lang="scss">
.role-dropdown {
  padding: 6px 12px;
}
</style>
