/**
 * CredentialItem — Displays a single credential/certification with title, issuer, and year.
 * Used in the credentials section on the homepage.
 *
 * @props title - The credential title
 * @props issuer - The issuing organization
 * @props year - The year obtained
 */
<script setup lang="ts">
interface Props {
  title: string
  issuer: string
  year: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-start justify-between gap-4 py-4 border-b border-site-border last:border-b-0">
    <div>
      <h3 class="font-display text-sm font-medium text-site-text">{{ title }}</h3>
      <p class="font-mono text-xs text-site-text-muted mt-1">{{ issuer }} · {{ year }}</p>
    </div>
  </div>
</template>
