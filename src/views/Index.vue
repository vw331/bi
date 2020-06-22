<!--入口-->
<template>
  <div class="flex flex-col text-center justify-center items-center" style="height: 100vh">
    <h1 class="mb-4 title">欢迎登录港华能源可视化控制台</h1>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            '用户名',
            { rules: [{ required: true, message: 'Please input your username!' }] },
          ]"
          placeholder="用户名"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            '密码',
            { rules: [{ required: true, message: 'Please input your Password!' }] },
          ]"
          type="password"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" block html-type="submit" class="login-form-button">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data(){
      return {
        formLayout: 'horizontal',
        form: this.$form.createForm(this, { name: 'coordinated' }),
      }
    },
    beforeCreate() {
      this.form = this.$form.createForm(this, { name: 'normal_login' });
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
          this.$router.push('/project/home')
        });
      },
    },
  }
</script>

<style lang="less">
.title {
  font-size: 22px
}
#components-form-demo-normal-login  {
  width: 22rem;
}

</style>