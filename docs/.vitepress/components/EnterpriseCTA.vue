<script setup>
defineProps({
  title: {
    type: String,
    default: 'Ready to Transform Your Healthcare Operations?'
  },
  subtitle: {
    type: String,
    default: 'Join thousands of healthcare organizations worldwide using open source technology to deliver better care at lower costs.'
  },
  actions: {
    type: Array,
    default: () => [
      {
        title: 'Try the Demo',
        description: 'Experience BioGraph with sample data. No installation required.',
        link: 'https://marley.frappe.cloud',
        linkText: 'Launch Demo',
        icon: 'rocket',
        external: true
      },
      {
        title: 'Read the Docs',
        description: 'Comprehensive documentation, installation guides, and API reference.',
        link: 'https://deepwiki.com/Tacten/biograph',
        linkText: 'View Documentation',
        icon: 'book',
        external: true
      },
      {
        title: 'Join the Community',
        description: 'Connect with users and developers. Ask questions, share experiences.',
        link: 'https://discuss.frappe.io',
        linkText: 'Join Forum',
        icon: 'users',
        external: true
      },
      {
        title: 'Talk to an Expert',
        description: 'Schedule a consultation. Discuss requirements and get a custom demo.',
        link: '/book-a-call',
        linkText: 'Book a Call',
        icon: 'phone',
        external: false
      }
    ]
  },
  highlights: {
    type: Array,
    default: () => [
      'Complete clinical workflows (FHIR, HL7, DICOM)',
      'Full ERP integration (Accounting, Inventory, HR, CRM)',
      'Low-code customization platform',
      'Active global community (50,000+ members)',
      'Zero license fees, forever'
    ]
  }
})

const getIcon = (iconName) => {
  const icons = {
    rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>'
  }
  return icons[iconName] || icons.rocket
}
</script>

<template>
  <section class="enterprise-cta">
    <div class="cta-background">
      <div class="gradient-overlay"></div>
      <div class="pattern-overlay"></div>
    </div>
    
    <div class="cta-content">
      <h2 class="cta-title">{{ title }}</h2>
      <p class="cta-subtitle">{{ subtitle }}</p>
      
      <div class="action-grid">
        <div 
          v-for="(action, index) in actions" 
          :key="index"
          class="action-card"
        >
          <div class="action-icon" v-html="getIcon(action.icon)"></div>
          <h3 class="action-title">{{ action.title }}</h3>
          <p class="action-description">{{ action.description }}</p>
          <a 
            :href="action.link" 
            class="action-link"
            :target="action.external ? '_blank' : undefined"
            :rel="action.external ? 'noopener' : undefined"
          >
            {{ action.linkText }}
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      <div class="highlights-section" v-if="highlights && highlights.length">
        <h3 class="highlights-title">Open Source Health Information System</h3>
        <ul class="highlights-list">
          <li v-for="(highlight, index) in highlights" :key="index">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            {{ highlight }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.enterprise-cta {
  position: relative;
  padding: 5rem 2rem;
  margin: 4rem 0;
  border-radius: 24px;
  overflow: hidden;
}

.cta-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1E40AF 0%, #0055D4 50%, #10B981 100%);
}

.pattern-overlay {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  color: white;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.cta-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.action-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.action-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: left;
  transition: all 0.3s ease;
}

.action-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.3);
}

.action-icon {
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.action-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.action-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.action-description {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.action-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  background: white;
  color: #1E40AF;
  padding: 0.625rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.action-link:hover {
  background: #F9FAFB;
  transform: translateX(4px);
}

.action-link svg {
  width: 1rem;
  height: 1rem;
}

.highlights-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
}

.highlights-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
}

.highlights-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.highlights-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.95);
}

.highlights-list svg {
  width: 1.25rem;
  height: 1.25rem;
  color: #34D399;
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .action-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .enterprise-cta {
    padding: 3rem 1rem;
    margin: 2rem 0;
    border-radius: 16px;
  }
  
  .cta-title {
    font-size: 1.75rem;
  }
  
  .cta-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .action-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .action-card {
    padding: 1.25rem;
  }
  
  .highlights-list {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}
</style>
