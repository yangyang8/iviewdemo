<template>
    <div class="divFrom">
        <i-form ref="formInline" :model="formInline" :rules="ruleInline" 
        class="form">
            <h2 id="h2">系统登录</h2>
            <Form-item prop="user" style="margin:10px;width:280px">
                <i-input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </i-input>
            </Form-item>
            <Form-item prop="password" style="margin:10px;width:280px">
                <i-input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </i-input>
            </Form-item>
            <Form-item>
                <i-button type="primary" style="margin:10px;width:280px" v-on:click="handleSubmit('formInline')">登录</i-button>
            </Form-item>
        </i-form>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                //alert("登录了:"+this.formInline.user+"::"+this.formInline.password)
                this.$refs[name].validate((valid) => {
               
                if (valid) {
                        
                        //this.$router.push({path:"/mune?username="+this.formInline.user});
                        axios.post("http://localhost:8082/System/login.action",this.formInline)
                        .then(response=>{
                               // alert(response.data);
                               /*var data=response.data;
                               for(var i=0;i<data.length;i++){
                                   alert(data[i].user)
                               }*/
                                //console.log(response);
                                this.$router.push({path:"/mune?username="+this.formInline.user});
                                //window.location.reload();
                                this.$Message.success('提交成功!');
                            },err =>{
                                    this.$Message.error('表单验证失败!');
                            });
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>

<style>
    .form{
        padding-top: 30px;
        display: inline-block;  
        text-align: center;
        width: 300px;
        height: 200px;
        box-shadow: 0 0 25px #cac6c6;
        position: absolute ;
        left:1300px;
        background-color: beige;
    }

   
    .divFrom{
            width: 100%;
            height: 100%;
            text-align: center;/*(让div中的内容居中)*/
            margin-top: 400px;
                   
    }

    body{
        background-image:url("../asset/yhl05.jpg");
        background-repeat: no-repeat; /*不重复图片*/
        background-attachment: fixed;/* 固定图片*/
    }
</style>
