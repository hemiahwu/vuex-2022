<template>
  <div id="product-list-one">
    <h2>组件1 {{ $store.state.countModule.count }}</h2>
    <ul>
      <li v-for="product in resetProducts" :key="product.name">
        <span class="name">{{ product.name }}</span>
        <span class="money">{{ product.money }}</span>
      </li>
    </ul>
    <button @click="reduceSalary(4)">降低收入</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const products = computed(() => store.state.products);
const resetProducts = computed(() => store.getters.resetProducts);

const reduceSalary = (amount) => {
  // store.state.products.forEach((product) => {
  //   product.money -= 1;
  // });

  // store.commit("reduceSalary", amount);// mutations调用方法
  store.dispatch("reduceSalary", amount);
};
</script>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.money {
  font-weight: bold;
  color: #e8800c;
}
</style>