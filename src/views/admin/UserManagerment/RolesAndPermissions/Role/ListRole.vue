<template>
  <a-list class="demo-loadmore-list" item-layout="horizontal" :data-source="list">
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

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { EditOutlined, EyeOutlined } from '@ant-design/icons-vue'
import fetchList from '@/hooks/common/useFetch'
import RoleType from '@/types/common/role/RoleType'
import { URL_CONSTANTS } from '@/constants/url-contants'
import { ErrorHandler } from '@/mixins'

export default defineComponent({
  name: 'ListRole',
  components: {
    EditOutlined,
    EyeOutlined
  },
  setup() {
    const list = ref<RoleType[]>([])
    const loading = ref<boolean>(false)

    const fetchRoles = async () => {
      try {
        loading.value = true
        const { data, error } = await fetchList(URL_CONSTANTS.ROLE.GET_LIST)
        if (error) ErrorHandler.displayError(error)

        list.value = data.value.map((role: any) => ({
          id: role.id,
          createdBy: role.createdBy || 'Unknown',
          updatedBy: role.updatedBy || null,
          code: role.code,
          name: role.name,
          isActive: role.isActive,
          createdAt: role.createdAt,
          updatedAt: role.updatedAt || null
        })) as RoleType[]
      } catch (err: any) {
        ErrorHandler.displayError(err)
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      fetchRoles()
    })

    return { list, loading }
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
