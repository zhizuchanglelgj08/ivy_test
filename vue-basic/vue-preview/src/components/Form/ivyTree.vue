<template>
  <div class="thisTree">
    <span v-if='data.children' @click="onOX" class='text'>{{ oxText }}</span> {{ data.title }}
    <ivyTree
      v-show="!ox"
      v-for="d in data.children"
      :key="d.id"
      :data="d"
    ></ivyTree>
  </div>
</template>

<script>
export default {
  name: "ivyTree",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    oxText() {
      return this.ox ? "x" : "o";
    },
  },
  data() {
    return {
      ox: true,
    };
  },
  methods: {
    onOX() {
      this.ox = !this.ox;
    },
  },
};
</script>

<style scope>
.thisTree {
  width: 93%;
  margin-left: auto;
}
.text{
    display: inline-block
}
.text:hover{
    cursor:pointer
}
</style>
