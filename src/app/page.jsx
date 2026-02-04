'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './page.module.css'

// Контент из ТЗ
const PROBLEMS = [
  {
    num: 1,
    title: 'Текучка персонала',
    items: [
      'Клинер не пришел на работу',
      'Потеря репутации, потеря клиентов',
      'Дорогостоящая непредвиденная замена',
    ],
  },
  {
    num: 2,
    title: 'Поиск и обучение',
    items: [
      'Ищете клинера месяц через знакомых и Авито',
      'Переплачиваете наличными',
      'Нет гарантий на качество',
    ],
  },
  {
    num: 3,
    title: 'Управление персоналом',
    items: [
      'Вы не кадровик, но должны следить за графиком',
      'Больничные, отпуска, конфликты',
      'Налоги, ПФР, документы — ваша задача',
    ],
  },
  {
    num: 4,
    title: 'Стандарты качества',
    items: [
      'Ваш клинер — ваша ответственность',
      'Если что-то сломал или потерял — вам платить',
      'Нет контроля качества',
    ],
  },
]

const SOLUTIONS = [
  {
    num: 1,
    title: 'Готовый персонал 24/7',
    desc: 'Мы подбираем персонал по 7 параметрам: опыт, документы, навыки, рекомендации, адаптивность, устойчивость к нагрузкам, ответственность',
    highlight: 'Готовый сотрудник за 24-48 часов',
  },
  {
    num: 2,
    title: 'Замена без остановки',
    desc: 'Заболел — мы пришлем замену той же смены. Контроль 24/7.',
    highlight: 'Гарантия непрерывности работы',
  },
  {
    num: 3,
    title: 'Юридическое оформление',
    desc: 'Договор, безналичная оплата, фиксированная цена. Вы не отвечаете перед законом за клинера — мы отвечаем.',
    highlight: 'Экономия на ФОТ, налогах, ПФР',
  },
  {
    num: 4,
    title: 'Контроль качества',
    desc: 'Каждый объект сопровождает менеджер. Если не нравится — замена в течение дня.',
    highlight: 'Персональный менеджер объекта',
  },
]

const USP = [
  {
    icon: '🏋️',
    title: 'Специалист по фитнес-клубам и ресторанам',
    desc: 'Мы работаем с вашей индустрией 3+ года, понимаем специфику',
  },
  {
    icon: '✓',
    title: 'Гарантия качества',
    desc: 'Если персонал не подходит — замена в течение дня, без доплаты',
  },
  {
    icon: '💰',
    title: 'Фиксированная цена',
    desc: 'Никаких скрытых платежей, никаких наличных расчетов',
  },
  {
    icon: '⚡',
    title: 'Быстрый подбор',
    desc: 'Готовый персонал за 24-48 часов, замена — за 2 часа',
  },
  {
    icon: '📋',
    title: 'Полная юридическая поддержка',
    desc: 'Договор, налоги, ПФР, страховка — все на нас',
  },
  {
    icon: '👁️',
    title: 'Контроль 24/7',
    desc: 'Менеджер отвечает за каждый объект, контроль качества в режиме реального времени',
  },
]

const STEPS = [
  {
    num: 1,
    title: 'Анализ задачи',
    desc: 'Изучаем объект, требования и процессы',
  },
  {
    num: 2,
    title: 'Подбор персонала',
    desc: 'Формируем команду под конкретные задачи',
  },
  {
    num: 3,
    title: 'Запуск работы',
    desc: 'Выводим персонал на объект, контролируем качество',
  },
  {
    num: 4,
    title: 'Сопровождение',
    desc: 'Менеджер на связи 24/7, решаем все вопросы',
  },
]

