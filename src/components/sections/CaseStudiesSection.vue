/**
 * CaseStudiesSection — "Selected Work" section with stacked case cards.
 * Cards are separated by 1px borders in a single rounded container.
 */
<script setup lang="ts">
import { caseStudies } from '@/data/case-studies'
import SectionLabel from '@/components/ui/SectionLabel.vue'
import CaseCard from '@/components/ui/CaseCard.vue'
</script>

<template>
  <section class="section">
    <div class="max-w-[1000px] mx-auto px-8">
      <SectionLabel label="Selected Work" />
      <div class="cases-wrapper">
        <CaseCard
          v-for="(study, i) in caseStudies"
          :key="i"
          :platform="study.platform"
          :title="study.title"
          :context="study.context"
          :description="study.description"
          :href="study.href"
          :metrics="study.metrics"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 72px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.cases-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  overflow: hidden;
}
</style>
