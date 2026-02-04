'use client'

import styles from './StepCard.module.css'

/**
 * Молекула: StepCard
 * Карточка шага процесса
 */
export default function StepCard({ 
  number,
  title,
  children,
  className = '',
  ...props 
}) {
  return (
    <div className={`${styles.step} ${className}`} {...props}>
      <div className={styles.number}>{number}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{children}</p>
    </div>
  )
}
