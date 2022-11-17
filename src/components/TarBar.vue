<script setup>
const tarbarList = [
  {
    path: "/",
    name: "主页",
    icon: "home-o",
  },
  {
    path: "/favor",
    name: "收藏",
    icon: "like-o",
  },
  {
    path: "/order",
    name: "订单",
    icon: "orders-o",
  },
  {
    path: "/message",
    name: "消息",
    icon: "label-o",
  },
];
</script>

<template>
  <div class="tarbar">
    <van-tabbar route>
      <van-tabbar-item
        :icon="item.icon"
        v-for="(item, index) in tarbarList"
        :key="index"
        replace
        :to="item.path"
        >{{ item.name }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<style lang="sass" scoped></style>
