'use client'

import * as LucideIcons from 'lucide-react'

/**
 * Атом: Icon
 * Обёртка для Lucide иконок
 */
export default function Icon({ 
  name, 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) {
  const IconComponent = LucideIcons[name]
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`)
    return null
  }
  
  return (
    <IconComponent 
      size={size} 
      color={color}
      className={className}
      {...props}
    />
  )
}
