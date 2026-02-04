'use client'

import { Container, Tag } from '../atoms'
import { Card } from '../molecules'
import styles from './ProblemsSection.module.css'

const PROBLEMS = [
  {
    icon: 'UserX',
    title: 'Текучка персонала',
    items: [
      'Клинер не пришёл на работу',
      'Потеря репутации и клиентов',
      'Дорогостоящая непредвиденная замена',
    ],
  },
  {
    icon: 'Search',
    title: 'Поиск и обучение',
    items: [
      'Ищете клинера месяц через Авито',
      'Переплачиваете наличными',
      'Нет гарантий на качество',
    ],
  },
  {
    icon: 'AlertCircle',
    title: 'Управление персоналом',
    items: [
      'Вы не кадровик, но следите за графиком',
      'Больничные, отпуска, конфликты',
      'Налоги, ПФР, документы — ваша задача',
    ],
  },
  {
    icon: 'Shield',
    title: 'Стандарты качества',
    items: [
      'Ваш клинер — ваша ответственность',
      'Если что-то сломал — вам платить',
      'Нет контроля качества',
    ],
  },
]

/**
 * Template: ProblemsSection
 * Секция с проблемами клиентов
 */
export default function ProblemsSection() {
  return (
    <section className={styles.section} id="problems">
      <Container>
        <div className={styles.header}>
          <Tag variant="muted">Знакомые проблемы?</Tag>
          <h2>Вам знакомо это?</h2>
          <p className={styles.subtitle}>
            Это обходится вам дорого — временем, нервами и репутацией
          </p>
        </div>
        
        <div className={styles.grid}>
          {PROBLEMS.map(problem => (
            <Card 
              key={problem.title}
              icon={problem.icon}
              iconBg={false}
              title={problem.title}
              variant="problem"
            >
              <ul className={styles.list}>
                {problem.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
