import CodeCard from "../components/CodeCard"
import SEO from "../components/SEO"
import { allCheatCodes } from "../data/cheatcodes"

export default function SectionPage({ sectionId, title, icon, tip, subsections }) {

  const cards = allCheatCodes.filter(c => c.section === sectionId)

  const cardsWithoutSubsection = cards.filter(c => !c.subsection)

  return (
    <div className="page-animate">

      {/* SEO */}
      <SEO
        title={`${title} Cheatsheet | Cheat Code For Dev`}
        description={`Developer cheatsheet for ${title}. Quick commands, examples and workflows.`}
        url={`https://cheatcode4u.netlify.app/${sectionId}`}
      />

      {/* Header */}
      <div className="section-header">
        <span className="icon">{icon}</span>
        <h1>{title}</h1>
        <span className="badge">{cards.length} commands</span>
      </div>

      {/* Tip */}
      {tip && (
        <div
          className="tip-box"
          dangerouslySetInnerHTML={{ __html: tip }}
        />
      )}

      {/* Subsections */}
      {subsections?.map(sub => {
        const subCards = cards.filter(c => c.subsection === sub.id)

        if (subCards.length === 0) return null

        return (
          <div key={sub.id} className="subsection">

            <div className="subsection-label">
              {sub.label}
            </div>

            <div className="cards-grid">
              {subCards.map(card => (
                <CodeCard key={card.id} card={card} />
              ))}
            </div>

          </div>
        )
      })}

      {/* Cards without subsection */}
      {cardsWithoutSubsection.length > 0 && (
        <div className="cards-grid">
          {cardsWithoutSubsection.map(card => (
            <CodeCard key={card.id} card={card} />
          ))}
        </div>
      )}

    </div>
  )
}