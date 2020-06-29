<template>
  <div class="list-page">
    <div class="animate__animated animate__fadeInLeft animate__delay-1s item-left">
      <a-card class="h-full" size="small" ref="card-lt">
        <device-tree></device-tree>
      </a-card>
    </div>
    <div  class="device-wrap">
      <a-row :gutter="20">
        <a-col style="margin-bottom: 20px" v-for="item in data" :key="item.id" :span="8">
            <device-media :device="item"></device-media>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import DeviceTree from '@/components/DeviceTree'
import DeviceMedia from './DeviceMedia'


const data = [
  { 
    id: 1,
    title: '设备一',
    describe: '描述:设备描述设备描述设备描述设备描述',
    img: require('@/assets/device/2-1G10109322VI.gif'),
    state: 1
  },{ 
    id: 2,
    title: '设备二',
    describe: '描述:设备描述设备描述设备描述设备描述',
    img: require('@/assets/device/2-1G101093100X2.gif'),
    state: 1
  },{ 
    id: 3,
    title: '设备三',
    describe: '描述:设备描述设备描述设备描述设备描述',
    img: require('@/assets/device/2-1G10109341I43.gif'),
    state: 1
  },{ 
    id: 4,
    title: '设备四',
    describe: '描述:设备描述设备描述设备描述设备描述',
    img: require('@/assets/device/2-1G101093201C2.gif'),
    state: 2
  },{ 
    id: 5,
    title: '设备五',
    describe: '描述:设备描述设备描述设备描述设备描述',
    img: require('@/assets/device/2-1G101093254600.gif'),
    state: 1
  }
]
export default {
  name: 'ProjectList',
  components: { DeviceTree, DeviceMedia },
  data() {
    return {
      data
    }
  },
  mounted(){

  },
  methods: {
    
  }
}
</script>

<style lang="less">

@import '@/style/theme.less';

.list-page {
  height: 100%;
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 1fr;
  grid-auto-flow: row;
  grid-gap: @gutter;

  & > div {
    //margin: @gutter;
    position: relative;
  }

  .item-left {
    grid-row: 1 / span 3;
  }
  .item-center {
    grid-row: 1 / span 3;
  }
  .device-wrap {
    height: 100%;
    overflow: auto;
  }
}

</style>