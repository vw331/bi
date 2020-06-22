<template>
  <div class="list-page">
    <div class="item-left">
      <a-card class="h-full" size="small" ref="card-lt">
        <project-tree></project-tree>
      </a-card>
    </div>
    <div class="item-center" ref="table-wrap">
      <a-table
        class="table-striped"
        rowKey="id"
        :columns="columns"
        :data-source="data"
        :pagination="pagination"
        :loading="loading"
        :scroll="tableScroll"
      >
        <span slot="tags" slot-scope="status">
          <a-tag
            :key="status"
            :color=" status=== 1 ? '#28a745' : '#dc3545'"
          >{{ status === 1 ? '正常': '异常' }}</a-tag>
        </span>
        <span slot="progress" slot-scope="progress">
          <a-progress 
            :status="(progress < 20 && 'exception') || ( progress < 70 && 'active') || 'success' "
            :percent="progress" 
            size="small"/>
        </span>
        <span slot="action" slot-scope="id">
          <router-link :to="id">查看</router-link>
        </span>
      </a-table>
    </div>
    <div class="item-rt">
      <a-card class="h-full" size="small" title="任务进度排行" ref="card-rt">1</a-card>
    </div>
    <div class="item-rc">
      <a-card class="h-full" size="small" title="任务类型分布" ref="card-rc">1</a-card>
    </div>
    <div class="item-rb">
      <a-card class="h-full" size="small" title="任务进度分析" ref="card-rb">1</a-card>
    </div>
  </div>
</template>

<script>
  import ProjectTree from '@/components/ProjectTree'
  import moment from 'moment';
  import random  from '@/utils/random';

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '项目名称',
      dataIndex: 'name',
    },
    {
      title: '当前进度',
      dataIndex: 'progress',
      width: 260 ,
      scopedSlots: { customRender: "progress" }
    },
    {
      title: '更新日期',
      dataIndex: 'update_time',
      width: 180,
    },
    {
      title: '当前状态',
      dataIndex: 'state',
      width: 120,
      scopedSlots: { customRender: "tags" }
    },
    {
      title: '操作',
      width: 120,
      scopedSlots: { customRender: "action" }
    }
  ];

  const data = new Array(50).fill({
    id: 0,
    name: '华东项目名称一',
    state: 1,
    progress: 60,
    update_time: moment().format('YYYY-MM-DD hh:mm:ss')
  }).map((item, index )=> {
    return {
      ...item,
      id: `PK-${index+2}`,
      progress: random(10, 99)*1
    }
  })


  export default {
    name: 'ProjectList',
    components: { ProjectTree },
    data() {
      return {
        data,
        pagination: {
          defaultPageSize: 30
        },
        loading: false,
        columns,
        tableScroll: {
          y: 400
        }
      }
    },
    mounted(){
      const tableHeight = this.$refs['table-wrap'].offsetHeight - 120
      this.tableScroll = { y: tableHeight }

      this.initCharts1()
      this.initCharts2()
      this.initCharts3()
    },
    methods: {
      initCharts1() {
        const $dom = this.$refs["card-rt"].$el.lastElementChild;
        const charts = this.$echarts.init($dom, "mytheme");
        charts.setOption({
          color: ["#3398DB"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            top: "3%",
            left: "3%",
            right: "3%",
            bottom: "1%",
            containLabel: true
          },
          xAxis: {
            type: "value",
            show: false
          },
          yAxis: {
            type: "category",
            data: ["TK1", "TK2", "TK3", "TK4", "TK5", "TK6", "TK7"].reverse()
          },
          series: [
            {
              name: "输送量（kg）",
              type: "bar",
              barWidth: "60%",
              data: [567, 458, 325, 254, 215, 180, 87].reverse(),
              label: {
                normal: {
                  position: "right",
                  show: true
                }
              }
            }
          ]
        });
      },
      initCharts2() {
        const $dom = this.$refs["card-rc"].$el.lastElementChild;
        const charts = this.$echarts.init($dom, "mytheme");
        charts.setOption({
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: "vertical",
            left: 10,
            data: ["直接访问", "邮件营销"]
          },
          series: [
            {
              name: "项目进度",
              type: "pie",
              radius: ["30%", "50%"],
              center: ["25%", "50%"],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: "center"
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "30",
                  fontWeight: "bold"
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 21, name: "延期" },
                { value: 335, name: "正常" }
              ]
            },
            {
              name: "项目进度",
              type: "pie",
              radius: ["30%", "50%"],
              center: ["75%", "50%"],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: "center"
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "30",
                  fontWeight: "bold"
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 335, name: "未开始" },
                { value: 310, name: "正在施工" },
                { value: 234, name: "已暂停" },
                { value: 135, name: "已结束" },
                { value: 1548, name: "待验收" }
              ]
            }
          ]
        });
      },
      initCharts3() {
        const $dom = this.$refs["card-rb"].$el.lastElementChild;
        const charts = this.$echarts.init($dom, "mytheme");
        charts.setOption({
          grid: {
            top: "3%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: {
            type: "category",
            data: ["3月", "4月", "5月", "6月", "7月", "8月", "7月"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: "line"
            },
            {
              data: [125, 321, 158, 654, 125, 458, 345],
              type: "line"
            }
          ]
        });
      },
    }
  }
</script>

<style lang="less">

@import '@/style/theme.less';

.list-page {
  display: grid;
  height: 100%;
  display: grid;
  grid-template-columns: 240px auto 360px;;
  grid-template-rows: repeat(3, 33.33%);
  grid-auto-flow: column;

  & > div {
    margin: @gutter;
    position: relative;
  }

  .item-left {
    grid-row: 1 / span 3;
  }
  .item-center {
    grid-row: 1 / span 3;
  }
}

</style>