<template>
<div class="">
    <div class="fill"></div>
    <footer>
        <div class="footer">
            <ul>
                <router-link to="/home" tag="li">
                  <a href="javascript:;">
                      <i></i>
                      <span>首页</span>
                  </a>
                </router-link>
                <!-- <li>
                    <a href="javascript:;">
                        <i></i>
                        <span>首页</span>
                    </a>
                </li> -->
                <li>
                    <a href="javascript:;">
                        <i></i>
                        <span>联系电话</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i></i>
                        <span>联系电话</span>
                    </a>
                </li>
                <router-link tag="li" to="/home">
                  <a href="javascript:;" >
                      <i></i>
                      <span>返回</span>
                  </a>
                </router-link>
            </ul>
        </div>
    </footer>
</div>
</template>

<script>

</script>

<style lang="css">
  @import '../assets/css/PublicFooter.css'
</style>
