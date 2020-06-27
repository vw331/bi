<!-- 项目日志  -->
<template>
  <div id="project-log-page">
    <div class="log-page flex flex-col">
      <div class="item-top">
        <a-input-group size="large" class="mb-6">
          <a-row :gutter="8">
            <a-col :span="10" :offset="6">
              <a-input-search
                placeholder="查询关键字"
                enter-button="查询"
                size="large"
                @search="onSearch"
              />
            </a-col>
            <a-col :span="2">
              <a-button type="link" size="large" @click="toggle">更多 <a-icon :type="expand ? 'up' : 'down'"/></a-button>
            </a-col>
          </a-row>
        </a-input-group>
        
        <a-form v-show="expand" :form="form" layout="inline" class="text-center mb-6">
          <a-form-item label="故障类型">
            <a-radio-group default-value="0" @change="onTypeChange">
              <a-radio-button value="0">全部</a-radio-button>
              <a-radio-button value="1">控制器故障</a-radio-button>
              <a-radio-button value="2">设备故障</a-radio-button>
              <a-radio-button value="3">设备报警</a-radio-button>
              <a-radio-button value="4">未恢复</a-radio-button>
            </a-radio-group>
          </a-form-item>
          <a-form-item label="起止时间">
            <a-range-picker @change="onDateRangeChange" />
          </a-form-item>
        </a-form>
      </div>
      <div class="item-bottom animate__animated animate__fadeInUp animate__delay-1s">
        <div class="table-wrap h-full" ref="table-wrap">
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
    </div>
  </div>
</template>

<script>

import moment from 'moment';

const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '消息内容',
      dataIndex: 'name',
    },
    {
      title: '故障对象',
      dataIndex: 'device',
      width: 260 
    },
    {
      title: '发生时间',
      dataIndex: 'start_time',
      width: 240,
    },
    {
      title: '恢复时间',
      dataIndex: 'end_time',
      width: 240,
    },
  ];

  const data = new Array(50).fill({
    id: 0,
    name: '华东项目名称一',
    device: '一号空压机',
    start_time: moment().format('YYYY-MM-DD hh:mm:ss'),
    end_time: moment().format('YYYY-MM-DD hh:mm:ss')
  }).map((item, i) => ({
    ...item,
    id: `PK_${i}`
  }))


export default {
  name: "ProjectLog",
  components: {  },
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }),
      expand: true,
      pagination: {
        defaultPageSize: 30
      },
      loading: false,
      columns,
      data,
      tableScroll: {
        y: 400
      }
    };
  },
  mounted(){
    const tableHeight = this.$refs['table-wrap'].offsetHeight - 100
    this.tableScroll = { y: tableHeight }
  },
  methods: {
    onSearch(value) {
      console.log(value)
    },
    onDateRangeChange(value) {
      console.log(value)
    },
    onTypeChange(e) {
      console.log(e)
    },
    toggle() {
      this.expand = !this.expand
      console.log( this.expand )
    }
  }
}

</script>

<style lang="less">
@import '@/style/theme.less';

#project-log-page {
  height: 100%;
  .log-page { 
    height: 100%;
  }
  .item-top {
    //height: 200px;
  }
  .item-bottom {
    flex: 1
  }
}

</style>