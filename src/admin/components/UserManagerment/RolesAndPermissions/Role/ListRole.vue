<template>
  <a-list class="demo-loadmore-list" item-layout="horizontal" :data-source="list">
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a key="list-loadmore-edit"><edit-outlined /></a>
          <a key="list-loadmore-more"><eye-outlined /></a>
        </template>
        <a-skeleton avatar :title="false" :loading="!!item.loading" active>
          <a-list-item-meta :description="item.name" class="role-color"> </a-list-item-meta>
        </a-skeleton>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts" setup>
import { ref, defineComponent } from 'vue'
import { EditOutlined, EyeOutlined } from '@ant-design/icons-vue'

const list = ref([
  {
    id: 1,
    name: 'Admin'
  },
  {
    id: 2,
    name: 'Member'
  }
])

defineComponent({
  name: 'ListRole',
  components: { EditOutlined, EyeOutlined }
})
</script>

<style scoped>
.role-color .ant-list-item-meta-description {
  color: black;
}
</style>
