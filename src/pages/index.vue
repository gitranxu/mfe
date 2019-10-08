<template>
    <div class="yiche-layout">
        <div class="page-wrapper">
            <div class="app-header">
                asdfsadf
            </div>
            <div class="app-nav">
                <!-- <a-button @click="()=>{this.$router.push('/test')}">页面</a-button>
                <a-button @click="()=>{this.$router.push('/test2')}">页面2</a-button>
                <a-button @click="()=>{this.$router.push('/test3')}">页面3<a-icon type="apple"></a-icon></a-button> -->
                <!-- <a-menu mode="vertical" :inlineCollapsed="false">
                    <a-menu-item>Option 3</a-menu-item>
                    <a-menu-item>Option 4</a-menu-item>
                    <a-sub-menu>
                        <span slot="title" class="submenu-title-wrapper"><a-icon type="setting" />Navigation Three - Submenu</span>
                        <a-menu-item >Option 1</a-menu-item>
                        <a-menu-item >Option 2</a-menu-item>
                    </a-sub-menu>
                    <a-menu-item>Option 31</a-menu-item>
                </a-menu> -->
                <nav-menu></nav-menu>
            </div>
            <div class="app-content">
                <router-view></router-view>
            </div>
        </div>
        <div class="app-footer">这是公司版权信息</div>
    </div>
    
    <!-- <router-view></router-view> -->
</template>
<script>
import navMenu from './index/nav-menu';
export default {
    components: {
        navMenu
    }
}
</script>
<style lang="less">
.ant-menu-submenu > .ant-menu{
    margin-left: 15px;
}
.yiche-layout{
    .page-wrapper{
        padding-top: 55px;
        padding-left: 200px;/*TODO 这个值如果发生改变，需要同时修改左侧菜单的宽度*/
        position: relative;
        min-height: 500px; /*给个最小高度，防止因内容太少导致底部版权信息跑到页面中央，这个值不必太精确*/
        background: #E2E6EE;/*整个页面背景颜色*/
    }
    .app-header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10000;
        height: 55px;
        width: 100%;
        background: #283B62;
        color: #ffffff;
    }
    .app-nav{
        position: fixed;
        top: 55px;
        left: 0;
        z-index: 10000;
        width: 200px;
        height: 400px;
        overflow-y: auto;
        background: salmon;
    }
    .app-content{
        margin-right: 30px;
        overflow-x: hidden;
        background: #ffffff;
    }
    .app-footer{
        background: goldenrod;
    }
}
</style>