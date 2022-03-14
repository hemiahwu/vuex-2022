import { createStore } from "vuex";

export default createStore({
  state: {
    // 定义状态(定义全局属性,可供任意组件调度)
    products: [
      { name: "马云", money: 100 },
      { name: "马化腾", money: 90 },
      { name: "马冬梅", money: 20 },
      { name: "吴海洋", money: 10 },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
