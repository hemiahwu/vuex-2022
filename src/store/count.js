const countModule = {
  state: {
    // 定义状态(定义全局属性,可供任意组件调度)
    count: 100,
  },
  getters: {
    // 通过getters获取全局状态
    getCount: (state) => {
      return state.count;
    },
  },
  mutations: {
    // 专门用来修改全局状态
    mutateCount: (state, payload) => {
      state.count -= payload;
    },
  },
  actions: {
    mutateCount: ({ commit }, payload) => {
      // actions中处理的都是异步的操作
      setTimeout(() => {
        commit("mutateCount", payload);
      }, 2000);
    },
  },
};

export default countModule;
