<template>
  <el-container>
    <el-header height="180px">
      <baseHeader></baseHeader>
    </el-header>
    <el-main>
    </el-main>
    <el-footer>Footer</el-footer>
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
</style>
