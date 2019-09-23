import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store/store'

// mint-ui
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
import 'mint-ui/lib/style.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}

