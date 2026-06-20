<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronUp } from '@lucide/vue'
import { useHead } from '@/composables/useHead'

// FAQ accordion
const openFaq = ref<number | null>(null)
function toggleFaq(i: number) {
  openFaq.value = openFaq.value === i ? null : i
}

// JSON-LD injection
onMounted(() => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bryan Markham',
    url: 'https://bryanmarkham.com',
    sameAs: [
      'https://www.linkedin.com/in/bryanmarkham/',
      'https://citedscore.com',
    ],
    jobTitle: 'Margin Leak Diagnostician',
    description: '18-year front-end engineer who diagnoses where DTC stores leak margin.',
  }
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Margin Leak Audit',
    provider: { '@type': 'Person', name: 'Bryan Markham' },
    description: 'A complete structural diagnostic of your DTC store: every margin leak documented with evidence, priced by impact, and ranked into a fix order.',
    offers: {
      '@type': 'Offer',
      price: '2997',
      priceCurrency: 'USD',
    },
  }
  for (const schema of [faqSchema, personSchema, serviceSchema]) {
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.textContent = JSON.stringify(schema)
    document.head.appendChild(el)
  }

  useHead({
    title: 'Bryan Markham — Margin Leak Audits for DTC Brands',
    description: 'Revenue up, profit flat? Your store is leaking margin at specific, findable points. I find them, rank them by dollar impact, and hand you the fix order. 18 years of engineering behind every diagnosis.',
    ogTitle: 'Bryan Markham — Margin Leak Audits for DTC Brands',
    ogDescription: 'Revenue up, profit flat? Your store is leaking margin at specific, findable points. I find them, rank them by dollar impact, and hand you the fix order.',
    ogImage: '/images/og-home.png',
    ogUrl: 'https://bryanmarkham.com',
  })
})

const faqs = [
  {
    q: 'What exactly do I receive?',
    a: 'A designed PDF report with every leak documented (evidence, action path, priority, effort estimate), a one-page prioritized action summary, and a recorded video walkthrough of the findings. Most reports run 10 to 15 pages and document 6 to 10 leaks.',
  },
  {
    q: 'Do you need access to my store admin or analytics?',
    a: 'The diagnostic runs on publicly observable signals: live site behavior, network activity, performance timing, and conversion-path structure. That\'s deliberate. It means zero setup on your side and findings any stakeholder can verify themselves.',
  },
  {
    q: 'Will you implement the fixes?',
    a: 'The report gives your team everything needed to execute: specific instructions, the order of operations, and effort estimates per fix. Diagnosis and implementation are separate disciplines, and keeping them separate is why the diagnosis stays honest. For clients who want strategic oversight during implementation, ask about advisory options on the walkthrough call.',
  },
  {
    q: 'How fast is the turnaround?',
    a: 'Seven days from confirmation to delivered report.',
  },
  {
    q: 'Why is it $2,997?',
    a: 'Because the price reflects diagnostic precision. One found leak typically returns the fee many times over: a single fix from a recent audit addressed a conversion gap documented at up to 370% on high-price products. And the guarantee removes the risk: three ranked, actionable leaks minimum, or a full refund.',
  },
  {
    q: 'Is the report AI-generated?',
    a: 'The report is engine-assisted and engineer-verified. I built a proprietary diagnostic system and trained it on my methodology over hundreds of hours. It gives every audit machine-scale coverage no manual review can match. Every finding then goes through me. I verify the evidence, test the reasoning, adjust the priorities, and write the judgment calls myself.',
  },
]

const sampleLeaks = [
  { num: '01', finding: 'Zero trust signals in the purchase decision zone on high-ticket PDPs', priority: 'Critical', impact: 'Up to 370% conversion gap on high-price SKUs' },
  { num: '02', finding: '8.3-second page load taxing every paid click', priority: 'Critical', impact: '2.5× conversion penalty vs. fast-loading stores' },
  { num: '03', finding: 'Fraud-detection script failing on every page load', priority: 'Critical', impact: 'Active chargeback exposure on high-ticket orders' },
  { num: '04', finding: 'Hero messaging leading with an inventory announcement instead of the store\'s strongest claim', priority: 'High', impact: 'First-visit conversion signal lost above the fold' },
  { num: '05', finding: 'Educational content directing new buyers to competitors', priority: 'High', impact: 'Awareness built, purchase intent lost' },
]
</script>

