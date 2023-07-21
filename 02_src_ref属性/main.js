// 导入 vue 
import Vue from 'vue'

// 导入 App 组件
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false

// 创建vm 
new Vue({
    el: '#app',
    render: h => h(App)
})