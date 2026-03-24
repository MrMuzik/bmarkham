/**
 * SectionLabel — Monospace label with decorative extending line.
 * Matches the original "Selected Work ———————" pattern.
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
  <div class="section-label">{{ label }}</div>
</template>

<style scoped>
.section-label {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: #6A5848;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
}
</style>
