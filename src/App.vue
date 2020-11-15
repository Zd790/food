<template>
  <div>
    <router-view></router-view>
    <div id="wrap">
      <div id="home"><router-link to="/">
      <img src="@/assets/home.png">
      首页</router-link></div>
      <div><router-link to="/sort">
      <img src="@/assets/sort.png">
      分类</router-link></div>
      <div>
      <img src="@/assets/shop.png">  
      商城</div>
      <div><router-link to="/favorites">
      <img src="@/assets/favo.png">
      收藏</router-link></div>
      <div id="mine"><router-link to="/mine">
      <img src="@/assets/mine.png">
      我的</router-link></div>
    </div>
  </div>
</template>

<style scoped>
  #wrap{
    background-color: white;
    position: fixed;bottom: 0px;
    height: 60px;
    width: 100%;
    display: flex;justify-content: space-between;align-items: center;
    border-top: solid black 1px;
  }
  #home{margin-left: 20px;}
  #mine{margin-right: 20px;}
</style>>

