import { Onest } from 'next/font/google'
import './globals.css'

const onest = Onest({ 
  subsets: ['latin', 'cyrillic'], 
  variable: '--font-onest',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'] 
})

export const metadata = {
  title: 'MSL Clean — Аутстафинг клинингового персонала',
  description: 'Чистота без управленческих забот. Подбор, замены и контроль процессов под ключ для ресторанов и фитнес-клубов. Готовый персонал за 24 часа.',
  keywords: 'аутстафинг, клининг, персонал, уборка, рестораны, фитнес-клубы, Москва',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#1F5866',
    'msapplication-config': '/browserconfig.xml',
  },
  themeColor: '#1F5866',
  openGraph: {
    title: 'MSL Clean — Аутстафинг клинингового персонала',
    description: 'Чистота без управленческих забот. Готовый персонал за 24 часа.',
    type: 'website',
    url: 'https://mslclean.ru',
    siteName: 'MSL Clean',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={onest.variable}>
      <body>
        {children}
      </body>
    </html>
  )
}
