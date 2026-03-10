import { type ReactNode } from 'react'
import { cn } from '../lib/cn'

/** Card stil varyantları */
type CardVariant = 'elevated' | 'outlined' | 'filled'

interface CardProps {
    /** Stil varyantı */
    variant?: CardVariant
    /** Kart başlığı */
    title?: string
    /** Üst kısım görseli */
    image?: string
    /** Görsel alt metni (a11y) */
    imageAlt?: string
    /** Alt bilgi bölümü */
    footer?: ReactNode
    /** Kart içeriği */
    children: ReactNode
    /** Ek className */
    className?: string
}

/** Varyant stil haritası */
const VARIANT_CLASSES: Record<CardVariant, string> = {
    elevated: cn(
        'bg-white dark:bg-gray-800',
        'shadow-md hover:shadow-lg',
    ),
    outlined: cn(
        'bg-white dark:bg-gray-800',
        'border border-gray-200 dark:border-gray-700',
    ),
    filled: cn(
        'bg-gray-100 dark:bg-gray-800',
    ),
}

/**
 * Card Component
 *
 * SOLID — Single Responsibility: Yalnızca kart UI render mantığı.
 * Varyantlar: elevated (gölgeli), outlined (çerçeveli), filled (dolgulu).
 *
 * @example
 * <Card variant="elevated" title="Proje A" image="proje.jpg" imageAlt="Proje ekranı">
 *   <p>İçerik</p>
 * </Card>
 */
export default function Card({
    variant = 'elevated',
    title,
    image,
    imageAlt,
    footer,
    children,
    className,
}: CardProps) {
    return (
        <div
            className={cn(
                'rounded-xl overflow-hidden transition-shadow',
                VARIANT_CLASSES[variant],
                className,
            )}
        >
            {/* Görsel */}
            {image && (
                <img
                    src={image}
                    alt={imageAlt || ''}
                    className="w-full h-48 object-cover"
                />
            )}

            {/* İçerik */}
            <div className="p-5">
                {title && (
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {title}
                    </h3>
                )}
                <div className="text-gray-600 dark:text-gray-400">
                    {children}
                </div>
            </div>

            {/* Footer */}
            {footer && (
                <div className="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700">
                    {footer}
                </div>
            )}
        </div>
    )
}
