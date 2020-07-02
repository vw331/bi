<!--设备日志-->
<template>
  <div id="deviceInfo-log-component">
    <div class="device-log-page h-full flex flex-col">
      <a-form layout="inline" class="mb-2">
        <a-form-item>
          <a-input-search placeholder="搜索日志" class="w-64" @search="onSearch" />
        </a-form-item>
      </a-form>
      <div class="table-wrap flex-1" ref="table-wrap">
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
</template>

<script>


import moment from 'moment';

const columns = [
    {
      title: '操作用户',
      dataIndex: 'user',
      width: 280,
      align: 'center'
    },
    {
      title: '目标参数',
      dataIndex: 'params',
      width: 'auto',
    },
    {
      title: '设定值',
      dataIndex: 'value',
      width: '30%',
      align: 'center'
    },
    {
      title: '操作时间',
      dataIndex: 'date',
      width: '30%',
      align: 'center',
      sorter: (a, b) => new Date(a).getTime() - new Date(b).getTime(),
    },
  ];

  const data = new Array(50).fill({
    id: 0,
    user: 'admin',
    params: 'id=123&action=update&state=2',
    value: 'success',
    date: moment().format('YYYY-MM-DD hh:mm:ss')
  }).map((item, i) => ({
    ...item,
    id: `PK_${i}`
  }))




export default {
  name: 'DeviceInfoLog',
  data() {
    return {
      pagination: {
        defaultPageSize: 30
      },
      loading: false,
      columns,
      data,
      tableScroll: {
        y: 400
      }
    }
  },
  mounted() {
    const tableHeight = this.$refs['table-wrap'].offsetHeight - 100
    this.tableScroll = { y: tableHeight }
  },
  methods: {
    onSearch(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less">
@import '@/style/theme.less';

#deviceInfo-board-component {
  height: 100%;
  .device-brade-page {
    height: calc(100% - 68px)
  }
}
</style>