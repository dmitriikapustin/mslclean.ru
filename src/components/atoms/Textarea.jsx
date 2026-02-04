'use client'

import { forwardRef } from 'react'
import styles from './Input.module.css'

/**
 * Атом: Textarea
 * Многострочное поле ввода
 */
const Textarea = forwardRef(({ 
  placeholder,
  value,
  onChange,
  name,
  id,
  rows = 4,
  required = false,
  disabled = false,
  error,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className={styles.wrapper}>
      <textarea
        ref={ref}
        name={name}
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`${styles.input} ${error ? styles.error : ''} ${className}`}
        style={{ resize: 'vertical', minHeight: '100px' }}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  )
})

Textarea.displayName = 'Textarea'

export default Textarea
