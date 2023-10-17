<template>
  <div>
    <hr class="hr-solid-content" data-content="菜单设置" />
    <n-collapse>
      <n-collapse-item>
        <template #header>
          <h2 style="color: #666">菜单基础设置</h2>
        </template>
        <div class="set_main">
          <div class="card">
            <h2>菜单名称:<span>*</span></h2>
            <input
              v-on:input="main_set_click"
              v-model="main_set.menu_settings"
              placeholder="菜单的标识"
              type="text"
            />
          </div>
          <div class="card">
            <h2>菜单标题:<span>*</span></h2>
            <input
              v-on:input="main_set_click"
              v-model="main_set.name"
              placeholder="菜单内显示的标题"
              type="text"
            />
          </div>
          <div class="card">
            <h2>菜单大小:<span>*</span></h2>
            <select v-on:change="main_set_click" v-model="main_set.rows">
              <option :key="index" v-for="index of 6" :value="index">
                {{ index }}行
              </option>
            </select>
          </div>
          <div class="card">
            <h2>刷新频率:</h2>
            <input
              v-on:input="main_set_click"
              v-model="main_set['auto-fresh']"
              placeholder="单位(秒)"
              type="text"
            />
          </div>
          <div class="card">
            <h2>打开命令:</h2>
            <input
              v-on:input="main_set_click"
              v-model="commands"
              placeholder="打开菜单的指令(多个请用半角逗号隔开)"
              type="text"
            />
          </div>
          <div class="card">
            <h2>物品打开:</h2>
            <input
              v-on:input="main_set_click"
              v-model="this.main_set['open-with-item'].id"
              placeholder="使用物品打开菜单"
              type="text"
            />
            <div class="itemselection">
              <n-popover trigger="click">
                <template #trigger> ··· </template>
                <item_selection @open_items="open_items"></item_selection>
              </n-popover>
            </div>
          </div>
          <div class="card">
            <h2>打开方式:</h2>
            <div
              style="display: flex; justify-content: space-between; width: 100%"
            >
              <n-switch
                v-model:value="this.main_set['open-with-item']['left-click']"
                @update:value="main_set_click"
                size="large"
              >
                <template #checked> 左键打开 </template>
                <template #unchecked> 左键打开 </template>
              </n-switch>
              <n-switch
                v-model:value="this.main_set['open-with-item']['right-click']"
                @update:value="main_set_click"
                size="large"
              >
                <template #checked> 右键打开 </template>
                <template #unchecked> 右键打开 </template>
              </n-switch>
            </div>
          </div>
        </div>
      </n-collapse-item>
    </n-collapse>
    <n-collapse>
      <n-collapse-item>
        <template #header>
          <h2 style="color: #666">打开菜单时执行</h2>
        </template>
        <div>
          <div class="card">
            <h2>执行类型:</h2>
            <select v-model="open_action">
              <option
                :key="open_actionsx"
                v-for="open_actionsx in open_actions"
                :value="open_actionsx"
              >
                {{ open_actionsx.label }}
              </option>
            </select>
          </div>
          <div class="card" v-show="this.open_action.title != undefined">
            <h2>{{ open_action.title }}:</h2>
            <input
              v-model="open_action_content"
              type="text"
              :placeholder="open_action.hint"
            />
          </div>
        </div>
        <div class="card_button">
          <button v-on:click="empty_open_action">清空</button>
          <button v-on:click="add_open_action">添加</button>
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
                :key="open_actions"
                v-for="(open_actions, index) in this.main_set['open-action']"
              >
                <td>{{ open_actions }}</td>
                <td class="open_menu_button">
                  <button v-on:click="delete_open_action(index)">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script>
import { NPopover, NSwitch, NCollapse, NCollapseItem } from "naive-ui";

import item_selection from "./item_selection.vue";
export default {
  components: {
    NPopover,
    NSwitch,
    NCollapse,
    NCollapseItem,
    item_selection,
  },
  data() {
    return {
      commands: "",
      open_actions: [
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
      open_action: [],
      open_action_content: "",
      main_set: {
        menu_settings: "",
        name: "&aMCBOX &eChestCommands &aEditor &c&k",
        rows: "6",
        command: "",
        "auto-fresh": "",
        "open-action": [],
        "open-with-item": { id: "", "left-click": false, "right-click": true },
      },
    };
  },
  methods: {
    open_items(msg) {
      this.main_set["open-with-item"].id = msg;
      this.$store.commit("main_set", this.main_set);
      this.$store.commit("all");
    },
    main_set_click() {
      if (this.commands != "" && this.commands != undefined) {
        this.main_set.command = this.commands.split(",");
      } else {
        this.main_set.command = [];
      }
      this.$store.commit("main_set", this.main_set);
      this.$store.commit("all");
    },
    add_open_action() {
      if (this.open_action.length != 0) {
        if (this.open_action_content != "") {
          if (this.open_action.value == "") {
            this.main_set["open-action"].push(this.open_action_content);
          } else {
            this.main_set["open-action"].push(
              this.open_action.value + ": " + this.open_action_content
            );
          }
          this.open_action = [];
          this.open_action_content = "";
        } else {
          alert("请输入执行内容");
        }
      } else {
        alert("请先选择执行类型");
      }

      this.$store.commit("main_set", this.main_set);
      this.$store.commit("all");
    },
    delete_open_action(a) {
      this.main_set["open-action"].splice(a, 1);
      this.$store.commit("main_set", this.main_set);
      this.$store.commit("all");
    },
    empty_open_action() {
      this.main_set["open-action"] = [];
      this.$store.commit("main_set", this.main_set);
      this.$store.commit("all");
    },
  },
};
</script>

<style lang="less" scoped>
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
  select {
    font-family: "opposans";
    padding: 1px;
    border: 0;
    outline: 0;
    border: 1px solid #000;
    width: 100%;
    border-radius: 3px;
    height: 24px;
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
</style>