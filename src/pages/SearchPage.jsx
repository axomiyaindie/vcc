import { useApp } from '../context/AppContext'
import { allCheatCodes, hooks } from '../data/cheatcodes'
import CodeCard from '../components/CodeCard'
import HookCard from '../components/HookCard'
import styles from './SearchPage.module.css'

export default function SearchPage() {
  const { search, os } = useApp()
  const q = search.toLowerCase().trim()

  const matchedCards = allCheatCodes.filter(c => {
    const inOS = c.os.includes(os)
    const inText = c.label.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      (c.desc || '').toLowerCase().includes(q) ||
      c.badge.toLowerCase().includes(q) ||
      c.section.toLowerCase().includes(q)
    return inOS && inText
  })

  const matchedHooks = hooks.filter(h =>
    h.name.toLowerCase().includes(q) ||
    h.desc.toLowerCase().includes(q) ||
    h.code.toLowerCase().includes(q)
  )

  const total = matchedCards.length + matchedHooks.length

  if (!q) {
    return (
      <div className={`${styles.wrap} page-animate`}>
        <p className={styles.hint}>Start typing in the search bar above...</p>
      </div>
    )
  }

  if (total === 0) {
    return (
      <div className={`${styles.wrap} page-animate`}>
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>¯\_(ツ)_/¯</div>
          <p>No results for <strong>"{search}"</strong></p>
          <p className={styles.emptyHint}>Try searching: git, push, deploy, useState, install...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.wrap} page-animate`}>
      <div className={styles.resultsMeta}>
        <span className={styles.count}>{total} result{total !== 1 ? 's' : ''}</span>
        <span className={styles.query}>for "{search}"</span>
      </div>

      {matchedCards.length > 0 && (
        <>
          {matchedHooks.length > 0 && (
            <div className="subsection-label" style={{ marginBottom: '12px' }}>Commands</div>
          )}
          <div className="cards-grid" style={{ marginBottom: '2rem' }}>
            {matchedCards.map(card => <CodeCard key={card.id} card={card} />)}
          </div>
        </>
      )}

      {matchedHooks.length > 0 && (
        <>
          <div className="subsection-label" style={{ marginBottom: '12px' }}>Hooks</div>
          <div className={styles.hooksGrid}>
            {matchedHooks.map(hook => <HookCard key={hook.id} hook={hook} />)}
          </div>
        </>
      )}
    </div>
  )
}
