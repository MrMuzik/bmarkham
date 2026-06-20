<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { ChevronDown, ChevronUp, FileSearch, ListOrdered, Microscope, BookOpen, Video, Search, Wrench, Check, X } from '@lucide/vue'
import { useHead } from '@/composables/useHead'

// FAQ accordion
const openFaq = ref<number | null>(null)
function toggleFaq(i: number) {
  openFaq.value = openFaq.value === i ? null : i
}

// Request form
type FormState = 'idle' | 'submitting' | 'success' | 'error'
const formState = ref<FormState>('idle')

const form = reactive({
  email: '',
  storeUrl: '',
  revenueRange: '',
  symptom: '',
  goal: '',
})

const trafficSources = reactive<Record<string, boolean>>({
  'Meta/Facebook Ads': false,
  'Google Ads': false,
  'TikTok Ads': false,
  'Organic (SEO)': false,
  'Email': false,
  'Influencer/Affiliate': false,
  'Other': false,
})

async function submitForm() {
  formState.value = 'submitting'
  const selectedSources = Object.entries(trafficSources)
    .filter(([, v]) => v)
    .map(([k]) => k)
    .join(', ')

  const body = new URLSearchParams({
    'form-name': 'audit-request',
    email: form.email,
    'store-url': form.storeUrl,
    'revenue-range': form.revenueRange,
    'traffic-sources': selectedSources,
    symptom: form.symptom,
    goal: form.goal,
  })

  try {
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
    formState.value = res.ok ? 'success' : 'error'
  } catch {
    formState.value = 'error'
  }
}

// JSON-LD
onMounted(() => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  const el = document.createElement('script')
  el.type = 'application/ld+json'
  el.textContent = JSON.stringify(faqSchema)
  document.head.appendChild(el)

  useHead({
    title: 'The Margin Leak Audit — Bryan Markham',
    description: 'Every leak in your store documented, priced, and ranked into a fix order. Delivered as an expert-backed report in 7 days. $2,997 flat.',
    ogTitle: 'The Margin Leak Audit — Bryan Markham',
    ogDescription: 'Every leak in your store documented, priced, and ranked into a fix order. Delivered as an expert-backed report in 7 days.',
    ogImage: '/images/og-home.png',
    ogUrl: 'https://bryanmarkham.com/margin-leak-audit',
  })
})

const allFaqs = [
  {
    q: 'What exactly do I receive?',
    a: 'A designed PDF report with every leak documented (evidence, action path, priority, effort estimate), a one-page prioritized action summary, and a recorded video walkthrough of the findings. Most reports run 10 to 15 pages and document 6 to 10 leaks.',
  },
  {
    q: 'Do you need access to my store admin or analytics?',
    a: 'The diagnostic runs on publicly observable signals: live site behavior, network activity, performance timing, and conversion-path structure. That\'s deliberate. Zero setup on your side and findings any stakeholder can verify themselves.',
  },
  {
    q: 'Will you implement the fixes?',
    a: 'The report gives your team everything needed to execute: specific instructions, the order of operations, and effort estimates per fix. Diagnosis and implementation are separate disciplines, and keeping them separate is why the diagnosis stays honest.',
  },
  {
    q: 'How fast is the turnaround?',
    a: 'Seven days from confirmation to delivered report.',
  },
  {
    q: 'Why is it $2,997?',
    a: 'Because the price reflects diagnostic precision. One found leak typically returns the fee many times over. And the guarantee removes the risk: three ranked, actionable leaks minimum, or a full refund.',
  },
  {
    q: 'Is the report AI-generated?',
    a: 'The report is engine-assisted and engineer-verified. I built a proprietary diagnostic system trained on my methodology over hundreds of hours. Every finding surfaces through the engine, then goes through me. I verify the evidence, adjust the priorities, and write the judgment calls myself.',
  },
  {
    q: 'My store is on WooCommerce / BigCommerce / custom. Does the audit still apply?',
    a: 'Yes. The diagnostic reads live behavior and structure, which exists on every platform. Shopify stores get the deepest platform-specific fix instructions, and the leak stack itself is platform-agnostic.',
  },
  {
    q: 'Can my agency buy this for their client?',
    a: 'Yes, and agencies are some of my best repeat buyers. Ask about white-label delivery on the request form.',
  },
]

