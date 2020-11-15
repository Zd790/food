<template>
  <div>
    <div id="search_wrap">
      <input v-model="name" placeholder="搜食材，搜菜谱(回车搜索)" id="search" @keyup.enter="search"/>
    </div>
    <div class="banna"></div>
    <div class="title">
      <div>
        <span>早中晚餐</span><br/>
        <h4>每日三餐推荐</h4>
      </div>
      <img src="@/assets/moon.png">
      <div :style="{'clear': 'both'}"></div>
    </div>
    <div class="title">
      <div>
        <span>精选菜谱</span><br/>
        <h4>一周精选菜谱</h4>
      </div>
      <img src="@/assets/flag.png">
      <div :style="{'clear': 'both'}"></div>
    </div>
    <div :style="{'clear': 'both'}"></div>
    <span class="hot">热门推荐</span>
    <div id="show">
      <div v-for="item in menu" :key="item.id" @click="menuid(item.id)">
        <router-link to="/details">
          <div :style="{background:'url('+item.pic+')','background-size':'cover'}"  id="foods_pic"></div>
          <div id="hwrap">
            <h1>{{item.name}}</h1>
          </div>
        </router-link>
      </div>
      <div :style="{'clear': 'both'}"></div>
    </div>
  </div>
</template>

<script>
  export default {
  
    data(){
      return{
        name:"",
        menu:[],
        myid:null,
      }
    },
    mounted(){
      this.recommend()
    },
    methods:{
      recommend(){
        this.$axios.get("/api/search",{params:{keyword:"茄子",num:4,appkey:"c671a4c29ec3381b"}}).then((res)=>{this.menu=res.data.result.list})
      },
      search(){
        this.$router.push("/search_list?searchValue="+this.name)
      },
      menuid(id){
        this.myid=id
        sessionStorage.removeItem("detail_id");
        this.$router.push("/details?detail_id="+this.myid)
      }

    }
  }
</script>

<style scoped>
    .hot{
      margin-left: 27px;
      margin-top: 30px;
      display: block;
      font-size: 26px;
      font-weight: bolder;
    }
    .banna{
      width: 100%;
      height: 200px;
      background: darkolivegreen;
    }
    .title{
      width: 40%;
      height: 70px;
      background: darkgray;
      float: left;
      margin-left: 25px;
      margin-top: 20px;
    }
    h4{
      margin-left: 10px;
    }
    .title span{
      font-size: 26px;
      font-weight: bolder;
      margin-left: 10px;
      margin-top: 10px;
    }
    .title>div{
      float: left;
    }
    img{
      width: 50px;
      height: 50px;
      float: left;
      margin-top: 7px;
    }
    #search_wrap{
      width: 100%;
      height: 65px;
      background: black;
      padding-top: 55px;
    }
    #search{
      width: 80%;
      height: 40px;
      display: block;
      margin: auto;
      border-radius: 10px;
      outline: none;
      text-align: center;
    }
    #show>div{
      float: left;
      margin-left: 27px;
    }
    #show{
      display: flex;justify-content: center;
      margin-top: 30px;
    }
    #foods_pic{
      height: 60px;
      width: 60px;
    }
    #hwrap{
      text-align: center;
      width: 60px;
    }
    h1{
      font-size: 14px;
    }
</style>
