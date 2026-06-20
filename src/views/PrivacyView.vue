<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@/composables/useHead'
onMounted(() => {
  useHead({
    title: 'Privacy Policy — Bryan Markham',
    description: 'Privacy policy for bryanmarkham.com.',
    ogTitle: 'Privacy Policy — Bryan Markham',
    ogDescription: 'Privacy policy for bryanmarkham.com.',
    ogUrl: 'https://bryanmarkham.com/privacy',
  })
})
</script>

<template>
  <section class="bg-bm-slate text-white pt-40 pb-16 px-6">
    <div class="max-w-4xl mx-auto">
      <p class="eyebrow text-bm-seafoam mb-6">LEGAL</p>
      <h1 class="font-display font-medium text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] tracking-tight max-w-2xl">
        Privacy Policy
      </h1>
      <p class="mt-4 font-mono font-normal text-[12px] text-white/40 tracking-[0.06em]">Effective June 14, 2026</p>
    </div>
  </section>

  <section class="bg-bm-cream py-16 px-6">
    <div class="max-w-2xl mx-auto space-y-10 text-[15px] leading-[1.75] text-bm-slate/80">

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">1. Who operates this site</h2>
        <p>
          This site is operated by Bryan Markham. For formal legal correspondence, the responsible entity is Park Properties, LLC, 5540 Centerview Dr Ste 204, PMB 720467, Raleigh, North Carolina 27606-8012.
        </p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">2. What is collected</h2>
        <p class="mb-4"><strong class="text-bm-slate font-medium">Information you provide.</strong> When you submit the audit request form, the following is collected:</p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Email address</li>
          <li>Store URL</li>
          <li>Monthly revenue range</li>
          <li>Primary traffic sources</li>
          <li>Description of symptoms and goals</li>
        </ul>
        <p class="mb-4">This information is used solely to evaluate whether your store is a fit for the Margin Leak Audit and to follow up regarding your request.</p>
        <p class="mb-4"><strong class="text-bm-slate font-medium">Information collected automatically.</strong> This site uses Google Analytics (GA4), which collects:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Pages visited and time spent on each page</li>
          <li>Referring URL</li>
          <li>Device type, browser, and operating system</li>
          <li>General geographic location (derived from IP address; full IP addresses are not stored)</li>
          <li>Interactions with site elements</li>
        </ul>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">3. Cookies</h2>
        <p>
          Google Analytics sets cookies to distinguish visitors and measure site usage over time. No advertising, retargeting, or cross-site tracking cookies are set by this site. You can opt out of Google Analytics tracking at any time using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" class="text-bm-teal hover:underline">Google Analytics opt-out browser add-on</a>.
        </p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">4. Third-party services</h2>
        <p class="mb-3">
          <strong class="text-bm-slate font-medium">Google Analytics (GA4)</strong> — Collects and processes analytics data as described above. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="text-bm-teal hover:underline">Google's Privacy Policy</a>.
        </p>
        <p>
          <strong class="text-bm-slate font-medium">Netlify</strong> — Hosts this site and processes form submissions. See <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener" class="text-bm-teal hover:underline">Netlify's Privacy Policy</a>.
        </p>
        <p class="mt-3">Personal information is not sold to third parties.</p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">5. Data retention</h2>
        <p>
          Form submissions are retained for as long as necessary to evaluate and fulfill audit requests. Analytics data is retained per Google Analytics default settings (14 months by default).
        </p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">6. California residents (CCPA)</h2>
        <p class="mb-3">If you are a California resident, you have the right to:</p>
        <ul class="list-disc pl-5 space-y-1 mb-3">
          <li>Know what personal information has been collected about you</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of the sale of your personal information (this site does not sell personal information)</li>
          <li>Non-discrimination for exercising any of these rights</li>
        </ul>
        <p>To exercise these rights, contact <a href="mailto:Bryan.Markham@icloud.com" class="text-bm-teal hover:underline">Bryan.Markham@icloud.com</a>. Requests will be responded to within 45 days.</p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">7. Children's privacy</h2>
        <p>
          This site is not directed to children under 13 and does not knowingly collect personal information from children.
        </p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">8. Changes to this policy</h2>
        <p>
          This policy may be updated at any time. The effective date at the top reflects the most recent revision. Continued use of the site after changes are posted constitutes acceptance of the revised policy.
        </p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">9. Contact</h2>
        <p>
          Questions about this policy: <a href="mailto:Bryan.Markham@icloud.com" class="text-bm-teal hover:underline">Bryan.Markham@icloud.com</a>
        </p>
      </div>

    </div>
  </section>
</template>
