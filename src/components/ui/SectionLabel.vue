/**
 * SectionLabel — Displays a monospace label with an orange dot indicator.
 * Used as a section heading marker throughout the homepage.
 *
 * @props label - The text to display
 */
<script setup lang="ts">
interface Props {
  label: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-center gap-2 mb-6">
    <span class="block w-1.5 h-1.5 rounded-full bg-site-orange"></span>
    <span class="font-mono text-xs tracking-widest uppercase text-site-text-muted">{{ label }}</span>
  </div>
</template>
