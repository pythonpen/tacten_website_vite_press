<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  testimonials: {
    type: Array,
    default: () => [
      {
        quote: 'We reduced costs from $300,000 to under $50,000 annually.',
        author: 'Dr. Sarah Johnson',
        role: 'CIO',
        organization: 'Regional Hospital Group'
      },
      {
        quote: 'Customization ourselves was game-changing.',
        author: 'Ahmed Al-Rashid',
        role: 'IT Director',
        organization: 'Medical Complex'
      },
      {
        quote: 'Perfect for multi-site diagnostic labs.',
        author: 'Dr. Priya Sharma',
        role: 'CEO',
        organization: 'PathCare Diagnostics'
      },
      {
        quote: 'Community saved us months of development.',
        author: 'James Chen',
        role: 'CTO',
        organization: 'RadiologyNow'
      }
    ]
  },
  title: {
    type: String,
    default: 'Success Stories'
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
let autoplayTimer = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.testimonials.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.testimonials.length) % props.testimonials.length
}

const goToSlide = (index) => {
  currentIndex.value = index
  resetAutoplay()
}

const resetAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
  }
  if (props.autoplay) {
    autoplayTimer = setInterval(nextSlide, props.interval)
  }
}

onMounted(() => {
  if (props.autoplay) {
    autoplayTimer = setInterval(nextSlide, props.interval)
  }
})

onUnmounted(() => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
  }
})
</script>

<template>
  <section class="testimonial-section">
    <h2 v-if="title" class="testimonial-title">{{ title }}</h2>
    
    <div class="carousel-container">
      <button class="nav-button prev" @click="prevSlide" aria-label="Previous testimonial">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <div class="carousel-track">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="testimonial-card"
          :class="{ active: index === currentIndex }"
        >
          <div class="quote-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <blockquote class="quote-text">
            "{{ testimonial.quote }}"
          </blockquote>
          
          <div class="author-info">
            <div class="author-avatar">
              {{ testimonial.author.charAt(0) }}
            </div>
            <div class="author-details">
              <div class="author-name">{{ testimonial.author }}</div>
              <div class="author-role">{{ testimonial.role }}, {{ testimonial.organization }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <button class="nav-button next" @click="nextSlide" aria-label="Next testimonial">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    
    <div class="carousel-dots">
      <button 
        v-for="(_, index) in testimonials" 
        :key="index"
        class="dot"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
        :aria-label="`Go to testimonial ${index + 1}`"
      ></button>
    </div>
  </section>
</template>

<style scoped>
.testimonial-section {
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.testimonial-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--bio-dark);
  margin-bottom: 3rem;
  line-height: 1.3;
}

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-button {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  border: 1px solid var(--bio-border);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--bio-text-muted);
}

.nav-button:hover {
  background: var(--bio-primary);
  border-color: var(--bio-primary);
  color: white;
  transform: scale(1.05);
}

.nav-button svg {
  width: 1.25rem;
  height: 1.25rem;
}

.carousel-track {
  flex: 1;
  overflow: hidden;
  position: relative;
  min-height: 280px;
}

.testimonial-card {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.5s ease;
  pointer-events: none;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--bio-border);
  border-radius: 16px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
}

.testimonial-card.active {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.quote-icon {
  width: 2.5rem;
  height: 2.5rem;
  color: var(--bio-primary);
  opacity: 0.3;
  margin-bottom: 1rem;
}

.quote-icon svg {
  width: 100%;
  height: 100%;
}

.quote-text {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--bio-dark);
  font-style: italic;
  margin: 0 0 2rem 0;
  flex: 1;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, var(--bio-primary), var(--bio-secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
}

.author-name {
  font-weight: 600;
  color: var(--bio-dark);
  font-size: 1rem;
}

.author-role {
  font-size: 0.875rem;
  color: var(--bio-text-muted);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: var(--bio-border);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dot:hover {
  background: var(--bio-text-muted);
}

.dot.active {
  background: var(--bio-primary);
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .testimonial-section {
    padding: 2rem 1rem;
  }
  
  .testimonial-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .nav-button {
    display: none;
  }
  
  .carousel-track {
    min-height: 320px;
  }
  
  .testimonial-card {
    padding: 1.5rem;
  }
  
  .quote-text {
    font-size: 1.1rem;
  }
}
</style>
