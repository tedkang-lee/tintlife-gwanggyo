import Navbar from '../components/Navbar'
import HeroVideo from '../components/HeroVideo'
import ReviewsSection from '../components/ReviewsSection'
import ServiceGallery from '../components/ServiceGallery'
import NaverMap from '../components/NaverMap'
import config from '../config/branch.config'
import { fetchReviews } from '../lib/sheets'

/* ─────────────────────────────────────────
   브랜드 소개 섹션
───────────────────────────────────────── */
function BrandAbout() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* 텍스트 */}
          <div>
            <p className="text-gold text-[10px] tracking-[0.4em] uppercase mb-5">
              About Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-deep-brown font-bold mb-7 leading-tight whitespace-pre-line">
              {config.about.title}
            </h2>
            <p className="text-deep-brown/65 text-sm sm:text-base leading-loose whitespace-pre-line mb-10">
              {config.about.description}
            </p>
            <a
              href={config.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-deep-brown hover:bg-gold text-white text-sm px-9 py-4 tracking-[0.2em] transition-colors duration-300"
            >
              시술 예약하기
            </a>
          </div>

          {/* 특징 그리드 */}
          <div className="grid grid-cols-2 gap-5">
            {config.about.features.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-deep-brown/8 p-6 hover:border-gold hover:shadow-[0_4px_24px_rgba(201,168,76,0.12)] transition-all duration-300"
              >
                <span className="text-gold text-2xl font-serif block mb-4">{f.symbol}</span>
                <p className="text-deep-brown font-bold text-sm mb-1.5">{f.title}</p>
                <p className="text-deep-brown/55 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   시술 안내 섹션
───────────────────────────────────────── */
function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-deep-brown">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-16">
          <p className="text-gold text-[10px] tracking-[0.4em] uppercase mb-5">Services</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold">시술 안내</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {config.services.map((svc) => (
            <div
              key={svc.id}
              className="relative overflow-hidden group hover:scale-[1.015] transition-transform duration-300 cursor-default"
            >
              {/* 배경 이미지 */}
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${svc.image})` }}
              />
              {/* 어두운 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30 group-hover:from-black/80 group-hover:via-black/45 transition-all duration-500" />
              {/* 콘텐츠 */}
              <div className="relative z-10 p-8 sm:p-10">
                <span className="text-gold font-serif text-2xl block mb-7">{svc.symbol}</span>
                <p className="text-gold/70 text-[10px] tracking-[0.35em] uppercase mb-2">
                  {svc.titleEn}
                </p>
                <h3 className="text-white font-serif text-2xl font-bold mb-4">{svc.title}</h3>
                <p className="text-white/65 text-sm leading-loose mb-8">{svc.description}</p>
                <div className="h-px w-8 bg-gold group-hover:w-16 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href={config.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold text-gold hover:bg-gold hover:text-deep-brown text-sm px-10 py-4 tracking-[0.2em] transition-colors duration-300"
          >
            시술 예약하기
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   감동 후기 섹션
───────────────────────────────────────── */
function Reviews({ reviews }) {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-16">
          <p className="text-gold text-[10px] tracking-[0.4em] uppercase mb-5">Reviews</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-deep-brown font-bold mb-4">
            감동 후기
          </h2>
          <p className="text-deep-brown/50 text-sm tracking-korean">
            고객님들의 생생한 경험을 확인해보세요
          </p>
        </div>

        <ReviewsSection reviews={reviews} blogUrl={config.links.blog} />
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   오시는 길 섹션
───────────────────────────────────────── */
function Location() {
  return (
    <section id="location" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-16">
          <p className="text-gold text-[10px] tracking-[0.4em] uppercase mb-5">Location</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-deep-brown font-bold">오시는 길</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="aspect-[4/3] overflow-hidden">
            <NaverMap address={config.branch.address} />
          </div>

          {/* 매장 정보 */}
          <div>
            <h3 className="font-serif text-2xl text-deep-brown font-bold mb-9">
              {config.branch.fullName}
            </h3>
            <dl className="space-y-6">
              <div className="flex gap-5">
                <dt className="text-gold text-xs tracking-[0.25em] w-12 pt-0.5 shrink-0">주소</dt>
                <dd className="text-deep-brown/70 text-sm leading-relaxed">{config.branch.address}</dd>
              </div>
              <div className="flex gap-5">
                <dt className="text-gold text-xs tracking-[0.25em] w-12 pt-0.5 shrink-0">전화</dt>
                <dd>
                  <a
                    href={`tel:${config.branch.phone}`}
                    className="text-deep-brown/70 text-sm hover:text-gold transition-colors"
                  >
                    {config.branch.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-5">
                <dt className="text-gold text-xs tracking-[0.25em] w-12 pt-0.5 shrink-0">영업</dt>
                <dd className="text-deep-brown/70 text-sm leading-relaxed">
                  {config.branch.hours}
                  <br />
                  <span className="text-red-400/80 text-xs mt-0.5 block">{config.branch.closedDay}</span>
                </dd>
              </div>
            </dl>
            <div className="mt-10 flex gap-3">
              <a
                href={`tel:${config.branch.phone}`}
                className="flex-1 text-center bg-deep-brown hover:bg-gold text-white text-sm py-4 tracking-[0.2em] transition-colors duration-300"
              >
                전화 상담
              </a>
              <a
                href={config.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gold hover:bg-deep-brown text-white text-sm py-4 tracking-[0.2em] transition-colors duration-300"
              >
                예약하기
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   푸터
───────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-deep-brown text-white/50 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12 pb-12 border-b border-white/10">

          {/* 브랜드 */}
          <div>
            <p className="text-white font-serif text-xl tracking-[0.25em] font-bold mb-4">
              {config.brand.nameEn}
            </p>
            <p className="text-sm leading-relaxed mb-1">{config.brand.tagline}</p>
            <p className="text-xs mt-4 leading-relaxed">{config.branch.address}</p>
          </div>

          {/* 메뉴 */}
          <div>
            <p className="text-white text-xs font-medium tracking-[0.3em] uppercase mb-5">Menu</p>
            <ul className="space-y-3">
              {config.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 바로가기 */}
          <div>
            <p className="text-white text-xs font-medium tracking-[0.3em] uppercase mb-5">Links</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={config.links.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gold transition-colors duration-200"
                >
                  네이버 예약
                </a>
              </li>
              <li>
                <a
                  href={config.links.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gold transition-colors duration-200"
                >
                  네이버 블로그
                </a>
              </li>
              <li>
                <a
                  href="https://litt.ly/tintlife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gold transition-colors duration-200"
                >
                  틴트라이프 정보
                </a>
              </li>
              <li>
                <a
                  href={`tel:${config.branch.phone}`}
                  className="text-sm hover:text-gold transition-colors duration-200"
                >
                  {config.branch.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>
        <p className="text-xs text-center">
          © {year} {config.branch.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────
   하단 고정 CTA 바 (모바일)
───────────────────────────────────────── */
function CTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden grid grid-cols-2 shadow-[0_-4px_24px_rgba(44,24,16,0.15)]">
      <a
        href={`tel:${config.branch.phone}`}
        className="bg-deep-brown text-white text-center py-4 text-sm font-medium tracking-[0.15em] hover:bg-deep-brown/90 active:bg-deep-brown/80 transition-colors"
      >
        전화 상담
      </a>
      <a
        href={config.links.booking}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gold text-white text-center py-4 text-sm font-medium tracking-[0.15em] hover:bg-gold/90 active:bg-gold/80 transition-colors"
      >
        예약하기
      </a>
    </div>
  )
}

/* ─────────────────────────────────────────
   메인 페이지
───────────────────────────────────────── */
export default async function Home() {
  const sheetReviews = await fetchReviews()
  const reviews = sheetReviews.length > 0 ? sheetReviews : config.reviews

  return (
    <>
      <Navbar />
      <main className="pb-[56px] md:pb-0">
        <HeroVideo />
        <BrandAbout />
        <Services />
        <ServiceGallery />
        <Reviews reviews={reviews} />
        <Location />
        <Footer />
      </main>
      <CTABar />
    </>
  )
}
