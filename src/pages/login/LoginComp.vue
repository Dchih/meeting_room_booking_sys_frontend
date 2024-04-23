<script setup lang="ts">
import { reactive } from "vue";

interface FormState {
  username: string;
  password: string;
  captcha: string;
}

const formState = reactive<FormState>({
  username: "",
  password: "",
  captcha: "",
});

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const getCaptcha = () => {
  // 重新获取captcha
};
</script>

<template>
  <div class="login-wrap">
    <div class="login-box">
      <div class="login-title">会议室预定系统</div>
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '用户名不能为空' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '密码不能为空' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item
          label="验证码"
          name="remember"
          :rules="[{ required: true, message: '验证码不能为空' }]"
        >
          <div
            style="display: flex; gap: 2rem; flex-wrap: nowrap; width: 30rem"
          >
            <a-input
              v-model:value="formState.captcha"
              style="width: 12rem"
            ></a-input>
            <img src="" alt="" class="captcha" @click="getCaptcha" />
          </div>
        </a-form-item>

        <a-form-item
          :wrapper-col="{ offset: 6, span: 16, col: 12 }"
          style="padding: 2.4rem 0"
        >
          <a-button type="primary" html-type="submit" style="width: 20rem"
            >登录</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .login-box {
    height: 40rem;
    width: 50rem;
    // border: 1px solid var(--border-color-base);
    border-radius: 8px;
    padding: 12px;
    display: flex;
    place-items: center;
    flex-direction: column;
    gap: 12px;
    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1);
    .login-title {
      font-size: 3.2rem;
      font-family: Arial, Helvetica, sans-serif;
      padding: 2.4rem;
    }
  }
}
.captcha {
  width: 10rem;
  height: 3.6rem;
  display: inline-flex;
  cursor: pointer;
}
</style>
