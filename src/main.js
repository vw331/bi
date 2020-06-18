import Vue from 'vue';
import Button from 'ant-design-vue/lib/button';
import router from './router.js'
import App from './App';

//css 增强库
import 'tailwindcss/tailwind.css'
import './style/index.less'

Vue.component(Button.name, Button);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
