<template>
<div class="container">
    <div class="headerLine">

</div>
            <div class="headerBody">
                <ul id="nav">
                <li><a href="#/">Home</a></li>
                <li><a class="hsubs" href="#">Menu 1</a>
                    <ul class="subs">
                        <li><a href="#">Submenu 1</a></li>
                        <li><a href="#">Submenu 2</a></li>
                        <li><a href="#">Submenu 3</a></li>
                        <li><a href="#">Submenu 4</a></li>
                        <li><a href="#">Submenu 5</a></li>
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
                        <li><a href="#">Submenu 2-8</a></li>
                    </ul>
                </li>
                <li><a class="hsubs" href="#">Menu 3</a>
                    <ul class="subs">
                        <li><a href="#">Submenu 3-1</a></li>
                        <li><a href="#">Submenu 3-2</a></li>
                        <li><a href="#">Submenu 3-3</a></li>
                        <li><a href="#">Submenu 3-4</a></li>
                        <li><a href="#">Submenu 3-5</a></li>
                    </ul>
                </li>
                <li><a href="#">Menu 4</a></li>
                <!-- <li><a href="#">Menu 5</a></li>
                <li><a href="#">Menu 6</a></li>
                <li><a href="#">Back</a></li> -->
                <div id="lavalamp"></div>
            </ul>
            </div>
</div>
  <!-- <el-row type="flex" justify="center">
  <el-col :span="7"><div class=""></div></el-col>
  <el-col :span="10">
  </el-col>
  <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
</el-row> -->
</template>

<script>
// import './header.js'
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
@import './layout.css';
@import './menu.css';
.container {
    height: 250px;
    width: 100%;
    /* background-color: #212121; */
}
header {
    background-color:#212121;
    /* box-shadow: 0 -1px 2px #111111; */
    /* color:#fff; */
    /* display:block; */
    /* height:70px; */
    /* position:relative; */
    /* width:100%; */
    /* z-index:100; */
}
.headerLine{
    height: 30px;
    background-color: #212121;
}
.headerBody{
    margin: 20px;
}
</style>
