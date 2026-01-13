# Biograph Landing Page - Implementation Guide

## VitePress Configuration

### config.js additions

```javascript
export default {
  title: 'Biograph',
  description: 'Open Source Hospital Information System',
  themeConfig: {
    logo: '/biograph-logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Features', link: '/#comprehensive-feature-coverage' },
      { text: 'Use Cases', link: '/#use-cases--solutions' },
      { text: 'Documentation', link: 'https://deepwiki.com/Tacten/biograph' },
      { text: 'Demo', link: 'https://marley.frappe.cloud' },
      { text: 'Pricing', link: '/#pricing--licensing' },
      { text: 'GitHub', link: 'https://github.com/Tacten/biograph' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tacten/biograph' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/tacten' },
      { icon: 'twitter', link: 'https://twitter.com/tactenhealth' }
    ]
  }
}
```

## Custom CSS Styles

### .vitepress/theme/custom.css

```css
/* ============================================
   BIOGRAPH LANDING PAGE STYLES
   ============================================ */

/* Root Variables */
:root {
  --bio-primary: #10b981; /* Healthcare green */
  --bio-secondary: #3b82f6; /* Tech blue */
  --bio-accent: #8b5cf6; /* Purple */
  --bio-dark: #1e293b;
  --bio-light: #f8fafc;
  --bio-border: #e2e8f0;
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
}

/* ============================================
   STATS CONTAINER
   ============================================ */
.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  padding: var(--spacing-lg) var(--spacing-md);
  background: linear-gradient(135deg, var(--bio-light) 0%, #fff 100%);
  border-radius: 12px;
  margin: var(--spacing-lg) 0;
}

.stat {
  text-align: center;
  padding: var(--spacing-md);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--bio-primary);
  line-height: 1;
  margin-bottom: var(--spacing-sm);
}

.stat-label {
  font-size: 0.95rem;
  color: var(--bio-dark);
  opacity: 0.8;
  font-weight: 500;
}

/* ============================================
   THREE COLUMN GRID
   ============================================ */
.three-column-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.three-column-grid > div {
  background: #fff;
  border: 2px solid var(--bio-border);
  border-radius: 12px;
  padding: var(--spacing-md);
  transition: all 0.3s ease;
}

.three-column-grid > div:hover {
  border-color: var(--bio-primary);
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.1);
  transform: translateY(-4px);
}

.three-column-grid h3 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--bio-dark);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.three-column-grid ul {
  list-style: none;
  padding: 0;
}

.three-column-grid li {
  padding: 0.5rem 0;
  color: #475569;
  position: relative;
  padding-left: 1.5rem;
}

.three-column-grid li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--bio-primary);
  font-weight: bold;
}

/* ============================================
   ECOSYSTEM GRID
   ============================================ */
.ecosystem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.ecosystem-grid > div {
  background: linear-gradient(135deg, #fff 0%, var(--bio-light) 100%);
  border: 1px solid var(--bio-border);
  border-radius: 12px;
  padding: var(--spacing-md);
  transition: all 0.3s ease;
}

.ecosystem-grid > div:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.ecosystem-grid h3 {
  font-size: 1.3rem;
  margin-bottom: var(--spacing-sm);
  color: var(--bio-dark);
}

.ecosystem-grid h4 {
  font-size: 1rem;
  color: var(--bio-secondary);
  margin-bottom: var(--spacing-xs);
}

.ecosystem-grid ul {
  list-style: none;
  padding: 0;
  margin: var(--spacing-sm) 0;
}

.ecosystem-grid li {
  padding: 0.4rem 0;
  color: #64748b;
  font-size: 0.95rem;
}

/* ============================================
   PROBLEM SOLUTION SECTION
   ============================================ */
.problem-solution {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

@media (max-width: 768px) {
  .problem-solution {
    grid-template-columns: 1fr;
  }
}

.problem-solution > div {
  padding: var(--spacing-md);
  border-radius: 12px;
}

.problem-solution > div:first-child {
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  border: 2px solid #fca5a5;
}

.problem-solution > div:last-child {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 2px solid #86efac;
}

.problem-solution h3 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
}

.problem-solution ul {
  list-style: none;
  padding: 0;
}

.problem-solution li {
  padding: 0.6rem 0;
  position: relative;
  padding-left: 2rem;
  color: var(--bio-dark);
}

.problem-solution li:before {
  position: absolute;
  left: 0;
  font-weight: bold;
  font-size: 1.2rem;
}

/* ============================================
   COMPARISON TABLE
   ============================================ */
.comparison-table {
  overflow-x: auto;
  margin: var(--spacing-lg) 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}

.comparison-table th {
  background: linear-gradient(135deg, var(--bio-primary) 0%, #059669 100%);
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  position: sticky;
  top: 0;
  z-index: 10;
}

.comparison-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--bio-border);
  vertical-align: top;
}

.comparison-table tr:nth-child(even) {
  background-color: var(--bio-light);
}

.comparison-table tr:hover {
  background-color: #f0fdf4;
}

.comparison-table td:first-child {
  font-weight: 600;
  color: var(--bio-dark);
}

/* Feature indicators in table */
.comparison-table td:nth-child(2) {
  color: #64748b;
}

.comparison-table td:nth-child(3) {
  color: var(--bio-primary);
  font-weight: 500;
}

/* ============================================
   FEATURE SECTION
   ============================================ */
.feature-section {
  margin: var(--spacing-lg) 0;
}

.feature-section h4 {
  font-size: 1.3rem;
  color: var(--bio-dark);
  margin: var(--spacing-md) 0 var(--spacing-sm);
  padding-bottom: 0.5rem;
  border-bottom: 3px solid var(--bio-primary);
  display: inline-block;
}

.feature-section ul {
  columns: 2;
  column-gap: var(--spacing-md);
  list-style: none;
  padding: 0;
}

@media (max-width: 768px) {
  .feature-section ul {
    columns: 1;
  }
}

.feature-section li {
  break-inside: avoid;
  padding: 0.4rem 0;
  color: #64748b;
  position: relative;
  padding-left: 1.5rem;
}

.feature-section li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--bio-primary);
  font-weight: bold;
  font-size: 1.5rem;
}

/* ============================================
   WORKFLOW DIAGRAM
   ============================================ */
.workflow-diagram {
  background: linear-gradient(135deg, var(--bio-light) 0%, #fff 100%);
  border: 2px solid var(--bio-border);
  border-radius: 12px;
  padding: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.workflow-diagram h3 {
  color: var(--bio-dark);
  margin-bottom: var(--spacing-md);
}

.workflow-diagram pre {
  background: var(--bio-dark);
  color: #a5f3fc;
  padding: var(--spacing-md);
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  font-size: 0.85rem;
  line-height: 1.6;
}

.workflow-diagram code {
  color: inherit;
}

/* ============================================
   USE CASES GRID
   ============================================ */
.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.use-cases-grid > div {
  background: #fff;
  border: 2px solid var(--bio-border);
  border-radius: 12px;
  padding: var(--spacing-md);
  transition: all 0.3s ease;
}

.use-cases-grid > div:hover {
  border-color: var(--bio-secondary);
  box-shadow: 0 12px 28px rgba(59, 130, 246, 0.15);
  transform: translateY(-4px);
}

.use-cases-grid h3 {
  font-size: 1.4rem;
  color: var(--bio-dark);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.use-cases-grid h4 {
  font-size: 1rem;
  color: var(--bio-secondary);
  margin: var(--spacing-sm) 0;
}

.use-cases-grid ul {
  list-style: none;
  padding: 0;
}

.use-cases-grid li {
  padding: 0.4rem 0;
  color: #64748b;
  position: relative;
  padding-left: 1.5rem;
}

.use-cases-grid li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--bio-primary);
}

/* ============================================
   TECH STACK
   ============================================ */
.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.tech-stack > div {
  background: #fff;
  border: 1px solid var(--bio-border);
  border-radius: 8px;
  padding: var(--spacing-md);
}

.tech-stack h4 {
  color: var(--bio-primary);
  margin-bottom: var(--spacing-sm);
  font-size: 1.1rem;
  font-weight: 600;
}

.tech-stack ul {
  list-style: none;
  padding: 0;
}

.tech-stack li {
  padding: 0.3rem 0;
  color: #64748b;
  font-size: 0.9rem;
}

.tech-stack strong {
  color: var(--bio-dark);
}

/* ============================================
   STANDARDS GRID
   ============================================ */
.standards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.standards-grid > div {
  background: linear-gradient(135deg, #fff 0%, var(--bio-light) 100%);
  border: 1px solid var(--bio-border);
  border-radius: 8px;
  padding: var(--spacing-md);
}

.standards-grid h4 {
  color: var(--bio-secondary);
  margin-bottom: var(--spacing-sm);
}

.standards-grid ul {
  list-style: none;
  padding: 0;
}

.standards-grid li {
  padding: 0.5rem 0;
  color: #64748b;
  position: relative;
  padding-left: 2rem;
}

.standards-grid li:before {
  content: "✅";
  position: absolute;
  left: 0;
}

/* ============================================
   DEPLOYMENT GRID
   ============================================ */
.deployment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.deployment-grid > div {
  background: #fff;
  border: 2px solid var(--bio-border);
  border-radius: 8px;
  padding: var(--spacing-md);
  transition: all 0.3s ease;
}

.deployment-grid > div:hover {
  border-color: var(--bio-accent);
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.15);
}

.deployment-grid h4 {
  color: var(--bio-accent);
  margin-bottom: var(--spacing-sm);
}

.deployment-grid ul {
  list-style: none;
  padding: 0;
}

.deployment-grid li {
  padding: 0.4rem 0;
  color: #64748b;
  position: relative;
  padding-left: 1.5rem;
}

.deployment-grid li:before {
  content: "▸";
  position: absolute;
  left: 0;
  color: var(--bio-accent);
  font-weight: bold;
}

/* ============================================
   COMMUNITY SECTION
   ============================================ */
.community-section {
  margin: var(--spacing-lg) 0;
}

.community-section h4 {
  font-size: 1.2rem;
  color: var(--bio-dark);
  margin: var(--spacing-md) 0 var(--spacing-sm);
}

.community-section > div {
  background: #fff;
  border: 1px solid var(--bio-border);
  border-radius: 8px;
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.community-section ul {
  list-style: none;
  padding: 0;
}

.community-section li {
  padding: 0.4rem 0;
  color: #64748b;
}

/* ============================================
   SUPPORT TIERS
   ============================================ */
.support-tiers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.support-tiers > div {
  background: #fff;
  border: 2px solid var(--bio-border);
  border-radius: 12px;
  padding: var(--spacing-md);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.support-tiers > div::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--bio-primary), var(--bio-secondary));
}

.support-tiers > div:hover {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.support-tiers h4 {
  font-size: 1.3rem;
  color: var(--bio-dark);
  margin-bottom: 0.5rem;
}

.support-tiers strong {
  font-size: 1.5rem;
  color: var(--bio-primary);
  display: block;
  margin: var(--spacing-sm) 0;
}

/* ============================================
   DEVELOPER SECTION
   ============================================ */
.developer-section pre {
  background: var(--bio-dark);
  color: #e2e8f0;
  padding: var(--spacing-md);
  border-radius: 8px;
  overflow-x: auto;
  margin: var(--spacing-sm) 0;
}

.developer-section code {
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  font-size: 0.9rem;
}

.developer-section h4 {
  color: var(--bio-secondary);
  margin: var(--spacing-md) 0 var(--spacing-sm);
}

/* ============================================
   PRICING SECTION
   ============================================ */
.pricing-section {
  margin: var(--spacing-lg) 0;
}

.pricing-section > div {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 2px solid #86efac;
  border-radius: 12px;
  padding: var(--spacing-md);
  margin: var(--spacing-md) 0;
}

.pricing-section h4 {
  font-size: 1.3rem;
  color: var(--bio-dark);
  margin-bottom: var(--spacing-sm);
}

.pricing-section ul {
  list-style: none;
  padding: 0;
}

.pricing-section li {
  padding: 0.5rem 0;
  color: var(--bio-dark);
  position: relative;
  padding-left: 2rem;
}

.pricing-section li:before {
  content: "✅";
  position: absolute;
  left: 0;
}

/* ============================================
   ROI CALCULATOR
   ============================================ */
.roi-calculator {
  background: linear-gradient(135deg, #fefce8 0%, #fef9c3 100%);
  border: 2px solid #fde047;
  border-radius: 12px;
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.roi-calculator h4 {
  font-size: 1.4rem;
  color: var(--bio-dark);
  margin-bottom: var(--spacing-md);
}

.roi-calculator table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  margin: var(--spacing-md) 0;
}

.roi-calculator th,
.roi-calculator td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid var(--bio-border);
}

.roi-calculator th {
  background: var(--bio-dark);
  color: white;
  font-weight: 600;
}

.roi-calculator tr:nth-child(even) {
  background-color: var(--bio-light);
}

.roi-calculator strong {
  color: var(--bio-primary);
  font-size: 1.1rem;
}

/* ============================================
   MIGRATION SECTION
   ============================================ */
.migration-section h4 {
  font-size: 1.2rem;
  color: var(--bio-secondary);
  margin: var(--spacing-md) 0 var(--spacing-sm);
}

.migration-section ul {
  list-style: none;
  padding: 0;
}

.migration-section li {
  padding: 0.4rem 0;
  color: #64748b;
  position: relative;
  padding-left: 1.5rem;
}

.migration-section li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--bio-primary);
  font-weight: bold;
}

/* ============================================
   TESTIMONIALS
   ============================================ */
.testimonials {
  margin: var(--spacing-lg) 0;
}

.testimonials > blockquote {
  background: #fff;
  border-left: 4px solid var(--bio-primary);
  padding: var(--spacing-md);
  margin: var(--spacing-md) 0;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  font-size: 1.05rem;
  line-height: 1.7;
  color: #475569;
  font-style: italic;
}

.testimonials > blockquote > p:last-child {
  margin-top: var(--spacing-sm);
  font-style: normal;
  font-weight: 600;
  color: var(--bio-dark);
  font-size: 0.95rem;
}

/* ============================================
   FAQ SECTION
   ============================================ */
.faq-section h3 {
  font-size: 1.5rem;
  color: var(--bio-dark);
  margin: var(--spacing-lg) 0 var(--spacing-md);
}

.faq-section > div {
  margin: var(--spacing-md) 0;
}

.faq-section strong {
  display: block;
  font-size: 1.1rem;
  color: var(--bio-secondary);
  margin-bottom: 0.5rem;
}

.faq-section p {
  color: #64748b;
  line-height: 1.7;
  margin: 0.5rem 0;
}

/* ============================================
   CTA SECTION
   ============================================ */
.cta-section {
  background: linear-gradient(135deg, var(--bio-primary) 0%, #059669 100%);
  color: white;
  padding: var(--spacing-xl) var(--spacing-md);
  border-radius: 16px;
  margin: var(--spacing-xl) 0;
  text-align: center;
}

.cta-section h3 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
  color: white;
}

.cta-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.cta-options > div {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: var(--spacing-md);
  transition: all 0.3s ease;
}

.cta-options > div:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
}

.cta-options h4 {
  font-size: 1.3rem;
  margin-bottom: var(--spacing-sm);
  color: white;
}

.cta-options p {
  color: rgba(255, 255, 255, 0.9);
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.cta-options a {
  display: inline-block;
  background: white;
  color: var(--bio-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin-top: var(--spacing-sm);
  transition: all 0.3s ease;
}

.cta-options a:hover {
  background: var(--bio-dark);
  color: white;
  transform: scale(1.05);
}

/* ============================================
   FOOTER LINKS
   ============================================ */
.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
  padding: var(--spacing-lg) 0;
  border-top: 2px solid var(--bio-border);
}

.footer-links > div > strong {
  display: block;
  font-size: 1.1rem;
  color: var(--bio-dark);
  margin-bottom: var(--spacing-sm);
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  padding: 0.3rem 0;
}

.footer-links a {
  color: #64748b;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--bio-primary);
}

/* ============================================
   FOOTER BADGES
   ============================================ */
.footer-badges {
  text-align: center;
  padding: var(--spacing-md) 0;
  margin-top: var(--spacing-lg);
}

.footer-badges img {
  margin: 0.25rem;
  display: inline-block;
}

/* ============================================
   RESPONSIVE ADJUSTMENTS
   ============================================ */
@media (max-width: 768px) {
  :root {
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .cta-section h3 {
    font-size: 1.8rem;
  }

  .comparison-table {
    font-size: 0.85rem;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 0.5rem;
  }
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */
html {
  scroll-behavior: smooth;
}

/* ============================================
   ANIMATIONS
   ============================================ */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInUp 0.6s ease-out;
}

/* Add animation to sections as they scroll into view */
.stats-container,
.three-column-grid > div,
.ecosystem-grid > div,
.use-cases-grid > div {
  animation: fadeInUp 0.6s ease-out;
}
```

