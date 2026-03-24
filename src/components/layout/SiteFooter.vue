/**
 * SiteFooter — Site footer with copyright, LinkedIn link, and case study link.
 * Responsive: column layout on mobile, row on desktop.
 */
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="border-t border-site-border">
    <div class="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="font-mono text-xs text-site-text-dim">&copy; 2026 Bryan Markham</p>
      <div class="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/bryanmarkham/"
          target="_blank"
          rel="noopener noreferrer"
          class="font-mono text-xs text-site-text-muted hover:text-site-text transition-colors"
        >
          LinkedIn ↗
        </a>
        <RouterLink
          to="/case-studies/hubspot-performance-recovery"
          class="font-mono text-xs text-site-text-muted hover:text-site-text transition-colors"
        >
          Case Study
        </RouterLink>
      </div>
    </div>
  </footer>
</template>