const deliverables = [
  {
    icon: FileSearch,
    title: 'The Leak Stack',
    body: 'Every identified leak (typically 6 to 10), each documented with the evidence, the signal, the impact, and the action path. Priorities: Critical, High, Medium, Low, Nice to have.',
    wide: false,
  },
  {
    icon: ListOrdered,
    title: 'The Prioritized Action Summary',
    body: 'One page. Every fix ranked with effort estimates, so Monday morning has an order of operations instead of a debate.',
    wide: false,
  },
  {
    icon: Microscope,
    title: 'Deep Dives',
    body: 'The full analysis behind each major leak, written so your developer or agency can execute without a follow-up meeting.',
    wide: false,
  },
  {
    icon: BookOpen,
    title: 'Sources and methodology',
    body: 'Every statistic in the report links to its primary research. Every page reviewed is listed. Nothing rests on "trust me."',
    wide: false,
  },
  {
    icon: Video,
    title: 'The Walkthrough',
    body: 'A recorded video where I take you through every finding, the reasoning, and the recommended starting point. Yours to share with your team or agency. Optional: 45-minute Zoom meeting to walk through findings live.',
    wide: true,
  },
]

const SEVERITY: Record<string, { border: string; badge: string; label: string }> = {
  critical: { border: '#EF4444', badge: 'rgba(239,68,68,0.10)', label: 'Critical' },
  high:     { border: '#EA580C', badge: 'rgba(234,88,12,0.10)',  label: 'High' },
  medium:   { border: '#D97706', badge: 'rgba(217,119,6,0.10)',  label: 'Medium' },
  low:      { border: '#0D8A7C', badge: 'rgba(13,138,124,0.10)', label: 'Low' },
}

const openFindings = ref([true, true, false, false, false, false])
function toggleFinding(i: number) {
  openFindings.value[i] = !openFindings.value[i]
}

const sampleFindings = [
  {
    sev: 'critical',
    title: 'Checkout drops 38% of sessions at the shipping step',
    cost: '$84K / yr',
    evidence: 'Of 12,400 sessions reaching checkout, 4,710 abandon at the shipping-method screen. Surprise shipping cost appears here for the first time, after the buyer has invested effort in the flow.',
    action: 'Surface estimated shipping on the cart page and add a free-shipping threshold progress bar. Move the cost reveal upstream so it never ambushes the buyer at the final step.',
  },
  {
    sev: 'critical',
    title: 'Mobile PDP primary CTA falls below the fold',
    cost: '$31K / yr',
    evidence: 'On the three best-selling products, the Add to Cart button sits 1.4 screens down on a 390px viewport. 61% of traffic is mobile; tap-through on these PDPs trails desktop conversion by 22%.',
    action: 'Pin a sticky add-to-cart bar on mobile PDPs and compress the image gallery. Target conversion parity with desktop within one sprint.',
  },
  {
    sev: 'high',
    title: 'Site search returns zero results for 14% of queries',
    cost: '$19K / yr',
    evidence: 'No synonym handling or typo tolerance is active. "Rain jacket" returns nothing while products are tagged "waterproof shell." Zero-result sessions convert at one-fifth the site average.',
    action: 'Add synonym mapping and fuzzy matching. Redirect zero-result pages to a curated category instead of a dead end.',
  },
  {
    sev: 'high',
    title: 'Render-blocking scripts inflate PDP load to 4.1s',
    cost: '$14K / yr',
    evidence: 'Three third-party tags load synchronously in the document head. LCP of 4.1s on 4G mobile — every additional second past 2.5s correlates with measurable conversion loss in session data.',
    action: 'Defer non-critical tags, self-host fonts, and lazy-load below-fold imagery. Target LCP under 2.5s.',
  },
  {
    sev: 'medium',
    title: 'Guest checkout buried behind account creation',
    cost: 'Conversion friction',
    evidence: 'Returning-customer logic forces an account decision before payment. 28% of first-time buyers stall on this screen, compounding across every acquisition campaign.',
    action: 'Default to guest checkout with an optional one-tap account creation after purchase completes.',
  },
  {
    sev: 'low',
    title: 'Analytics and consent stack are healthy',
    cost: 'No action',
    evidence: 'Event tracking is consistent across the funnel and consent is correctly gated. The data feeding this report is trustworthy.',
    action: 'No action required. Keep the current measurement plan as the baseline for re-audit.',
  },
]

