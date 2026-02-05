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
  openGraph: {
    title: 'MSL Clean — Аутстафинг клинингового персонала',
    description: 'Чистота без управленческих забот. Готовый персонал за 24 часа.',
    type: 'website',
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
