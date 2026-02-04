'use client'

import { motion } from 'framer-motion'
import styles from './Tag.module.css'

/**
 * Tag — метка/бейдж секции
 * 
 * @param {string} variant - 'default' | 'dark' | 'accent'
 * @param {boolean} animated - анимация появления
 */
export default function Tag({
  children,
  variant = 'default',
  animated = true,
  className = '',
  ...props
}) {
  const classes = [
    styles.tag,
    styles[`variant-${variant}`],
    className
  ].filter(Boolean).join(' ')

  if (animated) {
    return (
      <motion.div
        className={classes}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
