<template>
  <div id="device-info-page">
    <a-page-header
      class="page-header"
      title="空压机项目"
      @back="() => { this.$router.push(`/device/${this.$route.params.id}/list/all`) }">
      <template slot="subTitle">
        <a-radio-group :default-value="currentSubComponent" name="subnav"  button-style="solid" @change="onRadioChange">
          <a-radio-button value="device-info-board">设备监控 </a-radio-button>
          <a-radio-button value="device-info-analyse">设备分析</a-radio-button>
          <a-radio-button value="device-info-warn">报警/故障</a-radio-button>
          <a-radio-button value="device-info-log">操作日志 </a-radio-button>
        </a-radio-group>
      </template>
      <template slot="extra">
        <a-radio-group v-model="datePickerType">
          <a-radio-button value="year">年</a-radio-button>
          <a-radio-button value="month">月</a-radio-button>
          <a-radio-button value="date">日</a-radio-button>
        </a-radio-group>
        <a-select v-if="datePickerType==='year'" default-value="2020" style="width: 165px;" class="ml-2"  @change="onDatePickerChange">
          <a-select-option value="2020">2020</a-select-option>
        </a-select>
        <a-month-picker v-if="datePickerType==='month'" @change="onDatePickerChange" />
        <a-date-picker v-if="datePickerType==='date'" @change="onDatePickerChange" />
      </template>  
    </a-page-header>
    <keep-alive>
      <component style="flex: 1" v-bind:is="currentSubComponent"></component>
    </keep-alive>
  </div>
</template>
<script>



export default {
  name: 'DeviceInfoIndex',
  components: {
    'device-info-board': () => import('./child/DeviceBoard'),
    'device-info-analyse': () => import('./child/DeviceAnalyse'),
    'device-info-warn': () => import('./child/DeviceWarn'),
    'device-info-log': () => import('./child/DeviceLog')
  },
  data(){
    return {
      datePickerType: 'date',
      currentSubComponent: 'device-info-board'
    }
  },
  methods: {
    onRadioChange(e) {
      this.currentSubComponent = e.target.value
    },
    onDatePickerChange() {

    }
  }
}
</script>  

<style lang="less">

@import '@/style/theme.less';

#device-info-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  .ant-page-header::after {
    position: absolute;
    top: 38px;
    left: 540px;
    right: 350px;
    content: '';
    display: block;
    border-bottom: 1px solid @border-color-base
  }

  .ant-page-header-heading-extra {
    margin-top: 5px
  }
}  
</style>