'use client'

import { motion } from 'framer-motion'
import styles from './ProblemCard.module.css'

/**
 * ProblemCard — карточка проблемы
 */
export default function ProblemCard({
  num,
  title,
  items = [],
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
      <div className={styles.num}>{num}</div>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}
