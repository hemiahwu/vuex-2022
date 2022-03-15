import { createStore } from "vuex";
import productsModule from "./products";
import countModule from "./count";

export default createStore({
  strict: true,

  modules: { productsModule, countModule },
});
