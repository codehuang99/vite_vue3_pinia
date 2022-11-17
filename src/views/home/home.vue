<script setup></script>

<template>
  <div class="home">
    <div class="header">
      <div class="title">鸿源旅游</div>
    </div>

    <div class="banner">
      <img src="@/assets/product.jpg" alt="" />
    </div>

    <div class="location">
      <div class="city">广州</div>
      <div class="position">
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
