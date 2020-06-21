<!--入口-->
<template>
  <div class="bd">
    <header class="header">
      <ul class="menu">
        <router-link
          to="/project/home"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" left>首页</a></li>
        </router-link>
        <router-link
          to="/project/list"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" left>项目列表</a></li>
        </router-link>
        <li class="nav-item"><a href="javascript:;" left>项目分析</a></li>
        <li class="nav-item"><a href="javascript:;" left>数据查询</a></li>
        <li class="navbar-brand">
          <h1 class="brand">港华能源系统</h1>
        </li>
        <li class="nav-item"><a href="javascript:;" right>项目日志</a></li>
        <li class="nav-item"><a href="javascript:;" right>历史曲线</a></li>
        <li class="nav-item"><a href="javascript:;" right>关于我们</a></li>
        <li class="nav-item"><a href="javascript:;" right>退出登录</a></li>
      </ul>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'ProjectIndex',
    data(){
      return {
        
      }
    }
  }
</script>