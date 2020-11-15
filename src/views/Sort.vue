<template>
    <div>
        <ul>
            <li v-for="(item,index) in sort" :key="item.classid" @click="change(index)" :class="i==index?'white':''">
                {{item.name}}
            </li>
        </ul>
        <div id="allsort">
            <div v-for="item in sortall" :key="item.classid" class="sortall">{{item.name}}</div>
            <div :style="{'clear':'both'}"></div>
        </div>
        <div :style="{'clear':'both'}"></div>
    </div>
</template>

<script>
    export default {
   
        data(){
            return{
                i: null,
                sort:[],
                sortall:[],
            }
        },
        mounted(){
            this.$axios.get("/api/class",{params:{appkey:"c671a4c29ec3381b"}}).then((res)=>{this.sort=res.data.result,res.data.result})
            // this.sort=res.data.result
        },
        methods:{
            change(inde){
                this.i=inde;
                this.$axios.get("/api/class",{params:{appkey:"c671a4c29ec3381b"}}).then((res)=>{this.sortall=res.data.result[this.i].list})
            }
        }
        
    }
</script>

<style scoped>
    ul{
        width: 19.3%;
        float: left;
    }
    li{
        height: 60px;
        background: silver;
        border-top: solid black 1px;
        text-align: center;
        line-height: 60px;
    }
    .white{
        background: white;
    }
    #allsort{
        width: 80.7%;
        height: 670px;
        float: left;
        overflow: auto;
        display: flex;flex-wrap: wrap;justify-content: center;
    }
    .sortall{
        width: 90px;
        height: 30px;
        float: left;
        text-align: center;
        line-height: 30px;
        border: solid black 1px;
        border-radius: 20%;
        margin-left: 10px;
        margin-top: 20px;
        transition: all 1s;
    }
    .sortall:hover{
        background: cornflowerblue;
    }
</style>