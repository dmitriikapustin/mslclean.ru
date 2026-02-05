'use client'

import Link from 'next/link'
import Image from 'next/image'
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
  const logoSrc = variant === 'light' 
    ? '/images/logo-light.svg' 
    : '/images/logo.svg'

  return (
    <Link 
      href="/" 
      className={`${styles.logo} ${className}`}
      {...props}
    >
      <Image 
        src={logoSrc}
        alt="MSL Clean"
        width={170}
        height={47}
        priority
      />
    </Link>
  )
}
