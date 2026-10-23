import { useState } from 'react'
import { translations } from './translations'

export default function App() {
  const [lang, setLang] = useState('fr')
  const t = translations[lang]

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
          <a href="#contact">{t.navContact}</a>
        </nav>

        <div className="lang-switcher">
          <label htmlFor="lang" className="sr-only">
            Language
          </label>
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
                <strong>{t.statOne}</strong>
                <span>{t.statsLabel}</span>
              </div>
              <div>
                <strong>{t.statTwo}</strong>
                <span>{t.statsLabel}</span>
              </div>
              <div>
                <strong>{t.statThree}</strong>
                <span>{t.statsLabel}</span>
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
              <div className="chart">
                <span style={{ height: '38%' }}></span>
                <span style={{ height: '56%' }}></span>
                <span style={{ height: '72%' }}></span>
                <span style={{ height: '88%' }}></span>
                <span style={{ height: '100%' }}></span>
              </div>
            </div>
          </div>
        </section>

        <section className="program" id="program">
          <div className="section-heading">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h2>{t.sectionProgramTitle}</h2>
            <p>{t.sectionProgramText}</p>
          </div>

          <div className="cards">
            <article className="info-card">
              <div className="icon">01</div>
              <h3>{t.cardOneTitle}</h3>
              <p>{t.cardOneText}</p>
            </article>

            <article className="info-card">
              <div className="icon">02</div>
              <h3>{t.cardTwoTitle}</h3>
              <p>{t.cardTwoText}</p>
            </article>

            <article className="info-card">
              <div className="icon">03</div>
              <h3>{t.cardThreeTitle}</h3>
              <p>{t.cardThreeText}</p>
            </article>
          </div>
        </section>

        <section className="benefits" id="benefits">
          <div className="section-heading">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h2>{t.sectionBenefitsTitle}</h2>
          </div>

          <div className="benefit-list">
            <div className="benefit-item">
              <div className="benefit-badge">✦</div>
              <div>
                <h3>{t.benefitOneTitle}</h3>
                <p>{t.benefitOneText}</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-badge">✦</div>
              <div>
                <h3>{t.benefitTwoTitle}</h3>
                <p>{t.benefitTwoText}</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-badge">✦</div>
              <div>
                <h3>{t.benefitThreeTitle}</h3>
                <p>{t.benefitThreeText}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-panel" id="contact">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
          <button className="primary">{t.ctaButton}</button>
        </section>
      </main>

      <footer>{t.footerText}</footer>
    </div>
  )
}
