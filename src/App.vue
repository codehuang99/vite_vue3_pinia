<script setup>
import TarBar from "./components/TarBar.vue";
import { useRoute } from "vue-router";

//hook
const route = useRoute();
</script>

<template>
  <div class="app">
    <TarBar v-if="!route.meta.hideTabbar" />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
