'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <p className={styles.text}>
          Мы используем файлы cookie для корректной работы сайта и улучшения качества обслуживания.
          Продолжая использовать сайт, вы соглашаетесь с{' '}
          <Link href="/privacy-policy" className={styles.link}>
            Политикой обработки персональных данных
          </Link>.
        </p>
        <button onClick={accept} className={styles.button}>
          Принять
        </button>
      </div>
    </div>
  )
}
