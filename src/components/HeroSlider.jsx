'use client'

import { useState, useEffect, useCallback } from 'react'
import config from '../config/branch.config'

export default function HeroSlider() {
  const slides = config.hero.slides
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrent(index)
      setTimeout(() => setIsTransitioning(false), 1000)
    },
    [isTransitioning]
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* 슬라이드 */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* 장식 원형 */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-white/5" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full border border-white/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.03]" />
          </div>

          {/* 콘텐츠 */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-5">
            <p
              className={`text-gold text-xs tracking-[0.4em] uppercase mb-5 transition-all duration-700 delay-200 ${
                i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {slide.eyebrow}
            </p>
            <h1
              className={`font-serif text-4xl sm:text-5xl md:text-[3.75rem] font-bold leading-[1.4] tracking-[0.05em] whitespace-pre-line mb-6 transition-all duration-700 delay-300 ${
                i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {slide.title}
            </h1>
            <p
              className={`text-white/70 text-sm sm:text-base leading-relaxed whitespace-pre-line mb-10 max-w-md transition-all duration-700 delay-400 ${
                i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {slide.subtitle}
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-500 ${
                i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href={config.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-white hover:text-deep-brown text-white text-sm font-medium px-9 py-4 tracking-[0.2em] transition-colors duration-300"
              >
                지금 예약하기
              </a>
              <a
                href="#about"
                className="border border-white/40 hover:border-white text-white text-sm font-medium px-9 py-4 tracking-[0.2em] transition-colors duration-300"
              >
                더 알아보기
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* 슬라이드 인디케이터 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`슬라이드 ${i + 1}`}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? 'w-8 h-1.5 bg-gold rounded-sm'
                : 'w-1.5 h-1.5 bg-white/35 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* 스크롤 다운 힌트 */}
      <div className="absolute bottom-9 right-8 hidden sm:flex flex-col items-center gap-2 text-white/40 z-20">
        <span className="text-[10px] tracking-[0.3em] rotate-90 mb-6">SCROLL</span>
        <div className="w-px h-14 bg-white/20 overflow-hidden relative">
          <div
            className="absolute top-0 left-0 w-full bg-gold/70"
            style={{ height: '40%', animation: 'scrollLine 2s ease-in-out infinite' }}
          />
        </div>
      </div>

    </section>
  )
}
