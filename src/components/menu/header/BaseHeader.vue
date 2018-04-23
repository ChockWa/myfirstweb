<template>
<div class="header">
  <el-row type="flex" justify="center">
  <el-col :span="6"><div class=""></div></el-col>
  <el-col :span="12">
       <!-- <div class="container">

            <ul id="nav">
                <li><a href="http://www.script-tutorials.com/">Home</a></li>
                <li><a class="hsubs" href="#">Menu 1</a>
                    <ul class="subs">
                        <li><a href="http://www.16sucai.com/">Submenu 1</a></li>
                        <li><a href="#">Submenu 2</a></li>
                        <li><a href="#">Submenu 3</a></li>
                        <li><a href="#">Submenu 4</a></li>
                        <li><a href="http://www.16sucai.com/">Submenu 5</a></li>
                    </ul>
                </li>
                <li><a class="hsubs" href="#">Menu 2</a>
                    <ul class="subs">
                        <li><a href="#">Submenu 2-1</a></li>
                        <li><a href="#">Submenu 2-2</a></li>
                        <li><a href="#">Submenu 2-3</a></li>
                        <li><a href="#">Submenu 2-4</a></li>
                        <li><a href="#">Submenu 2-5</a></li>
                        <li><a href="#">Submenu 2-6</a></li>
                        <li><a href="#">Submenu 2-7</a></li>
                        <li><a href="http://www.16sucai.com/">Submenu 2-8</a></li>
                    </ul>
                </li>
                <li><a class="hsubs" href="#">Menu 3</a>
                    <ul class="subs">
                        <li><a href="#">Submenu 3-1</a></li>
                        <li><a href="#">Submenu 3-2</a></li>
                        <li><a href="#">Submenu 3-3</a></li>
                        <li><a href="#">Submenu 3-4</a></li>
                        <li><a href="http://www.16sucai.com/">Submenu 3-5</a></li>
                    </ul>
                </li>
                <li><a href="#">Menu 4</a></li>
                <li><a href="#">Menu 5</a></li>
                <li><a href="#">Menu 6</a></li>
                <li><a href="http://www.16sucai.com/">Back</a></li>
                <div id="lavalamp"></div>
            </ul>
        </div> -->
  </el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
</div>
</template>

<script>
import './header.js'
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  mounted: {
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
@import './header.css';
*{
    margin:0;
    padding:0;
}
.header{
  width:100%;
  height: 100%;
  background-color:red;
}
.container {
    height: 70%;
    /* width: 957px; */
}
</style>
