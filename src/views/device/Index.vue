<!--入口-->
<template>
  <div class="bd device-bd">
    <header class="header">
      <ul class="menu">
        <router-link
          to="/device/1/home"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" left>首页</a></li>
        </router-link>
        <router-link
          to="/device/1/list"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" left>项目列表</a></li>
        </router-link>
        <router-link
          to="/device/1/analysis"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" left>项目分析</a></li>
        </router-link>
        <router-link
          to="/device/1/query"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" left>数据查询</a></li>
        </router-link>
        <li class="navbar-brand">
          <h1 class="brand device">江丽国际</h1>
        </li>
        <router-link
          to="/device/1/log"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" right>项目日志</a></li>
        </router-link>
        <router-link
          to="/device/1/history"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" right>历史曲线</a></li>
        </router-link>
        <router-link
          to="/project/us"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" right>关于我们</a></li>
        </router-link>
        
        <li class="nav-item"><a href="javascript:;" @click="logout" right>退出登录</a></li>
      </ul>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'DeviceIndex',
    data(){
      return {

      }
    },
    methods: {
      logout() {
        this.$confirm({
          title: '确定要退出系统?',
          onOk: function() {
            this.$router.push('/')
          }.bind(this),
          onCancel() {},
        });
      }
    }
  }
</script>