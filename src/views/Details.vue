<template>
    <div>
        <img :src="this.menu.pic"/>
        <span>{{this.menu.name}}</span>
        <h5>收藏：1000  浏览量：1000  作者：AAA</h5>
        <p>{{this.menu.content}}</p>
        <span>用料</span>
        <ul class="material_l">
            <li v-for="(item,index) in menu.material" :key="index">{{item.mname}}</li>
        </ul>
        <ul class="material_r">
            <li v-for="(item,index) in menu.material" :key="index">{{item.amount}}</li>
        </ul>
        <div :style="{'clear':'both'}"></div>
        <span>做法</span>
        <ul id="part">
            <li v-for="(item,index) in menu.process" :key="index">
                <img :src="item.pic" class="part">
                <h4>{{item.pcontent}}</h4>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                menu:[],
            }
        },
        methods:{
            getPath(){
                this.$axios.get("/api/detail",{params:{id:this.$route.query.detail_id,appkey:"c671a4c29ec3381b"}}).then((res)=>{this.menu=res.data.result})
            }
        },
        watch:{
            '$route':'getPath'  
        },
        mounted(){
            this.$axios.get("/api/detail",{params:{id:this.$route.query.detail_id,appkey:"c671a4c29ec3381b"}}).then((res)=>{this.menu=res.data.result})
        }   
    }
</script>

<style scoped>
    h5,p{
        margin-left: 50px;
        margin-top: 20px;
    }
    p{
        width: 80%;
        display: block;
    }
    span{
        display: block;
        font-size: 24px;
        font-weight: bolder;
        margin-left: 50px;
        margin-top: 20px;
    }
    img{
        width: 100%;
        height: 250px;
    }
    .material_l>li,.material_r>li{
        height: 60px;
        text-align: center;
        line-height: 60px;
        border-top: solid 1px black;
    }
    .material_l{
        float: left;
        margin-top: 20px;
        margin-left: 50px;
    }
    .material_r{
        float: right;
        margin-top: 20px;
        margin-right: 50px;
    }
    .part{
        width: 100%;
        height: 250px;
    }
    #part{
        width: 90%;
        margin: auto;
    }
    #part>li{
        margin-top: 20px;
    }
    #part h4{
        width: 100%;
    }
</style>