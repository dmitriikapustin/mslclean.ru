'use client'

import styles from './Tag.module.css'

/**
 * Атом: Tag
 * Метка/тег для секций
 */
export default function Tag({ 
  children, 
  variant = 'accent',
  className = '',
  ...props 
}) {
  return (
    <span 
      className={`${styles.tag} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
