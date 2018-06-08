<template>
    <div>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <!--<router-link to="/home">中转到首页</router-link><br>
    <router-link to="/new">中转到新闻</router-link>
    <hr><br/>-->
        <!-- 把路邮的那个组件放到这个这个地方来 -->
        <router-view></router-view>
        
    </div>
</template>
<script>
    //生命周期方法
    export default {
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>