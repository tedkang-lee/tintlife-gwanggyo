'use client'

import { useState } from 'react'

const PER_PAGE = 6

export default function ReviewsSection({ reviews, blogUrl }) {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(reviews.length / PER_PAGE)
  const start = (page - 1) * PER_PAGE
  const current = reviews.slice(start, start + PER_PAGE)

  return (
    <div>
      {reviews.length === 0 ? (
        <p className="text-center text-deep-brown/40 text-sm py-12">
          등록된 후기가 없습니다.
        </p>
      ) : (
        <>
          {/* 카드 그리드 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {current.map((review) => (
              <a
                key={review.id}
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-deep-brown/8 hover:border-gold hover:shadow-[0_8px_32px_rgba(44,24,16,0.10)] transition-all duration-300"
              >
                {/* 썸네일 */}
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-deep-brown/8 to-deep-brown/15 relative flex items-center justify-center">
                  {review.thumbnail ? (
                    <img
                      src={review.thumbnail}
                      alt={review.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <span className="font-serif text-7xl text-deep-brown/10 select-none">T</span>
                  )}
                  <div className="absolute inset-0 bg-deep-brown/0 group-hover:bg-deep-brown/10 transition-colors duration-300" />
                </div>

                {/* 콘텐츠 */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
                    {review.tags.map((tag) => (
                      <span key={tag} className="text-gold text-[11px] tracking-wider">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-deep-brown font-medium text-sm leading-relaxed line-clamp-2 mb-4 group-hover:text-gold transition-colors duration-300">
                    {review.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-deep-brown/35 text-xs">{review.date}</span>
                    <span className="text-gold text-xs tracking-wider group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      더보기 →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setPage(p)
                    document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className={
                    p === page
                      ? 'w-9 h-9 text-sm font-medium bg-deep-brown text-white'
                      : 'w-9 h-9 text-sm font-medium border border-deep-brown/20 text-deep-brown/50 hover:border-gold hover:text-gold transition-colors duration-200'
                  }
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </>
      )}

    </div>
  )
}
