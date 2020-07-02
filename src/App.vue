<template>
  <div id="app" ref="app">
    <a-config-provider :locale="locale">
      <router-view/>
    </a-config-provider>
  </div>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import _ from 'lodash';

export default {
  name: 'App',
  data() {
    return {
      locale: zhCN
    }
  },
  mounted() {
    this.$nextTick(() => {
      const $app = this.$refs.app

      window.addEventListener('resize', _.debounce(function(){
        const docHeight = document.body.clientHeight;
        const docWidth = document.body.clientWidth;
    

        if( docWidth < 1680 ){
          const scale = docWidth / 1920;
          const shouleHeight = 1080* scale;
          const offsetHeight = docHeight - shouleHeight 
          const fixOffset = offsetHeight>0 ? `translate(0, ${offsetHeight/2}px)`: ''
          console.log(fixOffset)
          $app.style.cssText = `
            transform: scale(${scale}) ${fixOffset };
            transform-origin: top left;
            min-width: 1920px;
            min-height: 1080px;
          `
        }else {
          $app.style.cssText = ''
        }

      }), 200)

      if(document.createEvent) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent("resize", true, true);
        window.dispatchEvent(event);
      } else if(document.createEventObject) {
        window.fireEvent("onresize");
      }      

    })
  },
  components: {
    
  }
}
</script>

<style>

</style>
