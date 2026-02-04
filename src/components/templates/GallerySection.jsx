'use client'

import Image from 'next/image'
import { Container } from '../atoms'
import styles from './GallerySection.module.css'

const GALLERY_ITEMS = [
  { src: '/images/cleaning-kitchen.png', alt: 'Чистая кухня' },
  { src: '/images/cleaning-livingroom.png', alt: 'Чистая гостиная' },
  { src: '/images/cleaning-office.png', alt: 'Чистый офис' },
  { src: '/images/cleaning-team.png', alt: 'Наша команда' },
]

/**
 * Template: GallerySection
 * Секция с фотографиями работ
 */
export default function GallerySection() {
  return (
    <section className={styles.gallery}>
      <Container>
        <div className={styles.header}>
          <span className={styles.tag}>Наши работы</span>
          <h2>Результаты говорят сами за себя</h2>
          <p className={styles.subtitle}>
            Каждый объект — это история о профессионализме и внимании к деталям
          </p>
        </div>
        
        <div className={styles.grid}>
          {GALLERY_ITEMS.map((item, index) => (
            <div key={index} className={styles.item}>
              <Image 
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
