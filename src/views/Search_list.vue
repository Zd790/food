<template>
    <div>
        <div id="search_wrap">
            <input v-model="name" placeholder="搜食材，搜菜谱(回车搜索)" id="search" @keyup.enter="search"/>
        </div>
        <ul>
            <li v-for="item in menu" :key="item.id" @click="searchid(item.id)">
                <router-link to="/details">
                    <div :style="{background:'url('+item.pic+')','background-size':'cover'}" id="search_pic"></div>
                    <div id="words">
                        <h1>{{item.name}}</h1>
                        <span>耗时：{{item.cookingtime}}</span>
                        <p>{{item.content}}</p>
                    </div>
                <div :style="{'clear': 'both'}"></div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
             return{
                name:"",
                menu:[],
                sid:null
             }
        },
        mounted(){
            this.$axios.get("/api/search",{params:{keyword:this.$route.query.searchValue,num:10,appkey:"c671a4c29ec3381b"}}).then((res)=>{this.menu=res.data.result.list})
        },
        methods:{
            search(){
                this.$axios.get("/api/search",{params:{keyword:this.name,num:10,appkey:"c671a4c29ec3381b"}}).then((res)=>{this.menu=res.data.result.list})
            },
            searchid(searchid){
                this.sid=searchid
                this.$router.push("/details?detail_id="+this.sid)
            }
        }
    }
</script>

<style scoped>
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
    #search_pic,#words{
        width: 160px;
        height: 120px;
        float: left;
    }
    #words{
        margin-left: 10px;
        overflow: hidden;
    }
    ul{
        margin-bottom: 90px;
    }
    li{
        margin-top: 10px;
        margin-bottom: 40px;
        margin-left: 30px;
    }
    h1{
        font-size: 20px;
        font-weight: bolder;
    }
    span{
        color: darkgray;
        display: block;
        margin-top: 5px;
    }
    p{
        margin-top: 6px;
    }
</style>