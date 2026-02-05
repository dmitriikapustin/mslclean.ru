'use client'

import { motion } from 'framer-motion'
import styles from './AnimatedTag.module.css'

/**
 * AnimatedTag — тег с fade in + появление текста по словам
 * Статичная pill-обводка, анимируется только прозрачность и текст
 */
export default function AnimatedTag({ 
  children, 
  delay = 0,
  className = '',
}) {
  const words = typeof children === 'string' 
    ? children.split(' ').filter(w => w.length > 0)
    : [children]
  
  return (
    <motion.div 
      className={`${styles.wrapper} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay }}
    >
      <span className={styles.text}>
        {words.map((word, i) => (
          <span key={i}>
            <span className={styles.mask}>
              <motion.span
                className={styles.word}
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: delay + 0.1 + (i * 0.04)
                }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 && ' '}
          </span>
        ))}
      </span>
    </motion.div>
  )
}
