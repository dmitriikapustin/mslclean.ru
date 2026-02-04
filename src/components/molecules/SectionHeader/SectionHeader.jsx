'use client'

import { motion } from 'framer-motion'
import Tag from '@/components/atoms/Tag'
import styles from './SectionHeader.module.css'

/**
 * SectionHeader — заголовок секции с тегом, заголовком и подзаголовком
 * 
 * @param {string} tag - текст тега (опционально)
 * @param {string} title - заголовок
 * @param {string} subtitle - подзаголовок (опционально)
 * @param {string} align - 'left' | 'center'
 * @param {string} variant - 'default' | 'dark' (для темного фона)
 * @param {string} size - 'sm' | 'md' | 'lg'
 */
export default function SectionHeader({
  tag,
  title,
  subtitle,
  align = 'center',
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) {
  const classes = [
    styles.header,
    styles[`align-${align}`],
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    className
  ].filter(Boolean).join(' ')

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className={classes} {...props}>
      {tag && (
        <Tag variant={variant === 'dark' ? 'white' : 'default'}>
          {tag}
        </Tag>
      )}
      
      <motion.h2
        className={styles.title}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          className={styles.subtitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
