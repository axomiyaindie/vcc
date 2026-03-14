import { Routes, Route, Navigate } from "react-router-dom"

import Layout from "./components/Layout"

import Home from "./pages/Home"
import SectionPage from "./pages/SectionPage"
import HooksPage from "./pages/HooksPage"
import SearchPage from "./pages/SearchPage"

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />

        <Route path="search" element={<SearchPage />} />

        {/* Setup */}
        <Route
          path="setup"
          element={
            <SectionPage
              sectionId="setup"
              icon="⚙️"
              title="Setup & Install"
              tip="<strong>Start here:</strong> Install Node.js → Git → GitHub CLI in that order. Restart your terminal after each install."
            />
          }
        />

        {/* React */}
        <Route
          path="react"
          element={
            <SectionPage
              sectionId="react"
              icon="⚛️"
              title="React"
              tip="<strong>Vite vs CRA:</strong> Use Vite for all new projects — it's faster, modern, and actively maintained."
            />
          }
        />

        {/* npm */}
        <Route
          path="npm"
          element={
            <SectionPage
              sectionId="npm"
              icon="📦"
              title="npm / yarn / pnpm"
              tip="<strong>Tip:</strong> Use <code>npm install -D</code> for dev dependencies."
            />
          }
        />

        {/* Git */}
        <Route
          path="git"
          element={
            <SectionPage
              sectionId="git"
              icon="🔀"
              title="Git"
              tip="<strong>Daily flow:</strong> git add . → git commit -m 'message' → git push."
            />
          }
        />

        {/* GitHub */}
        <Route
          path="github"
          element={
            <SectionPage
              sectionId="github"
              icon="🐙"
              title="GitHub"
              tip="<strong>Fastest push:</strong> <code>gh repo create my-app --public --source=. --remote=origin --push</code>"
            />
          }
        />

        {/* Vercel */}
        <Route
          path="vercel"
          element={
            <SectionPage
              sectionId="vercel"
              icon="▲"
              title="Vercel"
              tip="<strong>Best workflow:</strong> Connect GitHub repo → every git push auto-deploys."
            />
          }
        />

        {/* Netlify */}
        <Route
          path="netlify"
          element={
            <SectionPage
              sectionId="netlify"
              icon="🌐"
              title="Netlify"
              tip="<strong>Add [[redirects]]</strong> in netlify.toml when using React Router."
            />
          }
        />

        {/* Hooks */}
        <Route path="hooks" element={<HooksPage />} />

        {/* Router */}
        <Route
          path="router"
          element={
            <SectionPage
              sectionId="router"
              icon="🗂️"
              title="React Router v6"
              tip="<strong>v6 change:</strong> Switch → Routes and component → element."
            />
          }
        />

        {/* VS Code */}
        <Route
          path="vscode"
          element={
            <SectionPage
              sectionId="vscode"
              icon="💻"
              title="VS Code"
              tip="<strong>Install:</strong> ES7+ React Snippets extension and use rafce."
            />
          }
        />

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Route>

    </Routes>
  )
}