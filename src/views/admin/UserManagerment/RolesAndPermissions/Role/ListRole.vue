<template>
  <a-list class="demo-loadmore-list" item-layout="horizontal" :data-source="roles">
    <template #renderItem="{ item }">
      <a-list-item class="box-role">
        <a-skeleton :loading="loading" active>
          <div class="box-role__action">
            <a key="list-loadmore-edit"><edit-outlined /></a>
            <a key="list-loadmore-more"><eye-outlined /></a>
          </div>
          <a-list-item-meta :description="item.name" class="role-color"> </a-list-item-meta>
        </a-skeleton>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted } from 'vue'
import { EditOutlined, EyeOutlined } from '@ant-design/icons-vue'
import { useRoles } from '@/hooks/roles/useRole'

const { roles, loading, error, fetchRoles } = useRoles()

const component = defineComponent({
  name: 'ListRole',
  components: {
    EditOutlined,
    EyeOutlined
  }
})
</script>

<style scoped>
.role-color .ant-list-item-meta-description {
  color: black;
}

.box-role {
  flex-direction: row-reverse;
}

.box-role__action a {
  padding-right: 10px;
}
</style>
