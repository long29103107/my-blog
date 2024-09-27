import router from '@/router'
import Antd from 'ant-design-vue'
import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)

app.use(router)
app.use(Antd)
//registerLayouts(app)

app.mount('#app')
