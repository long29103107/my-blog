<template>
  <a-list
    class="demo-loadmore-list"
    item-layout="horizontal"
    :data-source="loading ? Array(5).fill({}) : roles"
  >
    <template #renderItem="{ item }">
      <a-list-item class="box-role">
        <template v-if="loading">
          <a-skeleton avatar :active="true" title :paragraph="{ rows: 1 }" />
        </template>
        <template v-else>
          <div class="box-role__action">
            <a key="list-loadmore-edit"><edit-outlined /></a>
            <a key="list-loadmore-more"><eye-outlined /></a>
          </div>
          <a-list-item-meta :description="item.name" class="role-color"> </a-list-item-meta>
        </template>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, ref } from 'vue'
import { EditOutlined, EyeOutlined } from '@ant-design/icons-vue'
import { useRole } from '@/hooks/roles/useRole'

const { roles, loading, error, fetchRoles } = useRole()

onMounted(() => {
  fetchRoles()
})

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
