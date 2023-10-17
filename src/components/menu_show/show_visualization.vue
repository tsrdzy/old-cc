<template>
  <div>
    <hr class="hr-solid-content" data-content="界面预览" />
    <div class="show_cards">
      <h2
        style="font-family: 'MineCraft'; overflow: hidden; white-space: nowrap"
        id="menu_title"
      ></h2>
      <div class="show_card">
        <div
          v-on:mouseenter="mouse_enter(index)"
          v-on:mouseout="mouse_out(index)"
          v-on:mousemove="mouse_move(index)"
          v-on:click="click_POSITION(index)"
          class="card"
          :id="'a' + index"
          :key="'items-' + index"
          v-for="index of this.rows * 9"
        >
          <div class="lore_show" :id="'b' + index" v-show="lore_show[index]">
            <div class="lore_show1">
              <h2 style="color: #fff" :id="'lore_show_title' + index"></h2>
              <div :id="'lore_show_lore' + index"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json120 from "@/../public/json/1.20.json";
// import "@/../public/css/yaml.css";
export default {
  data() {
    return {
      rows: 6,
      name: "",
      POSITION: [],

      items: [],

      lore_show: [false],
      names: "",
      lores: "",
    };
  },

  mounted() {
    this.items = json120;
    this.rows = this.$store.state.main_set.rows;
    this.name = this.$store.state.main_set.name;
    var yourMOTD = this.$store.state.main_set.name;
    var newMOTD = yourMOTD.replaceColorCodes();
    document.getElementById("menu_title").innerHTML = "";
    document.getElementById("menu_title").appendChild(newMOTD);
  },
  methods: {
    click_POSITION(a) {
      this.$store.commit("items_set_number", a - 1);
    },
    mouse_enter(a) {
      if (this.$store.state.items_set_number != -1) {
        try {
          if (this.$store.state.items_set[a - 1].MATERIAL != "") {
            this.lore_show[a] = true;

            //名称

            if (this.$store.state.items_set[a - 1].NAME == "") {
              for (var i = 0; i < this.items.length; i++) {
                if (
                  this.$store.state.items_set[a - 1].MATERIAL ==
                  this.items[i].value
                ) {
                  document.getElementById("lore_show_title" + a).innerHTML = "";
                  document.getElementById("lore_show_title" + a).innerHTML +=
                    this.items[i].label;
                  return;
                }
              }
            } else {
              var yourMOTD = this.$store.state.items_set[a - 1].NAME;
              var newMOTD = yourMOTD.replaceColorCodes();
              document.getElementById("lore_show_title" + a).innerHTML = "";
              document
                .getElementById("lore_show_title" + a)
                .appendChild(newMOTD);
            }
            //logo
            console.log(a - 1);
            if (this.$store.state.items_set[a - 1].LORE.length != 0) {
              this.lores = "";
              for (
                var n = 0;
                n < this.$store.state.items_set[a - 1].LORE.length;
                n++
              ) {
                if (this.lores != "") {
                  this.lores =
                    this.lores +
                    "\n" +
                    this.$store.state.items_set[a - 1].LORE[n];
                } else {
                  this.lores = this.$store.state.items_set[a - 1].LORE[n];
                }
              }
              var yourMOTD1 = this.lores;
              var newMOTD1 = yourMOTD1.replaceColorCodes();
              document.getElementById("lore_show_lore" + a).innerHTML = "";
              document
                .getElementById("lore_show_lore" + a)
                .appendChild(newMOTD1);
            } else {
              this.lores = [];
            }
          } else {
            this.lore_show[a] = false;
          }
        } catch (err) {
          console.log(err);
        }
      }
    },
    mouse_out(a) {
      this.lore_show[a] = false;
    },
    mouse_move(a) {
      var s = document.getElementById("b" + a);
      // var t = document.getElementById("a" + a);
      //logo

      if (this.$store.state.items_set[a - 1].LORE.length != 0) {
        this.lores = "";
        for (
          var n = 0;
          n < this.$store.state.items_set[a - 1].LORE.length;
          n++
        ) {
          if (this.lores != "") {
            this.lores =
              this.lores + "\n" + this.$store.state.items_set[a - 1].LORE[n];
          } else {
            this.lores = this.$store.state.items_set[a - 1].LORE[n];
          }
        }
        var yourMOTD1 = this.lores;
        var newMOTD1 = yourMOTD1.replaceColorCodes();
        document.getElementById("lore_show_lore" + a).innerHTML = "";
        document.getElementById("lore_show_lore" + a).appendChild(newMOTD1);
      } else {
        this.lores = [];
      }
      window.onmousemove = function (evt) {
        s.style.left = evt.pageX + 18 + "px";
        s.style.top = evt.pageY - s.style.height / 2 + "px";
      };
    },
  },
  computed: {
    main_set1() {
      return this.$store.state.all;
    },
  },

  watch: {
    main_set1() {
      this.rows = this.$store.state.main_set.rows;
      this.name = this.$store.state.main_set.name;
      var yourMOTD = this.$store.state.main_set.name;
      var newMOTD = yourMOTD.replaceColorCodes();
      document.getElementById("menu_title").innerHTML = "";
      document.getElementById("menu_title").appendChild(newMOTD);
      if (this.$store.state.items_set_number != -1) {
        var item_img = document.getElementById(
          "a" + (this.$store.state.items_set_number + 1)
        );

        item_img.className = "card icon-20";

        item_img.className +=
          " " +
          this.$store.state.items_set[this.$store.state.items_set_number]
            .MATERIAL +
          "-20";
      }

      // this.$store.state.items_set[this.$store.state.items_set_number].MATERIAL;
      // console.log(
      //   "icon-20 " +
      //     this.$store.state.items_set[this.$store.state.items_set_number]
      //       .MATERIAL +
      //     "-20"
      // );
      // "icon-20 " +
      //   this.$store.state.items_set[this.$store.state.items_set_number]
      //     .MATERIAL +
      //   "-20";
    },
  },
};
</script>

<style lang="less" scoped>
.show_cards {
  background-color: rgb(198, 198, 198);
  border: 5px solid rgb(238, 238, 238);
  border-bottom: 5px solid rgb(115, 115, 115);
  border-right: 5px solid rgb(159, 159, 159);
  padding: 10px;
  min-width: 326.8px;
  max-width: 326.8px;
  height: auto;
  border-radius: 6px;

  margin: 0 auto;
  h2 {
    width: 100%;
    height: 30px;
  }
  .show_card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .card {
      width: 32px;
      height: 32px;
      background-color: rgb(139, 139, 139);
      border: 2px solid #333;
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
    }
    .card:hover {
      background-color: rgb(197, 197, 197);
    }
  }
}
.lore_show {
  position: absolute;
  background-color: rgba(24, 3, 9, 0.9);
  min-width: 170px;
  height: auto;
  padding: 1.5px;
  z-index: 1000;
  clear: both;
  border-radius: 3px;
  .lore_show1 {
    border: 2px solid rgb(44, 8, 99);
    width: 100%;
    height: 100%;
    clear: both;
    h2 {
      width: 100%;
    }
  }
}
</style>