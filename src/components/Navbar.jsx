'use client'

import { useState, useEffect } from 'react'
import config from '../config/branch.config'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textColor = scrolled ? 'text-deep-brown' : 'text-white'
  const hoverColor = 'hover:text-gold'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream shadow-[0_2px_24px_rgba(44,24,16,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* 로고 */}
          <a
            href="#"
            className={`font-serif font-bold text-lg sm:text-xl tracking-[0.25em] transition-colors duration-300 ${textColor}`}
          >
            {config.brand.nameEn}
          </a>

          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex items-center gap-8">
            {config.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs font-medium tracking-[0.2em] transition-colors duration-300 ${textColor} ${hoverColor}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={config.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-deep-brown text-white text-xs font-medium px-6 py-2.5 tracking-[0.2em] transition-colors duration-300"
            >
              예약하기
            </a>
          </div>

          {/* 모바일 햄버거 */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="메뉴"
            className={`md:hidden p-2 flex flex-col justify-center gap-[5px] w-9 h-9 transition-colors duration-300 ${textColor}`}
          >
            <span
              className={`block h-px bg-current transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[6px]' : 'w-6'
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                menuOpen ? 'opacity-0 w-0' : 'w-5'
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[6px]' : 'w-6'
              }`}
            />
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 드로어 */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-cream border-t border-deep-brown/10`}
      >
        <div className="px-5 py-5 flex flex-col gap-1">
          {config.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-deep-brown text-sm font-medium tracking-[0.15em] py-3 border-b border-deep-brown/8 hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 grid grid-cols-2 gap-3">
            <a
              href={`tel:${config.branch.phone}`}
              className="text-center border border-deep-brown text-deep-brown text-sm py-3 tracking-[0.1em] hover:bg-deep-brown hover:text-white transition-colors"
            >
              전화 상담
            </a>
            <a
              href={config.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-gold text-white text-sm py-3 tracking-[0.1em] hover:bg-deep-brown transition-colors"
            >
              예약하기
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
