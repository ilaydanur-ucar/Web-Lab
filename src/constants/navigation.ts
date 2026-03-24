import type { Category } from '../types/project'

export const NAV_LINKS = [
  { id: '#about', label: 'Hakkimda' },
  { id: '#projects', label: 'Projelerim' },
  { id: '#contact', label: 'Iletisim' },
] as const

export const CATEGORY_LABELS: Record<Category | 'all', string> = {
  all: 'Tumu',
  frontend: 'Frontend',
  fullstack: 'Full Stack',
  backend: 'Backend',
}

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/ilaydanurucar/',
  github: 'https://github.com/ilaydanur-ucar',
} as const
