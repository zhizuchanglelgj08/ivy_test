<template>
  <div v-if="isShow" class="mask">
    <div class='context'>
      <h3>{{ title }}</h3>
      <br>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    title: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    duration: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(() => {
        this.hide();
      }, this.duration);
    },
    hide() {
      this.isShow = false;
      this.remove();
      //remove()方法 是create.js提供的
    },
  },
};
</script>

<style scoped>
    .mask{
        position: fixed;
        background: rgba(0,0,0,0.3);
        width: 100%;
        height: 100%;
        top:0;
    }
    .context{
        background: #fff;
        width: 250px;
        height: 200px;
        text-align: center;
        margin: auto;
        position: absolute;
        top:0;left: 0;bottom: 0;right: 0;
    }
</style>
