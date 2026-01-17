import './App.css'
import studyImage from './assets/study.png'
import { useState, useEffect } from 'react'

function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set target date to February 1st of current year (or next year if already passed)
      const now = new Date()
      const currentYear = now.getFullYear()
      let targetDate = new Date(currentYear, 1, 1) // February 1st (month is 0-indexed, so 1 = February)
      
      // If February 1st has already passed this year, set it to next year
      if (now > targetDate) {
        targetDate = new Date(currentYear + 1, 1, 1)
      }

      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    // Cleanup interval on unmount
    return () => clearInterval(timer)
  }, [])

  // Format countdown string for top bar
  const formatCountdownString = () => {
    if (timeLeft.days > 0) {
      return `${timeLeft.days}d ${timeLeft.hours}h`
    } else if (timeLeft.hours > 0) {
      return `${timeLeft.hours}h ${timeLeft.minutes}m`
    } else if (timeLeft.minutes > 0) {
      return `${timeLeft.minutes}m`
    } else {
      return '0m'
    }
  }
  return (
    <div className="page">
      <header className="top-bar">
        <div className="top-bar__badge">
          <span>🎓</span>
          <span>Achieve Prestigious Certifications!</span>
        </div>
        <div className="top-bar__batch">
          Next Batch: 1st Feb (Starts in {formatCountdownString()})
        </div>
      </header>

      <div className="contact-strip">
        <div className="contact-strip__left">
          <div className="contact-pill">
            <span>📞</span>
            <span>+91 87937 91414</span>
          </div>
          <div className="contact-pill">
            <span>✉️</span>
            <span>hr@ticssolutions.net</span>
          </div>
        </div>
        <div className="contact-strip__right">
          <nav className="city-tabs">
            <span className="city-tab">Mumbai</span>
            <span className="city-tab">Pune</span>
            <span className="city-tab">Bangalore</span>
            <span className="city-tab">Delhi</span>
            <span className="city-tab">Hyderabad</span>
            <span className="city-tab">Global</span>
          </nav>
        </div>
      </div>

      <main className="hero" style={{ backgroundImage: `url(${studyImage})` }}>
        <p className="hero__eyebrow">TICS SOLUTIONS</p>
        <h1 className="hero__title">
          Unlock <span className="hero__title--highlight">Top-Paying Careers</span> in IT
        </h1>
        <h2 className="hero__subtitle">Support</h2>
        <p className="hero__tagline">
          A Journey from Freshers to Deskside Support Experts with TICS Solutions.
        </p>

        <div className="hero__timer">
          <div className="timer-box">
            <span className="timer-box__value" key={timeLeft.days}>
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="timer-box__label">Days</span>
          </div>
          <div className="timer-box">
            <span className="timer-box__value" key={timeLeft.hours}>
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="timer-box__label">Hrs</span>
          </div>
          <div className="timer-box">
            <span className="timer-box__value" key={timeLeft.minutes}>
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="timer-box__label">Mins</span>
          </div>
        </div>

        <a 
          href="https://forms.office.com/r/idB090gUUG" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero__cta-btn"
        >
          APPLY FOR FEB 1ST BATCH
        </a>
      </main>

      <section className="why-section">
        <h2 className="why-section__heading">Why Choose TICS?</h2>
        <div className="why-section__underline" />
        <p className="why-section__subheading">
          Leading training provider for Graduate Placements in Mumbai, Pune,
          Bangalore, Delhi, and Hyderabad.
        </p>

        <div className="why-section__grid">
          <article className="why-card">
            <div className="why-card__icon-wrap why-card__icon-wrap--blue">
              <span>🏅</span>
            </div>
            <h3 className="why-card__title">Proven Expertise</h3>
            <p className="why-card__body">
              Specialized in L1 desktop training. Thousands of candidates trained
              and successfully placed with our hiring partners.
            </p>
          </article>

          <article className="why-card">
            <div className="why-card__icon-wrap why-card__icon-wrap--green">
              <span>🤝</span>
            </div>
            <h3 className="why-card__title">Placement Assurance</h3>
            <p className="why-card__body">
              We guide both interns and experienced roles with real-world
              interview support and practice certifications.
            </p>
          </article>

          <article className="why-card">
            <div className="why-card__icon-wrap why-card__icon-wrap--purple">
              <span>📚</span>
            </div>
            <h3 className="why-card__title">Expert Instruction</h3>
            <p className="why-card__body">
              All sessions are led by professional experts and experienced staff
              currently working in the IT industry.
            </p>
          </article>

          <article className="why-card">
            <div className="why-card__icon-wrap why-card__icon-wrap--amber">
              <span>🌟</span>
            </div>
            <h3 className="why-card__title">Personality Dev.</h3>
            <p className="why-card__body">
              Comprehensive soft-skills training and mock interviews so you
              stand out in corporate environments.
            </p>
          </article>
        </div>
      </section>

      <section className="core-section">
        <h2 className="core-section__heading">Core Specializations</h2>
        <div className="core-section__underline" />

        <div className="core-section__cards">
          <article className="core-card">
            <div className="core-card__icon core-card__icon--blue">
              <span>💻</span>
            </div>
            <h3 className="core-card__title">End User Deskside Support</h3>
            <p className="core-card__body">
              Become the backbone of corporate IT support, handling end-user
              hardware and software needs.
            </p>
            <ul className="core-card__list">
              <li>✔ OS Troubleshooting</li>
              <li>✔ Peripheral Management</li>
            </ul>
          </article>

          <article className="core-card">
            <div className="core-card__icon core-card__icon--indigo">
              <span>🌐</span>
            </div>
            <h3 className="core-card__title">Network &amp; Connectivity</h3>
            <p className="core-card__body">
              Master the connectivity that keeps business moving, from LAN/WAN
              to VPN secure access.
            </p>
            <ul className="core-card__list">
              <li>✔ LAN/WAN Setup</li>
              <li>✔ Wi-Fi Troubleshooting</li>
            </ul>
          </article>

          <article className="core-card">
            <div className="core-card__icon core-card__icon--blue">
              <span>🎥</span>
            </div>
            <h3 className="core-card__title">VC Support</h3>
            <p className="core-card__body">
              Specialized training for modern video conferencing environments
              and remote collaboration tools.
            </p>
            <ul className="core-card__list">
              <li>✔ VC Hardware Config</li>
              <li>✔ Streaming Diagnostics</li>
            </ul>
          </article>
        </div>

        <div className="core-metrics">
          <div className="core-metric">
            <div className="core-metric__value">2 Months</div>
            <div className="core-metric__label">Duration</div>
          </div>
          <div className="core-metric">
            <div className="core-metric__value">Online</div>
            <div className="core-metric__label">Method</div>
          </div>
          <div className="core-metric">
            <div className="core-metric__value">LMS 24/7</div>
            <div className="core-metric__label">Access</div>
          </div>
          <div className="core-metric">
            <div className="core-metric__value">1st Feb</div>
            <div className="core-metric__label">Next Batch</div>
          </div>
        </div>
      </section>

      <section className="eligibility-section">
        <div className="eligibility-section__left">
          <h2 className="eligibility-section__heading">Who Can Apply?</h2>

          <div className="eligibility-item">
            <div className="eligibility-item__number">01</div>
            <div className="eligibility-item__content">
              <h3>Education</h3>
              <p>Graduate or Diploma (any stream).</p>
            </div>
          </div>

          <div className="eligibility-item">
            <div className="eligibility-item__number">02</div>
            <div className="eligibility-item__content">
              <h3>Communication</h3>
              <p>Fluency in Hindi, Marathi, and English.</p>
            </div>
          </div>

          <div className="eligibility-item">
            <div className="eligibility-item__number">03</div>
            <div className="eligibility-item__content">
              <h3>Technical Skills</h3>
              <p>Basic understanding of LAN/WAN, Wi-Fi, and VPN tools.</p>
            </div>
          </div>
        </div>

        <div className="eligibility-section__right">
          <div className="why-join-card">
            <span className="why-join-card__quote">"</span>
            <h3 className="why-join-card__heading">Why Join Us?</h3>
            <ul className="why-join-card__list">
              <li><span className="check">✔</span> Half the price of other institutes</li>
              <li><span className="check">✔</span> Placement assurance &amp; guidance</li>
              <li><span className="check">✔</span> 2 Interviews assured in 6 months</li>
              <li><span className="check">✔</span> Major Metro &amp; Global placements</li>
              <li><span className="check">✔</span> WhatsApp group for peer learning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="partners-section__left">
          <h2 className="partners-section__heading">Hiring Partners &amp; Companies</h2>
          <p className="partners-section__body">
            Are you looking for industry-ready, pre-trained IT professionals? TICS
            Solutions provides a steady pipeline of certified talent in Deskside
            Support, Networking, and VC Management. Partner with us for your
            recruitment needs.
          </p>

          <div className="partners-contact-card">
            <div className="partners-contact-card__icon partners-contact-card__icon--blue">📞</div>
            <div>
              <div className="partners-contact-card__label">CALL FOR RECRUITER ACCESS</div>
              <div className="partners-contact-card__value">+91 87937 91414</div>
            </div>
          </div>

          <div className="partners-contact-card">
            <div className="partners-contact-card__icon partners-contact-card__icon--indigo">✉️</div>
            <div>
              <div className="partners-contact-card__label">HR &amp; CORPORATE INQUIRIES</div>
              <div className="partners-contact-card__value">hr@ticssolutions.net</div>
            </div>
          </div>
        </div>

        <div className="partners-section__right">
          <div className="alumni-card">
            <div className="alumni-card__heading">ALUMNI NETWORK PRESENCE</div>
            <div className="alumni-card__grid">
              <span>INFOSYS</span>
              <span>WIPRO</span>
              <span>HCL TECH</span>
              <span>TATA COMM</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <h2 className="pricing-section__heading">Pricing &amp; Investment</h2>

        <div className="pricing-section__cards">
          <article className="pricing-card">
            <div className="pricing-card__label">INDIVIDUAL COURSE</div>
            <div className="pricing-card__price">
              <span className="pricing-card__amount">₹62,000</span>
              <span className="pricing-card__gst">+ GST</span>
            </div>
            <p className="pricing-card__desc">
              For specific skill targeting in one specialized IT domain.
            </p>
          </article>

          <article className="pricing-card pricing-card--featured">
            <div className="pricing-card__badge">TOP BUNDLE VALUE</div>
            <div className="pricing-card__label">3-COURSE MASTER BUNDLE</div>
            <div className="pricing-card__price">
              <span className="pricing-card__amount">₹1,00,000</span>
              <span className="pricing-card__gst">+ GST</span>
            </div>
            <div className="pricing-card__strike">Instead of ₹1,86,000</div>
            <p className="pricing-card__desc">
              We recommend this for 100% placement opportunity and complete IT mastery.
            </p>
          </article>
        </div>
      </section>

      <section className="stories-section">
        <h2 className="stories-section__heading">Success Stories</h2>

        <div className="stories-section__cards">
          <article className="story-card">
            <div className="story-card__header">
              <div className="story-card__avatar story-card__avatar--blue">AJ</div>
              <div>
                <div className="story-card__name">Amit J.</div>
                <div className="story-card__role">Placed at a Tier-1 MNC</div>
              </div>
            </div>
            <p className="story-card__quote">
              "I was a fresher with no technical background. TICS provided hands-on
              training that gave me the confidence to crack my first IT interview!"
            </p>
          </article>

          <article className="story-card">
            <div className="story-card__header">
              <div className="story-card__avatar story-card__avatar--green">SP</div>
              <div>
                <div className="story-card__name">Sonal P.</div>
                <div className="story-card__role">Placed at a Global MNC</div>
              </div>
            </div>
            <p className="story-card__quote">
              "The Network &amp; Connectivity module was very practical. The AWS cloud
              labs are exactly what we use in corporate roles today."
            </p>
          </article>

          <article className="story-card">
            <div className="story-card__header">
              <div className="story-card__avatar story-card__avatar--pink">RK</div>
              <div>
                <div className="story-card__name">Rahul K.</div>
                <div className="story-card__role">Placed at a Leading MNC</div>
              </div>
            </div>
            <p className="story-card__quote">
              "Their placement guidance is real. Within 3 months of finishing the
              course, I had 2 interview calls as promised."
            </p>
          </article>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="cta-section__heading">Join the Next Batch</h2>
        <p className="cta-section__subheading">
          Starting 1st of February. Limited seats per batch to ensure personalized instruction.
        </p>
        <a 
          href="https://forms.office.com/r/idB090gUUG" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-section__btn"
        >
          REGISTER NOW
        </a>
        <div className="cta-section__contact">
          <span>📞 +91 87937 91414</span>
          <span>✉️ hr@ticssolutions.net</span>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__title">TICS Solutions Trainings &amp; Placements</div>
        <div className="footer__copy">
          © 2026 TICS Solutions. Mumbai | Pune | Bangalore | Delhi | Hyderabad | Global
        </div>
      </footer>

      <button
        type="button"
        aria-label="Chat on WhatsApp"
        className="whatsapp-fab"
      >
        <span className="whatsapp-fab__icon">💬</span>
      </button>
    </div>
  )
}

export default App
