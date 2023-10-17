import { createStore } from "vuex";
export default createStore({
  state: {
    all: "",
    main_set: {
      menu_settings: "",
      name: "&aMCBOX &eChestCommands &aEditor &c&k",
      rows: "6",
      command: [],
      "auto-fresh": "",
      "open-action": "",
      "open-with-item": [{ id: "", "left-click": false, "right-click": true }],
    },
    items_set_number: -1,
    items_set: [],
  },
  mutations: {
    items_set_ini(state) {
      for (var y = 1; y <= 6; y++) {
        for (var x = 1; x <= 9; x++) {
          state.items_set[x + (y - 1) * 9 - 1] = {
            item_name: "item-" + x + "-" + y,
            POSITIONX: x,
            POSITIONY: y,
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
          };
        }
      }
    },
    all(state) {
      var all = "";
      all = all + "menu-settings:";
      if (state.main_set.name != "" && state.main_set.name != undefined) {
        all = all + "\n  name: '" + state.main_set.name + "'";
      }
      if (state.main_set.rows != "" && state.main_set.rows != undefined) {
        all = all + "\n  rows: " + state.main_set.rows;
      }
      if (state.main_set.command.length != 0) {
        all = all + "\n  command: ";
        for (var i = 0; i < state.main_set.command.length; i++) {
          all = all + "\n    - '" + state.main_set.command[i] + "'";
        }
      }
      if (
        state.main_set["auto-fresh"] != "" &&
        state.main_set["auto-fresh"] != undefined
      ) {
        all = all + "\n  auto-refresh: " + state.main_set["auto-fresh"];
      }
      if (
        state.main_set["open-action"].length != 0 &&
        state.main_set["open-action"] != undefined
      ) {
        all = all + "\n  open-action: ";
        for (i = 0; i < state.main_set["open-action"].length; i++) {
          all = all + "\n    - '" + state.main_set["open-action"][i] + "'";
        }
      }
      if (
        state.main_set["open-with-item"].id != "" &&
        state.main_set["open-with-item"].id != undefined
      ) {
        all = all + "\n  open-with-item: ";
        all = all + "\n    material: " + state.main_set["open-with-item"].id;
        all =
          all +
          "\n    left-click: " +
          state.main_set["open-with-item"]["left-click"];
        all =
          all +
          "\n    right-click: " +
          state.main_set["open-with-item"]["right-click"];
      }
      for (i = 0; i < state.items_set.length; i++) {
        if (
          state.items_set[i].MATERIAL != "" &&
          state.items_set[i].MATERIAL != undefined
        ) {
          all = all + "\n" + state.items_set[i].item_name + ":";
          all = all + "\n  POSITION-X: " + state.items_set[i].POSITIONX;
          all = all + "\n  POSITION-Y: " + state.items_set[i].POSITIONY;
          all = all + "\n  MATERIAL: " + state.items_set[i].MATERIAL;
          if (state.items_set[i].NAME != "") {
            all = all + "\n  NAME: '" + state.items_set[i].NAME + "'";
          }

          if (state.items_set[i].LORE.length != 0) {
            all = all + "\n  LORE:";
            for (var n = 0; n < state.items_set[i].LORE.length; n++) {
              all = all + "\n    - '" + state.items_set[i].LORE[n] + "'";
            }
          }

          if (state.items_set[i].DURABILITY != "") {
            all = all + "\n  DURABILITY: " + state.items_set[i].DURABILITY;
          }
          if (state.items_set[i].AMOUNT != "") {
            all = all + "\n  AMOUNT: " + state.items_set[i].AMOUNT;
          }
          if (state.items_set[i].NBT_DATA != "") {
            all = all + "\n  NBT-DATA: '" + state.items_set[i].NBT_DATA + "'";
          }

          if (state.items_set[i].ENCHANTMENTS != "") {
            all = all + "\n  ENCHANTMENTS:";
            for (n = 0; n < state.items_set[i].ENCHANTMENTS.length; n++) {
              all = all + "\n    - " + state.items_set[i].ENCHANTMENTS[n];
            }
          }

          if (state.items_set[i].COLOR != "") {
            all = all + "\n  COLOR: '" + state.items_set[i].COLOR + "'";
          }
          if (state.items_set[i].SKULL_OWNER != "") {
            all =
              all + "\n  SKULL-OWNER: '" + state.items_set[i].SKULL_OWNER + "'";
          }
          if (state.items_set[i].BANNER_COLOR != "") {
            all =
              all +
              "\n  SKULL-BANNER-COLOR: '" +
              state.items_set[i].BANNER_COLOR +
              "'";
          }

          if (state.items_set[i].BANNER_PATTERNS != "") {
            all = all + "\n  BANNER-PATTERNS:";
            for (n = 0; n < state.items_set[i].BANNER_PATTERNS.length; n++) {
              all =
                all + "\n    - '" + state.items_set[i].BANNER_PATTERNS[n] + "'";
            }
          }

          if (state.items_set[i].PRICE != "") {
            all = all + "\n  PRICE: " + state.items_set[i].PRICE;
          }
          if (state.items_set[i].LEVELS != "") {
            all = all + "\n  LEVELS: " + state.items_set[i].LEVELS;
          }

          if (state.items_set[i].REQUIRED_ITEMS != "") {
            all = all + "\n  BANNER-PATTERNS:";
            for (n = 0; n < state.items_set[i].REQUIRED_ITEMS.length; n++) {
              all =
                all + "\n    - '" + state.items_set[i].REQUIRED_ITEMS[n] + "'";
            }
          }

          if (state.items_set[i].KEEP_OPEN != "") {
            all = all + "\n  KEEP-OPEN: " + state.items_set[i].KEEP_OPEN;
          }
          if (state.items_set[i].PERMISSION != "") {
            all = all + "\n  PERMISSION: " + state.items_set[i].PERMISSION;
          }
          if (state.items_set[i].PERMISSION_MESSAGE != "") {
            all =
              all +
              "\n  PERMISSION-MESSAGE: " +
              state.items_set[i].PERMISSION_MESSAGE;
          }

          if (state.items_set[i].ACTIONS.length != 0) {
            all = all + "\n  ACTIONS:";
            for (n = 0; n < state.items_set[i].ACTIONS.length; n++) {
              all = all + "\n    - '" + state.items_set[i].ACTIONS[n] + "'";
            }
          }
        }
      }
      state.all = all;
    },
    main_set(state, main_set) {
      state.main_set = main_set;
    },
    items_set_number(state, items_set_number) {
      state.items_set_number = items_set_number;
    },
    items_set(state, items_set) {
      state.items_set[state.items_set_number].MATERIAL = items_set.MATERIAL;
      state.items_set[state.items_set_number].ACTIONS = items_set.ACTIONS;
      state.items_set[state.items_set_number].NAME = items_set.NAME;
      state.items_set[state.items_set_number].LORE = items_set.LORE;
      state.items_set[state.items_set_number].DURABILITY = items_set.DURABILITY;
      state.items_set[state.items_set_number].AMOUNT = items_set.AMOUNT;
      state.items_set[state.items_set_number].NBT_DATA = items_set.NBT_DATA;
      state.items_set[state.items_set_number].ENCHANTMENTS =
        items_set.ENCHANTMENTS;
      state.items_set[state.items_set_number].COLOR = items_set.COLOR;
      state.items_set[state.items_set_number].SKULL_OWNER =
        items_set.SKULL_OWNER;
      state.items_set[state.items_set_number].BANNER_COLOR =
        items_set.BANNER_COLOR;
      state.items_set[state.items_set_number].BANNER_PATTERNS =
        items_set.BANNER_PATTERNS;
      state.items_set[state.items_set_number].PRICE = items_set.PRICE;
      state.items_set[state.items_set_number].LEVELS = items_set.LEVELS;
      state.items_set[state.items_set_number].REQUIRED_ITEMS =
        items_set.REQUIRED_ITEMS;
      state.items_set[state.items_set_number].KEEP_OPEN = items_set.KEEP_OPEN;
      state.items_set[state.items_set_number].PERMISSION = items_set.PERMISSION;
      state.items_set[state.items_set_number].VIEW_PERMISSION =
        items_set.VIEW_PERMISSION;
      state.items_set[state.items_set_number].PERMISSION_MESSAGE =
        items_set.PERMISSION_MESSAGE;
    },
  },
});
