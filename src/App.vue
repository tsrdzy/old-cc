<template>
  <main_header />
  <main>
    <div class="left">
      <set_main></set_main>
      <set_items></set_items>
    </div>
    <div class="right">
      <show_visualization></show_visualization>
      <show_instruct></show_instruct>
    </div>
  </main>
  <main_footer />
</template>

<script>
import main_header from "./components/main_header.vue";
import main_footer from "./components/main_footer.vue";

import set_main from "./components/menu_set/set_main.vue";
import set_items from "./components/items_set/set_items.vue";

import show_visualization from "./components/menu_show/show_visualization.vue";
import show_instruct from "./components/menu_show/show_instruct.vue";

export default {
  name: "App",
  components: {
    main_header,
    main_footer,

    set_main,
    set_items,

    show_visualization,
    show_instruct,
  },
  mounted() {
    this.$store.commit("items_set_ini");
  },
};
</script>

<style lang="less">
main {
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  .left {
    width: 48%;
    min-width: 380px;
    margin: 0 auto;
  }
  .right {
    width: 48%;
    min-width: 380px;
    margin: 0 auto;
  }
}
.hr-solid-content {
  color: #a2a9b6;
  border: 0;
  font-size: 12px;
  padding: 1em 0;
  position: relative;
  width: 70%;
}
.hr-solid-content::before {
  content: attr(data-content);
  position: absolute;
  padding: 0 1ch;
  line-height: 1px;
  border: solid #d0d0d5;
  border-width: 0 99vw;
  width: fit-content;
  /* for IE浏览器 */
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);
}
</style>
