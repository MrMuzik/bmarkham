/**
 * CaseStudiesSection — Grid of case study cards.
 * Responsive: single column on mobile, two columns on desktop.
 */
<script setup lang="ts">
import { caseStudies } from '@/data/case-studies'
import SectionLabel from '@/components/ui/SectionLabel.vue'
import CaseCard from '@/components/ui/CaseCard.vue'
</script>

<template>
  <section class="py-16 md:py-20">
    <div class="max-w-5xl mx-auto px-6">
      <SectionLabel label="Case Studies" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CaseCard
          v-for="(study, i) in caseStudies"
          :key="i"
          :platform="study.platform"
          :title="study.title"
          :context="study.context"
          :href="study.href"
          :metrics="study.metrics"
        />
      </div>
    </div>
  </section>
</template>
