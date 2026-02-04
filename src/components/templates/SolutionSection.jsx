'use client'

import { Container, Tag } from '../atoms'
import { SolutionItem, StatCard } from '../molecules'
import styles from './SolutionSection.module.css'

const SOLUTIONS = [
  {
    icon: 'Clock',
    title: 'Готовый персонал 24/7',
    text: 'Подбираем по 7 параметрам: опыт, документы, навыки, рекомендации. Готовый сотрудник за 24-48 часов.',
  },
  {
    icon: 'Zap',
    title: 'Замена без остановки',
    text: 'Заболел — пришлём замену той же смены. Контроль 24/7, вы не заметите разницы.',
  },
  {
    icon: 'FileText',
    title: 'Юридическое оформление',
    text: 'Договор, безналичная оплата, фиксированная цена. Экономия на ФОТ, налогах, ПФР.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Контроль качества',
    text: 'Каждый объект сопровождает менеджер. Не нравится — замена в течение дня.',
  },
]

const STATS = [
  { value: '100%', label: 'Юридическая ответственность' },
  { value: '24ч', label: 'Подбор персонала' },
  { value: '2ч', label: 'Замена сотрудника' },
  { value: '0₽', label: 'Скрытых платежей' },
]

/**
 * Template: SolutionSection
 * Секция с решением
 */
export default function SolutionSection() {
  return (
    <section className={styles.section} id="solution">
      <Container className={styles.inner}>
        <div className={styles.content}>
          <Tag variant="muted">Наше решение</Tag>
          <h2>Аутстафинг клинингового персонала</h2>
          <p className={styles.lead}>
            Вы работаете — мы отвечаем за чистоту. Никаких звонков клинерам, 
            никаких замен в спешке, никаких юридических проблем.
          </p>
          
          <div className={styles.list}>
            {SOLUTIONS.map(item => (
              <SolutionItem 
                key={item.title}
                icon={item.icon}
                title={item.title}
              >
                {item.text}
              </SolutionItem>
            ))}
          </div>
        </div>
        
        <div className={styles.visual}>
          <h3>Мы берём на себя</h3>
          <div className={styles.stats}>
            {STATS.map(stat => (
              <StatCard 
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
