'use client'

import { Icon } from '../atoms'
import styles from './SolutionItem.module.css'

/**
 * Молекула: SolutionItem
 * Пункт решения с иконкой
 */
export default function SolutionItem({ 
  icon,
  title,
  children,
  className = '',
  ...props 
}) {
  return (
    <div className={`${styles.item} ${className}`} {...props}>
      <div className={styles.iconWrapper}>
        <Icon name={icon} size={24} />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{children}</p>
      </div>
    </div>
  )
}
