import { useApp } from '../context/AppContext'
import styles from './CodeCard.module.css'

const badgeStyles = {
  purple: { bg: 'rgba(178,125,255,0.12)', color: '#b27dff', border: 'rgba(178,125,255,0.25)' },
  blue:   { bg: 'rgba(77,159,255,0.12)',  color: '#4d9fff', border: 'rgba(77,159,255,0.25)' },
  green:  { bg: 'rgba(0,255,136,0.1)',    color: '#00ff88', border: 'rgba(0,255,136,0.25)' },
  orange: { bg: 'rgba(255,159,77,0.12)',  color: '#ff9f4d', border: 'rgba(255,159,77,0.25)' },
  red:    { bg: 'rgba(255,107,107,0.12)', color: '#ff6b6b', border: 'rgba(255,107,107,0.25)' },
}

export default function CodeCard({ card }) {
  const { copied, copyCode, os } = useApp()
  const isCopied = copied === card.id
  const badge = badgeStyles[card.badgeColor] || badgeStyles.purple

  if (!card.os.includes(os)) return null

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.label}>{card.label}</span>
        <span
          className={styles.badge}
          style={{ background: badge.bg, color: badge.color, borderColor: badge.border }}
        >
          {card.badge}
        </span>
      </div>
      <div className={styles.codeWrap}>
        <pre className={styles.pre}><code>{card.code}</code></pre>
        <button
          className={`${styles.copyBtn} ${isCopied ? styles.copied : ''}`}
          onClick={() => copyCode(card.code, card.id)}
        >
          {isCopied ? '✓ copied' : 'copy'}
        </button>
      </div>
      {card.desc && <p className={styles.desc}>{card.desc}</p>}
    </div>
  )
}
