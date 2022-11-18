# vite+vue3+pinia+mb+旅游

由 vue3+vite+pinia+vant 技术组成的 mobile 移动端旅游项目
服务器接口地址:http://123.207.32.32:1888/api/

## 1.安装项目:

> npm init vue@latest

## 2.安装样式重制库:

> npm i --save-D reset.css,并在 main.js 中引入

## 3.安装 vant 组件库

> npm i vant

## 4.安装 axios

> npm i axios -D

## 首页

-首页
--城市选择页
--

## 技巧

### 隐藏部分页面 tabbar 技巧

> 在 router.js 中设置 meta 属性,组件中使用 route.meta.属性来控制显示隐藏

### 城市选择界面-home/city

> 获取数据---通过 pinia 保存数据---stores/city.js

## props 使用 defineProps
