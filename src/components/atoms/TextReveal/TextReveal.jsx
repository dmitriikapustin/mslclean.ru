'use client'

import { motion } from 'framer-motion'
import styles from './TextReveal.module.css'

/**
 * TextReveal — анимация появления текста из маски снизу вверх
 */
export default function TextReveal({ 
  children, 
  as = 'div',
  delay = 0,
  className = '',
  ...props 
}) {
  const MotionComponent = motion[as] || motion.div

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <MotionComponent
        className={styles.content}
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ 
          duration: 0.6, 
          ease: [0.22, 1, 0.36, 1],
          delay 
        }}
        {...props}
      >
        {children}
      </MotionComponent>
    </div>
  )
}
