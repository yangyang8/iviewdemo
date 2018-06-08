<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        height: 780px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #464c5b;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
</style>
<template>
    <div class="layout">
        <Row type="flex">
            <i-col span="5" class="layout-menu-left">
                <Menu theme="dark" width="auto" accordion>
                    <div class="layout-logo-left"></div>
                    <Submenu key="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            导航一
                        </template>
                        <Menu-item key="1-1">选项 1</Menu-item>
                        <Menu-item key="1-2">选项 2</Menu-item>
                        <Menu-item key="1-3">选项 3</Menu-item>
                    </Submenu>
                    <Submenu key="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            导航二
                        </template>
                        <Menu-item key="2-1">选项 1</Menu-item>
                        <Menu-item key="2-2">选项 2</Menu-item>
                    </Submenu>
                    <Submenu key="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            导航三
                        </template>
                        <Menu-item key="3-1">选项 1</Menu-item>
                        <Menu-item key="3-2">选项 2</Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col span="19">
                <!-- 导般头相关的设置 -->
                <div class="layout-header">
                     <Menu mode="horizontal" theme="dark" active-key="1">
                        <div class="layout-logo"></div>
                        <div class="layout-nav">
                            <Menu-item key="1">
                                <Icon type="ios-navigate"></Icon>
                                导航一
                            </Menu-item>
                            <Menu-item key="2">
                                <Icon type="ios-keypad"></Icon>
                                导航二
                            </Menu-item>
                            <Menu-item key="3">
                                <Icon type="ios-analytics"></Icon>
                                导航三
                            </Menu-item>
                            <Menu-item key="4">
                                <Icon type="ios-paper"></Icon>
                                导航四
                            </Menu-item>

                            <Menu-item key="4">
                                <Icon type="person"></Icon>
                            </Menu-item>

                            <Menu-item key="4">
                                <Icon type="locked"></Icon>
                            </Menu-item>

                            <Menu-item key="4">
                               <Icon type="power"></Icon>
                            </Menu-item>

                           <Menu-item key="4">
                               <Icon type="android-mail"></Icon>
                            </Menu-item>
                        </div>
                    </Menu>
                </div>
                <!-- 正文内容 -->
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">内容区域</div>
                </div>
                <div class="layout-copy">
                    2018 &copy; 杨海龙
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {
        
    }
</script>