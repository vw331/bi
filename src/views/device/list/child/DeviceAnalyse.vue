<!-- 设备分析  -->
<template>
  <div id="deviceInfo-analyse-component">
    <div class="deviceInfo-analyse-wrap">
      <div class="item-left relative">
        <div class="overflow-auto absolute inset-0">
          <a-statistic
            v-for="(item, index) in data" :key="index"
            class="statistic_bar mb-2"
            :title="item.title"
            :value="item.value"
            :precision="2"
            :suffix="item.suffix"
          >
          </a-statistic>
        </div>
      </div>
      <div>
        <a-card class="h-full" size="small" title="电量" ref="card-1">1</a-card>
      </div>
      <div>
        <a-card class="h-full" size="small" title="故障总数" ref="card-2">2</a-card>
      </div>
      <div>
        <a-card class="h-full" size="small" title="累计运行时间" ref="card-3">3</a-card>
      </div>
      <div>
        <a-card class="h-full" size="small" title="无故障工作时间" ref="card-4">4</a-card>
      </div>
      <div>
        <a-card class="h-full" size="small" title="报警总数" ref="card-5">5</a-card>
      </div>
    </div>
  </div>
</template>

<script>

import random  from '@/utils/random';

const data = [
  { title: 'A相电压', value: '11.28', suffix: 'V' },
  { title: 'B相电压', value: '15.25', suffix: 'V' },
  { title: 'C相电压', value: '45', suffix: 'V' },
  { title: 'A相电流', value: '32', suffix: 'A' },
  { title: 'B相电流', value: '18.11', suffix: 'A' },
  { title: 'C相电流', value: '11.28', suffix: 'A' },
  { title: '功率', value: '11.28', suffix: 'W' },
  { title: '功率因素', value: '11.28', suffix: 'W' },
  { title: '电度', value: '11.28', suffix: 'kWh' },
  { title: '电度', value: '11.28', suffix: 'kWh' }
]

export default {
  name: 'DeviceInfoAnalyse',
  data() {
    return {
      data
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {

      Object.values( this.$refs )
        .forEach((component) => {
          console.log( component )
          const $dom = component.$el.lastChild;
          const charts = this.$echarts.init($dom, "mytheme");
          charts.setOption({
            grid: {
              // top: "10%",
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
                //data: [820, 932, 901, 934, 1290, 1330, 1320],
                data: new Array(8).fill(1).map(item => random(100, 999)*item),
                type: "line"
              },
              {
                data: new Array(8).fill(1).map(item => random(100, 999)*item),
                type: "line"
              }
            ]
          });
        });
    }
  }
}
</script>

<style lang="less">
@import '@/style/theme.less';

#deviceInfo-analyse-component {
  .deviceInfo-analyse-wrap {
    height: 100%;
    display: grid;
    grid-template-columns: 300px repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: row;
    grid-gap: @gutter;
  }
  .item-left {
    grid-row: 1 / span 2;
  }
}
</style>