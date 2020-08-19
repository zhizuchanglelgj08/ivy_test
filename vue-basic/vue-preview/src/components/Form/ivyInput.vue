<template>
  <div>
    <!-- 自定义组件要实现v-model，必须实现:value,@input -->
    <!-- $attrs存储的是props之外的部分，v-bind='$attrs'展开原生属性 -->
    <input :value="value" @input="onInput" @blur="onBlur" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  //避免顶层容器继承属性,避免父组件上面有这个属性，（父组件在DOM树表现为一个Div）
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    onInput(e) {
      //通知父组件ivyInput数值变化
      this.$emit("input", e.target.value);
    },
    onBlur() {
      //通知父节点ivyLabel校验
        this.isIvyLabel(this)
    },
    isIvyLabel(_this){
        
        if(_this.$parent.$options._componentTag == 'ivyForm'){
            throw new Error('ivyInput Mssing ivyLabel element')
            return 
        }

        if(_this.$parent.$options._componentTag == 'ivyLabel'){
            _this.$parent.$emit('validate')
        }else{
            this.isIvyLabel(_this.$parent)
        }
    }
  },
};
</script>

<style></style>
