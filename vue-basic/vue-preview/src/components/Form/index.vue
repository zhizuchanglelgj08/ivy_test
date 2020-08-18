<template>
  <div>
    <ivyForm :model='model' :rules='rules' ref='loginForm'>
      <ivyLabel label="用户名" prop='username'>
        <ivyInput v-model="model.username"></ivyInput>
      </ivyLabel>
      <ivyLabel label="密码" prop='password'>
        <ivyInput v-model="model.password" type="password" ></ivyInput>
      </ivyLabel>
      {{ model }}
    </ivyForm> 
    <ivyLabel>
        <button @click='onLogin'>登录</button>
    </ivyLabel>
  </div>
</template>

<script>
import ivyInput from "./ivyInput";
import ivyLabel from "./ivyLabel";
import ivyForm from "./ivyForm";
export default {
  components: {
    ivyInput,
    ivyLabel,
    ivyForm,
  },
  data() {
    return {
      model: {
        username: "ivy",
        password: "",
      },
      rules:{
          username:[{required:true,message:'用户名必填！'}],
          password:[{required:true,message:'密码必填！'}],
      } 
    };
  },
  methods: {
      onLogin() {
          this.$refs['loginForm'].validate((isValid)=>{
              if(isValid){
                  alert('登录')
              }else{
                  alert('有错')
              }
          })
      }
  },
};
</script>

<style></style>
