<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import { useHead } from '@/composables/useHead'

onMounted(() => {
  useHead({
    title: 'About — Bryan Markham',
    description: 'Eighteen years of decoding websites at the code level. Front-end engineer turned margin leak diagnostician for DTC brands.',
    ogTitle: 'About — Bryan Markham',
    ogDescription: 'Eighteen years of decoding websites at the code level. Front-end engineer turned margin leak diagnostician for DTC brands.',
    ogImage: '/images/og-home.png',
    ogUrl: 'https://bryanmarkham.com/about',
  })
})
</script>

<template>
  <!-- Dark hero matching site conventions -->
  <section class="bg-bm-slate text-white pt-40 pb-24 px-6">
    <div class="max-w-4xl mx-auto">
      <p class="eyebrow text-bm-seafoam mb-6">ABOUT</p>
      <h1 class="font-display font-medium text-[clamp(2rem,5vw,3rem)] leading-[1.1] tracking-tight mb-10 max-w-2xl">
        Eighteen years of decoding websites at the code level.
      </h1>
    </div>
  </section>

  <!-- Body -->
  <section class="bg-bm-cream py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="grid md:grid-cols-[1fr_2fr] gap-14">
        <!-- Credentials sidebar -->
        <div>
          <p class="eyebrow text-bm-stone mb-5">CREDENTIALS</p>
          <ul class="space-y-2 text-[13px] leading-[1.7] text-bm-slate/70">
            <li>18 years front-end engineering</li>
            <li>React, Vue, TypeScript</li>
<li>Shopify platform expertise</li>
            <li>Shopify Partner since 2011</li>
            <li>HubSpot Certified Developer</li>
            <li>Meta Certified Media Buying Professional</li>
            <li>Google Digital Marketing certification</li>
            <li>Bachelors of Science - Computer Science</li>
          </ul>
          <div class="mt-8">
            <p class="eyebrow text-bm-stone mb-5">COMPANIES</p>
            <ul class="space-y-2 text-[13px] leading-[1.7] text-bm-slate/70">
              <li>Zappos</li>
              <li>Experian</li>
              <li>Red Ventures</li>
              <li>Electric</li>
            </ul>
          </div>
          <blockquote class="mt-8 teal-bar">
            <p class="text-[13px] leading-[1.7] text-bm-slate/60 italic">
              "Over hundreds of hours I built and trained a proprietary diagnostic engine on exactly one thing: my own methodology."
            </p>
          </blockquote>
        </div>

        <!-- Main bio -->
        <div class="space-y-5 text-[16px] leading-[1.7] text-bm-slate/80">
          <p>
            I'm Bryan Markham. I've spent 18 years as a front-end engineer building web platforms where technical performance had a direct line to revenue: landing pages, campaign systems, and storefronts for brands like Zappos, Experian, and Red Ventures, and funded startups like Electric.
          </p>
          <p>
            A stretch working as a conversion specialist inside high-volume environments is where the two halves fused: the engineering that makes pages fast and functional, and the buyer psychology that makes them convert. Most consultants have one half. The diagnosis requires both.
          </p>
          <p>
            Today I do one thing: find where DTC stores leak margin, and hand founders the fix order. I built a proprietary diagnostic engine trained on exactly that methodology. It runs the breadth of every audit at machine scale, and I run the judgment: every finding verified, every priority set, every report signed off by hand.
          </p>
          <p>
            There are two ways to work with me. The Margin Leak Audit finds where your store is bleeding revenue, every finding checked and prioritized by hand, so your marketing spend gets its best shot at converting the traffic it's already earning.
          </p>
          <p>
            CitedScore runs that same methodology against AI visibility, because how people find businesses has changed, and being recommended by ChatGPT, Google AI Overviews, Gemini, and Perplexity now matters as much as ranking in search. The most expensive problem in e-commerce is the one nobody's been looking for in the right place.
          </p>

          <div class="pt-4">
            <RouterLink to="/margin-leak-audit#request" class="btn-teal px-6 py-3 text-[15px]">
              Request a Leak Report
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
