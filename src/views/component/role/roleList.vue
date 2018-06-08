<template>
    <Table class="table2" border :columns="columns7" :data="data6"></Table>
</template>
<script>
    import axios from 'axios';
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: '用户名',
                        key: 'name',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        align: 'center'
                    },
                    {
                        title: '地址',
                        key: 'address',
                        align: 'center'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data6: []
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: '显示用户信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        },
        mounted(){
            var baseURL="http://localhost:8082";
            //var name=this.$route.params.name;
            var name="/role/pageRoleList.action";
            //alert(baseURL+name);
            //向服务器发送相关的请求，然后得到相关的数据进行渲染
            axios.post(baseURL+name).then(response=>{
                var roleList=response.data;
                this.data6=roleList;
            },err=>{
                alert("获取后台数据失败...")
            });         
        }
    }
</script>

<style>
    .table2{
        text-align: center;
        
    }
</style>
