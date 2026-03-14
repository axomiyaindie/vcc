import { Link } from 'react-router-dom'
import { sections } from '../data/cheatcodes'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={`${styles.home} page-animate`}>
      <div className={styles.hero}>
        <div className={styles.heroTag}>v1.0 — beginner to pro</div>
        <h1 className={styles.heroTitle}>
          Every command<br />you'll ever need.
        </h1>
        <p className={styles.heroSub}>
          React · Git · GitHub · npm · Vercel · Netlify · VS Code<br />
          All 3 operating systems. Just pick your OS and go.
        </p>
        <div className={styles.heroCta}>
          <Link to="/setup" className={styles.ctaBtn}>Get started →</Link>
          <Link to="/react" className={styles.ctaOutline}>React commands</Link>
        </div>
      </div>

      <div className={styles.grid}>
        {sections.map(s => (
          <Link to={`/${s.id}`} key={s.id} className={styles.sectionCard}>
            <span className={styles.cardIcon}>{s.icon}</span>
            <div>
              <div className={styles.cardLabel}>{s.label}</div>
              <div className={styles.cardCount}>{s.count} commands</div>
            </div>
            <span className={styles.arrow}>→</span>
          </Link>
        ))}
      </div>

      <div className={styles.footer}>
  <p>Built for vibe developers — use the OS toggle to filter commands for your system.</p>
  <p>Built with 😤 by <a href="https://github.com/rakibuilds" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Rakibul</a></p>
</div>
    </div>
  )
}
