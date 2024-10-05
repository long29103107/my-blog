<template>
  <a-row>
    <a-col :xs="24" :lg="12" class="role-dropdown">
      <search-select
        :options="options"
        :value="value"
        placeholder="Enter role"
        @update:value="handleSelectedOptions"
      />
    </a-col>
  </a-row>

  <a-row>
    <a-col :span="24">
      <list-role />
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import SearchSelect from '@/common/components/Form/SearchSelect.vue'
import ListRole from './ListRole.vue'
import type OptionType from '@/common/types/Form/OptionType'
import { defineComponent, ref } from 'vue'

const options: OptionType[] = [
  {
    key: 'value1',
    label: 'Value 1'
  },
  {
    key: 'value2',
    label: 'Value 2'
  },
  {
    key: 'value3',
    label: 'Value 3'
  },
  {
    key: 'value4',
    label: 'Value 4'
  }
]

const value = ref<String | undefined>(options.find((x) => x.key === 'value1')?.key)

const handleSelectedOptions = (key: string) => {
  value.value = options.find((x) => x.key == key)?.key
}

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
