<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-bm-slate text-white/60 font-body text-[13px]">
    <div class="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <!-- Identity -->
      <div class="space-y-1">
        <p class="font-display font-medium text-white text-[14px]">Bryan Markham</p>
        <p>Margin Leak Audits for DTC Brands</p>
      </div>

      <!-- Links -->
      <div class="flex flex-col gap-2">
        <a href="mailto:Bryan.Markham@icloud.com" class="hover:text-white transition-colors">
          Bryan.Markham@icloud.com
        </a>
        <a
          href="https://www.linkedin.com/in/bryanmarkham/"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-1 hover:text-white transition-colors"
        >
          LinkedIn <ArrowUpRight :size="12" />
        </a>
        <a
          href="https://citedscore.com"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-1 hover:text-white transition-colors"
        >
          CitedScore: AI visibility audits <ArrowUpRight :size="12" />
        </a>
      </div>

      <!-- Legal + Copyright -->
      <div class="flex flex-col gap-2 text-white/40">
        <div class="flex gap-4">
          <RouterLink to="/privacy" class="hover:text-white/70 transition-colors">Privacy Policy</RouterLink>
          <RouterLink to="/terms" class="hover:text-white/70 transition-colors">Terms of Use</RouterLink>
        </div>
        <p>&copy; 2026 Bryan Markham</p>
      </div>
    </div>
  </footer>
</template>
