/**
 * MetricDisplay — Shows a single performance metric with value and label.
 * Used inside CaseCard for right-aligned stats.
 *
 * @props value - The metric value (e.g., "118s → 0.9s")
 * @props label - The metric label (e.g., "LCP (was → now)")
 */
<script setup lang="ts">
interface Props {
  value: string
  label: string
}

defineProps<Props>()
</script>

<template>
  <div class="metric">
    <div class="metric-value">{{ value }}</div>
    <div class="metric-label">{{ label }}</div>
  </div>
</template>

<style scoped>
.metric {
  text-align: right;
}

.metric-value {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: #34D399;
  line-height: 1;
  margin-bottom: 3px;
}

.metric-label {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: #9A7858;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
</style>
