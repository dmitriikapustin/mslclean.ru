'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './AnimatedTag.module.css'

/**
 * AnimatedTag — тег с анимацией обводки и появлением текста по словам
 */
export default function AnimatedTag({ 
  children, 
  delay = 0,
  className = '',
}) {
  const ref = useRef(null)
  const textRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [dimensions, setDimensions] = useState({ width: 120, height: 32 })
  
  // Измеряем размер текста для SVG
  useEffect(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect()
      setDimensions({
        width: rect.width + 32, // padding
        height: rect.height + 8
      })
    }
  }, [children])
  
  const words = typeof children === 'string' 
    ? children.split(' ').filter(w => w.length > 0)
    : [children]
  
  // Параметры для pill shape
  const { width, height } = dimensions
  const rx = height / 2 // полный радиус для pill
  
  // Периметр pill = 2 * (width - height) + π * height
  const perimeter = 2 * (width - height) + Math.PI * height
  
  // Длительность анимации обводки
  const borderDuration = 0.6 + (words.length * 0.03)
  
  return (
    <div ref={ref} className={`${styles.wrapper} ${className}`}>
      {/* SVG обводка */}
      <svg 
        className={styles.border}
        width={width} 
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        <rect
          x="0.5"
          y="0.5"
          width={width - 1}
          height={height - 1}
          rx={rx}
          ry={rx}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1"
          strokeDasharray={perimeter}
          strokeDashoffset={isInView ? 0 : perimeter}
          style={{
            transition: isInView 
              ? `stroke-dashoffset ${borderDuration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`
              : 'none'
          }}
        />
      </svg>
      
      {/* Текст по словам */}
      <span ref={textRef} className={styles.text}>
        {words.map((word, i) => (
          <span key={i}>
            <span className={styles.mask}>
              <motion.span
                className={styles.word}
                initial={{ y: '100%' }}
                animate={isInView ? { y: 0 } : { y: '100%' }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: delay + (i * 0.04)
                }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 && ' '}
          </span>
        ))}
      </span>
    </div>
  )
}
