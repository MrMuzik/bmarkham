/**
 * HubspotCaseStudyView — Detailed case study page for the HubSpot performance recovery project.
 * Standalone card-style page with header band, metrics, problem/solution narrative, and Lighthouse scores.
 * Sets page-level SEO metadata via useHead.
 *
 * @composables useHead
 */
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@/composables/useHead'

useHead({
  title: 'Case Study: HubSpot Performance Recovery — Bryan Markham',
  description:
    'How I reduced LCP from 118s to 0.9s for a Fortune 500-backed racing fuel brand on HubSpot CMS.',
  ogTitle: 'Case Study: HubSpot Performance Recovery',
  ogDescription:
    'How I reduced LCP from 118s to 0.9s for a Fortune 500-backed racing fuel brand on HubSpot CMS.',
  ogImage: '/images/og-racing-fuel.png',
  ogUrl: 'https://bryanmarkham.com/case-studies/hubspot-performance-recovery',
})

const metrics = [
  { value: '118s → 0.9s', label: 'LCP' },
  { value: '0.7s', label: 'FCP' },
  { value: '44ms', label: 'INP' },
  { value: '0.05', label: 'CLS' },
  { value: '100', label: 'SEO' },
]

const lighthouseScores = [
  { value: '91', label: 'Performance' },
  { value: '92', label: 'Accessibility' },
  { value: '100', label: 'Best Practices' },
  { value: '100', label: 'SEO' },
]

const whatIDid = [
  'Audited the full HubSpot CMS template stack, identifying render-blocking HubDB calls, unoptimized image pipelines, and excessive JavaScript payloads.',
  'Rebuilt the primary page templates with deferred module loading, streamlined HubL logic, and modern image formats (WebP/AVIF with fallbacks).',
  'Replaced synchronous HubDB queries with asynchronous patterns and implemented server-side caching strategies within HubSpot\'s constraints.',
  'Restructured the CSS architecture to eliminate unused stylesheets and reduce critical-path render time.',
  'Validated all changes against Core Web Vitals using both lab (Lighthouse) and field (CrUX) data to ensure real-user performance improvement.',
]
</script>

<template>
  <div class="min-h-screen bg-site-dark py-12 px-6 md:px-6">
    <div class="max-w-3xl mx-auto">
      <!-- Page label -->
      <div class="flex items-center gap-2 mb-6">
        <span class="block w-1.5 h-1.5 rounded-full bg-site-orange"></span>
        <span class="font-mono text-xs tracking-widest uppercase text-site-text-muted">Case Study · HubSpot CMS</span>
      </div>

      <!-- Main card -->
      <div class="border border-site-border rounded-lg bg-site-card overflow-hidden">
        <!-- Header band -->
        <div class="case-header-band p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="block w-2 h-2 rounded-full bg-site-orange"></span>
              <span class="font-mono text-xs text-site-text-muted uppercase tracking-wider">HubSpot CMS Performance Recovery</span>
            </div>
            <h1 class="font-display text-xl md:text-2xl font-bold text-site-text leading-snug">
              A Fortune 500-Backed Racing Fuel Brand / HubSpot Architecture Rebuild
            </h1>
            <p class="font-mono text-xs text-site-context mt-2">HubSpot CMS · National Motorsport · 2024</p>
          </div>
        </div>

        <!-- CWV Badge -->
        <div class="px-6 md:px-8 py-4 border-t border-site-border">
          <div class="flex items-center gap-2">
            <span class="block w-2 h-2 rounded-full bg-site-teal"></span>
            <span class="font-mono text-xs text-site-teal">Core Web Vitals Assessment: Passed</span>
          </div>
        </div>

        <!-- Metrics row -->
        <div class="grid grid-cols-3 md:grid-cols-5 border-t border-site-border">
          <div
            v-for="(metric, i) in metrics"
            :key="i"
            class="py-5 text-center"
            :class="[
              i < metrics.length - 1 ? 'border-r border-site-border' : '',
              i >= 3 ? 'max-md:border-t max-md:border-site-border' : '',
              i === 3 ? 'max-md:border-r-0 md:border-r md:border-site-border' : '',
            ]"
          >
            <div class="font-mono text-sm font-medium text-site-text">{{ metric.value }}</div>
            <div class="font-mono text-xs text-site-text-muted mt-1">{{ metric.label }}</div>
          </div>
        </div>

        <!-- Body content -->
        <div class="p-6 md:p-8 border-t border-site-border">
          <!-- The Problem -->
          <div class="mb-8">
            <h2 class="font-display text-lg font-semibold text-site-text mb-4">The Problem</h2>
            <p class="text-sm text-site-text-desc leading-relaxed">
              The site suffered from a Largest Contentful Paint (LCP) of over 118 seconds — rendering it
              essentially unusable from a performance standpoint. Core Web Vitals were failing across the
              board, SEO rankings were degrading, and the development team had no clear path to recovery
              within HubSpot's CMS constraints.
            </p>
          </div>

          <!-- What I Did -->
          <div class="mb-8">
            <h2 class="font-display text-lg font-semibold text-site-text mb-4">What I Did</h2>
            <ul class="space-y-3">
              <li
                v-for="(item, i) in whatIDid"
                :key="i"
                class="flex items-start gap-3"
              >
                <span class="block w-1 h-1 rounded-full bg-site-orange mt-2 flex-shrink-0"></span>
                <span class="text-sm text-site-text-desc leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Lighthouse Scores -->
          <div class="mb-8">
            <h2 class="font-display text-lg font-semibold text-site-text mb-4">Lighthouse Scores</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                v-for="(score, i) in lighthouseScores"
                :key="i"
                class="border border-site-border rounded-lg p-4 text-center bg-site-dark"
              >
                <div class="font-mono text-2xl font-medium text-site-text">{{ score.value }}</div>
                <div class="font-mono text-xs text-site-text-muted mt-1">{{ score.label }}</div>
              </div>
            </div>
          </div>

          <!-- CWV Real User Data -->
          <div class="mb-8">
            <div class="border border-site-border-green rounded-lg p-5 bg-site-dark">
              <div class="flex items-center gap-2 mb-3">
                <span class="block w-1.5 h-1.5 rounded-full bg-site-teal"></span>
                <span class="font-mono text-xs text-site-teal uppercase tracking-wider">Core Web Vitals — Real User Data</span>
              </div>
              <p class="text-sm text-site-text-desc leading-relaxed">
                All Core Web Vitals metrics are passing based on real-user field data collected via the
                Chrome User Experience Report (CrUX). This confirms the performance improvements are
                sustained under actual traffic conditions, not just in lab environments.
              </p>
            </div>
          </div>

          <!-- Verified note -->
          <p class="font-mono text-xs text-site-text-dim italic">
            All metrics verified using Google Lighthouse, PageSpeed Insights, and Chrome UX Report (CrUX) data.
          </p>
        </div>

        <!-- Card footer -->
        <div class="px-6 md:px-8 py-4 border-t border-site-border flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <span class="font-mono text-xs text-site-text-dim">All conclusions based on observable, public data</span>
        </div>
      </div>

      <!-- Back link -->
      <div class="mt-8">
        <RouterLink
          to="/"
          class="font-mono text-xs text-site-text-muted hover:text-site-text transition-colors"
        >
          ← Back to bryanmarkham.com
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<!-- Header gradient background — requires CSS gradient that can't be cleanly expressed as a Tailwind utility -->
<style scoped>
.case-header-band {
  background: linear-gradient(135deg, #1A0C04, #2C1A0E);
}
</style>
