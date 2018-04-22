<template>
  <el-container>
    <el-header class="header">
      <baseHeader></baseHeader>
    </el-header>
    <el-main>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import BaseHeader from '@/components/menu/BaseHeader'

export default {
  name: 'layout',
  components: {BaseHeader}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.header {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
</style>