// Fit check
const positiveItems = [
  'You run a DTC store between $250K and $5M',
  "You're running paid traffic with flat or shrinking margins",
  'You want a diagnosis you can hand to your team',
]
const negativeItems = [
  "You're pre-revenue",
  'You want someone to run your ads or build your pages',
  "You're looking for a retainer",
]
const fitPositive = ref([false, false, false])
const fitNegative = ref([false, false, false])

function togglePositive(i: number) {
  fitPositive.value[i] = !fitPositive.value[i]
}
function toggleNegative(i: number) {
  fitNegative.value[i] = !fitNegative.value[i]
}

const positiveCount = computed(() => fitPositive.value.filter(Boolean).length)
const hasDisqualifier = computed(() => fitNegative.value.some(Boolean))

const fitLevel = computed(() => {
  if (positiveCount.value === 0 && !hasDisqualifier.value) return 'idle'
  if (hasDisqualifier.value) return 'disqualified'
  if (positiveCount.value === 3) return 'strong'
  return 'partial'
})

const meterWidth = computed(() => {
  if (hasDisqualifier.value) return '100%'
  return `${(positiveCount.value / 3) * 100}%`
})

const meterColor = computed(() => {
  if (hasDisqualifier.value) return '#EF4444'
  if (positiveCount.value === 3) return '#0D8A7C'
  if (positiveCount.value === 2) return '#2DD4BF'
  if (positiveCount.value === 1) return '#D97706'
  return '#E5E5E3'
})

const meterLabel = computed(() => {
  if (hasDisqualifier.value) return 'Not a fit'
  if (positiveCount.value === 0) return 'Select what applies to your store'
  if (positiveCount.value === 3) return '3 of 3 criteria match'
  return `${positiveCount.value} of 3 criteria match — keep going`
})
</script>

