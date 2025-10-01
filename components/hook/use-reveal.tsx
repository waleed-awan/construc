"use client"

import { useEffect, useRef, useState } from "react"

type Options = IntersectionObserverInit & { once?: boolean }

/**
 * useReveal
 * - IntersectionObserver based visibility hook
 * - Generic ref type for better TS support on various elements
 */
export function useReveal<T extends HTMLElement = HTMLElement>(options: Options = { threshold: 0.15, once: true }) {
  const { once = true, root = null, rootMargin = "0px", threshold = 0.15 } = options

  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { root, rootMargin, threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, root, rootMargin, threshold]) // exhaustive deps: use primitives

  return { ref, visible }
}
