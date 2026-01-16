<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  stats: {
    type: Array,
    default: () => [
      { value: '10,000+', label: 'Organizations Using Frappe/ERPNext' },
      { value: '50,000+', label: 'Active Community Members' },
      { value: '1,000+', label: 'Open Source Contributors' },
      { value: '140+', label: 'Countries Worldwide' }
    ]
  },
  title: {
    type: String,
    default: 'Trusted by Healthcare Organizations Worldwide'
  },
  animate: {
    type: Boolean,
    default: true
  }
})

const containerRef = ref(null)
const isVisible = ref(false)
const animatedValues = ref([])

const parseNumber = (str) => {
  const match = str.match(/[\d,]+/)
  if (match) {
    return parseInt(match[0].replace(/,/g, ''))
  }
  return 0
}

const formatNumber = (num, original) => {
  const suffix = original.replace(/[\d,]+/, '')
  return num.toLocaleString() + suffix
}

const animateValue = (index, target, original, duration = 2000) => {
  const start = 0
  const startTime = performance.now()
  
  const update = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const current = Math.floor(start + (target - start) * easeOutQuart)
    
    animatedValues.value[index] = formatNumber(current, original)
    
    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      animatedValues.value[index] = original
    }
  }
  
  requestAnimationFrame(update)
}

const startAnimation = () => {
  if (!props.animate || isVisible.value) return
  isVisible.value = true
  
  props.stats.forEach((stat, index) => {
    const target = parseNumber(stat.value)
    if (target > 0) {
      animateValue(index, target, stat.value)
    } else {
      animatedValues.value[index] = stat.value
    }
  })
}

let observer = null

onMounted(() => {
  animatedValues.value = props.stats.map(stat => props.animate ? '0' : stat.value)
  
  if (props.animate && containerRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation()
            observer?.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(containerRef.value)
  } else {
    animatedValues.value = props.stats.map(stat => stat.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <section class="stat-counter-section" ref="containerRef">
    <h2 v-if="title" class="stat-title">{{ title }}</h2>
    
    <div class="stats-grid">
      <div 
        v-for="(stat, index) in stats" 
        :key="index" 
        class="stat-item"
      >
        <div class="stat-value">{{ animatedValues[index] || stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stat-counter-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--bio-light) 0%, var(--vp-c-bg-soft) 100%);
  border-radius: 16px;
  margin: 3rem 0;
}

.stat-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--bio-dark);
  margin-bottom: 3rem;
  line-height: 1.3;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: var(--vp-c-bg);
  border-radius: 12px;
  border: 1px solid var(--bio-border);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(30, 64, 175, 0.1);
  border-color: var(--bio-primary);
}

.stat-value {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--bio-primary), var(--bio-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.95rem;
  color: var(--bio-text-muted);
  font-weight: 500;
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .stat-counter-section {
    padding: 2rem 1rem;
  }
  
  .stat-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stat-value {
    font-size: 2.5rem;
  }
  
  .stat-item {
    padding: 1.25rem;
  }
}
</style>
