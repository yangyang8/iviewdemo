<template>
    <div class="divFrom1">
        <Form class="form1" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <Icon type="person-add"></Icon>
            <span>用户注册</span><br>
            <FormItem label="姓名" prop="name" style="margin:10px;width:400px">
                <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="密码" prop="password" style="margin:10px;width:400px">
                <Input type="password" v-model="formValidate.password" placeholder="Enter your password"></Input>
            </FormItem>
            <FormItem label="邮箱" prop="emall" style="margin:10px;width:400px">
                <Input v-model="formValidate.emall" placeholder="Enter your e-mail"></Input>
            </FormItem>
            
            <FormItem label="出生日期" style="margin:10px;width:400px">
                <Row>
                    <Col span="11">
                        <FormItem prop="birthday">
                            <DatePicker type="date" placeholder="Select date" v-model="formValidate.birthday"></DatePicker>
                        </FormItem>
                    </Col>
                    <Col span="2" style="text-align: center">-</Col>
                    <Col span="11">
                        <FormItem prop="time">
                            <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                        </FormItem>
                    </Col>
                </Row>
            </FormItem>
            <br>
            <FormItem label="头像" style="margin:10px;width:180px">
                <Upload :before-upload="handleUpload" v-model="formValidate.file"
                        action="//localhost:8082/System/registerUser.action">
                        <Button type="ghost" icon="ios-cloud-upload-outline">
                            {{ formValidate.file.name !=null ?formValidate.file.name:'上传头像' }}</Button>
                </Upload>
            </FormItem>
            
            <FormItem label="性别" prop="gender" style="margin:10px;width:180px">
                <RadioGroup v-model="formValidate.gender">
                    <Radio label="male">男</Radio>
                    <Radio label="female">女</Radio>
                </RadioGroup>
            </FormItem>
            
            <FormItem label="描述" prop="descript" style="margin:10px;width:400px">
                <Input v-model="formValidate.descript" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem style="margin:10px;width:400px">
                <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import axios from 'axios';
    export default {
        //给body设置class属性
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].className="active1";
        },
        //在这个页面结束后进行移除这个属性，不让他给后面的属性造成问题
        beforeDestroy: function() {
            document.body.removeAttribute("class","active1");
        },
        data () {
            return {
               mfile:'',
               formValidate: {
                    name: '',
                    password:'',
                    emall: '',
                    gender: '',
                    descript: '',
                    birthday:'',
                    file: ''
                   
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        //this.$router.push({path:"/mune?username="+this.formValidate.name});
                        //给我们的前台发送注册数据的请求
                        //axios.post("http://localhost:8082/System/registerUser.action",this.formValidate)
                        alert(this.formValidate.file.name+"::"+this.formValidate.file.uri);
                         this.$http.post("http://localhost:8082/System/registerUser.action",this.formValidate
                           )
                        .then(response=>{
                            //成功的数据
                            //进行跳转到首页面
                             this.$router.push({path:"/mune?username="+this.formValidate.name});
                        },err=>{
                            //失败的数据
                            this.$Message.error("用户注册数据失败");
                        })
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleUpload (file) {
                //alert(file.name);
                this.formValidate.file = file;
                return false;
            }
        },
        mounted(){
                document.getElementsByTagName("body")[0].className="active1";
        }
    }
</script>

<style>

.active1{
    background-image: url(../../asset/yhl10.jpg);
    /*background-color:#cac6c6;*/
}

.form1{
        padding-top: 15px;
        display: inline-block; 
        text-align: center;
        margin-left: 300px;
        width: 450px;
        height: 450px;
        box-shadow: 0 0 25px #cac6c6;
        background-color: beige;
    }

   
.divFrom1{
        text-align:center;/*(让div中的内容居中)*/ 
        padding-top:250px;   
}
</style>
