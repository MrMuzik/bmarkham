/**
 * StatsBar — Horizontal stats bar displaying key metrics.
 * Uses display font for numbers with orange accent suffixes.
 * Responsive: 2 columns on mobile, 4 columns on desktop with vertical dividers.
 */
<script setup lang="ts">
const stats = [
  { number: '18', suffix: '+', label: 'Years Front-End\nEngineering' },
  { number: '118', suffix: 's', label: '→ Under 1s\nLoad Time Recovery' },
  { number: '40', suffix: '%', label: 'Avg Load Time\nReduction' },
  { number: '$2K', suffix: '', label: 'Monthly Hosting\nCosts Recovered' },
]
</script>

<template>
  <div class="stats-bar">
    <div class="max-w-[1000px] mx-auto px-8">
      <div class="stats-inner">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="stat"
          :class="{ 'border-r-0': i === stats.length - 1 }"
        >
          <div class="stat-number">
            {{ stat.number }}<span v-if="stat.suffix" class="text-site-orange">{{ stat.suffix }}</span>
          </div>
          <div class="stat-label" v-html="stat.label.replace(/\n/g, '<br />')" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-bar {
  padding: 32px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.stats-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.stat {
  padding: 0 32px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

.stat:last-child {
  border-right: none;
}

.stat-number {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 28px;
  font-weight: 800;
  color: #F5EDE0;
  line-height: 1;
  margin-bottom: 6px;
}

.stat-label {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: #6A5848;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .stats-inner {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .stat {
    border-right: none;
    padding: 0;
  }
}
</style>
