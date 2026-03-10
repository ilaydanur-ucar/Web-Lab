import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../lib/cn'

/** Button varyant türleri */
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Renk varyantı */
    variant?: ButtonVariant
    /** Boyut varyantı */
    size?: ButtonSize
    /** Buton içeriği */
    children: ReactNode
}

/** Temel stiller — tüm varyantlarda ortak */
const BASE_CLASSES =
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer'

/** Renk varyantları haritası */
const VARIANT_CLASSES: Record<ButtonVariant, string> = {
    primary: cn(
        'bg-primary text-white',
        'hover:bg-primary-dark',
        'focus:ring-primary',
        'dark:bg-primary dark:hover:bg-primary-dark',
    ),
    secondary: cn(
        'bg-gray-200 text-gray-800',
        'hover:bg-gray-300',
        'focus:ring-gray-500',
        'dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600',
    ),
    danger: cn(
        'bg-error text-white',
        'hover:bg-red-700',
        'focus:ring-error',
        'dark:bg-red-500 dark:hover:bg-red-400',
    ),
    ghost: cn(
        'bg-transparent text-gray-700',
        'hover:bg-gray-100',
        'focus:ring-gray-400',
        'dark:text-gray-300 dark:hover:bg-gray-800',
    ),
}

/** Boyut varyantları haritası */
const SIZE_CLASSES: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
}

/**
 * Button Component
 *
 * SOLID — Single Responsibility: Yalnızca buton render mantığı.
 * 4 renk × 3 boyut = 12 varyant + disabled durumu.
 *
 * @example
 * <Button variant="primary" size="lg">Kaydet</Button>
 * <Button variant="danger" size="sm" disabled>Sil</Button>
 */
export default function Button({
    variant = 'primary',
    size = 'md',
    disabled,
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                BASE_CLASSES,
                VARIANT_CLASSES[variant],
                SIZE_CLASSES[size],
                disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
                className,
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}
