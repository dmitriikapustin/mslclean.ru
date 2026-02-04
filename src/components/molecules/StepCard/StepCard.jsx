'use client'

import { motion } from 'framer-motion'
import styles from './StepCard.module.css'

/**
 * StepCard — карточка шага процесса
 * 
 * @param {string} variant - 'default' | 'dark' (для темного фона)
 */
export default function StepCard({
  num,
  title,
  description,
  variant = 'default',
  className = '',
  ...props
}) {
  const classes = [
    styles.card,
    styles[`variant-${variant}`],
    className
  ].filter(Boolean).join(' ')

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      {...props}
    >
      <div className={styles.num}>{num}</div>
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
    </motion.div>
  )
}
