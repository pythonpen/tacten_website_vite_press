<script setup>
defineProps({
  features: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Number,
    default: 3
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section class="feature-grid-section">
    <div class="section-header" v-if="title || subtitle">
      <h2 v-if="title" class="section-title">{{ title }}</h2>
      <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
    </div>
    
    <div class="feature-grid" :class="`grid-cols-${columns}`">
      <div 
        v-for="(feature, index) in features" 
        :key="index" 
        class="feature-card"
      >
        <div class="feature-icon" v-if="feature.icon">
          <span v-if="typeof feature.icon === 'string' && feature.icon.length <= 2" class="icon-emoji">
            {{ feature.icon }}
          </span>
          <div v-else class="icon-svg" v-html="feature.icon"></div>
        </div>
        
        <h3 class="feature-title">{{ feature.title }}</h3>
        
        <p class="feature-description">{{ feature.description || feature.details }}</p>
        
        <ul v-if="feature.items && feature.items.length" class="feature-list">
          <li v-for="(item, i) in feature.items" :key="i">
            <span class="list-check">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
            </span>
            <span v-html="item"></span>
          </li>
        </ul>
        
        <a v-if="feature.link" :href="feature.link" class="feature-link">
          {{ feature.linkText || 'Learn more' }}
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-grid-section {
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--bio-dark);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--bio-text-muted);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.feature-grid {
  display: grid;
  gap: 2rem;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

.feature-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--bio-border);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--bio-primary), var(--bio-secondary));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  border-color: var(--bio-primary);
  box-shadow: 0 10px 40px rgba(30, 64, 175, 0.1);
  transform: translateY(-4px);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--bio-primary), var(--bio-secondary));
  border-radius: 10px;
  color: white;
}

.icon-emoji {
  font-size: 1.5rem;
}

.icon-svg {
  width: 1.5rem;
  height: 1.5rem;
}

.icon-svg :deep(svg) {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--bio-dark);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.feature-description {
  font-size: 0.95rem;
  color: var(--bio-text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.375rem 0;
  font-size: 0.875rem;
  color: var(--bio-text-secondary);
}

.list-check {
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
  color: var(--bio-secondary);
  margin-top: 0.125rem;
}

.list-check svg {
  width: 100%;
  height: 100%;
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--bio-primary);
  text-decoration: none;
  transition: gap 0.2s ease;
}

.feature-link:hover {
  gap: 0.625rem;
}

.feature-link svg {
  width: 1rem;
  height: 1rem;
}

@media (max-width: 1024px) {
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .feature-grid-section {
    padding: 2rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .grid-cols-2,
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
}
</style>
