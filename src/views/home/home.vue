<script setup>
import { useRouter } from "vue-router";
import { useCityStore } from "@/stores/city.js";

//hook
const router = useRouter();
const cityStore = useCityStore();

//方法----获取位置信息
const positionClick = () => {
  navigator.geolocation.getCurrentPosition((res) => {
    console.log(res);
  });
};

//方法----跳转城市选择页面
const cityClick = () => {
  router.push("/city");
};
</script>

<template>
  <div class="home">
    <div class="header">
      <div class="title">鸿源旅游</div>
    </div>

    <div class="banner">
      <img src="@/assets/product.jpg" alt="" />
    </div>

    <div class="location">
      <div class="city" @click="cityClick">{{ cityStore.curCity }}</div>
      <div class="position" @click="positionClick">
        <span>我的位置</span>
        <van-icon name="location-o" color="orange" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  border-bottom: 1px solid #f2f2f2;
  .title {
    color: orange;
    font-size: 16px;
    font-weight: 600px;
  }
}

.banner {
  img {
    width: 100%;
    height: 160px;
  }
}

.location {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  .position span {
    color: gray;
  }
}
</style>
