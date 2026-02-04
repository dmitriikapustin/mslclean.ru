'use client'

import { forwardRef } from 'react'
import styles from './Input.module.css'

/**
 * Атом: Input
 * Поле ввода текста
 */
const Input = forwardRef(({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
  disabled = false,
  error,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className={styles.wrapper}>
      <input
        ref={ref}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`${styles.input} ${error ? styles.error : ''} ${className}`}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
