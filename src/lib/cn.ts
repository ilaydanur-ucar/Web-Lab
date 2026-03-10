import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Conflict-free Tailwind class birleştirme.
 * clsx ile koşullu class'ları birleştirir,
 * tailwind-merge ile çakışan class'ları çözer.
 *
 * Kullanım: cn('bg-red-500', condition && 'bg-blue-500')
 * → condition true ise 'bg-blue-500' döner (çakışma çözülür)
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
