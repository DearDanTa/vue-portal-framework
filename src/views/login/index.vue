<template>
  <router-link to="/home/dashboard">
    <el-button>login</el-button>
  </router-link>
</template>

<script>
import { login } from '@/api/login';

export default {
  mounted() {
    login('test', 'test');
  }
};
</script>

<style lang="scss" scoped></style>
