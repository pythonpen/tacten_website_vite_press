<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, provide, onMounted, watch } from 'vue'

const { Layout } = DefaultTheme
const isSidebarOpen = ref(true)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
  updateBodyClass()
}

function updateBodyClass() {
  if (typeof document !== 'undefined') {
      if (!isSidebarOpen.value) {
        document.body.classList.add('close-sidebar')
      } else {
        document.body.classList.remove('close-sidebar')
      }
  }
}

onMounted(() => {
    // Initial check or load from storage if we were persisting
    updateBodyClass()
})

</script>

<template>
  <Layout>
    <template #nav-bar-content-before>
      <button class="sidebar-toggle" @click="toggleSidebar" title="Toggle Sidebar">
        <span v-if="isSidebarOpen">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
        </span>
        <span v-else>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="3" y2="9"></line></svg>
        </span>
      </button>
    </template>
  </Layout>
</template>

<style scoped>
.sidebar-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    height: var(--vp-nav-height);
    color: var(--vp-c-text-1);
    transition: color 0.25s;
}
.sidebar-toggle:hover {
    color: var(--vp-c-brand);
}
</style>
