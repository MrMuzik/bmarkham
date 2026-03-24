/**
 * Sets document.title and creates/updates meta tags for SEO.
 * Used by each view to set page-specific metadata.
 */
export function useHead(options: {
  title: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
}) {
  document.title = options.title

  const metaTags: Record<string, string> = {}

  if (options.description) {
    metaTags['description'] = options.description
  }
  if (options.ogTitle) {
    metaTags['og:title'] = options.ogTitle
  }
  if (options.ogDescription) {
    metaTags['og:description'] = options.ogDescription
  }
  if (options.ogImage) {
    metaTags['og:image'] = options.ogImage
  }
  if (options.ogUrl) {
    metaTags['og:url'] = options.ogUrl
  }

  for (const [key, value] of Object.entries(metaTags)) {
    const isOg = key.startsWith('og:')
    const attr = isOg ? 'property' : 'name'
    let el = document.querySelector(`meta[${attr}="${key}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, key)
      document.head.appendChild(el)
    }
    el.setAttribute('content', value)
  }
}
