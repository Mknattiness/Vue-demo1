// 在 Vue 的项目中
// 一个根实例
// 根实例下挂载了一个根组件
// 从根组件开始挂在了一堆的子组件
// 组件化的开发方式只关注组件本身
// 而不再去关注页面了
// 实例也有自己的 template

// 找到页面容器入口，将根组件替换到容器入口位置
;(function (Vue, App, router) {
  const app = new Vue({
    template: '<App></App>',
    router,
    components: {App}
  }).$mount('#app') // 和 el: '#app' 的方式一样，没有区别
})(Vue, App, router)
