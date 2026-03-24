/**
 * HubspotCaseStudyView — Detailed case study page for the HubSpot performance recovery project.
 * Standalone card-style page matching the original Svelte design exactly.
 *
 * @composables useHead
 */
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@/composables/useHead'

useHead({
  title: 'HubSpot CMS Performance Recovery — Fortune 500 Racing Fuel Brand | Bryan Markham',
  description:
    'LCP dropped from 118 seconds to 0.9 seconds. Core Web Vitals passed. HubDB architecture rebuilt from scratch to eliminate render-blocking dependency chain.',
  ogTitle: 'HubSpot CMS Performance Recovery — Fortune 500 Racing Fuel Brand',
  ogDescription:
    'LCP: 118s → 0.9s. Core Web Vitals passed mobile and desktop. HubDB architecture rebuilt from scratch.',
  ogImage: 'https://bryanmarkham.com/images/og-racing-fuel.png',
  ogUrl: 'https://bryanmarkham.com/case-studies/hubspot-performance-recovery',
})
</script>

<template>
  <div class="card-wrap">
    <div class="page-label">Case Study · HubSpot CMS</div>

    <div class="case-card">

      <!-- HEADER -->
      <div class="card-header">
        <div class="card-header-left">
          <div class="card-platform">HubSpot CMS Performance Recovery</div>
          <div class="card-title">A Fortune 500-Backed Racing Fuel Brand<br />HubSpot Architecture Rebuild</div>
          <div class="card-meta">HubSpot CMS &nbsp;·&nbsp; National Motorsport &nbsp;·&nbsp; 2024</div>
        </div>
        <div class="cwv-badge">
          <div class="cwv-dot"></div>
          <div class="cwv-text">Core Web Vitals<br />Assessment: Passed</div>
        </div>
      </div>

      <!-- METRICS ROW -->
      <div class="metrics-row">
        <div class="metric-cell before-after">
          <div class="metric-value struck">118s</div>
          <div class="metric-value new">0.9s</div>
          <div class="metric-label">LCP (was → now)</div>
        </div>
        <div class="metric-cell highlight">
          <div class="metric-value">0.7s</div>
          <div class="metric-label">First Contentful Paint</div>
        </div>
        <div class="metric-cell highlight">
          <div class="metric-value">44ms</div>
          <div class="metric-label">Interaction to Next Paint</div>
        </div>
        <div class="metric-cell highlight">
          <div class="metric-value">0.05</div>
          <div class="metric-label">Cumulative Layout Shift</div>
        </div>
        <div class="metric-cell">
          <div class="metric-value blue">100</div>
          <div class="metric-label">SEO Score</div>
        </div>
      </div>

      <!-- BODY -->
      <div class="card-body">
        <div>
          <div class="body-section-label">The Problem</div>
          <p class="body-text">
            A national motorsport fuel brand operating on HubSpot CMS had a catastrophic performance failure. The site was taking over two minutes to load — the root cause was a broken HubDB architecture generating an unresolvable render-blocking dependency chain on every page request. Users were abandoning before the page reached a usable state.
          </p>
          <p class="body-text">
            The site also lacked any structured caching strategy, was serving oversized images with no responsive delivery, and had font loading cascades that delayed first meaningful paint by several seconds. The problems compounded each other.
          </p>

          <div class="body-section-label" style="margin-top: 28px;">What I did</div>
          <ul class="work-items">
            <li class="work-item">Diagnosed and rebuilt the HubDB data architecture from scratch, eliminating the render-blocking chain causing the 118 second failure</li>
            <li class="work-item">Restructured HubSpot template logic to decouple data fetching from render path</li>
            <li class="work-item">Implemented responsive image delivery and proper asset caching strategy across all HubSpot modules</li>
            <li class="work-item">Resolved font loading cascade, removing 400ms from the critical path</li>
            <li class="work-item">Rebuilt custom HubSpot modules to eliminate duplicate and unused JavaScript</li>
          </ul>
        </div>

        <div>
          <div class="body-section-label">Current Lighthouse Scores</div>
          <div class="score-grid">
            <div class="score-cell">
              <div class="score-number green">91</div>
              <div class="score-name">Performance</div>
            </div>
            <div class="score-cell">
              <div class="score-number green">92</div>
              <div class="score-name">Accessibility</div>
            </div>
            <div class="score-cell">
              <div class="score-number green">100</div>
              <div class="score-name">Best Practices</div>
            </div>
            <div class="score-cell">
              <div class="score-number green">100</div>
              <div class="score-name">SEO</div>
            </div>
          </div>

          <div class="cwv-data">
            <div class="body-section-label" style="margin-bottom: 8px;">Real User Data (CWV)</div>
            <div class="cwv-stats">
              LCP &nbsp;&nbsp;&nbsp;&nbsp; <span class="cwv-pass">0.9s ✓</span><br />
              INP &nbsp;&nbsp;&nbsp;&nbsp; <span class="cwv-pass">44ms ✓</span><br />
              CLS &nbsp;&nbsp;&nbsp;&nbsp; <span class="cwv-pass">0.05 ✓</span><br />
              FCP &nbsp;&nbsp;&nbsp;&nbsp; <span class="cwv-pass">0.7s ✓</span>
            </div>
          </div>

          <div class="verified-note">
            Verified via PageSpeed Insights<br />
            Real user data, 28-day period<br />
            Mar 18, 2026
          </div>
        </div>
      </div>

      <!-- FOOTER -->
      <div class="card-footer">
        <div class="footer-attribution">All conclusions based on observable, public data</div>
      </div>

    </div>

    <nav class="page-nav">
      <RouterLink to="/" class="back-link">← Back to bryanmarkham.com</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
