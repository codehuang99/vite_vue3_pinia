<script setup>
import { useCityStore } from "@/stores/city.js";
import { useRouter } from "vue-router";

const cityStore = useCityStore();
const router = useRouter();

//props
const props = defineProps({
  cities: {
    type: Object,
    default: () => ({}),
  },
});
//选中热门城市或者选中城市列表
const handleSelectCity = (city) => {
  cityStore.selectCity(city);
  router.push("/");
};
</script>

<template>
  <div class="cityGroup">
    <!-- 热门城市部分 -->
    <van-grid :gutter="0" :border="false">
      <van-grid-item v-for="item in cities.hotCities" :key="item.cityId">
        <van-tag
          round
          type="primary"
          size="large"
          @click="handleSelectCity(item.cityName)"
          >{{ item.cityName }}</van-tag
        >
      </van-grid-item>
    </van-grid>
    <van-index-bar>
      <template v-for="(item, index) in cities.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <van-cell
          :title="item2.cityName"
          v-for="item2 in item.cities"
          :key="item2.cityId"
          @click="handleSelectCity(item2.cityName)"
        />
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="scss" scoped>
::v-deep(.van-grid-item__content--center) {
  height: 39px;
}
.van-tag {
  width: 43px;
  display: flex;
  justify-content: center;
}
</style>
