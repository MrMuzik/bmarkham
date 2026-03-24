/**
 * CaseCardBody — Left side of a case card: platform, title, context, description, optional link.
 *
 * @props platform - Platform label (e.g., "HubSpot CMS")
 * @props title - Case study title
 * @props context - Context/subtitle text
 * @props description - Full description paragraph
 * @props href - Optional route path to case study detail
 */
<script setup lang="ts">

interface Props {
  platform: string
  title: string
  context: string
  description: string
  href?: string
}

defineProps<Props>()
</script>

<template>
  <div class="case-body">
    <div class="case-platform">{{ platform }}</div>
    <div class="case-title">{{ title }}</div>
    <div class="case-context">{{ context }}</div>
    <p class="case-desc">{{ description }}</p>
    <a
      v-if="href"
      :href="href"
      class="case-study-link"
    >
      View case study →
    </a>
  </div>
</template>

<style scoped>
.case-platform {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #FF6A00;
  margin-bottom: 10px;
}

.case-title {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #F5EDE0;
  margin-bottom: 10px;
  line-height: 1.2;
}

.case-context {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: #9A7858;
  margin-bottom: 14px;
  letter-spacing: 0.04em;
}

.case-desc {
  font-size: 15px;
  color: #7A6858;
  line-height: 1.65;
  font-weight: 300;
  max-width: 560px;
}

.case-study-link {
  display: inline-block;
  margin-top: 14px;
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  color: #FF6A00;
  text-decoration: none;
  transition: opacity 0.2s;
}

.case-study-link:hover {
  opacity: 0.75;
}
</style>
