'use client'

import { motion } from 'framer-motion'
import styles from './SplitText.module.css'

/**
 * SplitText — разбивает текст на слова и анимирует каждое
 */
export default function SplitText({ 
  children, 
  as: Tag = 'div',
  delay = 0,
  stagger = 0.03,
  className = '',
  ...props 
}) {
  // Разбиваем текст на слова
  const words = typeof children === 'string' 
    ? children.split(' ').filter(w => w.length > 0)
    : [children]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  }

  const wordVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <Tag className={className} {...props}>
      <motion.span
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {words.map((word, i) => (
          <span key={i} className={styles.wordWrapper}>
            <motion.span className={styles.word} variants={wordVariants}>
              {word}
            </motion.span>
            {i < words.length - 1 && ' '}
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
