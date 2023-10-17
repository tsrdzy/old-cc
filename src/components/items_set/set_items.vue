<template>
  <div>
    <hr class="hr-solid-content" data-content="内容设置" />
    <div class="set_main">
      <!-- <item_selection></item_selection> -->
      <div class="card">
        <h2>位置标签:<span>*</span></h2>
        <input
          style="background-color: #ddd"
          readonly="readonly"
          placeholder="唯一标识"
          v-on:input="items_set"
          v-model="items.item_name"
          type="text"
        />
      </div>
      <div class="card">
        <h2>当前位置X:<span>*</span></h2>
        <input
          style="background-color: #ddd"
          readonly="readonly"
          placeholder="X轴位置"
          v-on:input="items_set"
          v-model="items.POSITIONX"
          type="number"
        />
      </div>
      <div class="card">
        <h2>当前位置Y:<span>*</span></h2>
        <input
          style="background-color: #ddd"
          readonly="readonly"
          placeholder="Y轴标识"
          v-on:input="items_set"
          v-model="items.POSITIONY"
          type="number"
        />
      </div>
      <div class="card">
        <h2>物品ID:<span>*</span></h2>
        <input
          placeholder="物品的英文ID"
          v-on:input="items_set"
          v-model="this.items.MATERIAL"
          type="text"
        />
        <div class="itemselection">
          <n-popover trigger="click">
            <template #trigger> ··· </template>
            <item_selection @open_items="open_items1"></item_selection>
          </n-popover>
        </div>
      </div>
      <div class="card">
        <h2>物品标题:</h2>
        <input
          placeholder="物品第一行的名称"
          v-on:input="items_set"
          v-model="this.items.NAME"
          type="text"
        />
      </div>
      <div class="card">
        <h2>物品lore:</h2>
        <textarea
          placeholder="物品的描述,如有多个请换行"
          v-on:input="items_set"
          v-model="this.LORE"
          type="text"
        ></textarea>
      </div>
      <div class="card">
        <h2>物品耐久:</h2>
        <input
          placeholder="物品的耐久度,数据值"
          v-on:input="items_set"
          v-model="this.items.DURABILITY"
          type="text"
        />
      </div>
      <div class="card">
        <h2>显示金额:</h2>
        <input
          placeholder="物品显示的金额"
          v-on:input="items_set"
          v-model="this.items.AMOUNT"
          type="text"
        />
      </div>
      <div class="card">
        <h2>NBT数据:</h2>
        <input
          placeholder="物品的NBT数据"
          v-on:input="items_set"
          v-model="this.items.NBT_DATA"
          type="text"
        />
      </div>
      <n-collapse>
        <n-collapse-item>
          <template #header>
            <h2 style="color: #666">物品附魔</h2>
          </template>
          <div>
            <div class="card">
              <h2>附魔类型:</h2>
              <select v-model="ENCHANTMENTS_content">
                <option
                  :key="ENCHANTMENTSSX"
                  v-for="ENCHANTMENTSSX in ENCHANTMENTSS"
                  :value="ENCHANTMENTSSX.value"
                >
                  {{ ENCHANTMENTSSX.label }}
                </option>
              </select>
            </div>
            <div class="card">
              <h2>附魔等级:</h2>
              <input
                v-model="ENCHANTMENTS_level"
                type="text"
                placeholder="设置附魔的等级"
              />
            </div>
          </div>
          <div class="card_button">
            <button v-on:click="empty_ENCHANTMENTS">清空</button>
            <button v-on:click="add_ENCHANTMENTS">添加</button>
          </div>
          <div class="card_table">
            <table>
              <thead>
                <tr>
                  <th class="thead_left">内容</th>
                  <th class="thead_right">选项</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  :key="ENCHANTMENTSX"
                  v-for="(ENCHANTMENTSX, index) in this.items.ENCHANTMENTS"
                >
                  <td>{{ ENCHANTMENTSX }}</td>
                  <td class="open_menu_button">
                    <button v-on:click="delete_ENCHANTMENTS(index)">
                      删除
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </n-collapse-item>
      </n-collapse>
      <div class="card">
        <h2>皮革颜色:</h2>
        <input
          placeholder="皮革的RGB颜色 例:255,255,255"
          v-on:input="items_set"
          v-model="this.items.COLOR"
          type="text"
        />
      </div>
      <div class="card">
        <h2>头颅ID:</h2>
        <input
          placeholder="玩家的正版ID"
          v-on:input="items_set"
          v-model="this.items.SKULL_OWNER"
          type="text"
        />
      </div>
      <div class="card">
        <h2>旗帜颜色:</h2>
        <input
          placeholder="旗帜的背景颜色,请使用染料英文ID"
          v-on:input="items_set"
          v-model="this.items.BANNER_COLOR"
          type="text"
        />
      </div>
      <div class="card">
        <h2>旗帜图案:</h2>
        <input
          v-on:input="items_set"
          v-model="this.BANNER_PATTERNS"
          type="text"
          placeholder="格式(类型:燃料颜色) 如有多个请用逗号隔开"
        />
      </div>
      <div class="card">
        <h2>所需资金:</h2>
        <input
          placeholder="点击所扣除的资金"
          v-on:input="items_set"
          v-model="this.items.PRICE"
          type="text"
        />
      </div>
      <div class="card">
        <h2>所需经验:</h2>
        <input
          placeholder="点击所扣除的经验"
          v-on:input="items_set"
          v-model="this.items.LEVELS"
          type="text"
        />
      </div>
      <div class="card">
        <h2>所需物品:</h2>
        <input
          v-on:input="items_set"
          v-model="this.REQUIRED_ITEMS"
          type="text"
          placeholder="格式(物品ID:数量) 如有多个请用逗号隔开"
        />
      </div>
      <div class="card">
        <h2>关闭菜单:</h2>
        <input
          placeholder="点击后是否关闭菜单(true/false)"
          v-on:input="items_set"
          v-model="this.items.KEEP_OPEN"
          type="text"
        />
      </div>
      <div class="card">
        <h2>所需权限:</h2>
        <input
          placeholder="点击所需要的权限(首位加-表示否定)"
          v-on:input="items_set"
          v-model="this.items.PERMISSION"
          type="text"
        />
      </div>
      <div class="card">
        <h2>显示权限:</h2>
        <input
          placeholder="显示物品所需要的权限(首位加-表示否定)"
          v-on:input="items_set"
          v-model="this.items.VIEW_PERMISSION"
          type="text"
        />
      </div>
      <div class="card">
        <h2>错误信息:</h2>
        <input
          placeholder="条件不满足所提示的错误信息"
          v-on:input="items_set"
          v-model="this.items.PERMISSION_MESSAGE"
          type="text"
        />
      </div>
      <n-collapse>
        <n-collapse-item>
          <template #header>
            <h2 style="color: #666">单击图标时执行</h2>
          </template>
          <div>
            <div class="card">
              <h2>执行类型:</h2>
              <select v-model="action">
                <option
                  :key="actionsx"
                  v-for="actionsx in actions"
                  :value="actionsx"
                >
                  {{ actionsx.label }}
                </option>
              </select>
            </div>
            <div class="card" v-show="this.action.title != undefined">
              <h2>{{ action.title }}:</h2>
              <input
                v-model="action_content"
                type="text"
                :placeholder="action.hint"
              />
            </div>
          </div>
          <div class="card_button">
            <button v-on:click="empty_action">清空</button>
            <button v-on:click="add_action">添加</button>
          </div>
          <div class="card_table">
            <table>
              <thead>
                <tr>
                  <th class="thead_left">内容</th>
                  <th class="thead_right">选项</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  :key="actions"
                  v-for="(actions, index) in this.items.ACTIONS"
                >
                  <td>{{ actions }}</td>
                  <td class="open_menu_button">
                    <button v-on:click="delete_action(index)">删除</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </n-collapse-item>
      </n-collapse>
    </div>
  </div>
