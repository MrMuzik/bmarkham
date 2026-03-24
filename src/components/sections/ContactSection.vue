/**
 * ContactSection — "Work Together" section with contact block.
 * Orange-accent border, two-column grid layout matching original design.
 * Includes section header with decorative line.
 */
<script setup lang="ts">
import SectionLabel from '@/components/ui/SectionLabel.vue'
</script>

<template>
  <section class="section">
    <div class="max-w-[1000px] mx-auto px-8">
      <SectionLabel label="Work Together" />
      <div class="contact-block">
        <div class="contact-copy">
          <div class="contact-headline">
            Available for agency subcontracting<br />and direct engagements.
          </div>
          <p class="contact-sub">
            HubSpot CMS, Shopify, React, Vue. Performance audits to full implementations.
          </p>
        </div>
        <div class="contact-links">
          <a
            href="mailto:bryan.markham@icloud.com"
            class="contact-link"
          >
            Start a Conversation →
          </a>
          <a
            href="https://www.linkedin.com/in/bryanmarkham"
            target="_blank"
            rel="noopener"
            class="contact-link"
          >
            linkedin.com/in/bryanmarkham
          </a>
          <a
            href="tel:9496377120"
            class="contact-link"
          >
            (949) 637-7120
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 72px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.section:last-child {
  border-bottom: none;
}

.contact-block {
  background: #0F0800;
  border: 1px solid rgba(255, 106, 0, 0.35);
  border-radius: 8px;
  padding: 48px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
  align-items: center;
}

.contact-headline {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: #F5EDE0;
  margin-bottom: 10px;
  line-height: 1.2;
}

.contact-sub {
  font-size: 15px;
  color: #7A6858;
  font-weight: 300;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;
}

.contact-link {
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  color: #FF6A00;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.2s;
}

.contact-link:hover {
  color: #FF8C38;
}

@media (max-width: 768px) {
  .contact-block {
    grid-template-columns: 1fr;
    padding: 32px;
    gap: 28px;
  }

  .contact-links {
    align-items: flex-start;
  }
}
</style>
