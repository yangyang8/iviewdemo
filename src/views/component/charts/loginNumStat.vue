<template>
    <div>
        <div class="f">
            <Form ref="formItem" :model="formItem" inline>
                <!--按天的登录情况统计 -->    
                <!--按月的登录情况统计 -->    
                <!--按年的登录情况统计 -->   

                <!--可以选择按每年来查，也可以选择按那个月来查，同时也可以按那一天来查 
                    ，也可以选择按rang来查询，也就是可以选择按年的rang，也可以选择按
                    月的range来查，同时也可以按天的range来查
                --> 
                <FormItem>
                   <Select v-model="formItem.select" @on-change="dataSelect" style="width:150px">
                        <Option value="day">按天统计</Option>
                        <Option value="month">按月统计</Option>
                        <Option value="year">按年统计</Option>
                        <Option value="rangeDay">按天的范围统计</Option>
                        <Option value="rangeMonth">按月的范围统计</Option>
                        <Option value="rangeYear">按年的范围统计</Option>
                    </Select> 
                </FormItem>
                 <FormItem v-if="formItem.select == 'day' ">
                    <Row>
                        <Col span="22">
                            <DatePicker format="yyyy年MM月dd日" type="date" placeholder="选择统计那一天的登录人数" v-model="formItem.day">
                            </DatePicker>                       
                        </Col>
                    </Row>
                </FormItem>
                <FormItem v-if="formItem.select == 'month' ">
                    <Row>
                        <Col span="22">
                            <DatePicker type="month" placeholder="选择开始月份" v-model="formItem.month"></DatePicker>
                        </Col>
                    </Row>
                </FormItem>

                <FormItem v-if="formItem.select == 'year' ">
                    <Row>
                        <Col span="22">
                            <DatePicker type="year" placeholder="选择开始年份" v-model="formItem.year"></DatePicker>
                        </Col>
                    </Row>
                </FormItem>

                <!--################################# -->

                <FormItem v-if="formItem.select == 'rangeDay' ">
                    <Row>
                        <Col span="10">
                            <TimePicker format="HH:mm" placeholder="选择开始时间" v-model="formItem.startTime"></TimePicker>
                        </Col>
                        <Col span="2" style="text-align: center">至</Col>
                        <Col span="10">
                            <TimePicker format="HH:mm" placeholder="选择结束时间" v-model="formItem.endTime"></TimePicker>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem v-if="formItem.select == 'rangeMonth' ">
                    <Row>
                        <Col span="10">
                            <DatePicker type="month" placeholder="选择开始月份" v-model="formItem.startDate"></DatePicker>
                        </Col>
                        <Col span="2" style="text-align: center">至</Col>
                        <Col span="10">
                            <DatePicker type="month" placeholder="选择结束月份" v-model="formItem.endDate"></DatePicker>
                        </Col>
                    </Row>
                </FormItem>

                <FormItem v-if="formItem.select == 'rangeYear' ">
                    <Row>
                        <Col span="10">
                            <DatePicker type="year" placeholder="选择开始年份" v-model="formItem.startYear"></DatePicker>
                        </Col>
                        <Col span="2" style="text-align: center">至</Col>
                        <Col span="10">
                            <DatePicker type="year" placeholder="选择结束年份" v-model="formItem.endYear"></DatePicker>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formItem')">查询</Button>
                </FormItem>
            </Form>
        </div>
        <Row>
           
            <!--搞个饼图 -->
            <Col span="11">
                <div id="pieCharts" :style="{width: '100%', height: '400px' }"> 
                        <!--进行显示相关的图表的相关操作 -->
                            <!--这里加一个饼图统计每个登录人数据的区域变化 -->
                            <!--这里加一个条形图统计每个登录人数据的区域变化 -->
                </div>
            </Col>
            <Col span="1">
                <div :style="{width: '100%', height: '400px'}"></div>
            </Col>
            <!-- 搞个条形图 -->
            <Col span="12">
                <div id="barCharts" :style="{width: '100%', height: '400px'}"> 
                        <!--进行显示相关的图表的相关操作 -->
                        <!--这里加一个饼图统计每个登录人数据的区域变化 -->
                        <!--这里加一个条形图统计每个登录人数据的区域变化 -->
                </div>
            </Col>
        </Row>
        <br/>
        <br/>
        <Row>
            <Col span="24">
                <div id="charts" :style="{width: '100%', height: '400px'}"> 
                        <!--进行显示相关的图表的相关操作 -->
                            <!--这里加一个饼图统计每个登录人数据的区域变化 -->
                            <!--这里加一个条形图统计每个登录人数据的区域变化 -->
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {

    data () {
            return {
                formItem: {
                    select: '',
                    day:new Date('2018-6-16'),
                    month:new Date('2017-8'),
                    year:new Date('2017'),
                    startDate: new Date('2018-1'),
                    endDate:new Date('2018-8'),
                    startTime:'02:08',
                    endTime:'12:43',
                    startYear:new Date('2012'),
                    endYear:new Date('2019'),//这个日期类型要写成字符串的类型的，不然会有问题的
                }
            }
        },
        methods: {
            handleSubmit(name) {
                alert("哈哈")
                //this.makeCharts();
                this.dataSelect();
                alert("调用了生成图表的方法")
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },makeCharts(datas){


                //alert("makeCharts");
                 // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('charts'));
                let pieChart = this.$echarts.init(document.getElementById('pieCharts'));
                let barChart = this.$echarts.init(document.getElementById('barCharts'));
                // 指定图表的配置项和数据
                var option1 = {
                     backgroundColor: 'white',
                    xAxis: {
                        type: 'category',
                        boundaryGap:true,
                    // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        data:datas

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
                myChart.setOption(option1);
                
                //饼图
                var option2 = {
                        backgroundColor:'white',
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        legend: {
                            orient: 'vertical',
                            x: 'left',
                            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                        },
                        series: [
                            {
                                name:'访问来源',
                                type:'pie',
                                radius: ['50%', '70%'],
                                avoidLabelOverlap: false,
                                label: {
                                    normal: {
                                        show: false,
                                        position: 'center'
                                    },
                                    emphasis: {
                                        show: true,
                                        textStyle: {
                                            fontSize: '30',
                                            fontWeight: 'bold'
                                        }
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: false
                                    }
                                },
                                data:[
                                    {value:335, name:'直接访问'},
                                    {value:310, name:'邮件营销'},
                                    {value:234, name:'联盟广告'},
                                    {value:135, name:'视频广告'},
                                    {value:1548, name:'搜索引擎'}
                                ]
                            }
                        ]
                    };
                    pieChart.setOption(option2)


                    var option3 = {
                            backgroundColor:'white',
                            xAxis: {
                                type: 'category',
                                //data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                data:datas
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [120, 200, 150, 80, 70, 110, 130],
                                type: 'bar'
                            }]
                        };
                    barChart.setOption(option3);

               // alert("makeChartsEnd...");
            },
            //下拉框值改变了
            dataSelect(value){
                //alert("下拉框值改变了"+value+"::"+258);
                /**
                 * 进行集体设置这些日期的默认值
                 */
                //alert("xxxxxxxxxx");
                if(value==undefined){
                    value=this.formItem.select;
                }
                //alert("选择的数据项目如下"+value);
                var datas=new Array();
                //都变成数组
                if(value=="rangeYear"){
                    //年 ,开始时给个默认值
                    //alert("rangeYear");
                    var s1Data=this.formItem.startYear;
                    var e1Date=this.formItem.endYear;
                    var s1=null;
                    var s2=null;
            
                  // alert("jj"+s1Data);
                   if(s1Data!=""&&e1Date!=""){
                        //alert("year不等于"+e1Date);
                        s1=s1Data.getFullYear();
                        s2=e1Date.getFullYear();
                   }else{
                       s1=this.formItem.startYear;
                       s2= this.formItem.endYear;
                       //alert(s1+"::"+s2);
                   }

                  for(var i=s1;i<=s2;i++){
                        datas.push(i)
                  }
                }else if(value=="rangeMonth"){
                    //月
                   //alert("rangeMonth");
                   var s1Data=this.formItem.startDate;   
                   var e1Date=this.formItem.endDate;
                   var years=null;
                   var s2=null;
                   var s3=null;
                  // alert("jj"+s1Data);
                   if(s1Data!=""&&e1Date!=""){
                        years=s1Data.getFullYear();
                        s2=s1Data.getMonth() + 1;
                        s3=e1Date.getMonth() + 1;
                   }
                   for(var i=s2;i<=s3;i++){
                        datas.push(years+"-"+i)
                   }
                }else if(value=='year'){
                    //天，也就是小时
                    //alert("day");
                    //统计12个月的登录情况
                     var y=this.formItem.year;
                     var year;
                     if(y!=""){
                         year=y.getFullYear();
                     }

                     for(var i=1;i<=12;i++){
                         datas.push(year+"-"+i);
                     }
                }else if(value=='month'){
                    //统计这个月的情况
                    //alert("执行了...")
                    var m=this.formItem.month;
                    var year;
                    var month;
                    if(m!=''){
                        year=m.getFullYear();
                        month=m.getMonth()+1;
                    }
                    //得到月数
                    var dNum=this.mGetDate(year,month);
                    //alert("月天数"+dNum);
                     for(var i=1;i<=dNum;i++){
                         datas.push(month+"月"+i+"号");
                     }
                }else if(value == 'day'){
                    var d=this.formItem.day;
                    var year;
                    var month;
                    var day;
                    
                    if(d!=""){
                        year=d.getFullYear();
                        alert(year);
                        month=d.getMonth()+1;
                        day=d.getDate();
                    }
                    //天，也就是小时
                    //alert("day"+);
                    for(var i=0;i<=24;i++){
                        if(i>=0&&i<=6){
                            datas.push("凌晨"+i+"点");
                        }else if(i>6&&i<=12){
                            datas.push("早上"+i+"点");
                        }else if(i>12&&i<=18){
                            datas.push("下午"+(i-12)+"点");
                        }else{
                            datas.push("晚上"+i+"点");
                        }
                        //alert("day"+i);
                    }
                }else {
                    //天，也就是小时
                    //alert("defaut");//是我们的按时间范围来选择
                    var s1=parseInt(this.formItem.startTime.split(":")[0]);
                    var s2=parseInt(this.formItem.endTime.split(":")[0]);
                    
                    for(var i=s1;i<=s2;i++){
                        datas.push(i+"时");
                    }
                }
                this.makeCharts(datas);
            },mGetDate(year, month){
                    var d = new Date(year, month, 0);
                    return d.getDate();
             }
        },mounted(){
            this.formItem.select='day';
            //向服务器发送数据，得到数据，然后进行渲染到前台当中
            //this.makeCharts();
            this.dataSelect();
        } //在这个页面结束后进行移除这个属性，不让他给后面的属性造成问题      
}
</script>
<style>
    .f{
        margin-top: 15px;
        margin-left: 5px;
    }
</style>
