// 导入 vue 
import Vue from 'vue'
// 导入 App 组件
import App from './App.vue'

// 按需引人element ui 
import { Button, Row, Switch } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Switch.name, Switch);

// 关闭生产提示
Vue.config.productionTip = false


// 创建vm 
new Vue({
    el: '#app',
    render: h => h(App),
})