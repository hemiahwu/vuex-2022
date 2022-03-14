<template>
  <ProductListOne :products="products" />
  <ProductListTwo :products="products" />
</template>

<script setup>
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";
import { ref } from "vue";

const products = ref([
  { name: "马云", money: 100 },
  { name: "马化腾", money: 90 },
  { name: "马冬梅", money: 20 },
  { name: "吴海洋", money: 10 },
]);
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
