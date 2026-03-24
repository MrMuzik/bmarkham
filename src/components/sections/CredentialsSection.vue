/**
 * CredentialsSection — List of professional credentials and certifications.
 * Responsive: single column layout on all breakpoints.
 */
<script setup lang="ts">
import { credentials } from '@/data/credentials'
import SectionLabel from '@/components/ui/SectionLabel.vue'
import CredentialItem from '@/components/ui/CredentialItem.vue'
</script>

<template>
  <section class="py-16 md:py-20">
    <div class="max-w-5xl mx-auto px-6">
      <SectionLabel label="Credentials" />
      <div class="border border-site-border rounded-lg bg-site-card p-6">
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
