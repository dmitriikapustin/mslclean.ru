'use client'

import { motion } from 'framer-motion'
import styles from './USPCard.module.css'

/**
 * USPCard — карточка преимущества
 */
export default function USPCard({
  icon,
  title,
  description,
  className = '',
  ...props
}) {
  return (
    <motion.div
      className={`${styles.card} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      {...props}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
    </motion.div>
  )
}
