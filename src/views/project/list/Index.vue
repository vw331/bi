<template>
  <div class="list-page">
    <div class="item-left">
      <a-card class="h-full" size="small" title="项目累计工时排行" ref="card-lt">1</a-card>
    </div>
    <div class="item-center" ref="table-wrap">
      <a-table
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
      <a-card class="h-full" size="small" title="项目累计工时排行" ref="card-lt">1</a-card>
    </div>
    <div class="item-rc">
      <a-card class="h-full" size="small" title="项目累计工时排行" ref="card-lt">1</a-card>
    </div>
    <div class="item-rb">
      <a-card class="h-full" size="small" title="项目累计工时排行" ref="card-lt">1</a-card>
    </div>
  </div>
</template>

<script>
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