## Vue Component Suggestions

### Components to Create

#### 1. StatsCounter.vue
```vue
<template>
  <div class="stats-container">
    <div v-for="stat in stats" :key="stat.label" class="stat">
      <div class="stat-number" ref="numbers">{{ animatedValue(stat.value) }}</div>
      <div class="stat-label">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  stats: Array
})

// Add counter animation logic here
</script>
```

#### 2. ComparisonTable.vue
```vue
<template>
  <div class="comparison-table">
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Traditional HIMS</th>
          <th>Biograph + ERPNext</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in comparisonData" :key="row.feature">
          <td>{{ row.feature }}</td>
          <td v-html="row.traditional"></td>
          <td v-html="row.biograph"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const comparisonData = ref([
  // Your comparison data
])
</script>
```

#### 3. FeatureGrid.vue
```vue
<template>
  <div class="three-column-grid">
    <div v-for="feature in features" :key="feature.title">
      <h3>{{ feature.icon }} {{ feature.title }}</h3>
      <h4>{{ feature.subtitle }}</h4>
      <ul>
        <li v-for="item in feature.items" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  features: Array
})
</script>
```

#### 4. CTAButton.vue
```vue
<template>
  <a :href="href" :class="['cta-button', variant]" @click="handleClick">
    <slot></slot>
    <span class="arrow">→</span>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
  variant: {
    type: String,
    default: 'primary' // 'primary', 'secondary', 'outline'
  }
})

const handleClick = (e) => {
  // Add analytics tracking here if needed
}
</script>

<style scoped>
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button.primary {
  background: var(--bio-primary);
  color: white;
}

.cta-button.primary:hover {
  background: #059669;
  transform: translateY(-2px);
}

.arrow {
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow {
  transform: translateX(4px);
}
</style>
```

