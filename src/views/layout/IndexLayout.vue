<template>
  <el-container>
      <el-header height="250px">
      <baseHeader></baseHeader>
    </el-header>
    <div class="main">
      <el-main>
      </el-main>
    </div>
    <el-footer height="200px">Footer</el-footer>
  </el-container>
</template>

<script>
import BaseHeader from '@/components/menu/header/BaseHeader'

export default {
  name: 'layout',
  components: {BaseHeader}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.main{
  width: 100%;
  height: 1200px;
  background-color: blue;
  opacity:0.2;
}
</style>
