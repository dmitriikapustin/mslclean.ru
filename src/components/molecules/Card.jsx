'use client'

import { Icon } from '../atoms'
import styles from './Card.module.css'

/**
 * Молекула: Card
 * Универсальная карточка
 */
export default function Card({ 
  icon,
  iconBg = true,
  title,
  children,
  variant = 'default',
  className = '',
  ...props 
}) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`} {...props}>
      {icon && (
        <div className={`${styles.iconWrapper} ${iconBg ? styles.iconBg : ''}`}>
          <Icon name={icon} size={28} />
        </div>
      )}
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  )
}
