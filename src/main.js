import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(vue3GoogleLogin, { clientId: '610416888138-3jd45en2vljinjeh1tqshtq4hfri9svm.apps.googleusercontent.com' })

app.mount('#app')