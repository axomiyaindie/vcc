import { useApp } from '../context/AppContext'
import styles from './HookCard.module.css'

const colorMap = {
  blue:   { bg: 'rgba(77,159,255,0.08)',  accent: '#4d9fff', border: 'rgba(77,159,255,0.2)' },
  green:  { bg: 'rgba(0,255,136,0.06)',   accent: '#00ff88', border: 'rgba(0,255,136,0.2)' },
  orange: { bg: 'rgba(255,159,77,0.08)',  accent: '#ff9f4d', border: 'rgba(255,159,77,0.2)' },
  purple: { bg: 'rgba(178,125,255,0.08)', accent: '#b27dff', border: 'rgba(178,125,255,0.2)' },
}

export default function HookCard({ hook }) {
  const { copied, copyCode } = useApp()
  const isCopied = copied === hook.id
  const c = colorMap[hook.color] || colorMap.blue

  return (
    <div className={styles.card} style={{ borderColor: c.border }}>
      <div className={styles.top} style={{ background: c.bg }}>
        <span className={styles.name} style={{ color: c.accent }}>{hook.name}</span>
        <button
          className={`${styles.copyBtn} ${isCopied ? styles.copied : ''}`}
          style={isCopied ? { color: c.accent, borderColor: c.border } : {}}
          onClick={() => copyCode(hook.code, hook.id)}
        >
          {isCopied ? '✓' : 'copy'}
        </button>
      </div>
      <p className={styles.desc}>{hook.desc}</p>
      <div className={styles.codeWrap}>
        <pre className={styles.pre}><code>{hook.code}</code></pre>
      </div>
    </div>
  )
}
