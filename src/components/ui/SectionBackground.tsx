import { cn } from '@/utils/cn'

interface SectionBackgroundProps {
  /** URL or imported asset for background image */
  src: string
  /** Opacity of the background image (0–1). Default 1 */
  opacity?: number
  /** Show gradient overlay for text legibility (dark edges) */
  showOverlay?: boolean
  /** Overlay strength: 'strong' (default), 'medium', 'light', 'none' */
  overlayVariant?: 'strong' | 'medium' | 'light' | 'none'
  className?: string
}

const overlayClasses = {
  strong: 'from-[#0B0D12]/90 via-[#0B0D12]/50 to-[#0B0D12]/90',
  medium: 'from-[#0B0D12]/75 via-[#0B0D12]/30 to-[#0B0D12]/75',
  light: 'from-[#0B0D12]/50 via-[#0B0D12]/15 to-[#0B0D12]/50',
  none: '',
}

export function SectionBackground({
  src,
  opacity = 1,
  showOverlay = false,
  overlayVariant = 'strong',
  className,
}: SectionBackgroundProps) {
  return (
    <>
      <div
        aria-hidden
        className={cn('absolute inset-0 w-full h-full object-cover', className)}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity,
        }}
      />
      {showOverlay && overlayVariant !== 'none' && (
        <div
          aria-hidden
          className={cn(
            'absolute inset-0 bg-gradient-to-b pointer-events-none',
            overlayClasses[overlayVariant]
          )}
        />
      )}
    </>
  )
}
