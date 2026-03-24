import { type ReactNode } from 'react'
import { isValidExternalUrl } from '../utils/security'

interface SocialLinkProps {
  href: string
  label: string
  children: ReactNode
}

export default function SocialLink({ href, label, children }: SocialLinkProps) {
  if (!isValidExternalUrl(href)) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/15 hover:border-white hover:-translate-y-1 hover:shadow-lg transition-all"
      aria-label={label}
    >
      {children}
    </a>
  )
}
