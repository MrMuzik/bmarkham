/**
 * SiteNav — Top navigation bar with logo and CTA button.
 * Scrolls with the page (not fixed). Border bottom separator.
 */
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="py-7 border-b border-site-border relative z-10">
    <div class="max-w-[1000px] mx-auto px-8 flex items-center justify-between">
      <RouterLink
        to="/"
        class="font-mono text-[13px] uppercase tracking-[0.08em] text-site-text-muted"
      >
        Bryan<span class="text-site-orange">.</span>Markham
      </RouterLink>
      <a
        href="mailto:bryan.markham@icloud.com"
        class="font-mono text-xs text-site-text-secondary tracking-[0.06em] px-4 py-2 border border-site-border rounded transition-all duration-200 hover:border-site-orange hover:text-site-orange"
      >
        Get in Touch
      </a>
    </div>
  </nav>
</template>
