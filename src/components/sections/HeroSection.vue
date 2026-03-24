/**
 * HeroSection — Main hero area with tag, headline, subtext, CTAs, and headshot.
 * Includes staggered fadeUp animations.
 * Responsive: single column on mobile with photo on top, two columns on desktop.
 */
<script setup lang="ts">
</script>

<template>
  <section class="hero-section border-b border-site-border relative z-[1]">
    <div class="max-w-[1000px] mx-auto px-8">
      <div class="hero-grid">
        <!-- Text content -->
        <div class="hero-copy">
          <div class="hero-tag">Senior Front-End Engineer</div>
          <h1 class="hero-headline">
            I fix slow, broken, and
            underperforming <span class="text-site-orange">HubSpot</span>
            and Shopify builds.
            <span class="text-site-orange">Fast.</span>
          </h1>
          <p class="hero-sub">
            18 years of front-end engineering focused on performance recovery,
            funnel optimization, and CMS architecture. I diagnose the problem,
            ship the fix, and deliver outcomes you can measure.
          </p>
          <div class="hero-actions">
            <a
              href="mailto:bryan.markham@icloud.com"
              class="btn-primary"
            >
              Start a Conversation →
            </a>
            <a
              href="https://www.linkedin.com/in/bryanmarkham/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <!-- Photo -->
        <div class="hero-photo-wrap">
          <img
            src="/images/bmarkham-headshot.jpg"
            alt="Bryan Markham"
            width="280"
            height="373"
            class="hero-photo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 80px 0 72px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 64px;
  align-items: center;
}

.hero-tag {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: #FF6A00;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  animation: fadeUp 0.5s ease both;
}

.hero-tag::before {
  content: '';
  display: block;
  width: 24px;
  height: 1px;
  background: #FF6A00;
}

.hero-headline {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: clamp(32px, 4.5vw, 52px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #F5EDE0;
  margin-bottom: 24px;
  animation: fadeUp 0.5s ease 0.1s both;
}

.hero-sub {
  font-size: 17px;
  color: #9A8878;
  line-height: 1.65;
  max-width: 520px;
  margin-bottom: 36px;
  font-weight: 300;
  animation: fadeUp 0.5s ease 0.2s both;
}

.hero-actions {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  animation: fadeUp 0.5s ease 0.3s both;
}

.btn-primary {
  background: #FF6A00;
  color: #0F0800;
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 13px 24px;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary:hover {
  background: #FF8C38;
  transform: translateY(-1px);
}

.btn-secondary {
  color: #9A8878;
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  letter-spacing: 0.05em;
  text-decoration: none;
  padding: 13px 0;
  transition: color 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-secondary:hover {
  color: #F5EDE0;
}

.hero-photo-wrap {
  position: relative;
  animation: fadeUp 0.6s ease 0.15s both;
}

.hero-photo {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 8px;
  filter: grayscale(15%);
  display: block;
}

.hero-photo-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  border: 1px solid rgba(255, 106, 0, 0.35);
  pointer-events: none;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 48px 0 40px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-photo-wrap {
    order: -1;
    max-width: 220px;
  }

  .hero-photo {
    aspect-ratio: 1/1;
  }
}
</style>
