/**
 * App — Root application component.
 * Provides global layout with SiteNav, RouterView, and SiteFooter.
 */
<script setup lang="ts">
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
</script>

<template>
  <SiteNav />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>
