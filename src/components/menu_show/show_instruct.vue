<template>
  <div>
    <hr class="hr-solid-content" data-content="指令预览" />
    <highlightjs language="yaml" :code="main_set" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      main_set: "",
    };
  },
  mounted() {
    require("@/../public/css/yaml.css");
    this.$store.commit("all");
    this.main_set = this.$store.state.all;
  },
  computed: {
    main_set1() {
      return this.$store.state.all;
    },
  },
  watch: {
    main_set1() {
      require("@/../public/css/yaml.css");
      this.main_set = this.$store.state.all;
    },
  },
};
</script>

<style lang="less" scoped>
.show_instruct {
  width: 100%;
  height: auto;
  white-space: pre-wrap;
}
</style>