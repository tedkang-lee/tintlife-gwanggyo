/**
 * Google Sheets 공개 CSV를 빌드 타임에 읽어오는 유틸리티
 * 헤더 구조: 번호, 제목, 날짜, 태그, 블로그URL, 이미지URL, 공개
 */

const SPREADSHEET_ID = '1pQ-3J1u5Yuv5mLHXoR2n3g4ZiE43-HFQHBMFnnArQdQ'
const SHEET_NAME = '수원광교본점'

export async function fetchReviews() {
  const url =
    `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}` +
    `/export?format=csv&sheet=${encodeURIComponent(SHEET_NAME)}`

  try {
    // 개발: 매 요청마다 최신 데이터 / 프로덕션: 빌드 타임 정적 캐싱
    const cacheOption =
      process.env.NODE_ENV === 'development'
        ? { cache: 'no-store' }
        : { cache: 'force-cache' }
    const res = await fetch(url, cacheOption)
    if (!res.ok) {
      console.warn(`[sheets] fetch failed: ${res.status}`)
      return []
    }

    const csv = await res.text()
    const rows = parseCSV(csv)

    // '번호' 컬럼이 있는 실제 헤더 행을 찾아 그 다음부터 데이터 행으로 처리
    // (시트 상단에 제목/부제목 등 메타 행이 있어도 정확히 파싱)
    const headerIdx = rows.findIndex((r) => r[0]?.trim() === '번호')
    if (headerIdx === -1 || headerIdx + 1 >= rows.length) return []
    const dataRows = rows.slice(headerIdx + 1)

    return dataRows
      .map((row) => ({
        id: row[0]?.trim() ?? '',
        title: row[1]?.trim() ?? '',
        date: row[2]?.trim() ?? '',
        // 탭·공백 제거 후 쉼표 분리
        tags: row[3]
          ? row[3].replace(/\t/g, '').split(',').map((t) => t.trim()).filter(Boolean)
          : [],
        url: row[4]?.trim() ?? '',
        thumbnail: row[5]?.trim() || null, // 빈 문자열은 null 처리
        isPublic: row[6]?.trim().toUpperCase(),
      }))
      .filter((row) => row.isPublic === 'TRUE' && row.title.length > 0) // 제목 없는 행 제외
      .sort((a, b) => {
        // "2026. 1. 10", "2026.01.10", "2026-01-10" 등 다양한 형식 처리
        const parse = (d) => new Date(d.replace(/\.\s*/g, '-').replace(/-$/, ''))
        return parse(b.date) - parse(a.date)
      })
      .map(({ isPublic, ...rest }) => rest) // isPublic 필드 제거
  } catch (err) {
    console.error('[sheets] 후기 데이터를 가져오는 중 오류:', err)
    return []
  }
}

/**
 * RFC 4180 호환 CSV 파서
 * 따옴표로 감싼 필드(쉼표/줄바꿈 포함), 이중 따옴표 이스케이프 지원
 */
function parseCSV(text) {
  const rows = []
  let current = []
  let inQuotes = false
  let field = ''

  for (let i = 0; i < text.length; i++) {
    const ch = text[i]

    if (ch === '"') {
      if (inQuotes && text[i + 1] === '"') {
        // 이중 따옴표 → 따옴표 하나
        field += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (ch === ',' && !inQuotes) {
      current.push(field.trim())
      field = ''
    } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && text[i + 1] === '\n') i++ // CRLF
      current.push(field.trim())
      field = ''
      if (current.some((f) => f.length > 0)) rows.push(current)
      current = []
    } else {
      field += ch
    }
  }

  // 마지막 행 처리 (파일 끝 줄바꿈 없는 경우)
  if (field || current.length > 0) {
    current.push(field.trim())
    if (current.some((f) => f.length > 0)) rows.push(current)
  }

  return rows
}
