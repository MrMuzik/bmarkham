/**
 * ContactSection — Contact block with availability message and contact links.
 * Responsive: single column on mobile with reduced padding, row on desktop.
 */
<script setup lang="ts">
</script>

<template>
  <section class="py-16 md:py-20">
    <div class="max-w-5xl mx-auto px-6">
      <div class="border border-site-border rounded-lg bg-site-card p-8 md:p-12">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 class="font-display text-xl font-semibold text-site-text mb-2">
              Available for agency subcontracting and direct engagements.
            </h2>
            <p class="text-sm text-site-text-desc">
              Let's talk about your project.
            </p>
          </div>
          <div class="flex flex-col gap-3">
            <a
              href="mailto:bryan.markham@icloud.com"
              class="font-mono text-xs text-site-orange hover:text-site-orange-hover transition-colors"
            >
              bryan.markham@icloud.com
            </a>
            <a
              href="https://www.linkedin.com/in/bryanmarkham/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-xs text-site-text-muted hover:text-site-text transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="tel:+19804299989"
              class="font-mono text-xs text-site-text-muted hover:text-site-text transition-colors"
            >
              (980) 429-9989
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
