<template>
  <div>
    <!-- 自定义组件要实现v-model，必须实现:value,@input -->
    <!-- $attrs存储的是props之外的部分，v-bind='$attrs'展开原生属性 -->
    <input :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,//避免顶层容器继承属性
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
      return {
          
      }
  },
  methods: {
    onInput(e) {
        //通知父组件ivyInput数值变化
      this.$emit("input", e.target.value);
        //通知父节点ivyLabel校验
      this.$parent.$emit('validate')
    },
  },
};
</script>

<style></style>