#### 5. TestimonialSlider.vue (if you have testimonials)
```vue
<template>
  <div class="testimonials">
    <div class="testimonial-slider">
      <blockquote v-for="(testimonial, index) in testimonials" 
                  :key="index"
                  v-show="currentSlide === index">
        <p>{{ testimonial.quote }}</p>
        <p><strong>{{ testimonial.author }}</strong><br>{{ testimonial.role }}</p>
      </blockquote>
    </div>
    <div class="slider-dots">
      <button v-for="(_, index) in testimonials" 
              :key="index"
              :class="{ active: currentSlide === index }"
              @click="currentSlide = index"></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  testimonials: Array
})

const currentSlide = ref(0)
let interval

onMounted(() => {
  interval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % props.testimonials.length
  }, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>
```

## Implementation Checklist

- [ ] Install and configure VitePress
- [ ] Create custom theme directory: `.vitepress/theme/`
- [ ] Add custom.css to theme
- [ ] Import custom CSS in theme/index.js
- [ ] Create Vue components in `.vitepress/components/`
- [ ] Register components globally or per page
- [ ] Add images to `public/` directory
  - [ ] Hero screenshot (`biograph-hero-screenshot.png`)
  - [ ] Logo (`biograph-logo.svg`)
  - [ ] Feature screenshots
  - [ ] Partner/customer logos
