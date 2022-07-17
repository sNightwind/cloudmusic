
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
const app = createApp(App)
getVant(app)
app.use(store)
app.use(router).mount('#app')
<<<<<<< HEAD
=======

>>>>>>> a7927d64dddee71cdbcb97e65b77735477905433
