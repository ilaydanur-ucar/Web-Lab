const SAFE_PROTOCOLS = ['https:', 'http:']

/**
 * Harici URL'lerin guvenli olup olmadigini kontrol eder.
 * javascript:, data: gibi tehlikeli protokolleri engeller.
 */
export function isValidExternalUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return SAFE_PROTOCOLS.includes(parsed.protocol)
  } catch {
    return false
  }
}

const VALID_SCROLL_TARGETS = ['#about', '#projects', '#contact'] as const

/**
 * Scroll hedefinin gecerli olup olmadigini kontrol eder.
 * CSS selector injection saldirisini engeller.
 */
export function isValidScrollTarget(targetId: string): boolean {
  return (VALID_SCROLL_TARGETS as readonly string[]).includes(targetId)
}
