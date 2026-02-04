'use client'

import { Container, Tag } from '../atoms'
import { Card } from '../molecules'
import styles from './USPSection.module.css'

const USP_ITEMS = [
  {
    icon: 'Award',
    title: 'Специалисты по вашей индустрии',
    text: 'Работаем с фитнес-клубами и ресторанами 3+ года, понимаем специфику вашего бизнеса.',
  },
  {
    icon: 'CheckCircle',
    title: 'Гарантия качества',
    text: 'Если персонал не подходит — замена в течение дня, без доплаты.',
  },
  {
    icon: 'FileText',
    title: 'Фиксированная цена',
    text: 'Никаких скрытых платежей, никаких наличных расчётов. Всё прозрачно.',
  },
  {
    icon: 'Zap',
    title: 'Быстрый подбор',
    text: 'Готовый персонал за 24-48 часов, замена — за 2 часа.',
  },
  {
    icon: 'Shield',
    title: 'Полная юридическая поддержка',
    text: 'Договор, налоги, ПФР, страховка — всё на нас. Вы защищены.',
  },
  {
    icon: 'Users',
    title: 'Контроль 24/7',
    text: 'Менеджер отвечает за каждый объект, контроль качества в режиме реального времени.',
  },
]

/**
 * Template: USPSection
 * Секция преимуществ
 */
export default function USPSection() {
  return (
    <section className={styles.section} id="usp">
      <Container>
        <div className={styles.header}>
          <Tag variant="muted">Преимущества</Tag>
          <h2>Почему выбирают нас</h2>
        </div>
        
        <div className={styles.grid}>
          {USP_ITEMS.map(item => (
            <Card 
              key={item.title}
              icon={item.icon}
              title={item.title}
            >
              {item.text}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
