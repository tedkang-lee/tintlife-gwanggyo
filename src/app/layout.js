import '../styles/globals.css'
import config from '../config/branch.config'

export const metadata = {
  title: config.branch.fullName,
  description: `${config.brand.tagline} | ${config.branch.address}`,
  keywords: ['틴트라이프', '수원광교', '허브염색', '새치커버', '헤어살롱', '케롭브라운'],
  openGraph: {
    title: config.branch.fullName,
    description: config.brand.tagline,
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
