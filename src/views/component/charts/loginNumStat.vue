<template>
    <div>
        <div class="f">
            <Form ref="formItem" :model="formItem" inline>
                <!--按天的登录情况统计 -->    
                <!--按月的登录情况统计 -->    
                <!--按年的登录情况统计 -->    
                <FormItem>
                    <Select v-model="formItem.select">
                        <Option value="day">天</Option>
                        <Option value="month">月</Option>
                        <Option value="year">年</Option>
                    </Select>
                </FormItem>
                <FormItem v-if="formItem.select == 'day' ">
                    <Row>
                        <Col span="11">

                            <TimePicker format="HH:mm" placeholder="选择开始时间" v-model="formItem.startTime"></TimePicker>

                            <!--
                            <TimePicker format="HH:mm" placeholder="Select time"></TimePicker>
                            -->
                        </Col>
                        <Col span="2" style="text-align: center">至</Col>
                        <Col span="11">
                            <TimePicker format="HH:mm" placeholder="选择结束时间" v-model="formItem.endTime"></TimePicker>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem v-if="formItem.select == 'month' ">
                    <Row>
                        <Col span="11">
                            <DatePicker type="date" format="yyyy年MM月dd日" placeholder="选择开始月份" v-model="formItem.startDate"></DatePicker>
                        </Col>
                        <Col span="2" style="text-align: center">至</Col>
                        <Col span="11">
                            <DatePicker type="date" format="yyyy年MM月dd日" placeholder="选择结束月份" v-model="formItem.endDate"></DatePicker>
                        </Col>
                    </Row>
                </FormItem>

                <FormItem v-if="formItem.select == 'year' ">
                    <Row>
                        <Col span="11">
                            <DatePicker type="year" format="yyyy年" placeholder="选择开始年份" v-model="formItem.startDate"></DatePicker>
                        </Col>
                        <Col span="2" style="text-align: center">至</Col>
                        <Col span="11">
                            <DatePicker type="year" format="yyyy年" placeholder="选择结束年份" v-model="formItem.endDate"></DatePicker>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formItem')">查询</Button>
                </FormItem>
            </Form>
        </div>
        <span id="charts" :style="{width: '1600px', height: '700px'}"> 
                <!--进行显示相关的图表的相关操作 -->
                    <!--这里加一个饼图统计每个登录人数据的区域变化 -->
                    <!--这里加一个条形图统计每个登录人数据的区域变化 -->
        </span>

    </div>
</template>
<script>
export default {

    data () {
            return {
                formItem: {
                    select: '',
                    startDate: '',
                    endDate: '',
                    startTime: '',
                    endTime: ''
                }
            }
        },
        methods: {
            handleSubmit(name) {
                alert("哈哈")
                this.makeCharts();
                alert("调用了生成图表的方法")
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },makeCharts(){
                //alert("makeCharts");
                 // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('charts'));
                // 指定图表的配置项和数据
                var option = {
                    xAxis: {
                        type: 'category',
                        boundaryGap:true,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        areaStyle: {}
                    }]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
               // alert("makeChartsEnd...");
            }
        },mounted(){
            this.formItem.select='day';
            //向服务器发送数据，得到数据，然后进行渲染到前台当中
            this.makeCharts();
        }
}
</script>
<style>
    .f{
        margin-top: 15px;
        margin-left: 15px;
    }
</style>
