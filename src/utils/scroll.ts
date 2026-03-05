export function scrollToId(id: string, options?: ScrollIntoViewOptions) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      ...options,
    })
  }
}

export function getElementById(id: string): HTMLElement | null {
  return document.getElementById(id)
}
