<script setup>
defineProps({
  title: {
    type: String,
    default: 'BioGraph vs. Traditional HIMS'
  },
  headers: {
    type: Array,
    default: () => ['Feature', 'Traditional HIMS', 'BioGraph + ERPNext']
  },
  rows: {
    type: Array,
    default: () => []
  },
  highlightColumn: {
    type: Number,
    default: 2
  }
})
</script>

<template>
  <section class="comparison-section">
    <h2 v-if="title" class="comparison-title">{{ title }}</h2>
    
    <div class="table-container">
      <table class="comparison-table">
        <thead>
          <tr>
            <th 
              v-for="(header, index) in headers" 
              :key="index"
              :class="{ 'highlight-header': index === highlightColumn }"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
            <td 
              v-for="(cell, cellIndex) in row" 
              :key="cellIndex"
              :class="{ 
                'feature-cell': cellIndex === 0,
                'highlight-cell': cellIndex === highlightColumn 
              }"
            >
              <span v-if="cell === true" class="status-icon positive">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
              </span>
              <span v-else-if="cell === false" class="status-icon negative">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </span>
              <span v-else-if="cell === 'partial'" class="status-icon partial">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </span>
              <span v-else v-html="cell"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.comparison-section {
  padding: 3rem 0;
  max-width: 1100px;
  margin: 0 auto;
}

.comparison-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--bio-dark);
  margin-bottom: 2rem;
  line-height: 1.3;
}

.table-container {
  overflow-x: auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--bio-border);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--vp-c-bg);
  font-size: 0.95rem;
}

.comparison-table th {
  padding: 1.25rem 1rem;
  text-align: left;
  font-weight: 600;
  background: var(--bio-light);
  color: var(--bio-dark);
  border-bottom: 2px solid var(--bio-border);
  white-space: nowrap;
}

.comparison-table th.highlight-header {
  background: linear-gradient(135deg, var(--bio-primary), var(--bio-secondary));
  color: white;
}

.comparison-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--bio-border);
  vertical-align: middle;
  color: var(--bio-text-muted);
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

.comparison-table tr:hover td {
  background: var(--bio-light);
}

.feature-cell {
  font-weight: 600;
  color: var(--bio-dark) !important;
  min-width: 180px;
}

.highlight-cell {
  background: rgba(16, 185, 129, 0.05);
  color: var(--bio-secondary) !important;
  font-weight: 500;
}

.comparison-table tr:hover .highlight-cell {
  background: rgba(16, 185, 129, 0.1);
}

.status-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}

.status-icon svg {
  width: 1rem;
  height: 1rem;
}

.status-icon.positive {
  background: rgba(16, 185, 129, 0.15);
  color: var(--bio-secondary);
}

.status-icon.negative {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}

.status-icon.partial {
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
}

@media (max-width: 768px) {
  .comparison-section {
    padding: 2rem 1rem;
  }
  
  .comparison-title {
    font-size: 1.5rem;
  }
  
  .comparison-table {
    font-size: 0.85rem;
  }
  
  .comparison-table th,
  .comparison-table td {
    padding: 0.75rem 0.5rem;
  }
  
  .feature-cell {
    min-width: 120px;
  }
}
</style>
