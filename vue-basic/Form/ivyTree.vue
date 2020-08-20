<template>
  <div class="thisTree">
    <span @click="onOX" class="text">{{ data.children ? oxText : '' }}</span>
    {{ data.title }}
    <ul>
      <ivyTree
        v-show="!ox"
        v-for="d in data.children"
        :key="d.id"
        :data="d"
      ></ivyTree>
    </ul>
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
  mounted() {
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
    
}
.thisTreeNo1 {
  width: 200px;
}
.text {
  display: inline-block;
  width: 10px;
}
.text:hover {
  cursor: pointer;
}
ul {
    padding-left: 20px;
}
</style>
