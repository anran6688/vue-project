<template lang="html">
  <header>
    <div class="home-page">
      <router-link to="/home">
        <a href="javascript:;" class="logo"></a>
      </router-link>

      <h1>华之腾集团有限公司</h1>
      <a href="javascript:;" class="meau" @click="show=!show"></a>
      <div class="meau-list" v-show="show">
        <ul>
          <li>
            <a href="javascript:;">首页</a>
          </li>
          <li>
            <a href="javascript:;">公司简介</a>
          </li>
          <li>
            <a href="javascript:;">产品展示</a>
          </li>
          <li>
            <a href="javascript:;">资质荣誉</a>
          </li>
          <li>
            <a href="javascript:;">专卖店</a>
          </li>
          <li>
            <a href="javascript:;">联系我们</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return {
      show:false
    }
  },
  methods:{
    show(){
      alert(1)
      this.show=!this.show
    }
  }
}
</script>

<style lang="css">
  @import '../assets/css/PublicHeader.css'
</style>
