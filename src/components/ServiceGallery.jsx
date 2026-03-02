'use client'

import { useState, useEffect } from 'react'

const IMAGES = [
  { src: '/img/service/service_001.jpg', alt: '서비스 메뉴' },
  { src: '/img/service/service_002.jpg', alt: '염색 가격' },
  { src: '/img/service/service_003.jpg', alt: '헤어라인 가이드' },
  { src: '/img/service/service_004.jpg', alt: '케어' },
  { src: '/img/service/service_005.jpg', alt: '세트메뉴' },
  { src: '/img/service/service_006.jpg', alt: '멤버십' },
]

export default function ServiceGallery() {
  const [selected, setSelected] = useState(null)

  // ESC 키로 라이트박스 닫기
  useEffect(() => {
    if (!selected) return
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  // 라이트박스 열릴 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  const move = (dir) => {
    const idx = IMAGES.findIndex((img) => img === selected)
    const next = (idx + dir + IMAGES.length) % IMAGES.length
    setSelected(IMAGES[next])
  }

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-16">
          <p className="text-gold text-[10px] tracking-[0.4em] uppercase mb-5">
            Menu &amp; Pricing
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-deep-brown font-bold">
            시술 안내 &amp; 가격
          </h2>
        </div>

        {/* 갤러리 그리드: 모바일 1열 / PC 2열 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(img)}
              className="group relative overflow-hidden cursor-zoom-in focus:outline-none"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* 호버 오버레이 */}
              <div className="absolute inset-0 bg-deep-brown/0 group-hover:bg-deep-brown/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs tracking-[0.3em] border border-white/60 px-5 py-2">
                  크게 보기
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* ── 라이트박스 ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setSelected(null)}
        >
          {/* 닫기 버튼 */}
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white text-4xl leading-none transition-colors"
            onClick={() => setSelected(null)}
            aria-label="닫기"
          >
            ×
          </button>

          {/* 이전 */}
          <button
            className="absolute left-4 sm:left-8 text-white/60 hover:text-white text-4xl leading-none transition-colors select-none"
            onClick={(e) => { e.stopPropagation(); move(-1) }}
            aria-label="이전"
          >
            ‹
          </button>

          {/* 이미지 */}
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-w-[90vw] max-h-[88vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* 다음 */}
          <button
            className="absolute right-4 sm:right-8 text-white/60 hover:text-white text-4xl leading-none transition-colors select-none"
            onClick={(e) => { e.stopPropagation(); move(1) }}
            aria-label="다음"
          >
            ›
          </button>

          {/* 인디케이터 */}
          <div className="absolute bottom-5 flex gap-2">
            {IMAGES.map((img, i) => (
              <button
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                  img === selected ? 'bg-gold' : 'bg-white/30'
                }`}
                onClick={(e) => { e.stopPropagation(); setSelected(IMAGES[i]) }}
                aria-label={`${i + 1}번 이미지`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
