<template>
  <div class='container'>
    <div class='flex'>
      <label v-if="label">
        {{ label }}
      </label>
      <slot></slot>
    </div>
    <p class='error'>{{errorMessage}}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  components: {},
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
  },
  //   注入表单实例
  inject: ["form"],
  mounted() {
    //监听校验事件、并执行监听
    console.log();
    this.$on("validate", () => {
      this.validate();
    });
  },
  data() {
    return {
      errorMessage: "",
    };
  },
  methods: {
    validate() {
      //执行组件校验
      //1、获取校验规则
      const rules = this.form.rules[this.prop];
      //2、获取数据
      const value = this.form.model[this.prop];
      //3、执行校验
      const desc = {
        [this.prop]: rules,
      };
      console.log(this.prop);
      const schema = new Schema(desc);
      //参数1是值，参数2
      schema.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.errorMessage = errors[0].message;
        } else {
          this.errorMessage = "";
        }
      });
    },
  },
};
</script>

<style scope>
    .container{
        height: 50px;
        width: 230px;
    }
    .flex{
        display: flex;
        justify-content: space-between;
    }
    .error{
        color: red;
        font-size: 12px;
        margin: 0;
        text-align: center;
    }
</style>
