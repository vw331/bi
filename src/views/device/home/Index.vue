<template>
  <section id="project-home-page">
    <div class="home-page">
      <div class="animate__animated animate__fadeInLeft animate__delay-1s">
        <a-card class="h-full" size="small" title="项目累计工时排行" ref="card-lt">1</a-card>
      </div>
      <div class="animate__animated animate__fadeInLeft animate__delay-1s">
        <a-card class="h-full" size="small" title="项目分布区域占比" ref="card-lc">2</a-card>
      </div>
      <div class="animate__animated animate__fadeInLeft animate__delay-1s">
        <a-card class="h-full" size="small" title="项目预览分配分析" ref="card-lb">3</a-card>
      </div>
      <div class="animate__animated animate__fadeInUp animate__delay-1s">
        <a-card class="h-full" size="small" title="近期进度走势" ref="card-lbc">4</a-card>
      </div>
      <div class="animate__animated animate__fadeInUp animate__delay-1s">
        <a-card class="h-full" size="small" title="净变化曲线" ref="card-rbc">5</a-card>
      </div>
      <div class="animate__animated animate__fadeInRight animate__delay-1s">
        <a-card class="h-full" size="small" title="项目进度总揽" ref="card-rt">6</a-card>
      </div>
      <div class="animate__animated animate__fadeInRight animate__delay-1s">
       <a-card class="h-full" size="small" ref="card-rc">
          <a-list bordered :data-source="dataList">
              <a-list-item slot="renderItem" slot-scope="item">
                <a-tag color="#108ee9"> {{ item.id }} </a-tag> {{ item.name }}
              </a-list-item>
          </a-list>
       </a-card>
      </div>
      <div class="animate__animated animate__fadeInRight animate__delay-1s">
        <a-card class="h-full" size="small" ref="card-rb">
          <a-table :columns="columns" :data-source="data" :pagination="false" size="small">
            <span slot="tags" slot-scope="status">
              <a-tag
                :key="status"
                :color=" status=== 1 ? '#28a745' : '#dc3545'"
              >{{ status === 1 ? '正常': '异常' }}</a-tag>
            </span>
          </a-table>
        </a-card>
      </div>
      <div class="item-center">
        <div class="device-box">
         <img :src="deviceImg" alt="">
        </div>
      </div>
    </div>  
    <a-drawer
      placement="right"
      wrapClassName="drawer-wrap"
      :closable="false"
      :visible="drawerVisible"
      @close="drawerVisible=false"
    >
      <device-tree></device-tree>
    </a-drawer>
    <div class="toggle-drawer" @click="drawerVisible=true" :show="!drawerVisible">
      <a-icon type="double-left" />
    </div>
  </section>
</template>

<script>

import DeviceTree from '@/components/DeviceTree'

const columns = [
  {
    title: "",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "更新时间",
    dataIndex: "time",
    key: "time"
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    scopedSlots: { customRender: "tags" }
  }
];

const data = [
  {
    key: 1,
    id: "编号TK-1",
    time: "2020-05-13 05:13:20",
    status: 1
  },
  {
    key: 2,
    id: "编号TK-2",
    time: "2020-05-13 05:13:20",
    status: 1
  },
  {
    key: 3,
    id: "编号TK-3",
    time: "2020-05-13 05:13:20",
    status: 2
  },
  {
    key: 4,
    id: "编号TK-4",
    time: "2020-05-13 05:13:20",
    status: 1
  },
  {
    key: 5,
    id: "编号TK-5",
    time: "2020-05-13 05:13:20",
    status: 1
  }
];

export default {
  name: "ProjectHome",
  components: { DeviceTree },
  data() {
    return {
      columns,
      data,
      drawerVisible: false,
      dataList: [
        { id: 1, name: '项目一'},
        { id: 2, name: '项目二'},
        { id: 3, name: '项目三'}, 
        { id: 4, name: '项目四'}, 
        { id: 5, name: '项目五'}, 
      ],
      deviceImg: require('@/assets/device/2-1G101092912I0.jpg')
    };
  },
  created() {},
  mounted() {
    this.$nextTick(function(){
      this.initCharts1();
      this.initCharts2();
      this.initCharts3();
      this.initCharts4();
      this.initCharts5();
      this.initCharts6();
    })
    // this.initCharts9();
  },
  methods: {
    initCharts1() {
      const $dom = this.$refs["card-lt"].$el.lastElementChild;
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
      const $dom = this.$refs["card-lc"].$el.lastElementChild;
      const charts = this.$echarts.init($dom, "mytheme");
      charts.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "auto",
          data: ["华东地区", "华北地区", "江浙地区", "上海市", "京津冀地区"]
        },
        series: [
          {
            name: "消耗区域",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "华东地区" },
              { value: 310, name: "华北地区" },
              { value: 234, name: "江浙地区" },
              { value: 135, name: "上海市" },
              { value: 1548, name: "京津冀地区" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },
    initCharts3() {
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
              color: "#fff",
              backgroundColor: "#999",
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
    initCharts4() {
      const $dom = this.$refs["card-lbc"].$el.lastElementChild;
      const charts = this.$echarts.init($dom, "mytheme");
      charts.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["TK1", "TK2", "TK3", "TK4", "TK5"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          top: "3%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "tk1",
            type: "line",
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "tk2",
            type: "line",
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "tk3",
            type: "line",
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "tk4",
            type: "line",
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      });
    },
    initCharts5() {
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
    initCharts6() {
      const $dom = this.$refs["card-rt"].$el.lastElementChild;
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
    initCharts9() {
      const $dom = this.$refs["map-wrap"];
      const charts = this.$echarts.init($dom, "mytheme");
      charts.setOption({
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: true
        },
        series: [
          {
            name: "pm2.5",
            type: "scatter",
            coordinateSystem: "bmap",
            data: {},
            symbolSize: function(val) {
              return val[2] / 10;
            },
            encode: {
              value: 2
            },
            label: {
              formatter: "{b}",
              position: "right",
              show: false
            },
            itemStyle: {
              color: "purple"
            },
            emphasis: {
              label: {
                show: true
              }
            }
          }
        ]
      });
    }
  }
};
</script>

<style lang="less">

@import '@/style/theme.less';

#project-home-page {
  height: 100%;
}

.home-page {  
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
 grid-gap: @gutter;
 
  & > div {
    position: relative;
    z-index: 5;
    //border: 1px solid #ffffff
  }
  .item-center {
    grid-column: 2 / span 2;
    grid-row: 1 / span 2;
    z-index: 0;
  }
  .device-box {
    height: 100%;
    &> img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
}

.toggle-drawer {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 99;
  padding: 20px 5px;
  border-radius: 3px 0 0 3px;
  background-color: lighten(@base-color, 25%);
  box-shadow: -4px 0px 3px 0px rgba(0, 0, 0, .2);
}
</style>

