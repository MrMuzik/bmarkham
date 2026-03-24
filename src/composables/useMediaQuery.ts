import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Reactive media query composable.
 * Accepts a CSS media query string and returns a reactive boolean.
 * Uses window.matchMedia with change listener.
 */
export function useMediaQuery(query: string) {
  const matches = ref(false)
  let mediaQuery: MediaQueryList | null = null

  function handler(e: MediaQueryListEvent) {
    matches.value = e.matches
  }

  onMounted(() => {
    mediaQuery = window.matchMedia(query)
    matches.value = mediaQuery.matches
    mediaQuery.addEventListener('change', handler)
  })

  onUnmounted(() => {
    mediaQuery?.removeEventListener('change', handler)
  })

  return matches
}
