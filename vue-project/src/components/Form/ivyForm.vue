<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this, //传递给form实例给后代
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  methods: {
    validate(callback) {
      //map的结果是若干promise数组
      const tasks = this.$children
        .filter((item) => item.prop && item.$options._componentTag == "ivyLabel")
        .map((item) => item.validate());

      Promise.all(tasks)
        .then(() => {
          callback(true);
        })
        .catch(() => {
          callback(false);
        });
    },
  },
};
</script>

<style></style>
