<script setup>
defineProps({
  badges: {
    type: Array,
    default: () => [
      { name: 'FHIR R4', description: 'Fast Healthcare Interoperability Resources', color: 'blue' },
      { name: 'HL7', description: 'Health Level Seven International', color: 'green' },
      { name: 'DICOM', description: 'Digital Imaging and Communications in Medicine', color: 'purple' },
      { name: 'LOINC', description: 'Logical Observation Identifiers Names and Codes', color: 'orange' },
      { name: 'ICD-10', description: 'International Classification of Diseases', color: 'red' },
      { name: 'SNOMED-CT', description: 'Systematized Nomenclature of Medicine', color: 'teal' }
    ]
  },
  title: {
    type: String,
    default: 'Industry-Standard Compliance'
  },
  compact: {
    type: Boolean,
    default: false
  }
})

const getColorClasses = (color) => {
  const colors = {
    blue: { bg: 'rgba(30, 64, 175, 0.1)', border: 'rgba(30, 64, 175, 0.3)', text: '#1E40AF' },
    green: { bg: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.3)', text: '#10B981' },
    purple: { bg: 'rgba(139, 92, 246, 0.1)', border: 'rgba(139, 92, 246, 0.3)', text: '#8B5CF6' },
    orange: { bg: 'rgba(245, 158, 11, 0.1)', border: 'rgba(245, 158, 11, 0.3)', text: '#F59E0B' },
    red: { bg: 'rgba(239, 68, 68, 0.1)', border: 'rgba(239, 68, 68, 0.3)', text: '#EF4444' },
    teal: { bg: 'rgba(20, 184, 166, 0.1)', border: 'rgba(20, 184, 166, 0.3)', text: '#14B8A6' }
  }
  return colors[color] || colors.blue
}
</script>

<template>
  <section class="integration-badges" :class="{ compact }">
    <h3 v-if="title && !compact" class="badges-title">{{ title }}</h3>
    
    <div class="badges-grid" :class="{ 'badges-inline': compact }">
      <div 
        v-for="(badge, index) in badges" 
        :key="index"
        class="badge-item"
        :style="{
          '--badge-bg': getColorClasses(badge.color).bg,
          '--badge-border': getColorClasses(badge.color).border,
          '--badge-text': getColorClasses(badge.color).text
        }"
      >
        <div class="badge-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div class="badge-content">
          <span class="badge-name">{{ badge.name }}</span>
          <span v-if="!compact && badge.description" class="badge-description">{{ badge.description }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.integration-badges {
  padding: 2rem 0;
}

.integration-badges.compact {
  padding: 1rem 0;
}

.badges-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--bio-dark);
  margin-bottom: 2rem;
}

.badges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
}

.badges-inline {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: var(--badge-bg);
  border: 1px solid var(--badge-border);
  border-radius: 12px;
  transition: all 0.2s ease;
}

.compact .badge-item {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
}

.badge-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.badge-icon {
  width: 2rem;
  height: 2rem;
  color: var(--badge-text);
  flex-shrink: 0;
}

.compact .badge-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.badge-icon svg {
  width: 100%;
  height: 100%;
}

.badge-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.compact .badge-content {
  flex-direction: row;
  align-items: center;
}

.badge-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--badge-text);
}

.compact .badge-name {
  font-size: 0.8rem;
}

.badge-description {
  font-size: 0.8rem;
  color: var(--bio-text-muted);
  line-height: 1.4;
}

@media (max-width: 640px) {
  .badges-grid {
    grid-template-columns: 1fr;
  }
  
  .badges-inline {
    justify-content: flex-start;
  }
}
</style>
