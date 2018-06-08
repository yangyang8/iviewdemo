<template>
    <div>
        <button @click="getData()">请求数据</button>

        <hr>
        <br>
        <ul>
                <li v-for="item in list">
                    {{item.user+"===="+item.password}}
                </li>

        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[]
        }

    },methods:{
            getData(){
                var api="http://localhost:8082/System/login.action";
                this.$http.get(api).then(
                    function(response){
                        var list1=response.data;
                        this.list=list1;
                        for(var i=0;i<=list1.length;i++){
                            alert(list1[i].user);
                        }
                    },function(err){
                        alert(err);
                    }
                )
            }
    },
    mounted:{
        
    }
}
</script>

<style>

</style>


