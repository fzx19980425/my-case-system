<template>
  <div class="case-detail">
    <div v-if="caseItem" class="detail-content">

      <div class="cover" :class="{ 'app-cover': caseItem.type === 'app', 'web-cover': caseItem.type === 'web' }">
        <div v-if="caseItem.demo && caseItem.demo !== '#'" :class="{ 'app-iframe-container': caseItem.type === 'app', 'web-iframe-container': caseItem.type === 'web' }">
          <div v-if="!iframeLoaded" class="iframe-loading">
            <el-icon class="is-loading"><Loading /></el-icon>
            <span>加载中...</span>
          </div>
          <iframe 
            :key="caseItem.id"
            :src="caseItem.demo" 
            frameborder="0" 
            width="100%" 
            height="100%"
            style="border-radius: 8px;"
            @load="iframeLoaded = true"
          ></iframe>
        </div>
        <img v-else :src="caseItem.cover" alt="封面" />
      </div>

      <!-- 只对 app 类型显示详情截图 -->
      <div v-if="caseItem.type === 'app'" class="detail-screenshot">
        <h4>详情截图</h4>
        <div class="screenshot-grid">
          <el-image
            v-for="(image, index) in detailImages"
            :key="index"
            :src="image"
            alt="详情截图"
            fit="contain"
            :preview-src-list="detailImages"
          />
        </div>
      </div>
    </div>

    <div v-else class="empty">
      <el-empty description="案例不存在" />
      <el-button @click="goBack">返回列表</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { caseData } from '../data/caseList'
import { ArrowLeft, Loading } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()
const caseItem = ref(null)
const iframeLoaded = ref(false)

onMounted(() => {
  loadCaseDetail()
})

// 监听路由参数变化
watch(() => route.params.id, () => {
  loadCaseDetail()
})

// 加载案例详情
const loadCaseDetail = () => {
  // 重置 loading 状态
  iframeLoaded.value = false
  const id = Number(route.params.id)
  caseItem.value = caseData.find((item) => item.id === id)
}

// 处理详情图片，支持单个或多个
const detailImages = computed(() => {
  if (!caseItem.value) return []
  if (Array.isArray(caseItem.value.detail)) {
    return caseItem.value.detail
  } else if (caseItem.value.detail) {
    return [caseItem.value.detail]
  }
  return []
})

// 打开在线演示
const openDemo = (url) => {
  window.open(url, '_blank')
}

// 打开GitHub
const openGithub = (url) => {
  window.open(url, '_blank')
}

// 返回列表
const goBack = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>

.detail-content {
  border-radius: 12px;
  overflow: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
}
.cover {
  width: 100%;
  height: 300px;
  background-color:#f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.app-cover {
  height: auto;
  min-height: 300px;
  .app-iframe-container {
    width: 375px;
    height: 667px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    overflow: hidden;
    position: relative;
  }
}
.web-cover {
  min-height: 600px;
  height: calc(100vh - 32px);
  .web-iframe-container {
    width: 100%;
    min-height: 600px;
    height: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    overflow: hidden;
    position: relative;
  }
}

.iframe-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 10;
  .is-loading {
    font-size: 32px;
    color: #409eff;
    margin-bottom: 10px;
  }
  span {
    color: #606266;
  }
}

.info {
  padding: 16px;
    background: #fff;
}
h3 {
  font-size: 22px;
  margin-bottom: 15px;
}
.desc {
  color: #666;
  margin: 15px 0;
  line-height: 1.6;
}
.content {
  color: #333;
  margin: 15px 0;
  line-height: 1.6;
}

.detail-screenshot {
  padding: 16px;
  background: #fff;
  h4 {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .screenshot-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;
  }
  .el-image {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #f5f5f5;
  }
}
.empty {
  text-align: center;
  padding: 50px 0;
  button {
    margin-top: 16px;
  }
}
</style>