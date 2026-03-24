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
  <div class="spec-card">
    <div class="spec-title">{{ title }}</div>
    <p class="spec-desc">{{ description }}</p>
  </div>
</template>

<style scoped>
.spec-card {
  background: #0F0800;
  padding: 28px 32px;
}

.spec-title {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #F5EDE0;
  margin-bottom: 8px;
}

.spec-desc {
  font-size: 14px;
  color: #7A6858;
  line-height: 1.6;
  font-weight: 300;
}
</style>
