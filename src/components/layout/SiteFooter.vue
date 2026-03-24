/**
 * SiteFooter — Site footer with copyright and navigation links.
 * Matches original design: mono font, muted colors, border-top separator.
 */
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <span class="footer-copy">&copy; 2026 Bryan Markham</span>
      <div class="footer-links">
        <a
          href="https://www.linkedin.com/in/bryanmarkham/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          LinkedIn ↗
        </a>
        <RouterLink
          to="/case-studies/hubspot-performance-recovery"
          class="footer-link"
        >
          Case Study
        </RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 28px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  z-index: 1;
}

.footer-inner {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-copy {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: #6A5848;
  letter-spacing: 0.06em;
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-link {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: #6A5848;
  text-decoration: none;
  letter-spacing: 0.06em;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #9A8878;
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>
