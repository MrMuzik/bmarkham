<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@/composables/useHead'
onMounted(() => {
  useHead({
    title: 'Terms of Use — Bryan Markham',
    description: 'Terms of use for bryanmarkham.com.',
    ogTitle: 'Terms of Use — Bryan Markham',
    ogDescription: 'Terms of use for bryanmarkham.com.',
    ogUrl: 'https://bryanmarkham.com/terms',
  })
})
</script>

<template>
  <section class="bg-bm-slate text-white pt-40 pb-16 px-6">
    <div class="max-w-4xl mx-auto">
      <p class="eyebrow text-bm-seafoam mb-6">LEGAL</p>
      <h1 class="font-display font-medium text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] tracking-tight max-w-2xl">
        Terms of Use
      </h1>
      <p class="mt-4 font-mono font-normal text-[12px] text-white/40 tracking-[0.06em]">Effective June 14, 2026</p>
    </div>
  </section>

  <section class="bg-bm-cream py-16 px-6">
    <div class="max-w-2xl mx-auto space-y-10 text-[15px] leading-[1.75] text-bm-slate/80">

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">1. Agreement</h2>
        <p>
          By using bryanmarkham.com (the "Site"), you agree to these Terms of Use. If you do not agree, do not use the Site.
        </p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">2. About this site</h2>
        <p>
          The Site is operated by Bryan Markham and provides information about the Margin Leak Audit service and related diagnostic work for direct-to-consumer brands. Content on this Site is for informational purposes only and does not constitute professional, financial, or legal advice.
        </p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">3. Intellectual property</h2>
        <p>
          All content on this Site — including text, design, images, and code — is the property of the operator and may not be copied, reproduced, or distributed without prior written permission.
        </p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">4. The audit service</h2>
        <p>
          The Margin Leak Audit is a private diagnostic service. Submitting a request form does not guarantee acceptance. Acceptance is confirmed in writing. Specific terms applicable to any engagement are communicated at the time of confirmation.
        </p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">5. Disclaimer of warranties</h2>
        <p>
          The Site and its contents are provided "as is" without any warranty, express or implied. Results described on the Site reflect individual client experiences and are not guaranteed for any specific engagement.
        </p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">6. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, the operator shall not be liable for any indirect, incidental, or consequential damages arising from your use of this Site or the services described herein.
        </p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">7. Third-party links</h2>
        <p>
          This Site links to third-party websites, including CitedScore and LinkedIn. The operator is not responsible for the content, accuracy, or practices of those sites.
        </p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">8. Changes</h2>
        <p>
          These terms may be updated at any time. The effective date at the top reflects the most recent revision. Continued use of the Site after changes are posted constitutes acceptance of the revised terms.
        </p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">9. Governing law</h2>
        <p>
          These terms are governed by the laws of the State of North Carolina, without regard to conflict of law principles. Any dispute arising from these terms shall be resolved in the courts of Wake County, North Carolina.
        </p>
      </div>

      <div>
        <h2 class="font-display font-medium text-[18px] text-bm-slate mb-3">10. Contact</h2>
        <p>
          Questions about these terms: <a href="mailto:Bryan.Markham@icloud.com" class="text-bm-teal hover:underline">Bryan.Markham@icloud.com</a>
        </p>
      </div>

    </div>
  </section>
</template>
