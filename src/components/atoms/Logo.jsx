'use client'

import Link from 'next/link'
import styles from './Logo.module.css'

/**
 * Атом: Logo
 * Логотип компании MSL Clean
 */
export default function Logo({ 
  variant = 'dark',
  className = '',
  ...props 
}) {
  return (
    <Link 
      href="/" 
      className={`${styles.logo} ${styles[variant]} ${className}`}
      {...props}
    >
      <span className={styles.mark}>MSL</span>
      <span className={styles.text}>Clean</span>
    </Link>
  )
}
