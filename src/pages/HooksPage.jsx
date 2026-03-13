import HookCard from '../components/HookCard'
import { hooks } from '../data/cheatcodes'
import styles from './HooksPage.module.css'

export default function HooksPage() {
  return (
    <div className="page-animate">
      <div className="section-header">
        <span className="icon">🪝</span>
        <h1>React Hooks</h1>
        <span className="badge">{hooks.length} hooks</span>
      </div>

      <div className="tip-box">
        <strong>Rule of Hooks:</strong> Only call hooks at the top level of a React function. Never inside loops, conditions, or nested functions. Only call from React function components or custom hooks.
      </div>

      <div className={styles.grid}>
        {hooks.map(hook => <HookCard key={hook.id} hook={hook} />)}
      </div>
    </div>
  )
}
