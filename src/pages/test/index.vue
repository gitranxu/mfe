<template>
    <div class="test">
        这里是test测试页面123
        <img src="../../static/500.png" alt="">
        <a-button>abc</a-button>
    </div>
</template>
<script>
import Vue from 'vue';
import { Button } from 'ant-design-vue';
export default {
    data() {
        return {
            uuid: 123
        }
    },
    components: {
        AButton: Button
    }
}
</script>