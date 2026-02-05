'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './MobileMenu.module.css'

const NAV_ITEMS = [
  { href: '#about', label: 'О компании' },
  { href: '#services', label: 'Услуги' },
  { href: '#portfolio', label: 'Клиенты' },
  { href: '#contact', label: 'Контакты' },
]

/**
 * MobileMenu — бургер в шапке + fullscreen меню
 * По дизайну AI Academy (Figma)
 */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Панель меню — slide from right
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      }
    }
  }

  // Stagger для пунктов
  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.08
      }
    }
  }

  const itemVariants = {
    closed: {
      y: 20,
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <>
      {/* Бургер кнопка в шапке */}
      <button
        className={styles.burgerButton}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isOpen}
      >
        <div className={`${styles.burgerIcon} ${isOpen ? styles.open : ''}`}>
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </div>
      </button>

      {/* Fullscreen меню */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            
            {/* Панель меню справа */}
            <motion.div
              className={styles.menuPanel}
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {/* Закрыть */}
              <button className={styles.closeButton} onClick={closeMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <motion.nav
                className={styles.menuContent}
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {NAV_ITEMS.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={styles.menuLink}
                    variants={itemVariants}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                {/* CTA */}
                <motion.a
                  href="#contact"
                  className={styles.menuCta}
                  variants={itemVariants}
                  onClick={closeMenu}
                >
                  Получить расчёт
                </motion.a>
                
                {/* Телефон */}
                <motion.div className={styles.menuPhone} variants={itemVariants}>
                  <a href="tel:+79999999999">+7 (999) 999-99-99</a>
                  <span>Работаем 24/7</span>
                </motion.div>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
