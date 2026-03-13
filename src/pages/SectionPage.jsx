import CodeCard from '../components/CodeCard'
import { allCheatCodes } from '../data/cheatcodes'

export default function SectionPage({ sectionId, title, icon, tip, subsections }) {
  const cards = allCheatCodes.filter(c => c.section === sectionId)

  if (subsections) {
    return (
      <div className="page-animate">
        <div className="section-header">
          <span className="icon">{icon}</span>
          <h1>{title}</h1>
          <span className="badge">{cards.length} commands</span>
        </div>

        {tip && <div className="tip-box" dangerouslySetInnerHTML={{ __html: tip }} />}

        {subsections.map(sub => {
          const subCards = cards.filter(c => c.subsection === sub.id)
          if (subCards.length === 0) return null
          return (
            <div key={sub.id} className="subsection">
              <div className="subsection-label">{sub.label}</div>
              <div className="cards-grid">
                {subCards.map(card => <CodeCard key={card.id} card={card} />)}
              </div>
            </div>
          )
        })}

        {/* Cards with no subsection */}
        <div className="cards-grid">
          {cards.filter(c => !c.subsection).map(card => <CodeCard key={card.id} card={card} />)}
        </div>
      </div>
    )
  }

  return (
    <div className="page-animate">
      <div className="section-header">
        <span className="icon">{icon}</span>
        <h1>{title}</h1>
        <span className="badge">{cards.length} commands</span>
      </div>
      {tip && <div className="tip-box" dangerouslySetInnerHTML={{ __html: tip }} />}
      <div className="cards-grid">
        {cards.map(card => <CodeCard key={card.id} card={card} />)}
      </div>
    </div>
  )
}
