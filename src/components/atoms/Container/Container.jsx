import styles from './Container.module.css'

/**
 * Container — контейнер с max-width и padding
 * 
 * @param {string} size - 'sm' | 'md' | 'lg' | 'full'
 * @param {string} as - HTML тег (div, section, article)
 */
export default function Container({
  children,
  size = 'lg',
  as: Component = 'div',
  className = '',
  ...props
}) {
  const classes = [
    styles.container,
    styles[`size-${size}`],
    className
  ].filter(Boolean).join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
