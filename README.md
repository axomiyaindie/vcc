# VibeCheatCode ⚡🧠

> Every React, Git, GitHub, npm, Vercel & Netlify command you'll ever need.
> Beginner to pro. All 3 operating systems. No fluff. Just vibes.

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![License](https://img.shields.io/badge/License-MIT-00ff88?style=for-the-badge)](LICENSE)

---

## 🌐 Live Demo

🔗 **[vibecheatcode.netlify.app](https://vibecheatcode.netlify.app)**

---

## 🎯 What is this?

**VibeCheatCode** is a fast, searchable developer cheat sheet web app built with React.

Tired of Googling the same Git commands over and over? Can't remember if it's `npm remove` or `npm uninstall`? Forgot how `useCallback` works again?

This app has everything in one place — searchable, filterable by OS, and copyable in one click.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 Live Search | Instantly find any command or hook as you type |
| 💻 OS Toggle | Switch between Windows, macOS and Linux |
| 📋 One-Click Copy | Copy any code block instantly |
| ⚛️ React Hooks | All 12 hooks with real code examples |
| 📱 Fully Responsive | Works great on mobile and desktop |
| ⚡ Fast | Built with Vite — loads in milliseconds |
| 🎨 Dark Theme | Easy on the eyes, terminal aesthetic |

---

## 📚 Sections — 100+ Commands

| # | Section | What's inside |
|---|---|---|
| 1 | ⚙️ **Setup** | Node.js, Git, GitHub CLI install for all 3 OS |
| 2 | ⚛️ **React** | Vite, CRA, Next.js, popular packages, env vars |
| 3 | 📦 **npm** | install, remove, update, audit, scripts, cache |
| 4 | 🔀 **Git** | init, commit, branch, merge, stash, undo, tags |
| 5 | 🐙 **GitHub** | push, PR, fork, SSH keys, .gitignore |
| 6 | ▲ **Vercel** | deploy, env vars, domains, rollback, logs |
| 7 | 🌐 **Netlify** | deploy, netlify.toml configs, env vars |
| 8 | 🪝 **Hooks** | All 12 React hooks with full examples |
| 9 | 🗂️ **Router** | React Router v6 — routes, params, protected routes |
| 10 | 💻 **VS Code** | Shortcuts, snippets, must-have extensions |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Run Locally

```bash
# Clone the repo
git clone https://github.com/AxomiyaIndie/vcc.git

# Navigate into it
cd vcc

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. 🎉

---

## 🏗️ Build for Production

```bash
# Build
npm run build

# Preview production build locally
npm run preview
```

Output goes to `/dist` — ready to deploy anywhere.

---

## 🗂️ Project Structure

```
vcc/
├── index.html                        ← App entry point
├── vite.config.js                    ← Vite config
├── netlify.toml                      ← Netlify build + redirect config
├── vercel.json                       ← Vercel SPA rewrite config
│
└── src/
    ├── main.jsx                      ← ReactDOM entry
    ├── App.jsx                       ← All routes
    ├── index.css                     ← Global styles + CSS variables
    │
    ├── context/
    │   └── AppContext.jsx            ← OS state, search state, copy logic
    │
    ├── data/
    │   └── cheatcodes.js            ← All 100+ commands + hook data
    │
    ├── components/
    │   ├── Navbar.jsx                ← Logo, search bar, OS toggle, nav tabs
    │   ├── CodeCard.jsx              ← Command card with copy button
    │   ├── HookCard.jsx              ← Hook card with colored accent
    │   └── Layout.jsx                ← Page wrapper
    │
    └── pages/
        ├── Home.jsx                  ← Landing page
        ├── SectionPage.jsx           ← Reusable section page
        ├── HooksPage.jsx             ← Hooks grid layout
        └── SearchPage.jsx            ← Live search results
```

---

## 🛠️ Tech Stack

- **[React 18](https://react.dev)** — UI library
- **[Vite 8](https://vite.dev)** — Lightning fast build tool
- **[React Router v6](https://reactrouter.com)** — Client-side routing
- **[CSS Modules](https://github.com/css-modules/css-modules)** — Scoped styling, zero Tailwind needed

---

## ☁️ Deploy Your Own

### Vercel (recommended)

```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new) for auto-deploys on every push.

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

Both config files (`netlify.toml` and `vercel.json`) are already included — zero setup needed.

---

## 🤝 Contributing

Missing a command? Want to add a new section?

1. Fork the repo
2. Create your branch

```bash
git checkout -b feat/your-feature
```

3. Add your commands to `src/data/cheatcodes.js`
4. Commit and push

```bash
git commit -m "feat: add your feature"
git push origin feat/your-feature
```

5. Open a Pull Request 🙌

---

## 📄 License

MIT License — free to use, modify and share.

---

<div align="center">

Built with 😤 frustration by **[Rakibul](https://github.com/AxomiyaIndie)**

⭐ Star this repo if it saved your day!

</div>