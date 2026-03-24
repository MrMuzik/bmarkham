/**
 * MetricDisplay — Shows a single performance metric with value and label.
 * Used in case study cards and the case study detail page.
 *
 * @props value - The metric value (e.g., "118s → 0.9s")
 * @props label - The metric label (e.g., "LCP")
 */
<script setup lang="ts">
interface Props {
  value: string
  label: string
}

defineProps<Props>()
</script>

<template>
  <div class="text-center">
    <div class="font-mono text-sm text-site-text">{{ value }}</div>
    <div class="font-mono text-xs text-site-text-muted mt-1">{{ label }}</div>
  </div>
</template>
