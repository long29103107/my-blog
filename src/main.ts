import router from '@/routes'
import Antd from 'ant-design-vue'
import App from '@/App.vue'
import { createApp } from 'vue'
import '@/styles/main.css'

const app = createApp(App)

app.use(router)
app.use(Antd)

app.mount('#app')
