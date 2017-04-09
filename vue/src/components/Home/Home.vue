<template>
  <div class="">

    <Banner></Banner>
    <NavView></NavView>
    <AboutUsEntry></AboutUsEntry>
    <ProductShow></ProductShow>
    <CorporateStyle></CorporateStyle>

  </div>
</template>

<script>
import Banner from './Banner.vue'
import NavView from './NavView.vue'
import AboutUsEntry from './AboutUsEntry.vue'
import ProductShow from './ProductShow.vue'
import CorporateStyle from './CorporateStyle.vue'
export default {
  components:{
    Banner,
    NavView,
    AboutUsEntry,
    ProductShow,
    CorporateStyle
  }
}
</script>

<style lang="css">
</style>
