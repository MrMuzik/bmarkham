/**
 * HeroSection — Main hero area with tag, headline, subtext, CTAs, and headshot.
 * Includes staggered fadeUp animations.
 * Responsive: single column on mobile with photo on top, two columns on desktop.
 */
<script setup lang="ts">
</script>

<template>
  <section class="pt-28 pb-16 md:pt-36 md:pb-20">
    <div class="max-w-5xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-start gap-10 md:gap-16">
        <!-- Text content -->
        <div class="flex-1 order-1 md:order-none">
          <p class="font-mono text-xs uppercase tracking-widest text-site-orange mb-4 opacity-0 animate-fade-up">
            Senior Front-End Engineer
          </p>
          <h1 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-site-text opacity-0 animate-fade-up-d1">
            I fix slow, broken, and underperforming
            <span class="text-site-orange">HubSpot</span> and Shopify builds.
            <span class="text-site-orange">Fast.</span>
          </h1>
          <p class="text-base md:text-lg text-site-text-secondary leading-relaxed mb-8 max-w-xl opacity-0 animate-fade-up-d2">
            18 years of front-end engineering focused on performance recovery, funnel optimization,
            and CMS architecture. I diagnose the problem, ship the fix, and deliver outcomes you can measure.
          </p>
          <div class="flex flex-wrap items-center gap-4 opacity-0 animate-fade-up-d3">
            <a
              href="mailto:bryan.markham@icloud.com"
              class="inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 bg-site-orange text-site-dark rounded font-medium hover:bg-site-orange-hover transition-colors duration-200"
            >
              Start a Conversation →
            </a>
            <a
              href="https://www.linkedin.com/in/bryanmarkham/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 border border-site-border rounded text-site-text-secondary hover:text-site-text hover:border-site-text-muted transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <!-- Photo -->
        <div class="order-first md:order-none flex-shrink-0 opacity-0 animate-fade-up-d15">
          <div class="hero-photo-wrapper relative w-full max-w-[220px] md:max-w-[280px]">
            <img
              src="/images/bmarkham-headshot.jpg"
              alt="Bryan Markham"
              width="280"
              height="373"
              class="w-full rounded-lg object-cover aspect-square md:aspect-[3/4] grayscale-[15%]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- Photo border overlay — requires pseudo-element, cannot be expressed with Tailwind utilities -->
<style scoped>
.hero-photo-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  pointer-events: none;
}
</style>
