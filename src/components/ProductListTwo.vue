<template>
  <div id="product-list-two">
    <h2>组件2</h2>
    <ul>
      <li v-for="product in resetProducts" :key="product.name">
        <span class="name">{{ product.name }}</span>
        <span class="money">{{ product.money }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const products = computed(() => store.state.products);
const resetProducts = computed(() => store.getters.resetProducts);
</script>

<style scoped>
#product-list-two {
  background: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-two ul {
  padding: 0;
  list-style-type: none;
}
#product-list-two li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.money {
  font-weight: bold;
  color: #860ce8;
  display: block;
}
</style>