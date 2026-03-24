/**
 * CaseCard — Displays a case study card with platform, title, context, and metrics.
 * Optionally links to a detailed case study page.
 *
 * @props platform - The platform label (e.g., "HubSpot CMS")
 * @props title - The case study title
 * @props context - Context/subtitle text
 * @props href - Optional route path to case study detail
 * @props metrics - Array of { value, label } metric objects
 */
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Metric } from '@/types/metric'
import MetricDisplay from './MetricDisplay.vue'

interface Props {
  platform: string
  title: string
  context: string
  href?: string
  metrics: Metric[]
}

defineProps<Props>()
</script>

<template>
  <component
    :is="href ? RouterLink : 'div'"
    :to="href"
    class="block border border-site-border rounded-lg bg-site-card hover:bg-site-card-hover transition-colors duration-200 overflow-hidden"
    :class="{ 'hover:border-site-border-accent cursor-pointer': href }"
  >
    <div class="p-6">
      <div class="flex items-center gap-2 mb-3">
        <span class="block w-1.5 h-1.5 rounded-full bg-site-orange"></span>
        <span class="font-mono text-xs text-site-text-muted uppercase tracking-wider">{{ platform }}</span>
      </div>
      <h3 class="font-display text-lg font-semibold text-site-text mb-2 leading-snug">{{ title }}</h3>
      <p class="font-mono text-xs text-site-context">{{ context }}</p>
    </div>
    <div
      class="flex items-center justify-start gap-6 px-6 py-4 border-t border-site-border"
    >
      <MetricDisplay
        v-for="(metric, i) in metrics"
        :key="i"
        :value="metric.value"
        :label="metric.label"
      />
    </div>
    <div
      v-if="href"
      class="px-6 py-3 border-t border-site-border"
    >
      <span class="font-mono text-xs text-site-orange hover:text-site-orange-hover transition-colors">View Case Study →</span>
    </div>
  </component>
</template>
