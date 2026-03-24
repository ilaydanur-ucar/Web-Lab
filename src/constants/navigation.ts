import type { Category } from '../types/project'

export const NAV_LINKS = [
  { id: '#about', label: 'Hakkımda' },
  { id: '#projects', label: 'Projelerim' },
  { id: '#contact', label: 'İletişim' },
] as const

export const CATEGORY_LABELS: Record<Category | 'all', string> = {
  all: 'Tümü',
  frontend: 'Frontend',
  fullstack: 'Full Stack',
  backend: 'Backend',
}

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/ilaydanurucar/',
  github: 'https://github.com/ilaydanur-ucar',
} as const
