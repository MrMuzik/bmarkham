/**
 * SpecializationsSection — 2x2 grid of specialization cards.
 * Cards separated by 1px borders in a single rounded container.
 * Responsive: single column on mobile, two columns on desktop.
 */
<script setup lang="ts">
import { specializations } from '@/data/specializations'
import SectionLabel from '@/components/ui/SectionLabel.vue'
import SpecCard from '@/components/ui/SpecCard.vue'
</script>

<template>
  <section class="section">
    <div class="max-w-[1000px] mx-auto px-8">
      <SectionLabel label="Specializations" />
      <div class="spec-grid">
        <SpecCard
          v-for="(spec, i) in specializations"
          :key="i"
          :title="spec.title"
          :description="spec.description"
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

.spec-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  overflow: hidden;
}

@media (max-width: 768px) {
  .spec-grid {
    grid-template-columns: 1fr;
  }
}
</style>
