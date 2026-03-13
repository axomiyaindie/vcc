import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SectionPage from './pages/SectionPage'
import HooksPage from './pages/HooksPage'
import SearchPage from './pages/SearchPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<SearchPage />} />

        <Route path="setup" element={
          <SectionPage
            sectionId="setup"
            icon="⚙️"
            title="Setup & Install"
            tip="<strong>Start here:</strong> Install Node.js → Git → GitHub CLI in that order. Restart your terminal after each install."
          />
        } />

        <Route path="react" element={
          <SectionPage
            sectionId="react"
            icon="⚛️"
            title="React"
            tip="<strong>Vite vs CRA:</strong> Use Vite for all new projects — it's faster, modern, and actively maintained. CRA is no longer recommended."
          />
        } />

        <Route path="npm" element={
          <SectionPage
            sectionId="npm"
            icon="📦"
            title="npm / yarn / pnpm"
            tip="<strong>Tip:</strong> Use <code>npm install -D</code> for dev dependencies (tools only needed during development, not in production)."
          />
        } />

        <Route path="git" element={
          <SectionPage
            sectionId="git"
            icon="🔀"
            title="Git"
            tip="<strong>Daily flow:</strong> git add . → git commit -m 'message' → git push. That's 90% of what you'll ever do."
          />
        } />

        <Route path="github" element={
          <SectionPage
            sectionId="github"
            icon="🐙"
            title="GitHub"
            tip="<strong>Fastest push:</strong> <code>gh repo create my-app --public --source=. --remote=origin --push</code> creates AND pushes your repo in one command."
          />
        } />

        <Route path="vercel" element={
          <SectionPage
            sectionId="vercel"
            icon="▲"
            title="Vercel"
            tip="<strong>Best workflow:</strong> Connect your GitHub repo at vercel.com/new — every <code>git push</code> auto-deploys. Use CLI only when you need manual control."
          />
        } />

        <Route path="netlify" element={
          <SectionPage
            sectionId="netlify"
            icon="🌐"
            title="Netlify"
            tip="<strong>Always add the [[redirects]] block</strong> in netlify.toml if you use React Router — it fixes 404 errors on page refresh."
          />
        } />

        <Route path="hooks" element={<HooksPage />} />

        <Route path="router" element={
          <SectionPage
            sectionId="router"
            icon="🗂️"
            title="React Router v6"
            tip="<strong>v6 change:</strong> Switch is now Routes, component prop is now element prop. Use <code>&lt;Route element={&lt;MyPage /&gt;}&gt;</code> not <code>component={MyPage}</code>."
          />
        } />

        <Route path="vscode" element={
          <SectionPage
            sectionId="vscode"
            icon="💻"
            title="VS Code"
            tip="<strong>Must-have:</strong> Install the <strong>ES7+ React Snippets</strong> extension — type <code>rafce</code> and hit Tab to generate a full React component instantly."
          />
        } />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
