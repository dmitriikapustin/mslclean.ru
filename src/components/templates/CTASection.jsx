'use client'

import { Container, Tag, Icon } from '../atoms'
import { FeatureItem } from '../molecules'
import { ContactForm } from '../organisms'
import styles from './CTASection.module.css'

/**
 * Template: CTASection
 * Секция с формой обратной связи
 */
export default function CTASection() {
  return (
    <section className={styles.section} id="contact">
      <Container className={styles.inner}>
        <div className={styles.content}>
          <Tag variant="muted">Связаться с нами</Tag>
          <h2>Давайте составим план действий</h2>
          <p className={styles.text}>
            Оставьте заявку, и мы свяжемся с вами в течение 10 минут. 
            Обсудим задачи и предложим оптимальное решение.
          </p>
          
          <div className={styles.contacts}>
            <FeatureItem icon="Phone">
              <a href="tel:+78001234567" className={styles.phone}>
                +7 (800) 123-45-67
              </a>
            </FeatureItem>
            <FeatureItem icon="Clock">
              Работаем круглосуточно, 24/7
            </FeatureItem>
          </div>
        </div>
        
        <ContactForm />
      </Container>
    </section>
  )
}
