<!-- 报警/故障  -->
<template>
  <div id="deviceInfo-warn-component">
    <div class="diviceInfo-warn-wrap h-full flex flex-col">
      <a-form layout="inline" class="mb-2">
        <a-form-item>
          <a-input-search placeholder="搜索报警/故障" class="w-64" @search="onSearch" />
        </a-form-item>
        <a-form-item>
          <a-checkbox-group v-model="checkedList" :options="plainOptions" @change="onChange" />
        </a-form-item>
        <a-form-item>
          <a-checkbox @change="onChange2">仅显示未恢复</a-checkbox>
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
      title: 'id',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '消息内容',
      dataIndex: 'name',
    },
    {
      title: '发生时间',
      dataIndex: 'start_time',
      width: '30%',
      align: 'center'
    },
    {
      title: '恢复时间',
      dataIndex: 'end_time',
      width: '30%',
      align: 'center'
    },
  ];

  const data = new Array(50).fill({
    id: 0,
    name: '华东项目名称一',
    start_time: moment().format('YYYY-MM-DD hh:mm:ss'),
    end_time: moment().format('YYYY-MM-DD hh:mm:ss')
  }).map((item, i) => ({
    ...item,
    id: `PK_${i}`
  }))



export default {
  name: 'DeviceInfoWarn',
  data() {
    return {
      checkedList: [],
      plainOptions: ['设备故障', '设备报警'],
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
    },
    onChange(val) {
      console.log(val)
    },
    onChange2(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less">
@import '@/style/theme.less';

#deviceInfo-warn-component {
}

</style> 