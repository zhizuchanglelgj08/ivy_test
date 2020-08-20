<template>
  <div>
    <ivyForm :model="model" :rules="rules" ref="loginForm">
      <ivyLabel label="用户名" prop="username">
        <ivyInput v-model="model.username"></ivyInput>
      </ivyLabel>
      <ivyLabel label="密码" prop="password">
        <ivyInput v-model="model.password" type="password"></ivyInput>
      </ivyLabel>
      <ivyLabel>
        <button @click="onLogin">登录</button>
      </ivyLabel>
      {{ model }}
    </ivyForm>
    <br />
    <br />
    <ivyTree :data="treeData"></ivyTree>
  </div>
</template>

<script>
import Notice from "../Notice";
import create from "../../utils/create";

import ivyTree from "./ivyTree";
import ivyInput from "./ivyInput";
import ivyLabel from "./ivyLabel";
import ivyForm from "./ivyForm";
export default {
  components: {
    ivyInput,
    ivyLabel,
    ivyForm,
    ivyTree,
  },
  data() {
    return {
      model: {
        username: "ivy",
        password: "",
      },
      treeData: {
        id: 1,
        title: "1",
        children: [
          {
            id: 11,
            title: "11",
            children: [
              {
                id: 111,
                title: "111",
              },
              {
                id: 112,
                title: "112",
              },
            ],
          },
          {
            id: 12,
            title: "12",
            children: [
              {
                id: 121,
                title: "121",
              },
              {
                id: 122,
                title: "122",
              },
            ],
          },
        ],
      },
      rules: {
        username: [
          { required: true, message: "用户名必填！", trigger: "blur" },
        ],
        password: [{ required: true, message: "密码必填！", trigger: "blur" }],
      },
    };
  },
  methods: {
    onLogin() {
      let notice;
      this.$refs["loginForm"].validate((isValid) => {
        if (isValid) {
          notice = create(Notice, {
            title: "温馨提示",
            message: "登录成功",
            duration: 2000,
          });
        } else {
          notice = create(Notice, {
            title: "温馨提示",
            message: "登录失败",
            duration: 10000,
          });
        }
        console.log('Notice',notice)
        notice.show()
        // notice.hide()
        console.log('Notice',notice)
      });
    },
  },
};
</script>

<style></style>
