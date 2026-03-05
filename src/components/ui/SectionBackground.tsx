import { cn } from '@/utils/cn'

interface SectionBackgroundProps {
  /** URL or imported asset for background image */
  src: string
  /** Opacity of the background image (0–1). Default 1 */
  opacity?: number
  /** Show gradient overlay for text legibility (dark edges) */
  showOverlay?: boolean
  className?: string
}

export function SectionBackground({
  src,
  opacity = 1,
  showOverlay = false,
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
      {showOverlay && (
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-[#0B0D12]/85 via-[#0B0D12]/40 to-[#0B0D12]/85 pointer-events-none"
        />
      )}
    </>
  )
}
