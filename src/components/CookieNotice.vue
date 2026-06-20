<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const STORAGE_KEY = 'bm-cookie-notice-dismissed'
const dismissed = ref(typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY) === '1')

function dismiss() {
  localStorage.setItem(STORAGE_KEY, '1')
  dismissed.value = true
}
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-if="!dismissed"
      class="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-bm-teal/85 to-bm-dusk/90 backdrop-blur-lg border-t border-white/20 px-6 py-4"
    >
      <div class="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p class="text-[13px] text-white/85 leading-[1.6] max-w-xl">
          This site uses Google Analytics to understand how visitors use the site. No advertising tracking.
          <RouterLink to="/privacy" class="text-white underline underline-offset-2 hover:text-white/80 transition-colors ml-1">
            Privacy Policy
          </RouterLink>
        </p>
        <button
          @click="dismiss"
          class="shrink-0 font-body text-[13px] font-medium text-white bg-white/20 hover:bg-white/30 border border-white/30 rounded px-4 py-1.5 transition-colors duration-150 whitespace-nowrap"
        >
          Got it
        </button>
      </div>
    </div>
  </Transition>
</template>
