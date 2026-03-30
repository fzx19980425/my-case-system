<template>
  <div class="case-list">
    <div class="header">
      <h2 class="title">案例管理系统</h2>
      <!-- <el-button type="primary" @click="goToUpload">上传案例</el-button> -->
           <!-- 搜索 + 筛选 -->
    <div class="filter-box">
      <el-input
        v-model="searchKey"
        placeholder="搜索项目名称"
        clearable
        style="width: 260px"
      />

      <el-radio-group v-model="typeFilter" class="ml-20">
        <el-radio label="all">全部</el-radio>
        <el-radio label="web">Web 端</el-radio>
        <el-radio label="app">App 端</el-radio>
      </el-radio-group>
    </div>
    </div>



    <!-- 项目卡片 -->
    <div class="card-list">
      <div
        class="card"
        v-for="item in filterList"
        :key="item.id"
        @click="goToDetail(item.id)"
      >
        <div class="cover">
          <img :src="item.cover" alt="封面" />
        </div>
        <div class="info">
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { caseData } from '../data/caseList'

const router = useRouter()
const searchKey = ref('')
const typeFilter = ref('all')

// 筛选
const filterList = computed(() => {
  return caseData.filter(item => {
    const search = item.title.includes(searchKey.value)
    const type = typeFilter.value === 'all' || item.type === typeFilter.value
    return search && type
  })
})

// 打开在线演示
const openDemo = (url) => {
  window.open(url, '_blank')
}

// 打开GitHub
const openGithub = (url) => {
  window.open(url, '_blank')
}

// 跳转到上传页面
const goToUpload = () => {
  router.push('/upload')
}

// 跳转到详情页面
const goToDetail = (id) => {
  router.push(`/detail/${id}`)
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  padding: 16px;
  background: #fff;
  z-index: 10;
  .title {
    font-size: 18px;
    color: #333;
    margin: 0;
  }
}
.filter-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 0 0;
}
.card-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 16px 16px;
}
.card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  transition: 0.3s;
  cursor: pointer;
  border: 1px solid #e4e7ed;
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-color: #409eff;
  }
}
.cover {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}
.info {
  padding: 12px 16px;
}
h3 {
  font-size: 16px;
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.desc {
  color: #666;
  margin: 10px 0;
  line-height: 1.6;
}
</style>