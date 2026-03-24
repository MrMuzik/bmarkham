/**
 * CaseCardMetrics — Right side of a case card: vertically stacked metrics.
 *
 * @props metrics - Array of { value, label } metric objects
 */
<script setup lang="ts">
import type { Metric } from '@/types/metric'
import MetricDisplay from './MetricDisplay.vue'

interface Props {
  metrics: Metric[]
}

defineProps<Props>()
</script>

<template>
  <div class="case-metrics">
    <MetricDisplay
      v-for="(metric, i) in metrics"
      :key="i"
      :value="metric.value"
      :label="metric.label"
    />
  </div>
</template>

<style scoped>
.case-metrics {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 180px;
  align-items: flex-end;
}

@media (max-width: 768px) {
  .case-metrics {
    flex-direction: row;
    align-items: flex-start;
    min-width: 0;
  }

  .case-metrics :deep(.metric) {
    text-align: left;
  }
}
</style>
