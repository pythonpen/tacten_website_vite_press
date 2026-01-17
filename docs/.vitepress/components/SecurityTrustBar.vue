<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [
      {
        icon: 'shield',
        title: '100% Open Source',
        description: 'GPL-3.0 License'
      },
      {
        icon: 'dollar',
        title: 'No Per-User Fees',
        description: 'Zero licensing costs'
      },
      {
        icon: 'scale',
        title: 'Enterprise Scale',
        description: 'Proven across 10,000+ orgs'
      },
      {
        icon: 'lock',
        title: 'Zero Vendor Lock-In',
        description: 'Host anywhere'
      }
    ]
  },
  variant: {
    type: String,
    default: 'default'
  }
})

const getIcon = (iconName) => {
  const icons = {
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    dollar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
    scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
  }
  return icons[iconName] || icons.shield
}
</script>

<template>
  <section class="security-trust-bar" :class="variant">
    <div class="trust-items">
      <div 
        v-for="(item, index) in items" 
        :key="index"
        class="trust-item"
      >
        <div class="trust-icon" v-html="getIcon(item.icon)"></div>
        <div class="trust-content">
          <span class="trust-title">{{ item.title }}</span>
          <span v-if="item.description" class="trust-description">{{ item.description }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.security-trust-bar {
  padding: 1.5rem 2rem;
  background: var(--bio-light);
  border: 1px solid var(--bio-border);
  border-radius: 12px;
  margin: 2rem 0;
}

.security-trust-bar.gradient {
  background: linear-gradient(135deg, rgba(30, 64, 175, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%);
  border-color: rgba(30, 64, 175, 0.15);
}

.security-trust-bar.dark {
  background: var(--bio-dark);
  border-color: transparent;
}

.security-trust-bar.dark .trust-title,
.security-trust-bar.dark .trust-description {
  color: white;
}

.security-trust-bar.dark .trust-description {
  color: rgba(255, 255, 255, 0.7);
}

.trust-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.trust-icon {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bio-primary), var(--bio-secondary));
  border-radius: 10px;
  color: white;
  flex-shrink: 0;
}

.trust-icon :deep(svg) {
  width: 1.25rem;
  height: 1.25rem;
}

.trust-content {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.trust-title {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--bio-dark);
}

.trust-description {
  font-size: 0.8rem;
  color: var(--bio-text-muted);
}

@media (max-width: 768px) {
  .security-trust-bar {
    padding: 1.25rem 1rem;
  }
  
  .trust-items {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .trust-icon {
    width: 2rem;
    height: 2rem;
  }
  
  .trust-icon :deep(svg) {
    width: 1rem;
    height: 1rem;
  }
}
</style>
