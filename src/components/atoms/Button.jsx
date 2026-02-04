'use client'

import { forwardRef } from 'react'
import styles from './Button.module.css'

/**
 * Атом: Button
 * Базовая кнопка с вариантами стилей
 */
const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  href,
  className = '',
  ...props 
}, ref) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className
  ].filter(Boolean).join(' ')

  if (href) {
    return (
      <a 
        ref={ref}
        href={href} 
        className={classes}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
