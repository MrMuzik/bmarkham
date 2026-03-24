/**
 * StatsBar — Horizontal stats bar displaying key metrics.
 * Responsive: 2 columns on mobile, 4 columns on desktop with vertical dividers.
 */
<script setup lang="ts">
import { stats } from '@/data/stats'
</script>

<template>
  <section class="border-y border-site-border">
    <div class="max-w-5xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="py-6 text-center"
          :class="i < stats.length - 1 ? 'md:border-r md:border-site-border' : ''"
        >
          <div class="font-mono text-sm font-medium text-site-text">{{ stat.value }}</div>
          <div class="font-mono text-xs text-site-text-muted mt-1">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
