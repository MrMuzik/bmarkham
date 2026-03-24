import type { CaseStudy } from '@/types/case-study'

export const caseStudies: CaseStudy[] = [
  {
    platform: 'HubSpot CMS',
    title: 'Performance Recovery — A Fortune 500-Backed Racing Fuel Brand',
    context: 'HubSpot CMS · National Motorsport',
    description:
      'Diagnosed catastrophic load performance on a HubSpot CMS platform serving a national motorsport brand. Rebuilt the HubDB architecture from scratch, restructured template logic, and eliminated the render-blocking dependency chain causing the failure. The site now passes Google Core Web Vitals with verified real user data.',
    href: '/case-studies/hubspot-performance-recovery',
    metrics: [
      { value: '118s → 0.9s', label: 'LCP (was → now)' },
      { value: 'CWV ✓', label: 'Core Web Vitals Passed' },
      { value: '100 / 100', label: 'SEO · Best Practices' },
    ],
  },
  {
    platform: 'HubSpot CMS',
    title: 'Landing Page Build — A High-Performance Suspension Company',
    context: 'HubSpot CMS · B2B Motorsport',
    description:
      'Built a custom HubSpot CMS landing page to support a targeted B2B marketing campaign. Used Sprocket Rocket to develop fully custom modules aligned with brand guidelines, optimized for lead capture, and responsive across all devices. Delivered a flexible, easy-to-edit page architecture the client\'s marketing team could maintain and iterate without developer support. Focused on conversion-driven layout, mobile-first performance, and clean module structure for ongoing campaign use.',
    metrics: [
      { value: 'HubSpot', label: 'CMS Platform' },
      { value: 'B2B', label: 'Lead Capture Page' },
    ],
  },
  {
    platform: 'React · SaaS Platform',
    title: 'Front-End Architecture Overhaul — Groupize',
    context: 'Full-time engagement · Travel management SaaS',
    description:
      'Sole front-end engineer on a fast-moving SaaS platform. Resolved critical memory overload issues, optimized asset delivery, and built a reusable component system that reduced development cycles by 50%. Performance gains translated directly to infrastructure cost savings.',
    metrics: [
      { value: '40%', label: 'Load Time Reduction' },
      { value: '$2K/mo', label: 'Hosting Costs Saved' },
    ],
  },
  {
    platform: 'Conversion Optimization',
    title: 'Landing Page Conversion System — Red Ventures',
    context: 'Front-End Developer · Conversion Specialist',
    description:
      'Built modular front-end components and 10+ responsive landing pages for high-traffic marketing campaigns. Collaborated cross-functionally with UX and paid media teams to optimize page-to-conversion flow. Campaigns generated 1,000+ qualified leads over 3 months.',
    metrics: [
      { value: '+18%', label: 'Conversion Rate' },
      { value: '1K+', label: 'Qualified Leads' },
    ],
  },
]
