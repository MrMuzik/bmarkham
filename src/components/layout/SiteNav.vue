/**
 * SiteNav — Top navigation bar with logo and CTA button.
 * Uses useScrollPosition to apply backdrop blur on scroll.
 *
 * @composables useScrollPosition
 */
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useScrollPosition } from '@/composables/useScrollPosition'

const { isScrolled } = useScrollPosition()
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-site-dark/80 backdrop-blur-md border-b border-site-border' : ''"
  >
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <RouterLink to="/" class="font-display text-lg font-semibold text-site-text tracking-tight">
        Bryan<span class="text-site-orange">.</span>Markham
      </RouterLink>
      <a
        href="mailto:bryan.markham@icloud.com"
        class="font-mono text-xs px-4 py-2 border border-site-border-accent rounded text-site-orange hover:text-site-orange-hover hover:border-site-orange-hover transition-colors duration-200"
      >
        Get in Touch
      </a>
    </div>
  </nav>
</template>
