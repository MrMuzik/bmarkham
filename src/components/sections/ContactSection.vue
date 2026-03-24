/**
 * ContactSection — Contact block with availability message and contact links.
 * Orange-accent border, two-column grid layout matching original design.
 */
<script setup lang="ts">
</script>

<template>
  <section class="section">
    <div class="max-w-[1000px] mx-auto px-8">
      <div class="contact-block">
        <div class="contact-copy">
          <div class="contact-headline">
            Available for agency subcontracting and direct engagements.
          </div>
          <p class="contact-sub">Let's talk about your project.</p>
        </div>
        <div class="contact-links">
          <a
            href="mailto:bryan.markham@icloud.com"
            class="contact-link contact-link--accent"
          >
            bryan.markham@icloud.com
          </a>
          <a
            href="https://www.linkedin.com/in/bryanmarkham/"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link"
          >
            LinkedIn ↗
          </a>
          <a
            href="tel:+19804299989"
            class="contact-link"
          >
            (980) 429-9989
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
  color: #7A6858;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.2s;
}

.contact-link:hover {
  color: #F5EDE0;
}

.contact-link--accent {
  color: #FF6A00;
}

.contact-link--accent:hover {
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
