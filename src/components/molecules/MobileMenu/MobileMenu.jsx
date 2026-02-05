'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './MobileMenu.module.css'

const NAV_ITEMS = [
  { href: '#about', label: 'О компании' },
  { href: '#services', label: 'Услуги' },
  { href: '#portfolio', label: 'Клиенты' },
  { href: '#contact', label: 'Контакты' },
]

/**
 * MobileMenu — Fullscreen белое меню
 */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Блокируем скролл при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Контейнер для stagger
  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      }
    },
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.06,
      }
    }
  }

  // Пункты меню
  const itemVariants = {
    closed: {
      y: 30,
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  }

  return (
    <>
      {/* Бургер кнопка */}
      <button
        className={`${styles.burgerButton} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isOpen}
      >
        <div className={styles.burgerIcon}>
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </div>
      </button>

      {/* Fullscreen меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menuOverlay}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Контент меню */}
            <motion.nav
              className={styles.menuContent}
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Шапка с лого и крестиком */}
              <div className={styles.menuHeader}>
                <motion.div className={styles.menuLogo} variants={itemVariants}>
                  MSL<span>Clean</span>
                </motion.div>
                <button className={styles.closeButton} onClick={closeMenu}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Навигация */}
              <div className={styles.menuNav}>
                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={styles.menuLink}
                    variants={itemVariants}
                    onClick={closeMenu}
                  >
                    <span className={styles.menuNumber}>0{index + 1}</span>
                    <span className={styles.menuLabel}>{item.label}</span>
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                className={styles.menuCta}
                variants={itemVariants}
                onClick={closeMenu}
              >
                Получить расчёт
              </motion.a>

              {/* Контакты */}
              <motion.div className={styles.menuFooter} variants={itemVariants}>
                <a href="tel:+79999999999" className={styles.menuPhone}>
                  +7 (999) 999-99-99
                </a>
                <span className={styles.menuHint}>Работаем 24/7</span>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
