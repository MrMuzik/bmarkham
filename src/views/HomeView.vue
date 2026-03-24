/**
 * HomeView — Main homepage view composing all sections.
 * Sets page-level SEO metadata via useHead.
 *
 * @composables useHead
 */
<script setup lang="ts">
import { useHead } from '@/composables/useHead'
import HeroSection from '@/components/sections/HeroSection.vue'
import StatsBar from '@/components/sections/StatsBar.vue'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection.vue'
import SpecializationsSection from '@/components/sections/SpecializationsSection.vue'
import CredentialsSection from '@/components/sections/CredentialsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

useHead({
  title: 'Bryan Markham — Senior Front-End Engineer',
  description:
    '18 years of front-end engineering focused on performance recovery, funnel optimization, and CMS architecture.',
  ogTitle: 'Bryan Markham — Senior Front-End Engineer',
  ogDescription:
    '18 years of front-end engineering focused on performance recovery, funnel optimization, and CMS architecture.',
  ogImage: '/images/og-home.png',
  ogUrl: 'https://bryanmarkham.com',
})
</script>

<template>
  <div>
    <HeroSection />
    <StatsBar />
    <CaseStudiesSection />
    <SpecializationsSection />
    <CredentialsSection />
    <ContactSection />
  </div>
</template>
