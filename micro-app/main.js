import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router/index';

Vue.use(VueRouter)

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    mode: 'hash',
    base: window['__POWERED_BY_QIANKUN__'] ? '#/micro-app' : '#/', // hash 模式要带上 #
    routes,
  });
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}
// 独立运行时
if (!window['__POWERED_BY_QIANKUN__']) {
  render();
}
// 这三个声明周期函数都要导出，且需要返回 promise
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('micro-one-mount', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
