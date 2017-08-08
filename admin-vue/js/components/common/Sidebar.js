;(function (window) {
  const template = `
<div class="col-sm-3 col-md-2 sidebar">
  <ul class="nav nav-sidebar">
    <!-- 
      使用 router-link 导航组件
      默认渲染成 a 链接
      可以通过 tag 指定其为其他标签
      通过 to 指定链接的导航路径，（这里不需要加 #，它会自动帮你加）
      如果改成了 li ，在内部加载一个 a 链接（不需要herf）
      /
      /foo
      /bar
      /hero
      /hero/add
     -->
    <router-link tag="li" to="/" exact>
      <a>Home</a>
    </router-link>
    <router-link tag="li" to="/foo">
      <a>Go Foo</a>
    </router-link>
    <router-link tag="li" to="/bar"><a>Go Bar</a></router-link>
    <router-link tag="li" to="/hero"><a>英雄管理</a></router-link>
  </ul>
</div>
`
  const Sidebar = {
    template
  }

  window.Sidebar = Sidebar
})(window)