/* ── CARD WRAPPER ── */
.card-wrap {
  max-width: 860px;
  margin: 0 auto;
  padding: 48px 24px;
}

/* ── PAGE LABEL ── */
.page-label {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: #6A5848;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 28px;
}

/* ── CARD ── */
.case-card {
  background: #0F0800;
  border: 1px solid rgba(255, 106, 0, 0.35);
  border-radius: 12px;
  overflow: hidden;
}

/* ── HEADER BAND ── */
.card-header {
  background: linear-gradient(135deg, #1A0C04 0%, #2C1A0E 100%);
  border-bottom: 1px solid rgba(255, 106, 0, 0.35);
  padding: 32px 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}

.card-header-left {
  flex: 1;
}

.card-platform {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #FF6A00;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.card-platform::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #FF6A00;
}

.card-title {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.15;
  color: #F5EDE0;
  letter-spacing: -0.01em;
  margin-bottom: 8px;
}

.card-meta {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: #6A5848;
  letter-spacing: 0.05em;
}

.cwv-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(52, 211, 153, 0.08);
  border: 1px solid rgba(45, 212, 191, 0.25);
  border-radius: 6px;
  padding: 10px 16px;
  flex-shrink: 0;
  align-self: flex-start;
}

.cwv-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34D399;
  flex-shrink: 0;
}

.cwv-text {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: #34D399;
  letter-spacing: 0.06em;
  line-height: 1.4;
  white-space: nowrap;
}

/* ── METRICS ROW ── */
.metrics-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.metric-cell {
  padding: 22px 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
}

.metric-cell:last-child {
  border-right: none;
}

.metric-cell.highlight {
  background: rgba(104, 211, 145, 0.04);
}

.metric-cell.before-after {
  background: rgba(99, 179, 237, 0.04);
}

.metric-value {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: #34D399;
  line-height: 1;
  margin-bottom: 5px;
  letter-spacing: -0.01em;
}

.metric-value.blue {
  color: #FF6A00;
}

.metric-value.struck {
  color: #6A5848;
  text-decoration: line-through;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 2px;
}

.metric-value.new {
  font-size: 22px;
  font-weight: 800;
  color: #34D399;
}

.metric-label {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: #6A5848;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.4;
}

/* ── BODY ── */
.card-body {
  padding: 32px 40px;
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.body-section-label {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6A5848;
  margin-bottom: 12px;
}

.body-text {
  font-size: 15px;
  color: #9A8878;
  line-height: 1.7;
  font-weight: 300;
}

.body-text + .body-text {
  margin-top: 14px;
}

/* ── WHAT I DID ── */
.work-items {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
}

.work-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #9A8878;
  line-height: 1.5;
  font-weight: 300;
}

.work-item::before {
  content: '→';
  color: #FF6A00;
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  flex-shrink: 0;
  margin-top: 2px;
}

/* ── SCORE GRID ── */
.score-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.score-cell {
  background: #1A1000;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 14px 16px;
  text-align: center;
}

.score-number {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 26px;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 4px;
}

.score-number.green {
  color: #34D399;
}

.score-name {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  color: #6A5848;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.cwv-data {
  margin-top: 20px;
  background: rgba(104, 211, 145, 0.06);
  border: 1px solid rgba(45, 212, 191, 0.25);
  border-radius: 6px;
  padding: 16px;
}

.cwv-stats {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: #9A8878;
  line-height: 2;
  letter-spacing: 0.03em;
}

.cwv-pass {
  color: #34D399;
}

.verified-note {
  margin-top: 16px;
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: #6A5848;
  letter-spacing: 0.04em;
  line-height: 1.6;
}

/* ── FOOTER ── */
.card-footer {
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.footer-attribution {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: #6A5848;
  letter-spacing: 0.04em;
}

/* ── PAGE NAV ── */
.page-nav {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.back-link {
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  color: #6A5848;
  text-decoration: none;
  letter-spacing: 0.06em;
  transition: color 0.2s;
}

.back-link:hover {
  color: #9A8878;
}

/* ── RESPONSIVE ── */
@media (max-width: 700px) {
  .card-wrap {
    padding: 24px 16px;
  }

  .card-header {
    padding: 24px;
    flex-direction: column;
    gap: 16px;
  }

  .metrics-row {
    grid-template-columns: repeat(3, 1fr);
  }

  .metric-cell:nth-child(3) {
    border-right: none;
  }

  .metric-cell:nth-child(4) {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .metric-cell:nth-child(5) {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-right: none;
  }

  .card-body {
    grid-template-columns: 1fr;
    padding: 24px;
    gap: 28px;
  }

  .card-footer {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 24px;
    gap: 8px;
  }
}
</style>