<template>
  <!-- ── 00 / HERO ───────────────────────────────── -->
  <section class="bg-bm-slate text-white pt-40 pb-24 px-6">
    <div class="max-w-4xl mx-auto">
      <p class="eyebrow text-bm-seafoam mb-6">MARGIN LEAK DIAGNOSTICS</p>
      <h1 class="font-display font-medium text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-tight mb-6 max-w-2xl">
        Revenue looks fine.<br>Profit tells a different story.
      </h1>
      <p class="font-body text-white/70 text-[17px] leading-[1.7] max-w-xl mb-10">
        I'm Bryan Markham. I run diagnostics on DTC stores and find where the money goes: the broken script, the trust gap on the product page, the ad traffic landing on a page that loads too slow to convert. Then I rank every leak by dollar impact and hand you the fix order.
      </p>
      <div class="flex flex-wrap gap-3">
        <RouterLink to="/margin-leak-audit#request" class="btn-teal px-6 py-3 text-[15px]">
          Request a Leak Report
        </RouterLink>
        <a
          href="#sample"
          class="btn-ghost px-6 py-3 text-[15px] inline-flex items-center gap-2"
        >
          See a Sample Leak Stack
          <ChevronDown :size="15" />
        </a>
      </div>

      <!-- Proof strip -->
      <div class="mt-14 pt-8 border-t border-white/10">
        <p class="eyebrow text-white/25 mb-5">18 years front-end engineering</p>
        <div class="flex flex-wrap items-center gap-x-8 gap-y-4">
          <span class="font-body text-[11px] text-white/25 uppercase tracking-[0.1em] shrink-0">Trusted by</span>
          <img :src="'/images/zappos.svg'" alt="Zappos" class="h-6 w-auto opacity-35 [filter:brightness(0)_invert(1)]" />
          <img :src="'/images/logo-experian.svg'" alt="Experian" class="h-6 w-auto opacity-35 [filter:brightness(0)_invert(1)]" />
          <img :src="'/images/RV-Primary-Glyph-reg.webp'" alt="Red Ventures" class="h-6 w-auto opacity-35 [filter:brightness(0)_invert(1)]" />
          <img :src="'/images/logo-electric.svg'" alt="Electric" class="h-6 w-auto opacity-35 [filter:brightness(0)_invert(1)]" />
        </div>
      </div>
    </div>
  </section>

  <!-- ── 01 / THE PATTERN ───────────────────────── -->
  <section class="bg-bm-cream py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="font-display font-medium text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight text-bm-slate mb-8 max-w-xl">
        You already know something is off. You just can't see where.
      </h2>
      <div class="prose-meridian max-w-2xl space-y-5">
        <p>
          The pattern shows up the same way every time. Revenue holds steady or climbs. Ad spend climbs with it. And the margin shrinks.
        </p>
        <p>
          You've checked the ROAS. It looks acceptable. You've watched the dashboards. They show traffic, sessions, sales. And despite apparent revenue, cash flow is tight, and the root of the problem remains elusive.
        </p>
        <p>
          Here's what the dashboards never show you: the dollar cost of an 8-second page load on paid traffic. The conversion penalty of a $6,000 product page with zero reviews on it. The fraud plugin script that's been silently failing for weeks. The blog post pulling in high-intent buyers and sending them to a dead end.
        </p>
        <p>
          These are structural leaks. Each one has a location, a dollar impact, and a fix. Finding them is a diagnostic skill, and it's the only one I practice.
        </p>
      </div>
    </div>
  </section>

  <!-- ── 02 / WHAT I DO ─────────────────────────── -->
  <section class="bg-bm-dusk text-white py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="font-display font-medium text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight mb-8 max-w-xl">
        I diagnose. I prioritize. You get the fix order.
      </h2>
      <div class="max-w-2xl space-y-5 text-[16px] leading-[1.7] text-white/75">
        <p>
          Most consultants sell hours. Agencies sell retainers. Both get paid whether the problem gets found or stays hidden.
        </p>
        <p>
          I sell the diagnosis itself: a complete structural review of your store that documents every margin leak with evidence, prices the impact, and ranks the fixes in the exact order they should happen. You leave with clarity instead of a proposal for more work.
        </p>
        <p>
          The result: your leaked margin, surfaced by the most robust diagnostic tool built for SMBs. Evidence for every finding. An action path for every fix. And the order to tackle them in.
        </p>
        <p>
          <strong class="text-white font-medium">What I leave to you and your team:</strong> the implementation. Your developer, your agency, or your own hands can execute every fix in the report, because each one comes with specific instructions.
        </p>
      </div>

      <!-- Callout: The instrument -->
      <div class="mt-10 teal-bar max-w-2xl">
        <p class="eyebrow text-bm-seafoam mb-3">THE INSTRUMENT BEHIND THE DIAGNOSIS</p>
        <p class="text-[15px] leading-[1.7] text-white/70">
          Every audit runs on a proprietary diagnostic engine I spent hundreds of hours training on exactly one thing: my own methodology. It examines your store the way I do, at machine scale. Then I verify every finding by hand, price the impact, and make the calls a machine can't make: what to fix first, and why. The engine gives the audit its breadth. My 18 years as an engineer gives it it's authority.
        </p>
      </div>
    </div>
  </section>

  <!-- ── 03 / THE PRODUCT ───────────────────────── -->
  <section class="bg-bm-cream py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="card-light max-w-2xl">
        <p class="eyebrow text-bm-teal mb-4">THE FLAGSHIP DIAGNOSTIC · $2,997 · LIMITED MONTHLY SLOTS</p>
        <h2 class="font-display font-medium text-[clamp(1.5rem,3vw,2rem)] tracking-tight text-bm-slate mb-6">
          The Margin Leak Audit
        </h2>
        <div class="space-y-4 text-[15px] leading-[1.7] text-bm-slate/75">
          <p>
            One engagement. Five to seven days. Every structural leak in your store, documented with evidence, priced by impact, and ranked into a fix order your team can execute immediately.
          </p>
          <p>
            A recent audit of a retailer found 8 leaks, including a fraud-detection script returning errors on every page load, a $6,297 product with zero visible reviews, and an 8.3-second page load taxing every paid click. The most urgent finding took the client under 2 hours to fix. It had been costing them on every high-ticket order for months.
          </p>
          <p>
            A $2,997 audit that finds a $50,000-per-year leak is a 16-to-1 return. That makes it the cheapest thing a founder can buy.
          </p>
        </div>
        <div class="mt-6 flex items-center justify-between flex-wrap gap-4">
          <RouterLink
            to="/margin-leak-audit"
            class="inline-flex items-center gap-2 text-bm-teal font-display font-medium text-[14px] hover:gap-3 transition-all"
          >
            See the Full Audit Breakdown <ArrowRight :size="15" />
          </RouterLink>
        </div>
        <!-- Guarantee -->
        <div class="mt-6 pt-6 border-t border-bm-border-light">
          <p class="text-[13px] text-bm-stone leading-[1.6]">
            <strong class="text-bm-slate font-medium">Guarantee:</strong> If the audit fails to identify at least three ranked, actionable margin leaks in your store, you receive a full refund.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 04 / PROCESS ───────────────────────────── -->
  <section class="bg-white py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="font-display font-medium text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight text-bm-slate mb-12 max-w-xl">
        Three steps. One week. It starts with five minutes of your time.
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="step in [
          { num: '01', title: 'Answer five questions.', body: 'About your store. Five minutes, tops. I\'ll confirm it\'s a fit within one business day.' },
          { num: '02', title: 'I run the diagnostic twice.', body: 'First pass is through the diagnostic engine, a full sweep. Second pass is me. I check every finding, verify the evidence, and rank it by dollar impact.' },
          { num: '03', title: 'You get the report.', body: 'Every leak ranked by impact, with evidence and a fix. Plus a prioritized action list and a recorded walkthrough and optional video meeting.' },
        ]" :key="step.num">
          <div>
            <p class="font-mono font-normal text-bm-teal text-[12px] tracking-[0.1em] mb-3">STEP <span class="font-semibold">{{ step.num }}</span></p>
            <h3 class="font-display font-medium text-[16px] text-bm-slate mb-3">{{ step.title }}</h3>
            <p class="text-[14px] leading-[1.7] text-bm-stone">{{ step.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 05 / SAMPLE ────────────────────────────── -->
  <section id="sample" class="bg-bm-cream py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <p class="eyebrow text-bm-stone mb-4">FROM REAL AUDITS, ANONYMIZED</p>
      <h2 class="font-display font-medium text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight text-bm-slate mb-10">
        What a leak stack looks like
      </h2>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b-2 border-bm-slate/15">
              <th class="eyebrow text-bm-stone pb-3 pr-6 font-normal">#</th>
              <th class="eyebrow text-bm-stone pb-3 pr-6 font-normal">Finding</th>
              <th class="eyebrow text-bm-stone pb-3 pr-6 font-normal text-center">Priority</th>
              <th class="eyebrow text-bm-stone pb-3 font-normal">Impact</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-bm-border-light">
            <tr v-for="row in sampleLeaks" :key="row.num" class="group">
              <td class="py-4 pr-6 font-mono font-semibold text-[13px] text-bm-stone align-top">{{ row.num }}</td>
              <td class="py-4 pr-6 text-[14px] text-bm-slate leading-[1.6] align-top max-w-xs">{{ row.finding }}</td>
              <td class="py-4 pr-6 align-top text-center">
                <span :class="row.priority === 'Critical' ? 'severity-critical' : 'severity-high'">
                  {{ row.priority }}
                </span>
              </td>
              <td class="py-4 text-[13px] text-bm-stone leading-[1.6] align-top">{{ row.impact }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="mt-6 text-[13px] text-bm-stone leading-[1.6]">
        Every finding in a real report carries the evidence behind it, the specific action path, and the effort estimate. Priorities run Critical, High, Medium, Low, and Nice to have.
      </p>
    </div>
  </section>

  <!-- ── 06 / WHO ────────────────────────────────── -->
  <section class="bg-bm-slate text-white py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="font-display font-medium text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight mb-12 max-w-xl">
        This works best for a specific kind of store.
      </h2>
      <div class="grid md:grid-cols-2 gap-10">
        <div>
          <p class="eyebrow text-bm-seafoam mb-5">STRONG FIT</p>
          <ul class="space-y-3 text-[15px] text-white/75">
            <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-bm-teal/20 text-bm-seafoam text-[10px] font-bold shrink-0 mt-0.5">✓</span> DTC and e-commerce brands doing $250K to $5M, on Shopify or similar platforms</li>
            <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-bm-teal/20 text-bm-seafoam text-[10px] font-bold shrink-0 mt-0.5">✓</span> Running paid traffic with flat or shrinking margins while ad budgets climb</li>
            <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-bm-teal/20 text-bm-seafoam text-[10px] font-bold shrink-0 mt-0.5">✓</span> Stacked with apps and tools nobody fully audits</li>
            <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-bm-teal/20 text-bm-seafoam text-[10px] font-bold shrink-0 mt-0.5">✓</span> Supplements, beauty and skincare, fitness, and pet brands see the densest leak patterns</li>
          </ul>
        </div>
        <div>
          <p class="eyebrow text-white/40 mb-5">NOT A FIT</p>
          <ul class="space-y-3 text-[15px] text-white/50">
            <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/8 text-white/30 text-[10px] font-bold shrink-0 mt-0.5">✗</span> Pre-revenue stores (there's no margin to leak yet)</li>
            <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/8 text-white/30 text-[10px] font-bold shrink-0 mt-0.5">✗</span> Stores looking for someone to run their ads or build their pages (I diagnose; your team executes)</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 07 / AI VISIBILITY ─────────────────────── -->
  <section class="bg-white py-20 px-6">
    <div class="max-w-4xl mx-auto max-w-2xl">
      <p class="eyebrow text-bm-stone mb-4">THE OTHER LEAK</p>
      <h2 class="font-display font-medium text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight text-bm-slate mb-6">
        There's a newer leak most stores haven't measured yet.
      </h2>
      <div class="space-y-4 text-[16px] leading-[1.7] text-bm-slate/75 mb-8">
        <p>
          Your buyers ask ChatGPT, Google AI Overviews, Gemini, and Perplexity which products to buy. If a competitor's name comes back instead of yours, that's margin leaking before anyone reaches your site.
        </p>
        <p>
          I built CitedScore to measure it: an automated audit that tests your real visibility across all four major AI platforms and reports exactly where you're recommended, where you're invisible, and what to fix. It starts with a free scan.
        </p>
      </div>
      <a
        href="https://citedscore.com"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 text-bm-teal font-display font-medium text-[14px] hover:gap-3 transition-all"
      >
        Check Your AI Visibility at CitedScore <ArrowUpRight :size="15" />
      </a>
    </div>
  </section>

  <!-- ── 08 / FAQ ────────────────────────────────── -->
  <section class="bg-bm-cream py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="font-display font-medium text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight text-bm-slate mb-10">
        Frequently asked questions
      </h2>
      <div class="max-w-2xl divide-y divide-bm-border-light">
        <div v-for="(faq, i) in faqs" :key="i">
          <button
            class="w-full flex items-center justify-between gap-4 py-5 text-left"
            @click="toggleFaq(i)"
          >
            <span class="font-display font-medium text-[15px] text-bm-slate leading-snug">{{ faq.q }}</span>
            <ChevronDown
              v-if="openFaq !== i"
              :size="16"
              class="text-bm-stone shrink-0"
            />
            <ChevronUp
              v-else
              :size="16"
              class="text-bm-teal shrink-0"
            />
          </button>
          <div v-if="openFaq === i" class="pb-5">
            <p class="text-[15px] leading-[1.7] text-bm-slate/70">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 09 / FINAL CTA ─────────────────────────── -->
  <section class="bg-bm-slate text-white py-24 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="font-display font-medium text-[clamp(1.5rem,3.5vw,2.5rem)] tracking-tight mb-5 max-w-lg mx-auto">
        Find the leak before you fund it for another quarter.
      </h2>
      <RouterLink to="/margin-leak-audit#request" class="btn-teal px-8 py-3.5 text-[15px]">
        Request a Leak Report
      </RouterLink>
    </div>
  </section>
</template>
