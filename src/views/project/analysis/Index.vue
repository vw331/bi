<!-- 项目分析  -->
<template>
  <div id="project-analysis-page">
    <div class="analysis-page">
      <div class="animate__animated animate__fadeInLeft animate__delay-1s item-left">
        <a-card class="h-full" size="small">
          <project-tree></project-tree>
        </a-card>
      </div>
      <div class="item-center animate__animated animate__fadeInRight animate__delay-1s">
        <div class="board-group">
          <div><a-card class="h-full" size="small" ref="card-1">1</a-card></div>
          <div><a-card class="h-full" size="small" ref="card-2">1</a-card></div>
          <div><a-card class="h-full" size="small" ref="card-3">1</a-card></div>
          <div><a-card class="h-full" size="small" ref="card-4">1</a-card></div>
          <div><a-card class="h-full" size="small" ref="card-5">1</a-card></div>
          <div><a-card class="h-full" size="small" ref="card-6">1</a-card></div>
          <div><a-card class="h-full" size="small" ref="card-7">1</a-card></div>
          <div><a-card class="h-full" size="small" ref="card-8">1</a-card></div>
          <div><a-card class="h-full" size="small" ref="card-9">1</a-card></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectTree from '@/components/ProjectTree'
import random  from '@/utils/random';

export default {
  name: "ProjectAnalysis",
  components: { ProjectTree },
  data() {
    return {
    };
  },
  mounted() {
    this.$nextTick(function(){ 
      this.initCharts()
    })
  },
  methods: {
    initCharts(){
      Object.values( this.$refs )
        .forEach((component,index) => {
          const $dom = component.$el.lastChild;
          const charts = this.$echarts.init($dom, "mytheme");
          charts.setOption({
            title: {
              text: '项目分析'+ '一二三四五六七八九十'.charAt(index),
              textStyle: {
                fontSize: 14,
                fontWeight: 'normal'
              }
            },
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

#project-analysis-page {
  height: 100%;
  .analysis-page {
    height: 100%;
    display: grid;
    grid-template-columns: 240px auto;
    grid-auto-flow: column;
    grid-gap: @gutter;
    & > div {
      position: relative;
    }
  }
  .board-group {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-auto-flow: row;
    grid-gap: 10px;
  }
}

</style>