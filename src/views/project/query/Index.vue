<!-- 数据查询  -->
<template>
  <div id="project-query-page">
    <div class="query-page">
      <div class="item-main animate__animated animate__fadeInLeft animate__delay-1s">
        <a-form class="ant-advanced-search-form"  layout="inline" :form="form" @submit="handleSearch">
          <a-row :gutter="24">
            <a-col :span="6">
              <a-form-item label="关键字">
                <a-input placeholder="关键字"/>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="分类">
                <a-select default-value="全部">
                  <a-select-option key="全部">全部</a-select-option> 
                  <a-select-option v-for="category in categoryData" :key="category">
                    {{ category }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="日期">
                <a-range-picker></a-range-picker>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-button class="mt-1 mr-2" type="primary" html-type="submit">查询</a-button>
              <a-button html-type="reset">重置</a-button>
            </a-col>
          </a-row>
        </a-form>
        <div class="table-wrap" ref="table-wrap">
          <a-table
            class="table-striped"
            rowKey="id"
            size="middle"
            :columns="columns"
            :data-source="data"
            :pagination="pagination"
            :loading="loading"
            :scroll="tableScroll"
          >
          </a-table>
        </div>
      </div>
      <div class="animate__animated animate__fadeInRight animate__delay-1s">
        <a-card class="h-full" size="small" ref="card-rt">
          <div class="h-full flex items-center justify-center">
            <a-progress class="mr-6" type="dashboard" :percent="30" :width="120" :strokeWidth="12"/>
            <a-progress type="dashboard" :percent="100" :width="120" :strokeWidth="12"/>
          </div>
        </a-card>  
      </div>
      <div class="animate__animated animate__fadeInRight animate__delay-1s">
        <a-card class="h-full overflow-y-auto" title="项目动态" size="small" ref="card-rc">
          <a-timeline>
            <a-timeline-item color="green">项目结束 <small class="pl-2">2015-09-01</small></a-timeline-item>
            <a-timeline-item color="red">
              <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
              项目暂停 <small class="pl-2">2015-09-01</small></a-timeline-item>
            <a-timeline-item>项目启动 <small class="pl-2">2015-09-01</small></a-timeline-item>
            <a-timeline-item>项目开始 <small class="pl-2">2015-09-01</small></a-timeline-item>
            <a-timeline-item>项目签约 <small class="pl-2">2015-09-01</small></a-timeline-item>
          </a-timeline>
        </a-card>
      </div>
      <div class="animate__animated animate__fadeInRight animate__delay-1s">
        <a-card class="h-full" size="small" title="任务进度分析" ref="card-rb">card-rb </a-card>
      </div>
    </div>
  </div>
</template>

<script>

import moment from 'moment';
import random  from '@/utils/random';

  const categoryData = new Array(10).fill('分类').map((item, i) => item+i);

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
  name: "ProjectQuery",
  components: {  },
  data() {
    return {
      form: {},
      categoryData,
      data,
      pagination: {
        defaultPageSize: 30,
        showTotal: (total, range) => `当前${range[0]}-${range[1]}条，总计 ${total} 条`
      },
      loading: false,
      columns,
      tableScroll: {
        y: 400
      }
    };
  },
  mounted(){
    const tableHeight = this.$refs['table-wrap'].offsetHeight - 100
    this.tableScroll = { y: tableHeight }

    this.initCharts()
  },
  methods: {
    handleSearch(e) {
      console.log(arguments)
      e.preventDefault();
    },
    initCharts() {
      console.log( this.$refs["card-rb"] )
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

#project-query-page {
  height: 100%;

  .query-page {
    height: 100%;
    display: grid;
    grid-template-columns: auto 360px;
    grid-template-rows: 200px 1fr 1fr;
    grid-auto-flow: column;
    grid-gap: @gutter;
  }
  .item-main {
    grid-row: 1 / span 3;
    display: flex;
    flex-direction: column;
    &> .table-wrap {
      flex: 1
    }
  }

  .ant-advanced-search-form .ant-form-item {
    display: flex;
  }

  .ant-advanced-search-form .ant-form-item-control-wrapper {
    flex: 1;
  }

}

</style>