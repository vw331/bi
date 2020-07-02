<!--入口-->
<template>
  <div class="bd device-bd">
    <header class="header">
      <ul class="menu">
        <router-link
          :to="{ path: '/device/'+id+'/home'}"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" left>首页</a></li>
        </router-link>
        <router-link
          :to="{ path: '/device/'+id+'/list' }"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" left>设备列表</a></li>
        </router-link>
        <router-link
          :to="{ path: '/device/'+id+'/analysis' }"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" left>设备分析</a></li>
        </router-link>
        <router-link
          :to="{ path: '/device/'+id+'/query' }"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" left>数据查询</a></li>
        </router-link>
        <li class="navbar-brand">
          <h1 class="brand device">江丽国际</h1>
        </li>
        <router-link
          :to="{ path: '/device/'+id+'/log' }"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" right>设备日志</a></li>
        </router-link>
        <router-link
          :to="{ path: '/device/'+id+'/history' }"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" right>历史曲线</a></li>
        </router-link>
        <router-link
          to="/device/1/us"
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
        id: this.$route.params.id
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