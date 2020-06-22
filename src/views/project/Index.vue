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
        <router-link
          to="/project/analysis"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" left>项目分析</a></li>
        </router-link>
        <router-link
          to="/project/query"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" left>数据查询</a></li>
        </router-link>
        <li class="navbar-brand">
          <h1 class="brand">港华能源系统</h1>
        </li>
        <router-link
          to="/project/log"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" right>项目日志</a></li>
        </router-link>
        <router-link
          to="/project/history"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a :href="href" right>历史曲线</a></li>
        </router-link>
        <router-link
          to="/project/us"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a href="href" right>关于我们</a></li>
        </router-link>
        <router-link
          to="/project/log"
          v-slot="{ href, route, navigate, isActive }"
        >
          <li class="nav-item" :class="{'active': isActive}"><a href="href" right>退出登录</a></li>
        </router-link>
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