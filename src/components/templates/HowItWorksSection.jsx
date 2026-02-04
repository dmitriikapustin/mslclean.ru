'use client'

import { Container, Tag } from '../atoms'
import { StepCard } from '../molecules'
import styles from './HowItWorksSection.module.css'

const STEPS = [
  {
    number: 1,
    title: 'Анализ задачи',
    text: 'Изучаем объект, требования и процессы вашего бизнеса.',
  },
  {
    number: 2,
    title: 'Подбор персонала',
    text: 'Формируем команду под конкретные задачи за 24-48 часов.',
  },
  {
    number: 3,
    title: 'Запуск работы',
    text: 'Выводим персонал на объект, обучаем стандартам.',
  },
  {
    number: 4,
    title: 'Контроль качества',
    text: 'Менеджер сопровождает объект, контролируем 24/7.',
  },
]

/**
 * Template: HowItWorksSection
 * Секция "Как это работает"
 */
export default function HowItWorksSection() {
  return (
    <section className={styles.section} id="how-it-works">
      <Container>
        <div className={styles.header}>
          <Tag>Процесс</Tag>
          <h2>Как это работает? Всего 4 шага</h2>
          <p className={styles.subtitle}>
            Простой процесс — быстрый результат
          </p>
        </div>
        
        <div className={styles.grid}>
          {STEPS.map(step => (
            <StepCard 
              key={step.number}
              number={step.number}
              title={step.title}
            >
              {step.text}
            </StepCard>
          ))}
        </div>
      </Container>
    </section>
  )
}
