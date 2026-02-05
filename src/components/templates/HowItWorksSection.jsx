'use client'

import { motion } from 'framer-motion'
import { Container, Tag, AnimatedSection } from '../atoms'
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

/**
 * Template: HowItWorksSection
 * Секция "Как это работает" с анимациями
 */
export default function HowItWorksSection() {
  return (
    <section className={styles.section} id="how-it-works">
      <Container>
        <AnimatedSection className={styles.header}>
          <Tag variant="outlined">Процесс</Tag>
          <h2>Как это работает? Всего 4 шага</h2>
          <p className={styles.subtitle}>
            Простой процесс — быстрый результат
          </p>
        </AnimatedSection>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {STEPS.map((step, index) => (
            <motion.div key={step.number} variants={stepVariants}>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <StepCard 
                  number={step.number}
                  title={step.title}
                >
                  {step.text}
                </StepCard>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
