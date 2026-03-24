/**
 * CaseCard — Reusable case study card with two-column layout.
 * Left: CaseCardBody (platform, title, context, description, optional link)
 * Right: CaseCardMetrics (vertically stacked metric values)
 *
 * @props platform - Platform label
 * @props title - Case study title
 * @props context - Context/subtitle
 * @props description - Full description
 * @props href - Optional route path to detail page
 * @props metrics - Array of { value, label } metric objects
 */
<script setup lang="ts">
import type { Metric } from '@/types/metric'
import CaseCardBody from './CaseCardBody.vue'
import CaseCardMetrics from './CaseCardMetrics.vue'

interface Props {
  platform: string
  title: string
  context: string
  description: string
  href?: string
  metrics: Metric[]
}

defineProps<Props>()
</script>

<template>
  <div class="case-card">
    <CaseCardBody
      :platform="platform"
      :title="title"
      :context="context"
      :description="description"
      :href="href"
    />
    <CaseCardMetrics :metrics="metrics" />
  </div>
</template>

<style scoped>
.case-card {
  background: #1A1000;
  padding: 36px 40px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: start;
  transition: background 0.2s;
}

.case-card:hover {
  background: #0F0800;
}

@media (max-width: 768px) {
  .case-card {
    grid-template-columns: 1fr;
    padding: 28px 24px;
  }
}
</style>
