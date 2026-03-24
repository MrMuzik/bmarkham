/**
 * SpecializationsSection — Grid of specialization cards.
 * Responsive: single column on mobile, two columns on desktop.
 */
<script setup lang="ts">
import { specializations } from '@/data/specializations'
import SectionLabel from '@/components/ui/SectionLabel.vue'
import SpecCard from '@/components/ui/SpecCard.vue'
</script>

<template>
  <section class="py-16 md:py-20">
    <div class="max-w-5xl mx-auto px-6">
      <SectionLabel label="Specializations" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
