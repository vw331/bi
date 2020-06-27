<!-- 关于我们  -->
<template>
  <div id="project-us-page">
    <a-card class="aboutus-information w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4 animate__animated animate__fadeInUp animate__delay-1s">
      <div slot="title" class="article-title">港华能源</div>
      <a-row class="article p-10"  :gutter="60">
        <a-col :span="12">
          <p> 港华燃气集团是香港中华煤气有限公司（中华煤气）在内地经营的公用事业企业，业务涵盖城市燃气、城市水务、燃气具零售、分布式能源，以及燃气综合保险、家居精品、高端橱柜等延伸服务。</p>

          <p> 香港中华煤气1994年开始于内地投资设立燃气项目，首先在华南珠三角地区成立城市管道燃气企业，并陆续拓展至华中、西南及东北等地区。2002年，香港中华煤气在深圳成立港华投资有限公司，负责管理内地之投资项目。至今，港华燃气于内地南京、武汉、西安、济南、成都、长春及深圳等地发展132个城市燃气企业，业务遍布华东、华中、华北、东北、西北、西南、华南共23个省、自治区、直辖市，住宅及工商业客户数目由最初的约5000户已发展至逾3000万户，售气量达到255亿立方米，供气管网总长逾116,000公里，已成为内地最具规模的城市燃气集团之一。 </p>

          <p> 港华燃气于2005年在内地市场推出燃气具产品品牌“港华紫荆”。由于优良的品质和优质的服务，港华紫荆系列燃气具产品销售量节节攀升，至今累计销售量已突破650万台。</p>
        </a-col>
        <a-col :span="12">
          <p>同年，香港中华煤气开启内地水务市场，先后在江苏、安徽、广东投资7个城市水务项目和1个餐厨及绿化垃圾处理项目。至今，华衍水务服务客户达240万户，管网长度超过8400公里，为内地城市经济蓬勃发展提供优质的生活和工商业用水。</p>
          <p>
            <img :src="imgUrl" style="width: 400px;float: left;margin: 1rem" alt="">
            为进一步拓展燃气新应用，提高能源效益，集团于2016年成立港华能源投资有限公司，主要以分布式能源和集中供热项目开发及投资建设为主，致力为工业园区、商业综合体、数据中心等客户提供高效的能源。正从一家经营香港单一业务的本地公司，逐渐发展成为一家极具规模的全国性以环保及能源产业为主导的跨行业企业。
          </p>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>

export default {
  name: "ProjectUs",
  components: {  },
  data() {
    return {
      imgUrl: require('@/assets/timg.jpg')
    };
  },
}

</script>

<style lang="less">
@import '@/style/theme.less';

#project-us-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  .aboutus-information {
    flex: 1;
    border: none;
    margin: 5rem auto;
    background-color: fade(@base-color, 40%);

    .ant-card-head {
      min-height: 0;
      height: 0;
      border-bottom: 0
    }
    .ant-card-head-wrapper {
      margin-top: -78px;
    }
  }
  .article-title {
    position: relative;
    font-size: 32px;
    line-height: 38px;
    color: #ffffff;
    padding-left: 20px;
    border-left: 5px solid @primary-color;

    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 180px;
      top: 50%;
      right: 0;
      border-bottom: 1px solid @border-color-split;
    }
  }
  .article {
    color: #96c4f3;
    p {
      text-indent: 2rem;
      font-size: 16px;
      line-height: 2.2;
      margin-bottom: 15px;
    }
  }
}
</style>