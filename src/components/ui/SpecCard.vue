/**
 * SpecCard — Displays a specialization area with title and description.
 * Used in the specializations grid on the homepage.
 *
 * @props title - The specialization title
 * @props description - The specialization description
 */
<script setup lang="ts">
interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <div class="border border-site-border rounded-lg bg-site-card p-6">
    <div class="flex items-center gap-2 mb-3">
      <span class="block w-1.5 h-1.5 rounded-full bg-site-teal"></span>
      <h3 class="font-display text-base font-semibold text-site-text">{{ title }}</h3>
    </div>
    <p class="text-sm text-site-text-desc leading-relaxed">{{ description }}</p>
  </div>
</template>
