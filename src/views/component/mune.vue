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
        background:oldlace;
        background-image: url("../../asset/logo1.png");
        background-size:cover;
        border-radius: 3px;
        margin: 15px auto;
    }

    .margin-headmune{
        margin-left:80px; 
    }
    
</style>
<template>
    <div class="layout">
        <Row type="flex">
            <i-col span="3" class="layout-menu-left">
                <Menu theme="dark" width="auto"
                 accordion @on-select="menuSelect">
                    <div class="layout-logo-left"></div>
                    <!-- 这个不是key,而是使用name,不然后会有问题 -->
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            系统管理
                        </template>
                        <Menu-item name="1-1">用户管理</Menu-item>
                        <Menu-item name="1-2">角色管理</Menu-item>
                        <Menu-item name="/roleList">权限管理</Menu-item>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            基础设置
                        </template>
                        <Menu-item name="2-1">用户数据</Menu-item>
                        <Menu-item name="2-2">商品档案</Menu-item>
                        <Menu-item name="2-3">仓库数据</Menu-item>
                        <Menu-item name="2-4">客户数据</Menu-item>
                        <Menu-item name="2-5">供应商数据</Menu-item>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            业务管理
                        </template>
                        
                        <!-- 菜单下还有菜单，也就是二级菜单 
                        <Menu-item name="3-1">库存管理</Menu-item>
                        -->
                         <Submenu name="3-1">
                            <template slot="title">库存管理</template>
                            <Menu-item name="3-1-1">期初管理</Menu-item>
                            <Menu-item name="3-1-2">盘点管理</Menu-item>
                        </Submenu>
                        <Submenu name="3-2">
                            <template slot="title">预警管理</template>
                            <Menu-item name="3-2-1">采购入库预警</Menu-item>
                            <Menu-item name="3-2-2">销售发货预警</Menu-item>
                            <Menu-item name="3-2-3">销售出库预警</Menu-item>
                        </Submenu>
                        <!-- <Menu-item name="3-3">采购管理</Menu-item> -->
                        <Submenu name="3-3">
                            <template slot="title">采购管理</template>
                            <Menu-item name="3-3-1">请购单管理</Menu-item>
                            <Menu-item name="3-3-2">采购订单管理</Menu-item>
                            <Menu-item name="3-3-3">采购入库管理</Menu-item>
                            <Menu-item name="3-3-4">采购发票管理</Menu-item>
                        </Submenu>
                        <!-- <Menu-item name="3-4">销售管理</Menu-item> -->
                        <Submenu name="3-4">
                            <template slot="title">销售管理</template>
                            <Menu-item name="3-4-1">销售预订单管理</Menu-item>
                            <Menu-item name="3-4-2">销售订单管理</Menu-item>
                            <Menu-item name="3-4-3">发货单管理</Menu-item>
                            <Menu-item name="3-4-4">销售开票管理</Menu-item>
                        </Submenu>


                        <!-- <Menu-item name="3-5">应收应付款管理</Menu-item> -->
                         <Submenu name="3-5">
                            <template slot="title">应收应付款管理</template>
                            <Menu-item name="3-5-1">销售应收单管理</Menu-item>
                            <Menu-item name="3-5-2">采购应付单管理</Menu-item>
                        </Submenu>
                    </Submenu>

                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            数据统计
                        </template>
                        <Menu-item name="/LoginNumData">登录人数统计</Menu-item>
                        <Menu-item name="4-2">产品销售统计</Menu-item>
                        <Menu-item name="4-3">用户行为统计</Menu-item>
                        <Menu-item name="4-4">客户分布统计</Menu-item>
                    </Submenu>
                    <!--这个是Submenu的name属性相同的，则点击其中的一个，另一个的行为则也一样，如一起展开 -->
                    <Submenu name="5">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            流程管理
                        </template>
                        <Menu-item name="5-1">中转流程</Menu-item>
                        <Menu-item name="5-2">报销流程</Menu-item>
                        <Menu-item name="5-3">请假流程</Menu-item>
                        <Menu-item name="5-4">申报流程</Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col span="21">
                <!-- 导般头相关的设置 -->
                <div class="layout-header">
                     <Menu mode="horizontal" theme="dark" active-key="1" class="margin-margin">
                        
                        <div class="layout-logo"></div>
                        <div class="layout-nav">
                            <div class="margin-headmune"> 
                                <Menu-item key="1">
                                    <Icon type="ios-navigate"></Icon>
                                    系统管理
                                </Menu-item>
                                <Menu-item key="2">
                                    <Icon type="ios-keypad"></Icon>
                                    基础设置
                                </Menu-item>
                                <Menu-item key="3">
                                    <Icon type="ios-analytics"></Icon>
                                    数据统计
                                </Menu-item>
                                <Menu-item name="4">
                                    <Icon type="ios-paper"></Icon>
                                    流程管理
                                </Menu-item>
                            </div>
                            <!--  -->
                            <div style="margin-left:1200px">
                                <Menu-item name="5">
                                    <Icon type="locked"></Icon>
                                </Menu-item>

                                <Menu-item name="6">
                                <Icon type="power"></Icon>
                                </Menu-item>

                            <Menu-item name="7">
                                <Icon type="android-mail"></Icon>
                                </Menu-item>
                                <Menu-item name="8">
                                    <Badge dot>
                                        <Icon type="ios-bell-outline" size="26"></Icon>
                                    </Badge>
                                </Menu-item>
                            
                                <Menu-item name="9">
                                    <!--  这个方法不能加这个双括号，不然会有问题 -->
                                    <Dropdown trigger="click" @on-click="clickTest">
                                        <a href="javascript:void(0)">
                                            {{username}}
                                            <Icon type="arrow-down-b"></Icon>
                                        </a>
                                        <DropdownMenu  slot="list" >
                                            <DropdownItem name='person'>个人中心</DropdownItem>
                                            <DropdownItem name='updatePassword' divided>修改密码</DropdownItem>                                        
                                            <DropdownItem name='loginOut' divided>退出登录</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </Menu-item>
                                <Menu-item name="10">
                                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                                </Menu-item>
                            </div>
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
                    <div class="layout-content-main">
                            <router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    2018 &copy; 杨海龙
                </div>
            </i-col>
        </Row>
        <Modal v-model="visible" :mask-closable="false" title="修改密码" @on-ok="updatePasswordOk">
                <h3>原密码:</h3><Input type="password" v-model="orginPassword" size="large" placeholder="输入原密码"></Input>
                <br>
                <br>
                <h3>新密码:</h3><Input type="password" v-model="newPassword" placeholder="输入新密码"></Input>
        </Modal>

    </div>
