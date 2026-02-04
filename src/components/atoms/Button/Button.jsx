'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './Button.module.css'

/**
 * Button — универсальная кнопка
 * 
 * @param {string} variant - 'primary' | 'secondary' | 'ghost' | 'white'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {string} href - если указан, рендерится как Link
 * @param {boolean} fullWidth - растянуть на всю ширину
 * @param {boolean} animated - включить hover анимацию
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  animated = true,
  className = '',
  ...props
}) {
  const classes = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    fullWidth && styles.fullWidth,
    className
  ].filter(Boolean).join(' ')

  const content = (
    <span className={styles.content}>{children}</span>
  )

  // Link
  if (href) {
    if (animated) {
      return (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href={href} className={classes} {...props}>
            {content}
          </Link>
        </motion.div>
      )
    }
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  // Button
  if (animated) {
    return (
      <motion.button
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.button>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
