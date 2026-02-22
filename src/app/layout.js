import '../styles/globals.css'

export const metadata = {
  title: 'tintlife-site',
  description: 'A Next.js 14 + Tailwind CSS starter',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
