'use client'

import { Icon } from '../atoms'
import styles from './FeatureItem.module.css'

/**
 * Молекула: FeatureItem
 * Элемент с иконкой и текстом
 */
export default function FeatureItem({ 
  icon = 'CheckCircle',
  children,
  iconColor,
  className = '',
  ...props 
}) {
  return (
    <div className={`${styles.item} ${className}`} {...props}>
      <Icon 
        name={icon} 
        size={20} 
        color={iconColor}
        className={styles.icon}
      />
      <span className={styles.text}>{children}</span>
    </div>
  )
}
