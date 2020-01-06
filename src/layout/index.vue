<template>
  <div class="full-height">
    <Header />
    <div class="main-view">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from './Header.vue';
  import Navbar from './Navbar.vue';
  import Footer from './Footer.vue';

  export default {
    name: 'layout',
    components: {
      Header,
      Navbar,
      Footer
    }
  };
</script>

<style lang="scss" scoped>
  .main-view {
    min-height: calc(100% - 240px)
  }
</style>
