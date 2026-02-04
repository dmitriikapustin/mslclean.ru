'use client'

import styles from './StatCard.module.css'

/**
 * Молекула: StatCard
 * Карточка со статистикой
 */
export default function StatCard({ 
  value,
  label,
  className = '',
  ...props 
}) {
  return (
    <div className={`${styles.stat} ${className}`} {...props}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}
