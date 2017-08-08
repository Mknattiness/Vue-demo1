;
(function (window, axios) {
  const template = `
<div>
  <h2 class="sub-header">英雄管理</h2>
  <a class="btn btn-success" href="#/hero/add">添加英雄</a>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>名称</th>
          <th>头像</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in heroList">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>
            <img :src="item.avatar" :alt="item.name" />
          </td>
          <td>
            <a href="#/hero/update">编辑</a>
            <a href="#/hero/remove">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`
  // 实例的生命的钩子
  const HeroList = {
    template,
    beforeCreate () {
      console.log('beforeCreate', this.heroList)
    },
    created () {
      // created 是最早可以拿到 data 中数据的钩子
      // 所以在这里发请求最合适
      // console.log('created', this.heroList)
      // 1. 发请求
      // vue-resource
      // axios
      // 2. 将请求相应结果替换到 this.heroList 上

      // json-server 这个工具在服务端帮你通过 Access-Control-Allow-Origin 处理了跨域的问题
      axios.get('http://127.0.0.1:5000/heros')
        .then(res => { // 这里如果需要 this 组件实例，则一定要用箭头函数
          this.heroList = res.data
        })
    },
    data () {
      return {
        heroList: []
      }
    },
    methods: {

    }
  }

  window.HeroList = HeroList
})(window, axios)
