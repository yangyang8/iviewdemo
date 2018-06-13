
import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';

import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';

//引入vue-resource来请求数据
import vueResource from 'vue-resource';

//import echarts from 'echarts';

//Vue.prototype.$echarts = echarts
//引入echarts相关的类库操作
import echarts from "./libs/echarts";
//这一步很是关键
Vue.prototype.$echarts = echarts


//创建组件
//import Home from "./views/component/home.vue";
//import New from "./views/component/news.vue";

/*
//注入组件布局组件
import meun from "./views/component/mune.vue";
//导入权限列表的相关组件
import roleList from "./views/component/role/roleList.vue";
import index from "./views/index.vue";
*/
//使用vue-resource插件
Vue.use(vueResource);

Vue.use(VueRouter);


Vue.use(iView);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
