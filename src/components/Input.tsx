import { type InputHTMLAttributes } from 'react'
import { cn } from '../lib/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Etiket metni */
    label?: string
    /** Hata mesajı — gösterilirse border kırmızı olur */
    error?: string
    /** Yardım metni — error yoksa gösterilir */
    helpText?: string
    /** HTML id — label ilişkilendirmesi için zorunlu */
    id: string
}

/**
 * Input Component
 *
 * SOLID — Single Responsibility: Yalnızca form input render mantığı.
 * Varyantlar: normal, error, helpText, disabled.
 * Erişilebilirlik: aria-describedby, role="alert", htmlFor ilişkisi.
 *
 * @example
 * <Input id="email" label="E-posta" type="email" error="Geçersiz e-posta" />
 */
export default function Input({
    label,
    error,
    helpText,
    id,
    type = 'text',
    disabled,
    className,
    ...props
}: InputProps) {
    return (
        <div className="space-y-1">
            {/* Label */}
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    {label}
                </label>
            )}

            {/* Input alanı */}
            <input
                id={id}
                type={type}
                disabled={disabled}
                className={cn(
                    'w-full px-3 py-2 rounded-lg border transition-colors',
                    'focus:outline-none focus:ring-2',
                    'dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500',
                    // Error vs normal border
                    error
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-primary dark:border-gray-600',
                    // Disabled vs normal background
                    disabled
                        ? 'bg-gray-100 cursor-not-allowed dark:bg-gray-700'
                        : 'bg-white dark:bg-gray-800',
                    className,
                )}
                aria-describedby={
                    error ? `${id}-error` : helpText ? `${id}-help` : undefined
                }
                aria-invalid={error ? true : undefined}
                {...props}
            />

            {/* Hata mesajı */}
            {error && (
                <p
                    id={`${id}-error`}
                    role="alert"
                    className="text-sm text-red-600 dark:text-red-400"
                >
                    {error}
                </p>
            )}

            {/* Yardım metni (sadece hata yoksa) */}
            {helpText && !error && (
                <p
                    id={`${id}-help`}
                    className="text-sm text-gray-500 dark:text-gray-400"
                >
                    {helpText}
                </p>
            )}
        </div>
    )
}
