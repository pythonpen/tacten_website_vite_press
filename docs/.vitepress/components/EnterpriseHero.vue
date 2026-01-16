<script setup>
defineProps({
  title: {
    type: String,
    default: 'BioGraph'
  },
  subtitle: {
    type: String,
    default: '100% Open-Source Full-Spectrum HIMS/EHR Platform'
  },
  description: {
    type: String,
    default: 'Enterprise-grade Hospital Information Management System built on the Frappe Framework and ERPNext ecosystem. Zero vendor lock-in, dramatically lower TCO, unlimited customization.'
  },
  primaryCta: {
    type: Object,
    default: () => ({ text: 'Get Started', link: '/docs/getting-started' })
  },
  secondaryCta: {
    type: Object,
    default: () => ({ text: 'View Demo', link: 'https://marley.frappe.cloud' })
  },
  badges: {
    type: Array,
    default: () => ['FHIR R4', 'HL7', 'DICOM', 'LOINC', 'ICD-10', 'SNOMED-CT']
  }
})
</script>

<template>
  <div class="enterprise-hero">
    <div class="hero-background">
      <div class="gradient-overlay"></div>
      <div class="pattern-overlay"></div>
    </div>
    
    <div class="hero-content">
      <div class="hero-badges" v-if="badges && badges.length">
        <span v-for="badge in badges" :key="badge" class="compliance-badge">
          {{ badge }}
        </span>
      </div>
      
      <h1 class="hero-title">
        <span class="title-main">{{ title }}</span>
      </h1>
      
      <p class="hero-subtitle">{{ subtitle }}</p>
      
      <p class="hero-description">{{ description }}</p>
      
      <div class="hero-ctas">
        <a :href="primaryCta.link" class="cta-primary">
          {{ primaryCta.text }}
          <svg class="cta-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
          </svg>
        </a>
        <a :href="secondaryCta.link" class="cta-secondary" target="_blank" rel="noopener">
          {{ secondaryCta.text }}
          <svg class="cta-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
      
      <div class="hero-trust-indicators">
        <div class="trust-item">
          <span class="trust-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </span>
          <span class="trust-text">100% Open Source</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </span>
          <span class="trust-text">No Per-User Fees</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
            </svg>
          </span>
          <span class="trust-text">Enterprise Scale</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.enterprise-hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 4rem 1.5rem;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1E40AF 0%, #0055D4 50%, #10B981 100%);
  opacity: 0.95;
}

.pattern-overlay {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  text-align: center;
  color: white;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.compliance-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  text-transform: uppercase;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
}

.title-main {
  background: linear-gradient(to right, #ffffff, #e0f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.95);
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.85);
  max-width: 700px;
  margin: 0 auto 2.5rem;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.cta-primary,
.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.cta-primary {
  background: white;
  color: #1E40AF;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
}

.cta-primary:hover {
  background: #F9FAFB;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.cta-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.cta-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.hero-trust-indicators {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.trust-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
}

.trust-icon svg {
  width: 100%;
  height: 100%;
}

.trust-text {
  font-size: 0.875rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .enterprise-hero {
    min-height: auto;
    padding: 3rem 1rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-trust-indicators {
    flex-direction: column;
    gap: 1rem;
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>
