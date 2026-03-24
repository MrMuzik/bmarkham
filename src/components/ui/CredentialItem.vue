/**
 * CredentialItem — Displays a single credential with orange dot, title, issuer and year.
 * Used in a 2-column grid in the credentials section.
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
  <div class="cred">
    <div class="cred-dot"></div>
    <div class="cred-text">
      {{ title }}
      <span class="cred-issuer">{{ issuer }} · {{ year }}</span>
    </div>
  </div>
</template>

<style scoped>
.cred {
  background: #0F0800;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 18px 22px;
  display: flex;
  align-items: center;
  gap: 14px;
}

.cred-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #FF6A00;
  flex-shrink: 0;
}

.cred-text {
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  color: #7A6858;
  letter-spacing: 0.03em;
  line-height: 1.5;
}

.cred-issuer {
  display: block;
  color: #4A3828;
  font-size: 11px;
  margin-top: 2px;
}
</style>
