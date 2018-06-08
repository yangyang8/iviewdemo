<template>
    <div>
        <br>
        <br>
        <i-input v-model="value1" size="large" style="width:350px"
         placeholder="请输入相关的数据" icon="ios-clock-outline" 
         @on-click="getMsg()" ref="input" @on-blur="getData()"></i-input>
        <br>
        <br>
        <Radio-group v-model="button1" type="button">
            <Radio label="北京"></Radio>
            <Radio label="上海"></Radio>
            <Radio label="深圳"></Radio>
            <Radio label="杭州"></Radio>
        </Radio-group>
        <Radio-group v-model="button2" type="button">
            <Radio label="北京"></Radio>
            <Radio label="上海" disabled></Radio>
            <Radio label="深圳"></Radio>
            <Radio label="杭州"></Radio>
        </Radio-group>
        <Radio-group v-model="button3" type="button">
            <Radio label="北京" disabled></Radio>
            <Radio label="上海" disabled></Radio>
            <Radio label="深圳" disabled></Radio>
            <Radio label="杭州" disabled></Radio>
        </Radio-group>

        <button v-on:click="clickSubmit()">点击变幻数据</button>

        <br>
        <!-- 自己使用的slot属性来组合多个输入框的相关操作 -->
        <i-input size="large" style="width:400px">
                <i-select style="width:100px" slot="prepend">
                    <i-option>http://</i-option>
                    <i-option>https://</i-option>
                </i-select>

                <i-select style="width:100px" slot="append">
                    <i-option>.com</i-option>
                    <i-option>.org</i-option>
                    <i-option>.edu</i-option>
                </i-select>
        </i-input>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1:'中两',
                button1: '北京',
                button2: '北京',
                button3: '北京'
            }
        },
        methods:{
            clickSubmit(){
                alert(this.button1);
                this.button1="上海";
            },
            getMsg(){
                    alert("输入框的点击事件被触发了");
            },
            getData(){
                alert(this.$refs.input.value+""+this.value1);
            }
        }
    }
</script>