- [ ] Configure navigation in `.vitepress/config.js`
- [ ] Set up meta tags for SEO
- [ ] Add favicon
- [ ] Test responsive design on mobile
- [ ] Optimize images (WebP format recommended)
- [ ] Add loading states for animated components
- [ ] Configure analytics (Google Analytics, Plausible, etc.)
- [ ] Set up contact forms if needed
- [ ] Test all internal links
- [ ] Validate external links
- [ ] Run Lighthouse audit
- [ ] Deploy to production

## Performance Optimization Tips

1. **Lazy load images**: Use `loading="lazy"` attribute
2. **Optimize images**: Convert to WebP, use appropriate sizes
3. **Code splitting**: Let VitePress handle this automatically
4. **Minimize animations**: Use CSS transforms over position changes
5. **Cache static assets**: Configure your hosting for proper caching
6. **Reduce bundle size**: Only import what you need from libraries
7. **Use CDN**: For external assets like fonts, icons

## SEO Recommendations

Add to your VitePress config:

```javascript
head: [
  ['meta', { name: 'description', content: 'Open source hospital information system with full ERP integration' }],
  ['meta', { name: 'keywords', content: 'HIMS, hospital management, healthcare ERP, open source, FHIR, EMR, EHR' }],
  ['meta', { property: 'og:title', content: 'Biograph - Open Source Hospital Information System' }],
  ['meta', { property: 'og:description', content: 'Complete healthcare platform with clinical and business operations' }],
  ['meta', { property: 'og:image', content: '/og-image.png' }],
  ['meta', { property: 'og:url', content: 'https://tacten.co/digitalhealth' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
]
```

## Next Steps

1. Copy the markdown content to your VitePress page
2. Apply the CSS styles to your custom theme
3. Create the suggested Vue components
4. Add your own images and content
5. Customize colors and spacing to match your brand
6. Test thoroughly across devices
7. Deploy and monitor performance

This structure gives you a professional, conversion-optimized landing page that emphasizes Biograph's unique ecosystem advantage!
