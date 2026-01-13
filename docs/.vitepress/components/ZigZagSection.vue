<script setup>
defineProps({
  features: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="zigzag-section">
    <div v-for="(feature, index) in features" :key="index" class="feature-item" :class="{ 'reverse': index % 2 !== 0 }">
      <div class="content">
        <h2 class="title">{{ feature.title }}</h2>
        <p class="details" v-html="feature.details"></p>
        <ul v-if="feature.listItems" class="list">
          <li v-for="(item, i) in feature.listItems" :key="i" class="list-item">
            <span class="checkmark">✓</span>
            <span v-html="item"></span>
          </li>
        </ul>
        <div class="links">
          <a v-if="feature.link" :href="feature.link" class="link">{{ feature.linkText || 'Learn more' }}</a>
          <a v-if="feature.secondaryLink" :href="feature.secondaryLink" class="link secondary">{{ feature.secondaryLinkText || 'Learn more' }}</a>
        </div>
      </div>
      <div class="image-container">
        <img :src="feature.image" :alt="feature.title" class="image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.zigzag-section {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 4rem 0;
  max-width: 1152px;
  margin: 0 auto;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.feature-item.reverse {
  flex-direction: row-reverse;
}

.content {
  flex: 1;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.details {
  font-size: 1.125rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.list-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
}

.checkmark {
  color: var(--vp-c-brand-1);
  font-weight: bold;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
}

.links {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  align-items: center;
}

.link {
  display: inline-block;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: underline;
}

.link.secondary {
  /* Inherits brand color from .link */
  text-decoration: underline;
  font-weight: 500;
}

@media (max-width: 768px) {
  .feature-item, .feature-item.reverse {
    flex-direction: column-reverse;
    gap: 2rem;
  }
  
  .zigzag-section {
    padding: 2rem 1.5rem;
    gap: 4rem;
  }

  .title {
    font-size: 1.75rem;
  }
}
</style>
