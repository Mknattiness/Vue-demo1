// 0. npm i -S vue-router
// 1. 把 vue-router.js 引入页面，该文件会向全局提供一个构造函数：VueRouter
// 2. 实例化一个 VueRouter
// 3. 通过 VueRouter 的实例选项 routes 来配置路由表
// 4. 在 Vue 的根实例上通过 router 选项注册你的路由实例
// 5. 使用 <router-view></router-view> 组件为路由提供组件匹配的出口

;(function (window, VueRouter, Home, HeroList, HeroAdd) {
  const router = new VueRouter({
    linkActiveClass: 'active', // 配置路由导航的默认样式类名
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/foo',
        component: {
          template: '<div>foo</div>'
        }
      },
      {
        path: '/bar',
        component: {
          template: '<div>bar</div>'
        }
      },
      {
        path: '/hero',
        component: HeroList
      },
      {
        path: '/hero/add',
        component: HeroAdd
      }
    ]
  })

  window.router = router
})(window, VueRouter, Home, HeroList, HeroAdd)
