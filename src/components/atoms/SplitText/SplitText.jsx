'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './SplitText.module.css'

/**
 * SplitText — разбивает текст на строки и анимирует каждую отдельно
 * Автоматически определяет переносы строк
 */
export default function SplitText({ 
  children, 
  as: Tag = 'div',
  delay = 0,
  stagger = 0.1,
  className = '',
  ...props 
}) {
  const containerRef = useRef(null)
  const measureRef = useRef(null)
  const [lines, setLines] = useState([])
  const [isReady, setIsReady] = useState(false)

  // Разбиваем текст на строки после рендера
  useEffect(() => {
    if (!measureRef.current || typeof children !== 'string') {
      // Если children не строка, просто показываем как есть
      setLines([children])
      setIsReady(true)
      return
    }

    const measureLines = () => {
      const container = measureRef.current
      if (!container) return

      const words = children.split(' ')
      const lineArray = []
      let currentLine = []
      let lastTop = null

      // Очищаем и заново добавляем слова для измерения
      container.innerHTML = ''
      
      words.forEach((word, i) => {
        const span = document.createElement('span')
        span.textContent = word + ' '
        span.style.whiteSpace = 'nowrap'
        container.appendChild(span)

        const rect = span.getBoundingClientRect()
        
        if (lastTop === null) {
          lastTop = rect.top
        }

        if (rect.top > lastTop + 2) {
          // Новая строка
          if (currentLine.length > 0) {
            lineArray.push(currentLine.join(' '))
          }
          currentLine = [word]
          lastTop = rect.top
        } else {
          currentLine.push(word)
        }
      })

      // Последняя строка
      if (currentLine.length > 0) {
        lineArray.push(currentLine.join(' '))
      }

      setLines(lineArray)
      setIsReady(true)
    }

    // Небольшая задержка для корректного измерения
    const timer = setTimeout(measureLines, 50)
    
    // Пересчитываем при ресайзе
    window.addEventListener('resize', measureLines)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', measureLines)
    }
  }, [children])

  // Варианты анимации
  const lineVariants = {
    hidden: { y: '100%' },
    visible: (i) => ({
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: delay + (i * stagger)
      }
    })
  }

  return (
    <>
      {/* Скрытый контейнер для измерения */}
      <Tag 
        ref={measureRef} 
        className={`${className} ${styles.measure}`}
        aria-hidden="true"
        {...props}
      />
      
      {/* Видимый контейнер с анимацией */}
      <Tag 
        ref={containerRef} 
        className={`${className} ${styles.container}`}
        {...props}
      >
        {isReady && lines.map((line, i) => (
          <span key={i} className={styles.lineWrapper}>
            <motion.span
              className={styles.line}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={lineVariants}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    </>
  )
}