<template>
  <!-- ── 00 / HERO ───────────────────────────────── -->
  <section class="bg-bm-slate text-white pt-40 pb-24 px-6">
    <div class="max-w-4xl mx-auto">
      <p class="eyebrow text-bm-seafoam mb-6">THE MARGIN LEAK AUDIT · $2,997</p>
      <h1 class="font-display font-medium text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-tight mb-6 max-w-2xl">
        Every leak in your store. Documented, priced, and ranked into a fix order. In 7 days.
      </h1>
      <p class="font-body text-white/70 text-[17px] leading-[1.7] max-w-xl mb-10">
        A complete structural diagnostic of your store: where the margin is going, what each leak costs, and the exact order to fix things in. Delivered as an expert backed report with a recorded walkthrough.
      </p>
      <a href="#request" class="btn-teal px-6 py-3 text-[15px]">
        Request a Leak Report
      </a>
    </div>
  </section>

  <!-- ── 01 / THE PROBLEM ───────────────────────── -->
  <section class="bg-bm-cream py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="font-display font-medium text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight text-bm-slate mb-8 max-w-xl">
        The expensive part is the not knowing.
      </h2>
      <div class="prose-meridian max-w-2xl space-y-5">
        <p>
          You're informed and still lacking diagnostic clarity. The metrics are all available and none of them agree on what's wrong. So the default becomes spending: more ad budget, another app, a new agency, a redesign. Each one is a guess wearing a price tag.
        </p>
        <p>
          The audit replaces the guessing. In five to seven days you know your top three leaks, what each one costs you monthly, and what to fix first. Growth that comes from fixing a $4,000-a-month leak beats growth that comes from spending another $4,000 on ads, because the fix compounds and the spend repeats.
        </p>
      </div>
    </div>
  </section>

  <!-- ── 02 / WHAT YOU GET ──────────────────────── -->
  <section class="bg-white py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="font-display font-medium text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight text-bm-slate mb-10">
        The deliverable, in full
      </h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div
          v-for="d in deliverables"
          :key="d.title"
          class="card-light flex items-start gap-4"
          :class="d.wide ? 'md:col-span-2' : ''"
        >
          <div class="w-9 h-9 rounded-full bg-bm-teal/10 flex items-center justify-center shrink-0 mt-0.5">
            <component :is="d.icon" :size="16" class="text-bm-teal" />
          </div>
          <div>
            <p class="font-display font-medium text-[15px] text-bm-slate mb-1.5">{{ d.title }}</p>
            <p class="text-[13px] leading-[1.7] text-bm-stone">{{ d.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 03 / METHODOLOGY ───────────────────────── -->
  <section class="bg-bm-dusk text-white py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="font-display font-medium text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight mb-10 max-w-xl">
        A two-stage diagnostic: machine breadth, expert judgment
      </h2>
      <div class="grid md:grid-cols-2 gap-8 max-w-3xl">
        <div class="card-dark">
          <p class="eyebrow text-bm-seafoam mb-4">STAGE ONE: THE ENGINE</p>
          <p class="text-[14px] leading-[1.7] text-white/70">
            Every audit begins with a sweep by a proprietary diagnostic engine I trained exclusively on my own methodology, hundreds of hours of it. It examines your store the way your buyers and their browsers experience it: live site behavior, network profiling, performance timing, and conversion-path review across your highest-traffic page types.
          </p>
        </div>
        <div class="card-dark">
          <p class="eyebrow text-bm-seafoam mb-4">STAGE TWO: THE ENGINEER</p>
          <p class="text-[14px] leading-[1.7] text-white/70">
            Every finding from the sweep lands on my desk. I verify the evidence by hand, kill the false positives, price the real impact, and make the calls that require judgment: which leak is structural and which is cosmetic, what to fix first, and what each fix is worth. The report you receive carries my sign-off on every line.
          </p>
        </div>
      </div>
      <div class="mt-8 teal-bar max-w-2xl">
        <p class="text-[14px] leading-[1.7] text-white/60">
          Machine-only audits produce volume without judgment. Manual-only audits from senior consultants cost five figures and take a month. The two-stage model delivers machine coverage with expert reliability in 7 days, at $2,997.
        </p>
      </div>
    </div>
  </section>

  <!-- ── 04 / SAMPLE REPORT ─────────────────────── -->
  <section class="bg-bm-cream py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <p class="eyebrow text-bm-stone mb-4">SAMPLE REPORT</p>
      <h2 class="font-display font-medium text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight text-bm-slate mb-4">
        What you receive, in practice
      </h2>
      <p class="text-[16px] leading-[1.7] text-bm-slate/70 max-w-2xl mb-10">
        The top three findings in this sample account for <strong class="text-bm-slate font-medium">$134K in recoverable annual margin</strong>. Each came with evidence, a dollar estimate, and a specific action path — so the fix order writes itself.
      </p>

      <!-- Risk band -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-bm-border-light border border-bm-border-light rounded-md overflow-hidden mb-6">
        <div class="bg-white p-5">
          <p class="font-mono font-semibold text-[26px] leading-none text-bm-coral tracking-tight">$148K</p>
          <p class="text-[12px] text-bm-stone mt-2 leading-snug">Annual margin at risk</p>
        </div>
        <div class="bg-white p-5">
          <p class="font-mono font-semibold text-[26px] leading-none text-bm-amber tracking-tight">38%</p>
          <p class="text-[12px] text-bm-stone mt-2 leading-snug">Checkout abandonment</p>
        </div>
        <div class="bg-white p-5">
          <p class="font-mono font-semibold text-[26px] leading-none text-bm-slate tracking-tight">6</p>
          <p class="text-[12px] text-bm-stone mt-2 leading-snug">Findings documented</p>
        </div>
        <div class="bg-white p-5">
          <p class="font-mono font-semibold text-[26px] leading-none text-bm-amber tracking-tight">4.1s</p>
          <p class="text-[12px] text-bm-stone mt-2 leading-snug">PDP load time</p>
        </div>
      </div>

      <!-- Executive summary -->
      <div class="teal-bar bg-white rounded-md p-6 shadow-sm mb-6">
        <p class="eyebrow text-bm-teal mb-3">EXECUTIVE SUMMARY</p>
        <p class="text-[15px] leading-[1.7] text-bm-slate/80">
          The storefront converts well above category average at the top of the funnel — the problem is downstream. <strong class="text-bm-slate font-medium">Two critical leaks, both at the point of purchase, account for $115K of the $148K at risk.</strong> Neither requires a redesign. Both are friction introduced too late in the flow. Fixed in sequence, the recovered margin compounds: faster pages improve every finding below them.
        </p>
      </div>

      <!-- Findings list -->
      <div class="space-y-3">
        <div
          v-for="(finding, i) in sampleFindings"
          :key="i"
          class="bg-white border border-bm-border-light border-l-[3px] rounded-md shadow-sm overflow-hidden"
          :style="{ borderLeftColor: SEVERITY[finding.sev].border }"
        >
          <button
            @click="toggleFinding(i)"
            class="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-bm-cream/60 transition-colors"
          >
            <span class="font-mono text-[12px] text-bm-stone shrink-0 w-6">{{ String(i + 1).padStart(2, '0') }}</span>
            <span
              class="shrink-0 text-[10px] font-semibold uppercase tracking-[0.05em] px-2.5 py-1 rounded-full"
              :style="{ color: SEVERITY[finding.sev].border, background: SEVERITY[finding.sev].badge }"
            >{{ SEVERITY[finding.sev].label }}</span>
            <span class="flex-1 font-display font-medium text-[14px] text-bm-slate leading-snug">{{ finding.title }}</span>
            <span
              class="shrink-0 font-mono text-[12px] whitespace-nowrap hidden md:block"
              :style="{ color: finding.sev === 'low' ? '#78716C' : SEVERITY[finding.sev].border }"
            >{{ finding.cost }}</span>
            <ChevronDown v-if="!openFindings[i]" :size="15" class="text-bm-stone shrink-0" />
            <ChevronUp v-else :size="15" class="shrink-0" :style="{ color: SEVERITY[finding.sev].border }" />
          </button>
          <div v-if="openFindings[i]" class="px-5 pb-5 pt-1 grid md:grid-cols-2 gap-6 pl-[3.25rem]">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <Search :size="13" class="text-bm-stone" />
                <span class="text-[11px] font-semibold uppercase tracking-[0.08em] text-bm-stone">Evidence</span>
              </div>
              <p class="text-[13px] leading-[1.65] text-bm-slate/70">{{ finding.evidence }}</p>
            </div>
            <div>
              <div class="flex items-center gap-2 mb-2">
                <Wrench :size="13" class="text-bm-teal" />
                <span class="text-[11px] font-semibold uppercase tracking-[0.08em] text-bm-teal">Action path</span>
              </div>
              <p class="text-[13px] leading-[1.65] text-bm-slate/70">{{ finding.action }}</p>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-6 text-[13px] text-bm-stone italic">Generic sample. All findings, evidence, and figures are representative — not from a single client.</p>
    </div>
  </section>

  <!-- ── 05 / ROI + GUARANTEE ───────────────────── -->
  <section class="bg-bm-slate text-white py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="font-display font-medium text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight mb-8 max-w-xl">
        The math, and the guarantee
      </h2>
      <div class="max-w-2xl space-y-5 text-[16px] leading-[1.7] text-white/70">
        <p>
          A $2,997 audit that locates a $50,000-per-year leak returns 16 times its price. Most stores in the fit profile carry at least one leak of that scale, and the audit typically documents 6 to 10.
        </p>
      </div>
      <div class="mt-8 teal-bar max-w-2xl">
        <p class="eyebrow text-bm-seafoam mb-3">THE GUARANTEE</p>
        <p class="text-[15px] leading-[1.7] text-white/75">
          If the audit fails to identify at least three ranked, actionable margin leaks in your store, you receive a full refund. I can offer that because the pattern density in DTC stores makes the outcome predictable. The risk sits with me, where it belongs.
        </p>
      </div>
    </div>
  </section>

  <!-- ── 06 / FIT CHECK ─────────────────────────── -->
  <section class="bg-bm-cream py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="font-display font-medium text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight text-bm-slate mb-2">
        Fit check
      </h2>
      <p class="text-[15px] text-bm-slate/55 mb-8">Select everything that applies to your store.</p>

      <!-- Meter -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-2.5">
          <span class="font-mono text-[11px] tracking-[0.08em] uppercase"
            :class="fitLevel === 'disqualified' ? 'text-bm-coral' : fitLevel === 'strong' ? 'text-bm-teal' : 'text-bm-stone'">
            {{ meterLabel }}
          </span>
          <span v-if="fitLevel === 'strong'" class="font-mono text-[11px] tracking-[0.08em] text-bm-teal font-semibold">STRONG FIT ✓</span>
          <span v-else-if="fitLevel === 'disqualified'" class="font-mono text-[11px] tracking-[0.08em] text-bm-coral font-semibold">NOT A FIT</span>
        </div>
        <div class="h-[6px] bg-bm-border-light rounded-full overflow-hidden">
          <div
            class="h-full rounded-full transition-all duration-500 ease-out"
            :style="{ width: meterWidth, backgroundColor: meterColor }"
          />
        </div>
      </div>

      <!-- Criteria grid — stacks on mobile -->
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 mb-8">

        <!-- Positive criteria -->
        <div>
          <p class="eyebrow text-bm-teal mb-4">BOOK A SLOT IF</p>
          <div class="space-y-3">
            <button
              v-for="(item, i) in positiveItems"
              :key="i"
              @click="togglePositive(i)"
              class="w-full text-left p-4 rounded-md border-2 transition-all duration-150 flex items-start gap-3 min-h-[56px]"
              :class="fitPositive[i]
                ? 'bg-bm-teal/8 border-bm-teal shadow-sm'
                : 'bg-white border-transparent shadow-[0_0_0_1px_theme(colors.bm-border-light)] hover:shadow-[0_0_0_1px_theme(colors.bm-teal/40)]'"
            >
              <span
                class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-150"
                :class="fitPositive[i] ? 'border-bm-teal bg-bm-teal' : 'border-bm-stone/30 bg-white'"
              >
                <Check v-if="fitPositive[i]" :size="11" class="text-white stroke-[3]" />
              </span>
              <span class="text-[14px] leading-[1.6]" :class="fitPositive[i] ? 'text-bm-slate font-medium' : 'text-bm-slate/70'">
                {{ item }}
              </span>
            </button>
          </div>
        </div>

        <!-- Negative criteria -->
        <div>
          <p class="eyebrow text-bm-stone mb-4">SKIP IT IF</p>
          <div class="space-y-3">
            <button
              v-for="(item, i) in negativeItems"
              :key="i"
              @click="toggleNegative(i)"
              class="w-full text-left p-4 rounded-md border-2 transition-all duration-150 flex items-start gap-3 min-h-[56px]"
              :class="fitNegative[i]
                ? 'bg-bm-coral/6 border-bm-coral shadow-sm'
                : 'bg-white border-transparent shadow-[0_0_0_1px_theme(colors.bm-border-light)] hover:shadow-[0_0_0_1px_theme(colors.bm-stone/30)]'"
            >
              <span
                class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-150"
                :class="fitNegative[i] ? 'border-bm-coral bg-bm-coral' : 'border-bm-stone/30 bg-white'"
              >
                <X v-if="fitNegative[i]" :size="11" class="text-white stroke-[3]" />
              </span>
              <span class="text-[14px] leading-[1.6]" :class="fitNegative[i] ? 'text-bm-slate font-medium' : 'text-bm-stone/80'">
                {{ item }}
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Result card -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <div
          v-if="fitLevel !== 'idle'"
          class="rounded-md border p-6"
          :class="{
            'bg-bm-teal/6 border-bm-teal': fitLevel === 'strong',
            'bg-white border-bm-border-light': fitLevel === 'partial',
            'bg-bm-coral/5 border-bm-coral/40': fitLevel === 'disqualified',
          }"
        >
          <template v-if="fitLevel === 'strong'">
            <p class="font-display font-medium text-[17px] text-bm-slate mb-2">You're a strong fit.</p>
            <p class="text-[14px] leading-[1.7] text-bm-slate/70 mb-5">Every criterion matches. The audit is built for exactly this — paid traffic, shrinking margins, a store that needs a diagnosis rather than more spend.</p>
            <a href="#request" class="btn-teal inline-flex px-6 py-3 text-[14px]">Request a Leak Report</a>
          </template>
          <template v-else-if="fitLevel === 'partial'">
            <p class="font-display font-medium text-[17px] text-bm-slate mb-2">Looking good — keep going.</p>
            <p class="text-[14px] leading-[1.7] text-bm-slate/70">{{ positiveCount }} of 3 criteria match. Check everything that applies and see where you land.</p>
          </template>
          <template v-else-if="fitLevel === 'disqualified'">
            <p class="font-display font-medium text-[17px] text-bm-slate mb-2">Not the right fit, at least not yet.</p>
            <p class="text-[14px] leading-[1.7] text-bm-slate/70 mb-3">The audit diagnoses existing conversion infrastructure. If you're pre-revenue, need implementation help, or want a retainer, I'm not the right call. Come back when the store is running and the margins are moving.</p>
            <p class="text-[14px] leading-[1.7] text-bm-slate/70">I've spent eighteen years working alongside skilled developers and marketers. If you need a referral for where you are right now, reach out. I'll connect you.</p>
          </template>
        </div>
      </Transition>
    </div>
  </section>

  <!-- ── 07 / BOOKING + FORM ────────────────────── -->
  <section id="request" class="bg-white py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="grid md:grid-cols-2 gap-14">
        <!-- Left: process steps -->
        <div>
          <p class="eyebrow text-bm-stone mb-4">BOOKING TO DELIVERY</p>
          <h2 class="font-display font-medium text-[clamp(1.5rem,2.5vw,1.75rem)] tracking-tight text-bm-slate mb-8">
            Four steps. One week. No surprises.
          </h2>
          <ol class="space-y-6">
            <li v-for="step in [
              { n: 1, t: 'Request an audit', b: 'Answer five questions about your store, traffic, and where it hurts.' },
              { n: 2, t: 'Fit confirmation', b: 'I confirm within one business day. Payment link follows: $2,997, flat.' },
              { n: 3, t: 'The diagnostic runs', b: 'Nothing required from you. I run both stages and verify every finding.' },
              { n: 4, t: 'Delivery in 7 days', b: 'Report, action summary, and recorded walkthrough.' },
            ]" :key="step.n" class="flex gap-4">
              <span class="font-mono font-semibold text-[13px] text-bm-teal shrink-0 w-5 pt-0.5">{{ step.n }}.</span>
              <div>
                <p class="font-display font-medium text-[14px] text-bm-slate mb-1">{{ step.t }}</p>
                <p class="text-[13px] leading-[1.6] text-bm-stone">{{ step.b }}</p>
              </div>
            </li>
          </ol>
        </div>

        <!-- Right: form -->
        <div>
          <!-- Success state -->
          <div v-if="formState === 'success'" class="card-light h-full flex flex-col items-center justify-center text-center py-12">
            <p class="font-display font-medium text-[18px] text-bm-slate mb-3">Request received.</p>
            <p class="text-[14px] leading-[1.7] text-bm-stone">I'll reach out with a calendar link within 24 hours of the initial fit assessment.</p>
          </div>

          <!-- Form -->
          <form
            v-else
            @submit.prevent="submitForm"
            class="space-y-5"
          >
            <!-- Email -->
            <div>
              <label class="eyebrow text-bm-stone block mb-2">Email address</label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="you@yourstore.com"
                class="w-full px-4 py-3 rounded-sm border border-bm-border-light bg-bm-cream text-bm-slate text-[14px] placeholder:text-bm-stone/50 focus:outline-none focus:border-bm-teal focus:ring-1 focus:ring-bm-teal transition-colors"
              />
            </div>

            <!-- Store URL -->
            <div>
              <label class="eyebrow text-bm-stone block mb-2">Store URL</label>
              <input
                v-model="form.storeUrl"
                type="url"
                required
                placeholder="https://yourstore.com"
                class="w-full px-4 py-3 rounded-sm border border-bm-border-light bg-bm-cream text-bm-slate text-[14px] placeholder:text-bm-stone/50 focus:outline-none focus:border-bm-teal focus:ring-1 focus:ring-bm-teal transition-colors"
              />
            </div>

            <!-- Revenue range -->
            <div>
              <label class="eyebrow text-bm-stone block mb-2">Monthly revenue range</label>
              <select
                v-model="form.revenueRange"
                required
                class="w-full px-4 py-3 rounded-sm border border-bm-border-light bg-bm-cream text-bm-slate text-[14px] focus:outline-none focus:border-bm-teal focus:ring-1 focus:ring-bm-teal transition-colors appearance-none"
              >
                <option value="" disabled>Select a range</option>
                <option>Under $20K/mo</option>
                <option>$20K–$40K/mo</option>
                <option>$40K–$80K/mo</option>
                <option>$80K–$200K/mo</option>
                <option>$200K–$400K/mo</option>
                <option>Over $400K/mo</option>
              </select>
            </div>

            <!-- Traffic sources -->
            <div>
              <label class="eyebrow text-bm-stone block mb-3">Primary traffic sources</label>
              <div class="grid grid-cols-2 gap-2">
                <label
                  v-for="(_, source) in trafficSources"
                  :key="source"
                  class="flex items-center gap-2.5 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    v-model="trafficSources[source]"
                    class="w-4 h-4 rounded-sm border-bm-border-light accent-bm-teal"
                  />
                  <span class="text-[13px] text-bm-slate/75">{{ source }}</span>
                </label>
              </div>
            </div>

            <!-- Symptom -->
            <div>
              <label class="eyebrow text-bm-stone block mb-2">What's the symptom that brought you here?</label>
              <textarea
                v-model="form.symptom"
                required
                rows="2"
                placeholder="e.g. Revenue is growing but margins keep shrinking despite stable ROAS"
                class="w-full px-4 py-3 rounded-sm border border-bm-border-light bg-bm-cream text-bm-slate text-[14px] placeholder:text-bm-stone/50 focus:outline-none focus:border-bm-teal focus:ring-1 focus:ring-bm-teal transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Goal -->
            <div>
              <label class="eyebrow text-bm-stone block mb-2">What's your goal?</label>
              <textarea
                v-model="form.goal"
                required
                rows="2"
                placeholder="e.g. Know exactly what to fix before we scale ad spend this quarter"
                class="w-full px-4 py-3 rounded-sm border border-bm-border-light bg-bm-cream text-bm-slate text-[14px] placeholder:text-bm-stone/50 focus:outline-none focus:border-bm-teal focus:ring-1 focus:ring-bm-teal transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Error message -->
            <p v-if="formState === 'error'" class="text-[13px] text-bm-coral">
              Something went wrong. Email me directly at hello@bryanmarkham.com.
            </p>

            <button
              type="submit"
              :disabled="formState === 'submitting'"
              class="btn-teal w-full py-3.5 text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{ formState === 'submitting' ? 'Sending…' : 'Request a Leak Report' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 08 / FAQ ────────────────────────────────── -->
  <section class="bg-bm-cream py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="font-display font-medium text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight text-bm-slate mb-10">
        Frequently asked questions
      </h2>
      <div class="max-w-2xl divide-y divide-bm-border-light">
        <div v-for="(faq, i) in allFaqs" :key="i">
          <button
            class="w-full flex items-center justify-between gap-4 py-5 text-left"
            @click="toggleFaq(i)"
          >
            <span class="font-display font-medium text-[15px] text-bm-slate leading-snug">{{ faq.q }}</span>
            <ChevronDown v-if="openFaq !== i" :size="16" class="text-bm-stone shrink-0" />
            <ChevronUp v-else :size="16" class="text-bm-teal shrink-0" />
          </button>
          <div v-if="openFaq === i" class="pb-5">
            <p class="text-[15px] leading-[1.7] text-bm-slate/70">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
