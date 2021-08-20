import Layout from '../src/views/layout.vue';

// eslint-disable-next-line func-names
Layout.install = function (Vue) {
  Vue.component('Layout', Layout);
};

// 默认导出组件
export default Layout;
