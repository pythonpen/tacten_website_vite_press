<script setup>
import { ref, provide, useSlots, onMounted, watch } from 'vue'

const props = defineProps({
  cacheKey: {
    type: String,
    default: null
  }
})

const tabs = ref([])
const activeTab = ref(0)
/* 
  We need to track how many tabs are registered to assign indices.
  Since registration happens from children's setup/mounted, we can just push to array.
  The index in the array is the tab index.
*/

const registerTab = (title) => {
  const index = tabs.value.length
  tabs.value.push(title)
  return index
}

const selectTab = (index) => {
  activeTab.value = index
  if (props.cacheKey) {
    localStorage.setItem(`tab-selection-${props.cacheKey}`, index)
  }
}

provide('tabs', {
  activeTab,
  registerTab
})

onMounted(() => {
  if (props.cacheKey) {
    const saved = localStorage.getItem(`tab-selection-${props.cacheKey}`)
    if (saved !== null) {
      const parsed = parseInt(saved)
      if (parsed >= 0 && parsed < tabs.value.length) {
          activeTab.value = parsed
      }
    }
  }
})
</script>

<template>
  <div class="tabs-container">
    <div class="tabs-header">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-button', { active: activeTab === index }]"
        @click="selectTab(index)"
      >
        {{ tab }}
      </button>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.tabs-container {
  margin: 1rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-c-bg);
}

.tabs-header {
  display: flex;
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
}

.tabs-header::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
}

.tab-button {
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  border: none;
  background: none;
  font-weight: 500;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  transition: color 0.25s, background-color 0.25s;
  white-space: nowrap;
}

.tab-button:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-mute);
}

.tab-button.active {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-bg);
  box-shadow: inset 0 -2px 0 var(--vp-c-brand);
}

.tabs-content {
  padding: 1.5rem;
}

@media (max-width: 640px) {
    .tab-button {
        padding: 0.75rem 1rem;
        font-size: 0.85em;
    }
    .tabs-content {
        padding: 1rem;
    }
}
</style>
