'use client'

import styles from './Container.module.css'

/**
 * Атом: Container
 * Контейнер с максимальной шириной
 */
export default function Container({ 
  children, 
  size = 'default',
  className = '',
  as: Component = 'div',
  ...props 
}) {
  return (
    <Component 
      className={`${styles.container} ${styles[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
