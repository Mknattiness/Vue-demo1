;(function (window, axios) {
  const template = `
<div>
<h2>添加英雄</h2>
<form @submit.prevent="create">
  <div class="form-group">
    <label for="">英雄名称</label>
    <input type="text" v-model.trim="hero.name" class="form-control">
  </div>
    <div class="form-group">
    <label for="">英雄头像</label>
    <input type="text" v-model.trim="hero.avatar" class="form-control">
  </div>
  <button type="submit" class="btn btn-default">保存</button>
</form>
</div>
`
  const HeroAdd = {
    template,
    data () {
      return {
        hero: {
          name: '',
          avatar: ''
        }
      }
    },
    methods: {
      create () {
        // 收集表单数据
        console.log(this.hero)
        // 基本的表单验证
        // 向服务端发请求
        axios.post('http://127.0.0.1:5000/heros', this.hero)
          .then(res => {
            // 请求处理成功了，跳转到列表页
            // window.location.href = '#/hero'

            // 这里使用的是全局的 router
            router.replace('/hero')
          })
        // 根据响应作页面交互
      }
    }
  }

  window.HeroAdd = HeroAdd

})(window, axios)
