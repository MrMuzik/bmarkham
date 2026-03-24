import type { CaseStudy } from '@/types/case-study'

export const caseStudies: CaseStudy[] = [
  {
    platform: 'HubSpot CMS',
    title: 'Performance Recovery — A Fortune 500-Backed Racing Fuel Brand',
    context: 'HubSpot CMS · National Motorsport',
    href: '/case-studies/hubspot-performance-recovery',
    metrics: [
      { value: '118s → 0.9s', label: 'LCP' },
      { value: 'CWV ✓', label: 'Core Web Vitals' },
      { value: '100 / 100', label: 'SEO' },
    ],
  },
  {
    platform: 'HubSpot CMS',
    title: 'Landing Page Build — A High-Performance Suspension Company',
    context: 'HubSpot CMS · B2B Motorsport',
    metrics: [
      { value: 'HubSpot', label: 'CMS Platform' },
      { value: 'B2B', label: 'Lead Capture' },
    ],
  },
  {
    platform: 'React · SaaS Platform',
    title: 'Front-End Architecture Overhaul — Groupize',
    context: 'Full-time engagement · Travel management SaaS',
    metrics: [
      { value: '40%', label: 'Load Time' },
      { value: '$2K/mo', label: 'Hosting' },
    ],
  },
  {
    platform: 'Conversion Optimization',
    title: 'Landing Page Conversion System — Red Ventures',
    context: 'Front-End Developer · Conversion Specialist',
    metrics: [
      { value: '+18%', label: 'Conversion' },
      { value: '1K+', label: 'Leads' },
    ],
  },
]
