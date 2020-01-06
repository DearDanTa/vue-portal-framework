<template>
  <el-menu
    class="menu"
    mode="horizontal"
    ref="elMenu"
    :router="true"
    :default-active="activePath"
    background-color="#fff"
    text-color="#3699FF"
    active-text-color="#409EFF"
  >
    <template class="menu-wrap" v-for="menu in menus" style="float: left;">
      <el-submenu v-if="menu.children" :index="menu.path" :key="menu.path">
        <span slot="title">{{ menu.meta.label }}</span>
        <template v-for="subMenu in menu.children">
          <el-menu-item v-if="!subMenu.hidden" :key="subMenu.path" :index="subMenu.path">
            <span slot="title">{{ subMenu.meta.label }}</span>
          </el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item v-else :index="menu.path" :key="menu.path">
        <span slot="title">{{ menu.meta.label }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
  import {subRoutes} from '@/router';

  export default {
    data() {
      // find menu
      const menus = (function recursive(arr) {
        const result = [];
        arr.forEach((item) => {
          if (!item.meta.isNotMenu) {
            result.push(item);
            const children = item.children;
            if (children && children.length) {
              item.children = recursive(children);
            }
          }
        });
        return result;
      })(subRoutes);

      return {
        isCollapse: false,
        showBar: false,
        menus // 依赖路由配置
      };
    },
    mounted() {
      let _this = this;
      setTimeout(function () {
        _this.showBar = true;
      }, 600);
    },
    computed: {
      activePath() {
        return this.$route.meta.activePath || this.$route.path;
      }
    },
    methods: {
      toggleCollapse() {
        this.isCollapse = !this.isCollapse;
      },
      getIconClass(iconName) {
        return `el-icon-${iconName}`;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .el-menu {
    height: 100%;

    li {
      text-align: center;
      height: 100%;
      line-height: 70px;
      min-width: 100px;
      &.el-menu-item {

      }

      &.el-submenu{
        /deep/ .el-submenu__title{
          height: 100%;
          line-height: 70px;
        }
      }
    }
  }
</style>
