import { NavLink, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { sections } from '../data/cheatcodes'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { os, setOS, search, setSearch } = useApp()
  const navigate = useNavigate()

  function handleSearch(e) {
    setSearch(e.target.value)
    if (e.target.value) navigate('/search')
  }

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <NavLink to="/" className={styles.logo}>
          <span className={styles.logoIcon}>&gt;_</span>
          <span className={styles.logoText}>vibe<span className={styles.logoAccent}>cheatcode</span></span>
        </NavLink>

        <div className={styles.searchWrap}>
          <span className={styles.searchIcon}>⌕</span>
          <input
            className={styles.search}
            type="text"
            placeholder="Search commands, hooks, flags..."
            value={search}
            onChange={handleSearch}
          />
          {search && (
            <button className={styles.clearBtn} onClick={() => { setSearch(''); navigate('/') }}>✕</button>
          )}
        </div>

        <div className={styles.osToggle}>
          {['windows', 'macos', 'linux'].map(o => (
            <button
              key={o}
              className={`${styles.osBtn} ${os === o ? styles.osActive : ''}`}
              onClick={() => setOS(o)}
            >
              {o === 'windows' ? '⊞ Win' : o === 'macos' ? ' Mac' : '🐧 Linux'}
            </button>
          ))}
        </div>
      </div>

      <nav className={styles.nav}>
        {sections.map(s => (
          <NavLink
            key={s.id}
            to={`/${s.id}`}
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navActive : ''}`}
          >
            <span className={styles.navIcon}>{s.icon}</span>
            <span>{s.label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
