<template>
  <a-form
    :model="formState"
    v-bind="layout"
    name="nest-messages"
    :validate-messages="validateMessages"
    :label-col="{ span: 24 }"
    :wrapper-col="{ span: 24 }"
    @finish="onFinish"
  >
    <a-row>
      <a-col :xs="24" :lg="12">
        <a-form-item
          :name="['user', 'name']"
          label="First Name"
          :rules="[{ required: true }]"
          class="profile_input"
        >
          <a-input v-model:value="formState.user.name" />
        </a-form-item>
      </a-col>
      <a-col :xs="24" :lg="12">
        <a-form-item
          :name="['user', 'email']"
          label="Last Name"
          :rules="[{ type: 'email', required: true }]"
        >
          <a-input v-model:value="formState.user.email" />
        </a-form-item>
      </a-col>
    </a-row>

    <a-row>
      <a-col :xs="24" :lg="12">
        <a-form-item
          :name="['user', 'name']"
          label="Email"
          :rules="[{ required: true }]"
          class="profile_input"
        >
          <a-input v-model:value="formState.user.name" />
        </a-form-item>
      </a-col>
      <a-col :xs="24" :lg="12">
        <a-form-item
          :name="['user', 'email']"
          label="Phone"
          :rules="[{ type: 'email', required: true }]"
        >
          <a-input v-model:value="formState.user.email" />
        </a-form-item>
      </a-col>
    </a-row>

    <a-form-item class="profile-button">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { defineComponent, reactive } from 'vue'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
}

const formState = reactive({
  user: {
    name: '',
    age: undefined,
    email: '',
    website: '',
    introduction: ''
  }
})

const onFinish = (values: any) => {}

const component = defineComponent({
  name: 'FormProfile'
})
</script>

<style lang="scss" scoped>
.ant-col-sm-12 .ant-form-item {
  margin-left: 10px;
  margin-right: 10px;
}

.ant-form-item.profile-button {
  display: flex;
  justify-content: end;
}

@media (max-width: 576px) and (min-width: 576px) {
  .profile_input {
    margin: 0;
  }
}

@media (min-width: 992px) {
  .profile_input {
    margin: 0 20px;
  }
}
</style>
