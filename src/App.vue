/**
 * App — Root application component.
 * Shows SiteNav and SiteFooter only on the homepage.
 * Case study pages are standalone card layouts.
 */
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

const route = useRoute()
const isHomepage = computed(() => route.path === '/')
</script>

<template>
  <SiteNav v-if="isHomepage" />
  <main>
    <RouterView />
  </main>
  <SiteFooter v-if="isHomepage" />
</template>
