import type { Metric } from './metric'

/** Represents a case study card on the homepage. */
export interface CaseStudy {
  platform: string
  title: string
  context: string
  href?: string
  metrics: Metric[]
}