</template>
<script>

    export default {
        data(){
            return {
                username:"",
                visible:false,
                orginPassword:'',
                newPassword:'',
                menuName:''
            }
        },methods:{
            //下拉框的点击方法
            clickTest(name){
                //alert(name);
                if(name=='person'){
                    //alert("个人中心操作");
                    //跳转到个人中心页面
                }else if(name=='updatePassword'){
                          //  alert("修改密码操作");
                          //进行弹出一个对话框
                         // alert("串 地  ");
                          this.visible=true;
                        
                }else{
                    //alert("退出操作");
                    //进行跳转到我们的登录页面
                    //先javaweb服务器发送请求，然后清空Session当中数据
                    this.$router.push({path:"/index"});
                   // this.$router.push({path:"/mune
                }
            },
            updatePasswordOk(){
                alert(this.orginPassword+"::"+this.newPassword);
                //向我们的服务器发送数据，进行修改我们的数据
            },
            menuSelect(name){
                
                alert(name);
                //得到选择的mune-item,那么则我们的服务器发送请求来获取数据
                if(name=="/roleList"){
                    //this.$router.push({path:"/roleList"});
                     alert(name);
                }else{
                    alert("哈哈...");
                }
                 this.$router.push({path:name});
            }
        },mounted(){
            this.username=this.$route.query.username;
            //alert(this.$route.query)
        }
    }
</script>