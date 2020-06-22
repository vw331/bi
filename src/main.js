import Vue from 'vue';
import { Button, Card, List, Badge, Form, Table, Tag, Drawer, Icon, Tree, Input, Progress, Select, Checkbox } from 'ant-design-vue';
import asiox from 'axios';
import router from './router.js'
import App from './App';

//css 增强库
import './style/index.less'
import './assets/tailwind.css';

// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/chart/pie');
require('echarts/lib/chart/radar');
require('echarts/lib/chart/line');
require('echarts/lib/chart/scatter')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

const chalkTheme = require('./assets/chalk.json')
const $http = asiox.create({ timeout: 1000 * 12 })

Vue.use(Button);
Vue.use(Card);
Vue.use(List);
Vue.use(Badge);
Vue.use(Table);
Vue.use(Tag);
Vue.use(Drawer);
Vue.use(Icon);
Vue.use(Tree);
Vue.use(Input);
Vue.use(Progress);
Vue.use(Form);
Vue.use(Select);
Vue.use(Checkbox);

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
Vue.prototype.$https = $http;

echarts.registerTheme('mytheme', chalkTheme)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
