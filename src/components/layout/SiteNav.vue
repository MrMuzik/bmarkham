<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X, ChevronRight, ArrowUpRight } from '@lucide/vue'

const route = useRoute()
const mobileOpen = ref(false)

function closeMobile() {
  mobileOpen.value = false
}

watch(route, closeMobile)

const navLinks = [
  { label: 'Margin Leak Audit', to: '/margin-leak-audit' },
  { label: 'About', to: '/about' },
]
</script>

<template>
  <!-- Floating nav wrapper — inset from viewport edges -->
  <div class="fixed top-4 left-0 right-0 z-50 px-4">
    <div class="max-w-[640px] mx-auto">

      <!-- Nav card -->
      <div class="bg-white/95 backdrop-blur-sm shadow-[0_2px_16px_rgba(27,38,52,0.10)] border border-bm-border-light rounded-xl overflow-hidden">

        <!-- Header row (always visible) -->
        <div class="flex items-center justify-between pl-4 pr-1.5 py-1.5">

          <RouterLink to="/" @click="closeMobile" class="flex items-center pb-1">
            <img :src="'/images/logo-inline.webp'" alt="Bryan Markham" class="h-5 w-auto" />
          </RouterLink>

          <!-- Desktop links -->
          <nav class="hidden md:flex items-center gap-5">
            <RouterLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="font-body text-[13px] text-bm-slate/65 hover:text-bm-slate transition-colors duration-150"
              exact-active-class="!text-bm-slate underline decoration-bm-teal decoration-[2px] underline-offset-4"
            >
              {{ link.label }}
            </RouterLink>
            <a
              href="https://citedscore.com"
              target="_blank"
              rel="noopener"
              class="font-body text-[13px] inline-flex items-center gap-1 text-bm-slate/65 hover:text-bm-slate transition-colors duration-150"
            >
              CitedScore
              <ArrowUpRight :size="12" />
            </a>
          </nav>

          <!-- Desktop CTA + Mobile toggle -->
          <div class="flex items-center gap-1.5">
            <RouterLink to="/margin-leak-audit#request" class="btn-nav-cta">
              Request a Leak Report
            </RouterLink>
            <button
              @click="mobileOpen = !mobileOpen"
              class="md:hidden p-2 rounded-lg text-bm-slate/70 hover:text-bm-slate hover:bg-bm-slate/6 transition-colors"
              :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
            >
              <X v-if="mobileOpen" :size="20" />
              <Menu v-else :size="20" />
            </button>
          </div>
        </div>

        <!-- Mobile expanded panel -->
        <Transition
          enter-active-class="transition-all duration-200 ease-out overflow-hidden"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-[400px] opacity-100"
          leave-active-class="transition-all duration-150 ease-in overflow-hidden"
          leave-from-class="max-h-[400px] opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <div v-if="mobileOpen" class="md:hidden border-t border-bm-border-light">
            <div class="divide-y divide-bm-border-light">
              <RouterLink
                v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                class="flex items-center justify-between px-5 py-4 text-bm-slate font-display font-medium text-[16px] hover:bg-bm-slate/4 transition-colors"
                exact-active-class="!text-bm-teal"
                @click="closeMobile"
              >
                {{ link.label }}
                <ChevronRight :size="16" class="text-bm-stone" />
              </RouterLink>
              <a
                href="https://citedscore.com"
                target="_blank"
                rel="noopener"
                class="flex items-center justify-between px-5 py-4 text-bm-slate font-display font-medium text-[16px] hover:bg-bm-slate/4 transition-colors"
                @click="closeMobile"
              >
                CitedScore
                <ArrowUpRight :size="16" class="text-bm-stone" />
              </a>
            </div>
            <div class="p-4">
              <RouterLink
                to="/margin-leak-audit#request"
                class="btn-teal w-full py-3 text-[15px]"
                @click="closeMobile"
              >
                Request a Leak Report
              </RouterLink>
            </div>
          </div>
        </Transition>

      </div>
    </div>
  </div>
</template>
