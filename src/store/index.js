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
  getters: {
    // 通过getters获取全局状态
    getProducts: (state) => {
      return state.products;
    },
    resetProducts: (state) => {
      return state.products.map((product) => {
        return {
          name: `**${product.name}**`,
          money: `¥${product.money / 2}`,
        };
      });
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
