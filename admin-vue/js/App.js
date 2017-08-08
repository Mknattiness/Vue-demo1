;(function (window, Navbar, Sidebar) {
  const template = `
<div>
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <sidebar></sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 这里是将来被路由系统导航替换的出口 -->
          <!-- router-view 是一个路由组件，被匹配到的路由将被解析替换到这里 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
</div>
`

  const App = {
    template,
    data () {
      return {
        title: 'hello'
      }
    },
    components: {
      Navbar,
      Sidebar
    }
  }

  window.App = App
})(window, Navbar, Sidebar)
