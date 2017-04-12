<template lang="html">
  <div id="app">
    <HomeHeader></HomeHeader>

    <div class="">
      <router-view></router-view>
    </div>

    <HomeFooter></HomeFooter>



  </div>
</template>

<script>
import HomeHeader from './components/home-header.vue'
import Home from './components/Home/Home.vue'
import ProductShowContent from './components/ProductShow/ProductShowContent.vue'
import AboutUs from './components/AboutUs/AboutUs.vue'
import HomeFooter from './components/HomeFooter.vue'
export default {
  components:{
    HomeHeader,
    Home,
    ProductShowContent,
    AboutUs,
    HomeFooter
  },
  mounted(){
    this.slider();
  },
  methods:{
    slider(){

      let html=document.documentElement;
      html.style.fontSize=html.clientWidth*20/320+'px';
      window.onresize=function(){
        html.style.fontSize=html.clientWidth*20/320+'px';
      }


    }
  }
}
</script>

<style lang="css">
  @import './assets/css/PublicHeader.css'
  @import './assets/css/PublicFooter.css'
  /*@import './assets/css/homePage.css'*/
</style>