const PORTFOLIO = [
  { title: 'Фитнес-клуб Premium', image: '/images/portfolio-gym.jpg' },
  { title: 'Ресторан Москва', image: '/images/portfolio-restaurant.jpg' },
  { title: 'Бизнес-центр Сити', image: '/images/portfolio-office.jpg' },
  { title: 'Сеть кафе Вкусно', image: '/images/portfolio-cafe.jpg' },
  { title: 'Отель Люкс', image: '/images/portfolio-hotel.jpg' },
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageBody}>
        {/* ===================== NAVBAR ===================== */}
        <nav className={styles.navbar}>
          <div className={styles.navbarInner}>
            <Link href="/" className={styles.brand}>
              MSL<span>Clean</span>
            </Link>
            <div className={styles.navMenu}>
              <Link href="#about" className={styles.navLink}>О компании</Link>
              <Link href="#services" className={styles.navLink}>Услуги</Link>
              <Link href="#portfolio" className={styles.navLink}>Клиенты</Link>
              <Link href="#contact" className={styles.navLink}>Контакты</Link>
            </div>
            <div className={styles.navRight}>
              <div className={styles.navPhone}>
                <a href="tel:+79999999999">+7 (999) 999-99-99</a>
                <span className={styles.navPhoneHint}>Работаем 24/7</span>
              </div>
              <Link href="#contact" className={styles.navButton}>
                Получить расчёт
              </Link>
            </div>
          </div>
        </nav>

        {/* ===================== HERO ===================== */}
        <section className={styles.heroSection}>
          <div className={styles.heroPadding}>
            <div className={styles.heroContent}>
              {/* Title - Top Left */}
              <div className={styles.heroTitleWrapper}>
                <motion.h1 
                  className={styles.heroTitle}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Чистота.<br/>Без управленческих забот
                </motion.h1>
              </div>

              {/* Description - Bottom Right */}
              <motion.div 
                className={styles.heroDescriptionBox}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p>
                  Подбор, замены и контроль клинингового персонала под ключ. 
                  Наша команда экспертов обеспечит чистоту на вашем объекте без управленческих забот.
                </p>
                <Link href="#contact" className={styles.heroButton}>
                  Связаться с нами
                </Link>
              </motion.div>

              {/* Background Image */}
              <div className={styles.heroBkg}>
                <Image 
                  src="/images/hero-bg.jpg"
                  alt="Современный офис"
                  fill
                  priority
                  className={styles.heroImage}
                />
                <div className={styles.heroOverlay} />
              </div>
            </div>
          </div>
        </section>

        {/* ===================== ABOUT ===================== */}
        <section className={styles.aboutSection} id="about">
          <div className={styles.sectionPadding}>
            <div className={styles.aboutContent}>
              <motion.div 
                className={styles.tag}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Добро пожаловать в MSL Clean
              </motion.div>
              <motion.h2 
                className={styles.aboutTitle}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                Ваш надёжный партнёр в аутстафинге клинингового персонала
              </motion.h2>
              <motion.p 
                className={styles.aboutText}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Мы берём на себя подбор, контроль и управление сотрудниками, обеспечивая стабильную чистоту на вашем объекте.
                Вы работаете, мы отвечаем за чистоту. Никаких звонков клинерам, никаких замен в спешке, никаких судебных проблем.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ===================== BANNER ===================== */}
        <section className={styles.bannerSection}>
          <div className={styles.bannerBkg}>
            <Image 
              src="/images/banner-kitchen.jpg"
              alt="Чистая кухня ресторана"
              fill
              className={styles.bannerImage}
            />
            <div className={styles.bannerOverlay} />
          </div>
        </section>

        {/* ===================== PROBLEMS ===================== */}
        <section className={styles.problemsSection} id="problems">
          <div className={styles.sectionPadding}>
            <div className={styles.sectionTop}>
              <motion.div 
                className={styles.tag}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Знакомо?
              </motion.div>
              <motion.h2 
                className={styles.sectionTitle}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                Вам знакомо это?
              </motion.h2>
              <motion.p 
                className={styles.sectionSubtitle}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Это обходится вам дорого
              </motion.p>
            </div>

            <motion.div 
              className={styles.problemsGrid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {PROBLEMS.map((problem) => (
                <motion.div 
                  key={problem.num}
                  className={styles.problemCard}
                  variants={fadeInUp}
                >
                  <div className={styles.problemNum}>{problem.num}</div>
                  <h3 className={styles.problemTitle}>{problem.title}</h3>
                  <ul className={styles.problemList}>
                    {problem.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===================== SOLUTION ===================== */}
        <section className={styles.solutionSection} id="services">
          <div className={styles.sectionPadding}>
            <div className={styles.sectionTop}>
              <motion.div 
                className={styles.tag}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Решение
              </motion.div>
              <motion.h2 
                className={styles.sectionTitle}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                Аутстафинг клинингового персонала
              </motion.h2>
              <motion.p 
                className={styles.sectionSubtitle}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Мы берём всю ответственность на себя
              </motion.p>
            </div>

            <div className={styles.solutionGrid}>
              {SOLUTIONS.map((solution, index) => (
                <motion.div 
                  key={solution.num}
                  className={styles.solutionItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.solutionContent}>
                    <div className={styles.solutionNum}>
                      <span>{solution.num}</span>
                    </div>
                    <h3 className={styles.solutionTitle}>{solution.title}</h3>
                    <p className={styles.solutionDesc}>{solution.desc}</p>
                    <div className={styles.solutionHighlight}>{solution.highlight}</div>
                  </div>
                  <div className={styles.solutionLine} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== USP ===================== */}
        <section className={styles.uspSection}>
          <div className={styles.sectionPadding}>
            <div className={styles.sectionTop}>
              <motion.div 
                className={styles.tag}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Преимущества
              </motion.div>
              <motion.h2 
                className={styles.sectionTitle}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                Почему выбирают нас
              </motion.h2>
            </div>

            <motion.div 
              className={styles.uspGrid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {USP.map((item, i) => (
                <motion.div 
                  key={i}
                  className={styles.uspCard}
                  variants={fadeInUp}
                >
                  <div className={styles.uspIcon}>{item.icon}</div>
                  <h3 className={styles.uspTitle}>{item.title}</h3>
                  <p className={styles.uspDesc}>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===================== HOW IT WORKS ===================== */}
        <section className={styles.stepsSection}>
          <div className={styles.sectionPadding}>
            <div className={styles.sectionTop}>
              <motion.div 
                className={styles.tag}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Процесс
              </motion.div>
              <motion.h2 
                className={styles.sectionTitle}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                Как это работает? Всего 4 шага
              </motion.h2>
            </div>

            <motion.div 
              className={styles.stepsGrid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {STEPS.map((step) => (
                <motion.div 
                  key={step.num}
                  className={styles.stepCard}
                  variants={fadeInUp}
                >
                  <div className={styles.stepNum}>{step.num}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===================== PORTFOLIO SLIDER ===================== */}
        <section className={styles.portfolioSection} id="portfolio">
          <div className={styles.sectionPadding}>
            <div className={styles.portfolioTop}>
              <div className={styles.portfolioInfo}>
                <motion.div 
                  className={styles.tag}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  Клиенты
                </motion.div>
                <motion.h2 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                >
                  Наши объекты и проекты
                </motion.h2>
              </div>
              <div className={styles.sliderArrows}>
                <button className={`${styles.sliderArrow} swiper-prev`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12l14 0M5 12l6 6M5 12l6-6"/>
                  </svg>
                </button>
                <button className={`${styles.sliderArrow} swiper-next`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12l14 0M13 18l6-6M13 6l6 6"/>
                  </svg>
                </button>
              </div>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView="auto"
              navigation={{
                prevEl: '.swiper-prev',
                nextEl: '.swiper-next',
              }}
              className={styles.portfolioSlider}
            >
              {PORTFOLIO.map((item, index) => (
                <SwiperSlide key={index} className={styles.portfolioSlide}>
                  <div className={styles.portfolioCard}>
                    <div className={styles.portfolioImageWrapper}>
                      <Image 
                        src={item.image}
                        alt={item.title}
                        fill
                        className={styles.portfolioImage}
                      />
                      <div className={styles.portfolioImageOverlay} />
                    </div>
                    <div className={styles.portfolioCardInfo}>
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* ===================== CONTACT ===================== */}
        <section className={styles.contactSection} id="contact">
          <div className={styles.contactBkg}>
            <div className={styles.contactGradient} />
          </div>
          <div className={styles.contactContent}>
            <div className={styles.sectionPadding}>
              <div className={styles.contactGrid}>
                <div className={styles.contactLeft}>
                  <div className={styles.tagWhite}>Связаться с нами</div>
                  <h2>Давайте обсудим<br/>ваш проект</h2>
                  <p>Ответим в течение 10 минут</p>
                  <div className={styles.contactInfo}>
                    <a href="tel:+79999999999" className={styles.contactPhone}>
                      +7 (999) 999-99-99
                    </a>
                    <span className={styles.contactHint}>Работаем 24/7</span>
                  </div>
                  <p className={styles.contactAlt}>Не любите звонить? Напишите на email</p>
                  <a href="mailto:info@mslclean.ru" className={styles.emailLink}>
                    info@mslclean.ru
                  </a>
                </div>
                <div className={styles.contactRight}>
                  <form className={styles.contactForm}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Ваше имя</label>
                        <input type="text" placeholder="Имя" required />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Компания</label>
                        <input type="text" placeholder="Название компании" />
                      </div>
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Телефон *</label>
                        <input type="tel" placeholder="+7 (999) 999-99-99" required />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Email</label>
                        <input type="email" placeholder="info@company.ru" />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Расскажите о вашем объекте</label>
                      <textarea placeholder="Тип объекта, площадь, количество персонала..." rows={4} />
                    </div>
                    <button type="submit" className={styles.button}>
                      Получить расчёт
                    </button>
                    <p className={styles.formHint}>
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Footer — Samara Mars Style */}
          <footer className={styles.footer}>
            <div className={styles.footerInner}>
              {/* Top Grid */}
              <div className={styles.footerGrid}>
                {/* Brand + Newsletter */}
                <div className={styles.footerBrand}>
                  <div className={styles.footerLogo}>MSL CLEAN</div>
                  <p className={styles.footerTagline}>Будьте в курсе новостей</p>
                  <div className={styles.newsletterForm}>
                    <input type="email" placeholder="Email" className={styles.newsletterInput} />
                    <button className={styles.newsletterBtn}>→</button>
                  </div>
                </div>

                {/* Navigation */}
                <div className={styles.footerColumn}>
                  <h5 className={styles.footerHeading}>Навигация</h5>
                  <nav className={styles.footerLinks}>
                    <Link href="/">Главная</Link>
                    <Link href="#services">Услуги</Link>
                    <Link href="#about">О компании</Link>
                    <Link href="#portfolio">Клиенты</Link>
                  </nav>
                </div>

                {/* Location */}
                <div className={styles.footerColumn}>
                  <h5 className={styles.footerHeading}>Контакты</h5>
                  <div className={styles.footerAddress}>
                    <span>Москва, Россия</span>
                    <a href="tel:+79999999999">+7 (999) 999-99-99</a>
                    <span>Работаем 24/7</span>
                  </div>
                </div>

                {/* Promo */}
                <div className={styles.footerColumn}>
                  <h5 className={styles.footerHeading}>Акция</h5>
                  <div className={styles.footerPromo}>
                    <span className={styles.promoTag}>🎁 Скидка 10%</span>
                    <span>для сетевых бизнесов</span>
                  </div>
                </div>
              </div>

              {/* Big Email */}
              <div className={styles.footerEmailRow}>
                <a href="mailto:info@mslclean.ru" className={styles.footerBigEmail}>
                  info@mslclean.ru
                </a>
                <div className={styles.footerSocial}>
                  <a href="#" className={styles.socialBtn}>Telegram</a>
                  <a href="#" className={styles.socialBtn}>WhatsApp</a>
                </div>
              </div>

              {/* Bottom */}
              <div className={styles.footerBottom}>
                <a href="#" className={styles.footerPolicy}>Политика конфиденциальности</a>
                <span className={styles.footerCopyright}>MSL Clean © 2024. Все права защищены</span>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </div>
  )
}
