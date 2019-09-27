<template>
    <div class="[[projectName]]-base">
        <h1 class="h1">基本功能演示</h1>
        <div>
            <span>引用本项目图片</span>
            <img :src="require('[[projectName]]-static/404.png')" class="img">
        </div>
        <div>
            <span>引用基础项目图片</span>
            <img :src="require('static/500.png')" class="img">
        </div>
        <div>
            <span>使用基础项目方法得到的uuid</span><br>
            {{uuid}}
        </div>
        <el-button @click="()=>{this.$router.push('/[[projectName]]-demo-vuex')}">vuex功能演示</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            uuid: 123,//this.gm_uuid()
        }
    }
}
</script>
<style lang="less" scoped>
.[[projectName]]-base{
    background: skyblue;
    padding: 20px;
    .h1{
        color: #abcd23;
        background: #2f0fa2;
    }
    .img{
        height: 40px;
        width: auto;
    }
}
</style>

    
