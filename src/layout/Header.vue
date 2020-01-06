<template>
  <header class="header-main flex-center-align">
    <router-link class="link flex-center-align" to="/">
      <span>门户通用demo</span>
    </router-link>
    <Navbar />
    <div class="header-right flex-center-align">
      <a class="link">登录</a>
      <a class="link">注册</a>
    </div>
  </header>
</template>

<script>
  import Navbar from './Navbar.vue';

  export default {
    components: {
      Navbar
    },
    data() {
      return {}
    }
  };
</script>

<style lang="scss" scoped>
.header-main{
  height: 70px;
  padding: 0 200px 0 50px;
  background: #fff;
  justify-content: space-between;
  .link{
    font-size: 16px;
    span{
      font-size: 20px;
      font-weight: 400;
      color: #666;
      margin-left: 10px;
    }
  }
  .header-right{
    a{
      margin-left: 10px;
      color: #333;
    }
  }
}
</style>
