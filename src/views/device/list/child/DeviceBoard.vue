<!--设备监控-->
<template>
  <div id="deviceInfo-board-component">
    <div class="device-board-page">
      <div>
        <a-row :gutter="[10, 10]">
          <a-col v-for="(item, index) in data" :key="index" :span="12">
            <a-statistic
              class="statistic_bar"
              :title="item.title"
              :value="item.value"
              :precision="2"
              :suffix="item.suffix"
            >
            </a-statistic>
          </a-col>
        </a-row>
      </div>
      <div>
        <a-card class="h-full" size="small" ref="card-lb">2</a-card>
      </div>
      <div>
        <a-card class="h-full" size="small" ref="card-lbc">3</a-card>
      </div>
      <div>
        <a-card class="h-full" size="small" ref="card-rbc">4</a-card>
      </div>
      <div class="flex flex-col">
        <div class="flex-1 flex flex-row items-center">
          <a-progress class="flex-1 text-center" type="dashboard" :percent="75">
            <template #format="percent">
              <span>当前电压：<strong>{{ percent }}</strong></span>
            </template>
          </a-progress>
          <a-progress class="flex-1 text-center"  type="dashboard" :percent="95" status="success">
            <template #format="percent">
              <span>当前温度：<strong>{{ percent }}</strong></span>
            </template>
          </a-progress>
        </div>
        <a-descriptions bordered :column="2" layout="vertical" size="small">
          <a-descriptions-item v-for="(item, index) in baseParams" :key="index" 
            :label="item.title">
            <div class="text-lg">{{ item.value || '--'  }} <small>{{ item.suffix }}</small></div>
          </a-descriptions-item>
        </a-descriptions>
      </div>
      <div>
        <a-card class="h-full" size="small" ref="card-rb">6</a-card>
      </div>
      <div class="item-center relative">
        <div class="deviceInfo-thumb absolute inset-0">
          <img :src="deviceImg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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

const baseParams = [
  { title: '冷量', value: '32.05', suffix: 'kw' },
  { title: '累计冷量', value: '25.15', suffix: 'kw' },
  { title: '冷漠供水温度', value: '45.12', suffix: 'kw' },
  { title: '冷冻回水温度', value: '1.24', suffix: 'kw' },
  { title: '冷冻供水压力', value: '32.1', suffix: 'kw' },
  { title: '冷冻回水压力', value: '15.12', suffix: 'kw' },
  { title: '冷却供水温度', value: '45.21', suffix: 'kw' },
  { title: '冷却供水压力', value: '12.52', suffix: 'kw' },
]

export default {
  name: 'DeviceInfoBoard',
  data() {
    return {
      data,
      baseParams,
      deviceImg: require('@/assets/device-2.png')
    }
  },
  mounted() {
    this.initRadarCharts()
    this.initLineCharts()
    this.initLineCharts2()
    this.initBarCharts()
  },
  methods: {
    initRadarCharts() {
      const $dom = this.$refs["card-lb"].$el.lastElementChild;
      const charts = this.$echarts.init($dom, "mytheme");
      charts.setOption({
        tooltip: {},
        legend: {
          data: ["预算分配", "实际开销"]
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "销售", max: 6500 },
            { name: "管理", max: 16000 },
            { name: "信息技术", max: 30000 },
            { name: "客服", max: 38000 },
            { name: "研发", max: 52000 },
            { name: "市场", max: 25000 }
          ]
        },
        series: [
          {
            name: "预算 vs 开销）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "预算分配"
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: "实际开销"
              }
            ]
          }
        ]
      });
    },
    initLineCharts() {
      const $dom = this.$refs["card-lbc"].$el.lastElementChild;
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
    initLineCharts2() {
      const $dom = this.$refs["card-rbc"].$el.lastElementChild;
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
    initBarCharts() {
      const $dom = this.$refs["card-rb"].$el.lastElementChild;
      const charts = this.$echarts.init($dom, "mytheme");
      charts.setOption({
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
  }
}
</script>

<style lang="less">
@import '@/style/theme.less';

#deviceInfo-board-component {
  
  .device-board-page {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 30%;
    grid-auto-flow: column;
    grid-gap: @gutter;

    & > div {
    }

    .item-center {
      grid-column: 2 / span 2;
      z-index: 0;
    }

    .deviceInfo-thumb {
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(#99d5ff, #bfd2f5, #86bce2);

      img {
        max-width: 100%;
        max-height: 100%
      }
    }
  }
}
</style>