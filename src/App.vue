<script setup lang="ts">
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import CookieNotice from '@/components/CookieNotice.vue'
</script>

<template>
  <SiteNav />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
  <CookieNotice />
</template>
