import { ref, computed, onMounted, onUnmounted } from 'vue'

/**
 * Tracks the current scroll position.
 * Returns reactive scrollY ref and computed isScrolled boolean.
 */
export function useScrollPosition() {
  const scrollY = ref(0)
  const isScrolled = computed(() => scrollY.value > 20)

  function handler() {
    scrollY.value = window.scrollY
  }

  onMounted(() => {
    scrollY.value = window.scrollY
    window.addEventListener('scroll', handler, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handler)
  })

  return { scrollY, isScrolled }
}
