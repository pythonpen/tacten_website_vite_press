<script setup>
import { inject, ref, onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const { activeTab, registerTab } = inject('tabs')
const index = ref(-1)

// Register immediately in setup or onBeforeMount to ensure order
// BUT parent might not be mounted yet? 
// In Vue setup, parent setup has already run.
// So `registerTab` is available.
index.value = registerTab(props.title)

</script>

<template>
  <div v-show="activeTab === index" class="tab-content">
    <slot></slot>
  </div>
</template>

<style scoped>
.tab-content {
    /* Add animation if desired */
}
</style>
