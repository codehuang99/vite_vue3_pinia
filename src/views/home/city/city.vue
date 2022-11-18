<script setup>
import cityGroup from "./cityGroup.vue";
import { ref, onMounted } from "vue";
import { useCityStore } from "@/stores/city.js";
import { storeToRefs } from "pinia";

//hook
const activeName = ref("cityGroup"); //tab的名字
const searchVal = ref(""); //搜索值
const cityStore = useCityStore();

//方法----搜索
const onSearch = () => {
  console.log(searchVal.value);
};
//方法----取消
const onCancel = () => {};

//发送actions,使用storeToRefs可以实现响应式
cityStore.getCities();
const { cityList } = storeToRefs(cityStore);
// console.log(cityList);
</script>

<template>
  <div class="city">
    <!-- 搜索框 -->
    <van-search
      v-model="searchVal"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
    <!-- 切换tab -->
    <van-tabs v-model:active="activeName">
      <van-tab
        :title="value.title"
        :name="key"
        v-for="(value, key, index) in cityList"
        :key="index"
      >
        <cityGroup :cities="value" v-show="key === activeName" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss" scoped></style>
