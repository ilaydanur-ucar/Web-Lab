import { type ReactNode } from 'react'
import { cn } from '../lib/cn'

/** Alert renk varyantları */
type AlertVariant = 'info' | 'success' | 'warning' | 'error'

interface AlertProps {
    /** Renk varyantı */
    variant?: AlertVariant
    /** Başlık metni */
    title?: string
    /** Kapatılabilir mi? */
    dismissible?: boolean
    /** Kapatma callback'i */
    onDismiss?: () => void
    /** Alert içeriği */
    children: ReactNode
    /** Ek className */
    className?: string
}

/** Varyant renk haritası */
const VARIANT_CLASSES: Record<AlertVariant, string> = {
    info: cn(
        'bg-blue-50 border-blue-500 text-blue-800',
        'dark:bg-blue-950 dark:text-blue-200',
    ),
    success: cn(
        'bg-green-50 border-green-500 text-green-800',
        'dark:bg-green-950 dark:text-green-200',
    ),
    warning: cn(
        'bg-amber-50 border-amber-500 text-amber-800',
        'dark:bg-amber-950 dark:text-amber-200',
    ),
    error: cn(
        'bg-red-50 border-red-500 text-red-800',
        'dark:bg-red-950 dark:text-red-200',
    ),
}

/**
 * Alert Component
 *
 * SOLID — Single Responsibility: Yalnızca bildirim/uyarı mesajı render mantığı.
 * Varyantlar: info, success, warning, error.
 * Erişilebilirlik: role="alert" ile ekran okuyucu desteği.
 *
 * @example
 * <Alert variant="error" title="Hata" dismissible onDismiss={() => {}}>
 *   Bağlantı kurulamadı.
 * </Alert>
 */
export default function Alert({
    variant = 'info',
    title,
    dismissible = false,
    onDismiss,
    children,
    className,
}: AlertProps) {
    return (
        <div
            role="alert"
            className={cn(
                'border-l-4 rounded-r-lg p-4',
                VARIANT_CLASSES[variant],
                className,
            )}
        >
            <div className="flex justify-between items-start">
                <div>
                    {title && (
                        <p className="font-semibold mb-1">{title}</p>
                    )}
                    <p className="text-sm">{children}</p>
                </div>

                {/* Kapatma butonu */}
                {dismissible && (
                    <button
                        onClick={onDismiss}
                        className="ml-4 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                        aria-label="Kapat"
                        type="button"
                    >
                        &#10005;
                    </button>
                )}
            </div>
        </div>
    )
}
