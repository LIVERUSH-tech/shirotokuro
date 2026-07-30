import { useEffect } from 'react'

// スクロール連動のリビール演出。
// data-reveal 属性を持つ要素を監視し、画面に入ったら .is-in を付ける。
//   data-reveal="up | left | right | pop | wipe"  … 演出の種類
//   data-reveal-delay="1〜6"                      … 時間差（stagger）
// 対応する見た目は index.css の「リビール演出」ブロックで定義する。
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -60px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
