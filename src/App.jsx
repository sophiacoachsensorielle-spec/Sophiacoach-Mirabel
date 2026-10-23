import { useState } from 'react'
import { translations } from './translations'

export default function App() {
  const [lang, setLang] = useState('fr')
  const [form, setForm] = useState({
    name: '',
    email: '',
    language: 'fr',
    goal: '',
  })

  const t = translations[lang]

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Signup form submitted:', form)
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">S</span>
          <span>Sophiacoach</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#home">{t.navHome}</a>
          <a href="#program">{t.navProgram}</a>
          <a href="#benefits">{t.navBenefits}</a>
          <a href="#testimonials">{t.navTestimonials}</a>
          <a href="#pricing">{t.navPricing}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>

        <div className="lang-switcher">
          <label htmlFor="lang" className="sr-only">Language</label>
          <select
            id="lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            aria-label="Change language"
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="tagline">{t.heroSubtitle}</p>
            <p className="lead">{t.heroText}</p>

            <div className="actions">
              <button className="primary">{t.primaryButton}</button>
              <button className="secondary">{t.secondaryButton}</button>
            </div>

            <div className="stats">
              <div>
                <strong>{t.metric1}</strong>
                <span>{t.trustText}</span>
              </div>
              <div>
                <strong>{t.metric2}</strong>
                <span>{t.trustText}</span>
              </div>
              <div>
                <strong>{t.metric3}</strong>
                <span>{t.trustText}</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Coaching illustration">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="dashboard-card">
              <div className="card-header">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>

              <div className="mini-panel top-mini">
                <span>Focus</span>
                <strong>82%</strong>
              </div>

              <div className="chart">
                <span style={{ height: '34%' }}></span>
                <span style={{ height: '46%' }}></span>
                <span style={{ height: '68%' }}></span>
                <span style={{ height: '80%' }}></span>
                <span style={{ height: '100%' }}></span>
              </div>

              <div className="mini-row">
                <div className="mini-panel">
                  <span>Week</span>
                  <strong>4</strong>
                </div>
                <div className="mini-panel accent">
                  <span>Goal</span>
                  <strong>+27%</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="program" id="program">
          <div className="section-heading">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h2>{t.programTitle}</h2>
            <p>{t.programText}</p>
          </div>

          <div className="cards">
            <article className="info-card">
              <div className="icon">01</div>
              <h3>{t.step1Title}</h3>
              <p>{t.step1Text}</p>
            </article>

            <article className="info-card">
              <div className="icon">02</div>
              <h3>{t.step2Title}</h3>
              <p>{t.step2Text}</p>
            </article>

            <article className="info-card">
              <div className="icon">03</div>
              <h3>{t.step3Title}</h3>
              <p>{t.step3Text}</p>
            </article>
          </div>
        </section>

        <section className="benefits" id="benefits">
          <div className="section-heading">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h2>{t.benefitsTitle}</h2>
          </div>

          <div className="benefit-list">
            <div className="benefit-item">
              <div className="benefit-badge">✦</div>
              <div>
                <h3>{t.benefit1Title}</h3>
                <p>{t.benefit1Text}</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-badge">✦</div>
              <div>
                <h3>{t.benefit2Title}</h3>
                <p>{t.benefit2Text}</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-badge">✦</div>
              <div>
                <h3>{t.benefit3Title}</h3>
                <p>{t.benefit3Text}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <div className="section-heading">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h2>{t.testimonialTitle}</h2>
          </div>

          <div className="testimonial-grid">
            <article className="quote-card">
              <p>“{t.quote1}”</p>
              <span>— Maya</span>
            </article>
            <article className="quote-card">
              <p>“{t.quote2}”</p>
              <span>— Lucas</span>
            </article>
            <article className="quote-card">
              <p>“{t.quote3}”</p>
              <span>— Emma</span>
            </article>
          </div>
        </section>

        <section className="pricing" id="pricing">
          <div className="section-heading">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h2>{t.pricingTitle}</h2>
            <p>{t.pricingText}</p>
          </div>

          <div className="pricing-grid">
            <article className="price-card">
              <h3>{t.plan1Title}</h3>
              <p className="price">{t.plan1Price}</p>
              <ul>
                <li>{t.plan1Feature1}</li>
                <li>{t.plan1Feature2}</li>
                <li>{t.plan1Feature3}</li>
              </ul>
            </article>

            <article className="price-card featured">
              <div className="featured-tag">Most popular</div>
              <h3>{t.plan2Title}</h3>
              <p className="price">{t.plan2Price}</p>
              <ul>
                <li>{t.plan2Feature1}</li>
                <li>{t.plan2Feature2}</li>
                <li>{t.plan2Feature3}</li>
              </ul>
            </article>

            <article className="price-card">
              <h3>{t.plan3Title}</h3>
              <p className="price">{t.plan3Price}</p>
              <ul>
                <li>{t.plan3Feature1}</li>
                <li>{t.plan3Feature2}</li>
                <li>{t.plan3Feature3}</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="cta-panel" id="contact">
          <h2>{t.formTitle}</h2>
          <p className="form-subtitle">{t.formSubtitle}</p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                <span>{t.nameLabel}</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t.nameLabel}
                />
              </label>

              <label>
                <span>{t.emailLabel}</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t.emailLabel}
                />
              </label>

              <label>
                <span>{t.languageLabel}</span>
                <select name="language" value={form.language} onChange={handleChange}>
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                </select>
              </label>

              <label>
                <span>{t.goalLabel}</span>
                <textarea
                  name="goal"
                  value={form.goal}
                  onChange={handleChange}
                  placeholder={t.goalLabel}
                />
              </label>
            </div>

            <button type="submit" className="primary form-submit">
              {t.submitButton}
            </button>
          </form>
        </section>
      </main>

      <footer>{t.footerText}</footer>
    </div>
  )
}
