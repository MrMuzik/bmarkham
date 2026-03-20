<svelte:head>
  <title>Case Study — Sunoco Race Fuels / HubSpot CMS Performance Recovery</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin" />
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
</svelte:head>

<div class="card-wrap">
  <div class="page-label">Case Study · HubSpot CMS</div>

  <div class="case-card">

    <!-- HEADER -->
    <div class="card-header">
      <div class="card-header-left">
        <div class="card-platform">HubSpot CMS Performance Recovery</div>
        <div class="card-title">Sunoco Race Fuels<br />HubSpot Architecture Rebuild</div>
        <div class="card-meta">Via agency engagement &nbsp;·&nbsp; sunocoracefuels.com &nbsp;·&nbsp; 2024</div>
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
      <div class="footer-attribution">Via agency engagement &nbsp;·&nbsp; All conclusions based on observable, public data</div>
      <a href="https://www.sunocoracefuels.com/fuels" target="_blank" rel="noopener" class="footer-link">View live site ↗</a>
    </div>

  </div>

  <nav class="page-nav">
    <a href="/" class="back-link">← Back to bryanmarkham.com</a>
  </nav>
</div>

<style>
  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }

  :global(:root) {
    --bg: #2C1A0E;
    --bg-card: #0F0800;
    --bg-card-2: #1A1000;
    --border: rgba(255,255,255,0.08);
    --border-accent: rgba(255,106,0,0.35);
    --border-green: rgba(45,212,191,0.25);
    --text-primary: #F5EDE0;
    --text-secondary: #9A8878;
    --text-muted: #6A5848;
    --accent: #FF6A00;
    --accent-warm: #34D399;
    --font-display: 'Barlow Semi Condensed', sans-serif;
    --font-mono: 'DM Mono', monospace;
    --font-body: 'DM Sans', sans-serif;
  }

  :global(html) { scroll-behavior: smooth; }

  :global(body) {
    background: var(--bg);
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    padding: 48px 24px;
  }

  /* ── CARD WRAPPER ── */
  .card-wrap {
    max-width: 860px;
    margin: 0 auto;
  }

  /* ── CARD ── */
  .case-card {
    background: var(--bg-card);
    border: 1px solid var(--border-accent);
    border-radius: 12px;
    overflow: hidden;
  }

  /* ── HEADER BAND ── */
  .card-header {
    background: linear-gradient(135deg, #1A0C04 0%, #2C1A0E 100%);
    border-bottom: 1px solid var(--border-accent);
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
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--accent);
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
    background: var(--accent);
  }

  .card-title {
    font-family: var(--font-display);
    font-size: 24px;
    font-weight: 800;
    line-height: 1.15;
    color: var(--text-primary);
    letter-spacing: -0.01em;
    margin-bottom: 8px;
  }

  .card-meta {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
    letter-spacing: 0.05em;
  }

  .cwv-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(52,211,153,0.08);
    border: 1px solid var(--border-green);
    border-radius: 6px;
    padding: 10px 16px;
    flex-shrink: 0;
    align-self: flex-start;
  }

  .cwv-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent-warm);
    flex-shrink: 0;
  }

  .cwv-text {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent-warm);
    letter-spacing: 0.06em;
    line-height: 1.4;
    white-space: nowrap;
  }

  /* ── METRICS ROW ── */
  .metrics-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 1px solid var(--border);
  }

  .metric-cell {
    padding: 22px 24px;
    border-right: 1px solid var(--border);
    position: relative;
  }

  .metric-cell:last-child { border-right: none; }

  .metric-cell.highlight {
    background: rgba(104,211,145,0.04);
  }

  .metric-cell.before-after {
    background: rgba(99,179,237,0.04);
  }

  .metric-value {
    font-family: var(--font-display);
    font-size: 22px;
    font-weight: 800;
    color: var(--accent-warm);
    line-height: 1;
    margin-bottom: 5px;
    letter-spacing: -0.01em;
  }

  .metric-value.blue { color: var(--accent); }

  .metric-value.struck {
    color: var(--text-muted);
    text-decoration: line-through;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 2px;
  }

  .metric-value.new {
    font-size: 22px;
    font-weight: 800;
    color: var(--accent-warm);
  }

  .metric-label {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
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
    border-bottom: 1px solid var(--border);
  }

  .body-section-label {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 12px;
  }

  .body-text {
    font-size: 15px;
    color: var(--text-secondary);
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
  }

  .work-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.5;
    font-weight: 300;
  }

  .work-item::before {
    content: '→';
    color: var(--accent);
    font-family: var(--font-mono);
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
    background: var(--bg-card-2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 14px 16px;
    text-align: center;
  }

  .score-number {
    font-family: var(--font-display);
    font-size: 26px;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 4px;
  }

  .score-number.green { color: var(--accent-warm); }
  .score-number.blue { color: var(--accent); }

  .score-name {
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .cwv-data {
    margin-top: 20px;
    background: rgba(104,211,145,0.06);
    border: 1px solid var(--border-green);
    border-radius: 6px;
    padding: 16px;
  }

  .cwv-stats {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-secondary);
    line-height: 2;
    letter-spacing: 0.03em;
  }

  .cwv-pass {
    color: var(--accent-warm);
  }

  .verified-note {
    margin-top: 16px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
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
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
    letter-spacing: 0.04em;
  }

  .footer-link {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent);
    text-decoration: none;
    letter-spacing: 0.06em;
    transition: color 0.2s;
  }

  .footer-link:hover { color: #FF8C38; }

  /* ── STANDALONE PAGE ELEMENTS ── */
  .page-label {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
    letter-spacing: 0.10em;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 28px;
  }

  .page-nav {
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }

  .back-link {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--text-muted);
    text-decoration: none;
    letter-spacing: 0.06em;
    transition: color 0.2s;
  }

  .back-link:hover { color: var(--text-secondary); }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    :global(body) { padding: 24px 16px; }

    .card-header {
      padding: 24px;
      flex-direction: column;
      gap: 16px;
    }

    .metrics-row {
      grid-template-columns: repeat(3, 1fr);
    }

    .metric-cell:nth-child(3) { border-right: none; }
    .metric-cell:nth-child(4) { border-top: 1px solid var(--border); }
    .metric-cell:nth-child(5) {
      border-top: 1px solid var(--border);
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