</template>

<script>
import { NCollapse, NCollapseItem, NPopover } from "naive-ui";

import item_selection from "../menu_set/item_selection.vue";

import ENCHANTMENTSS from "@/../public/json/enchantment.json";
export default {
  components: {
    NCollapse,
    NCollapseItem,
    NPopover,
    item_selection,
  },
  data() {
    return {
      items: {
        item_name: "",
        POSITIONX: "",
        POSITIONY: "",
        MATERIAL: "",
        ACTIONS: [],
        NAME: "",
        LORE: [],
        DURABILITY: [],
        AMOUNT: [],
        NBT_DATA: [],
        ENCHANTMENTS: [],
        COLOR: "",
        SKULL_OWNER: "",
        BANNER_COLOR: "",
        BANNER_PATTERNS: [],
        PRICE: "",
        LEVELS: "",
        REQUIRED_ITEMS: [],
        KEEP_OPEN: "",
        PERMISSION: "",
        VIEW_PERMISSION: "",
        PERMISSION_MESSAGE: "",
      },
      LORE: "",
      commands: "",
      actions: [
        {
          label: "以玩家身份执行指令",
          value: "",
          title: "输入指令",
          hint: "不带'/'",
        },
        {
          label: "以控制台身份执行指令",
          value: "console",
          title: "输入指令",
          hint: "不带'/'",
        },
        {
          label: "以OP身份执行指令",
          value: "op",
          title: "输入指令",
          hint: "不带'/'",
        },
        {
          label: "打开另一个菜单",
          value: "open",
          title: "菜单名称",
          hint: "需要输入.yml后缀",
        },
        {
          label: "发送聊天消息",
          value: "tell",
          title: "消息内容",
          hint: "输入要发送的消息内容",
        },
        {
          label: "广播消息",
          value: "broadcast",
          title: "消息内容",
          hint: "输入要发送的消息内容",
        },
        {
          label: "播放声音",
          value: "sound",
          title: "声音内容",
          hint: "<声音名称>* [音色] [音量]",
        },
        {
          label: "给予物品",
          value: "give",
          title: "物品内容",
          hint: "<物品ID>*:[附加值], [数量]",
        },
        {
          label: "给予金钱",
          value: "give-money",
          title: "金钱数量",
          hint: "金钱的数量",
        },
        {
          label: "传送到BungeeCord子服",
          value: "server",
          title: "子服名称",
          hint: "子服名称",
        },
        {
          label: "显示BarAPI信息",
          value: "dragon-bar",
          title: "血条信息",
          hint: "<显示时间> | <显示内容>",
        },
      ],
      action: [],
      action_content: "",
      number: -1,

      ENCHANTMENTS: [],
      ENCHANTMENTS_content: "",
      ENCHANTMENTS_level: "",
      ENCHANTMENTSS: [],

      BANNER_PATTERNS: "",
      REQUIRED_ITEMS: "",
    };
  },
  mounted() {
    this.ENCHANTMENTSS = ENCHANTMENTSS;
  },
  methods: {
    items_set() {
      if (this.items.POSITIONX != "" && this.items.POSITIONY != "") {
        if (this.LORE != "") {
          this.items.LORE = this.LORE.split("\n");
        }
        if (this.BANNER_PATTERNS != "" && this.BANNER_PATTERNS != undefined) {
          this.items.BANNER_PATTERNS = this.BANNER_PATTERNS.split(",");
        } else {
          this.items.BANNER_PATTERNS = [];
        }
        if (this.REQUIRED_ITEMS != "" && this.REQUIRED_ITEMS != undefined) {
          var k = this.REQUIRED_ITEMS.split(",");
          var t = [];
          for (var i = 0; i < k.length; i++) {
            var s = k[i].split(":");
            if (s[1] == undefined || s[1] == "") {
              t.push(s[0]);
            } else {
              t.push(s[0] + ", " + s[1]);
            }
          }
          this.items.REQUIRED_ITEMS = t;
        } else {
          this.items.REQUIRED_ITEMS = [];
        }

        this.$store.commit("items_set", this.items);
        this.$store.commit("all");
      }
    },
    add_action() {
      if (this.number != -1) {
        if (this.action.length != 0) {
          if (this.action_content != "") {
            if (this.action.value == "") {
              this.items.ACTIONS.push(this.action_content);
            } else {
              this.items.ACTIONS.push(
                this.action.value + ": " + this.action_content
              );
            }
            this.action = [];
            this.action_content = "";
            this.$store.commit("items_set", this.items);
            this.$store.commit("all");
          } else {
            alert("请输入执行内容");
          }
        } else {
          alert("请先选择执行类型");
        }
      } else {
        alert("请先选择一个位置");
      }
    },
    delete_action(a) {
      if (this.number != -1) {
        this.items.ACTIONS.splice(a, 1);
        this.$store.commit("items_set", this.items);
        this.$store.commit("all");
      } else {
        alert("请先选择一个位置");
      }
    },
    empty_action() {
      if (this.number != -1) {
        this.items.ACTIONS = [];
        this.$store.commit(
          "items_set_number",
          this.$store.state.items_set_number
        );
        this.$store.commit("items_set", this.items);
        this.$store.commit("all");
      } else {
        alert("请先选择一个位置");
      }
    },
    open_items1(msg) {
      this.items.MATERIAL = msg;
      if (this.items.POSITIONX != "" && this.items.POSITIONY != "") {
        this.$store.commit("items_set", this.items);
        this.$store.commit("all");
      }
    },
    add_ENCHANTMENTS() {
      if (this.number != -1) {
        if (this.ENCHANTMENTS_content != "") {
          if (this.ENCHANTMENTS_level == "") {
            this.items.ENCHANTMENTS.push(this.ENCHANTMENTS_content);
          } else {
            this.items.ENCHANTMENTS.push(
              this.ENCHANTMENTS_content + ", " + this.ENCHANTMENTS_level
            );
          }
          this.ENCHANTMENTS_content = "";
          this.ENCHANTMENTS_level = "";
          this.$store.commit("items_set", this.items);
          this.$store.commit("all");
        } else {
          alert("请输入执行内容");
        }
      } else {
        alert("请先选择一个位置");
      }
    },
    delete_ENCHANTMENTS(a) {
      if (this.number != -1) {
        this.items.ENCHANTMENTS.splice(a, 1);
        this.$store.commit("items_set", this.items);
        this.$store.commit("all");
      } else {
        alert("请先选择一个位置");
      }
    },
    empty_ENCHANTMENTS() {
      if (this.number != -1) {
        this.items.ENCHANTMENTS = [];
        this.$store.commit("items_set", this.items);
        this.$store.commit("all");
      } else {
        alert("请先选择一个位置");
      }
    },
  },
  computed: {
    main_set1() {
      return this.$store.state.items_set_number;
    },
  },
  watch: {
    main_set1() {
      this.number = this.$store.state.items_set_number;
      var s = this.$store.state.items_set_number;
      console.log(s);
      if (s != -1) {
        this.items.item_name = this.$store.state.items_set[s].item_name;
        this.items.POSITIONX = this.$store.state.items_set[s].POSITIONX;
        this.items.POSITIONY = this.$store.state.items_set[s].POSITIONY;
        this.items.MATERIAL = this.$store.state.items_set[s].MATERIAL;
        this.items.ACTIONS = this.$store.state.items_set[s].ACTIONS;
        this.items.NAME = this.$store.state.items_set[s].NAME;
        var T = "";
        for (var i = 0; i < this.$store.state.items_set[s].LORE.length; i++) {
          if (T != "") {
            T = T + "\n" + this.$store.state.items_set[s].LORE[i];
          } else {
            T = this.$store.state.items_set[s].LORE[i];
          }
        }
        this.LORE = T;
        this.items.DURABILITY = this.$store.state.items_set[s].DURABILITY;
        this.items.AMOUNT = this.$store.state.items_set[s].AMOUNT;
        this.items.NBT_DATA = this.$store.state.items_set[s].NBT_DATA;
        this.items.ENCHANTMENTS = this.$store.state.items_set[s].ENCHANTMENTS;
        this.items.COLOR = this.$store.state.items_set[s].COLOR;
        this.items.SKULL_OWNER = this.$store.state.items_set[s].SKULL_OWNER;
        this.items.BANNER_COLOR = this.$store.state.items_set[s].BANNER_COLOR;
        this.items.BANNER_PATTERNS =
          this.$store.state.items_set[s].BANNER_PATTERNS;
        this.items.PRICE = this.$store.state.items_set[s].PRICE;
        this.items.LEVELS = this.$store.state.items_set[s].LEVELS;
        this.items.REQUIRED_ITEMS =
          this.$store.state.items_set[s].REQUIRED_ITEMS;
        this.items.KEEP_OPEN = this.$store.state.items_set[s].KEEP_OPEN;
        this.items.PERMISSION = this.$store.state.items_set[s].PERMISSION;
        this.items.VIEW_PERMISSION =
          this.$store.state.items_set[s].VIEW_PERMISSION;
        this.items.PERMISSION_MESSAGE =
          this.$store.state.items_set[s].PERMISSION_MESSAGE;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.set_main {
  .card {
    display: flex;
    margin: 5px;
    position: relative;
    color: #666;
    h2 {
      min-width: 80px;
      border: 1px solid rgba(255, 255, 255, 0);
      height: 24px;
      line-height: 24px;
      padding: 1px;
      span {
        color: rgb(200, 100, 100);
      }
    }
    input,
    select,
    textarea {
      font-family: "opposans";
      padding: 1px;
      border: 0;
      outline: 0;
      border: 1px solid #000;
      width: 100%;
      border-radius: 3px;
      height: 24px;
    }
    textarea {
      height: 72px;
      resize: none;
    }
    .itemselection {
      height: 27.6px;
      line-height: 27.6px;
      position: absolute;
      right: 3px;
    }
  }
  .card_button {
    margin-left: 86px;
    display: flex;
    justify-content: space-between;
    button {
      width: 100px;
      border-radius: 5px;
    }
  }
  .card_table {
    margin-left: 86px;
    width: calc(100% - 86px);
    table {
      width: 100%;
      // border: 1px solid #666;
    }
    .thead_left {
      width: 80%;
      border: 1px solid #666;
    }
    .thead_right {
      width: 20%;
      border: 1px solid #666;
    }
    tbody {
      td {
        border: 1px solid #666;
      }
      .open_menu_button {
        display: flex;
        justify-content: center;
        border-top: 0;
        border-left: 0;
        button {
          margin: 5px 0;
          width: 70%;
          border-radius: 3px;
          background-color: rgb(225, 124, 124);
          color: #fff;
        }
        button:hover {
          background-color: rgb(173, 92, 92);
        }
      }
    }
  }
}
</style>