'use client'

import Image from 'next/image'
import { Container, Tag, Button } from '../atoms'
import { FeatureItem } from '../molecules'
import styles from './HeroSection.module.css'

const FEATURES = [
  { icon: 'CheckCircle', text: 'Готовый персонал за 24 часа' },
  { icon: 'CheckCircle', text: 'Замена без остановки объекта' },
  { icon: 'CheckCircle', text: 'Юридическое оформление и страховка' },
]

/**
 * Template: HeroSection
 * Главный экран лендинга
 */
export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <Tag>🧹 Скидка 10% для сетевых бизнесов</Tag>
          
          <h1 className={styles.title}>
            Чистота. Без управленческих забот
          </h1>
          
          <p className={styles.subtitle}>
            Подбор, замены и контроль процессов под ключ для ресторанов и фитнес-клубов. 
            Мы предоставляем сотрудников и полностью берём на себя управление их работой.
          </p>
          
          <div className={styles.features}>
            {FEATURES.map(f => (
              <FeatureItem key={f.text} icon={f.icon}>
                {f.text}
              </FeatureItem>
            ))}
          </div>
          
          <div className={styles.cta}>
            <Button href="#contact">
              Бесплатная консультация
            </Button>
            <span className={styles.ctaHint}>
              Ответим в течение 10 минут
            </span>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.image}>
            <Image 
              src="/assets/hero-cleaning.jpg" 
              alt="Профессиональный клининг"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
