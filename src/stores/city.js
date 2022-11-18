import { ref } from "vue";
import { defineStore } from "pinia";
import { getCityAll } from "@/request/modules/city.js";

//保存城市信息
export const useCityStore = defineStore("city", () => {
  //state
  const cityList = ref({}); //城市列表
  const curCity = ref("广州"); //选中的当前城市

  //action
  //获取所有城市列表
  async function getCities() {
    const res = await getCityAll();
    cityList.value = res.data;
  }

  //选中当前城市
  function selectCity(payload) {
    curCity.value = payload;
  }
  return { cityList, getCities, curCity, selectCity };
});
