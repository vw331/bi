<template>
  <div id="device-info-page" class="bd device-info-bd">
    <header class="header">
      <ul class="menu">
        
        <li class="navbar-brand">
          <h1 class="brand device">江丽国际</h1>
        </li>
        
      </ul>
    </header>
    <main>
      <router-view>
        <a-page-header
          title="空压机项目"
          @back="() => null">
          <template slot="extra">
            <a-button-group>
              <a-button>设备监控</a-button>
              <a-button>设备分析</a-button>
              <a-button type="primary">报警/故障</a-button>
              <a-button>操作日志</a-button>
            </a-button-group>
          </template>
        </a-page-header>
      </router-view>
    </main>
  </div>
</template>
<script>
export default {
  name: 'DeviceInfoIndex',
  data(){
    return {

    }
  }
}
</script>  

<style lang="less">

@import '@/style/theme.less';

#device-info-page {
  .ant-page-header-heading-extra {
    float: left;
    margin-left: 20px;
  }

}  
</style>