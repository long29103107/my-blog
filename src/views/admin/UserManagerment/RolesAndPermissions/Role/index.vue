<template>
  <a-row>
    <a-col :span="24" class="cursor-pointer">
      <list-role />
    </a-col>
  </a-row>
</template>

<script lang="ts">
import SearchSelect from '@/components/Form/SearchSelect/index.vue'
import ListRole from './ListRole.vue'
import type OptionType from '@/components/Form/SearchSelect/OptionType'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RoleAdmin',
  components: { SearchSelect, ListRole }
  // data() {
  //   return { options, value }
  // }
})
</script>

<style lang="scss">
.role-dropdown {
  padding: 6px 12px;
}
</style>
