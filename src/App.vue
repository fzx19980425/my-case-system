<template>
  <div class="app-container">
    <div class="layout">
      <!-- 左侧案例列表 -->
      <div class="sidebar">
        <CaseList />
      </div>
      <!-- 右侧详情区域 -->
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import CaseList from './views/CaseList.vue'
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #f5f7fa;
  height: 100vh;
  overflow: hidden;
}
.app-container {
  height: 100vh;
  padding: 0;
  box-sizing: border-box;
}
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
.sidebar {
  width: 300px;
  background-color: #fff;
  border-right: 1px solid #e4e7ed;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}
.main-content {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}
</style>