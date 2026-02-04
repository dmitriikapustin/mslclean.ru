import styles from './Section.module.css'

/**
 * Section — секция страницы с настраиваемым фоном
 * 
 * @param {string} variant - 'default' | 'surface' | 'primary' | 'white'
 * @param {string} spacing - 'sm' | 'md' | 'lg'
 * @param {string} id - якорь для навигации
 */
export default function Section({
  children,
  variant = 'default',
  spacing = 'lg',
  id,
  className = '',
  ...props
}) {
  const classes = [
    styles.section,
    styles[`variant-${variant}`],
    styles[`spacing-${spacing}`],
    className
  ].filter(Boolean).join(' ')

  return (
    <section id={id} className={classes} {...props}>
      {children}
    </section>
  )
}
