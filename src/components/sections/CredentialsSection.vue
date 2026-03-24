/**
 * CredentialsSection — 2-column grid of credential cards with orange dots.
 * Responsive: single column on mobile, two columns on desktop.
 */
<script setup lang="ts">
import { credentials } from '@/data/credentials'
import SectionLabel from '@/components/ui/SectionLabel.vue'
import CredentialItem from '@/components/ui/CredentialItem.vue'
</script>

<template>
  <section class="section">
    <div class="max-w-[1000px] mx-auto px-8">
      <SectionLabel label="Credentials" />
      <div class="cred-grid">
        <CredentialItem
          v-for="(cred, i) in credentials"
          :key="i"
          :title="cred.title"
          :issuer="cred.issuer"
          :year="cred.year"
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

.section:last-child {
  border-bottom: none;
}

.cred-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

@media (max-width: 768px) {
  .cred-grid {
    grid-template-columns: 1fr;
  }
}
</style>
