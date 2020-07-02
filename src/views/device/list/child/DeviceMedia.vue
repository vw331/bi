<!---设备对旬-->
<template>
  <div class="device-media-wrap" @click="$emit('ontap', device)">
    <dl class="device-media">
      <dt>
        <h3>{{ device.title }}</h3>
        <p>{{ device.describe }}</p>
      </dt>
      <dd>
        <img :src="device.img" alt="">
      </dd>
      <div class="device-state">
        <a-tag v-if="device.state == 1" color="#87d068">运行中</a-tag>
        <a-tag v-else color="#f50">故障</a-tag>
      </div>
    </dl>
  </div>
</template>

<script>



export default {
  name: 'DeviceMedia',
  props: {
    device: Object
  },
  data(){
    return {
    }
  }
}
</script> 

<style lang="less" scope>

  @import '@/style/theme.less';

  .device-media-wrap {
    height: 280px;
    background-color: fade(@base-color, 40%);
  }
  .device-media {
    cursor: pointer;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    & > dt {
      padding: 15px;
      box-sizing: border-box;
      height: 80px;
    }
    h3 {
      font-size: 1.2rem;
    }
    & > dd {
      flex: 1;
      padding: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .device-state {
      position: absolute;
      right: 0;
      top: 15px;
      .ant-tag {
        margin: 0;
        border-radius: 0
      }
    }
  }
</style>