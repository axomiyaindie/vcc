# VibeCheatCode 🧠⚡

> Every React, Git, GitHub, npm, Vercel & Netlify command you'll ever need.  
> Beginner to pro. All 3 operating systems. No fluff.

![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-00ff88?style=flat-square)

---

## 🖥️ Live Demo

**[vibecheatcode.vercel.app](https://cc4u.vercel.app)**

---

## ✨ Features

- 🔍 **Live search** — instantly find any command or hook
- 💻 **OS toggle** — filter commands for Windows, macOS or Linux
- ⚛️ **12 React Hooks** — with real code examples
- 📋 **One-click copy** — on every single code block
- 🗂️ **10 sections** — covering the full dev workflow
- 📱 **Fully responsive** — works great on mobile and desktop
- ⚡ **Zero dependencies** — just React + Vite + React Router

---

## 📚 Sections

| Section | What's inside |
|---|---|
| ⚙️ Setup | Node.js, Git, GitHub CLI install for all 3 OS |
| ⚛️ React | Vite, CRA, Next.js, packages, env vars |
| 📦 npm | install, remove, update, audit, scripts |
| 🔀 Git | init, commit, branch, merge, stash, undo |
| 🐙 GitHub | push, PR, fork, SSH, .gitignore |
| ▲ Vercel | deploy, env vars, domains, rollback |
| 🌐 Netlify | deploy, netlify.toml, env vars |
| 🪝 Hooks | All 12 React hooks with examples |
| 🗂️ Router | React Router v6 patterns |
| 💻 VS Code | Shortcuts, snippets, extensions |

---

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/axomiyaindie/cc4u.git

# Navigate into it
cd cc4u

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Build

```bash
npm run build      # builds to /dist
npm run preview    # preview the production build
```

---

## 🗂️ Project Structure

```
src/
├── context/
│   └── AppContext.jsx       # OS toggle, search state, copy function
├── data/
│   └── cheatcodes.js        # All 100+ cheat codes and hook data
├── components/
│   ├── Navbar.jsx            # Logo, search, OS toggle, nav tabs
│   ├── CodeCard.jsx          # Command card with copy button
│   ├── HookCard.jsx          # Hook card with colored accent
│   └── Layout.jsx            # Page wrapper with Outlet
└── pages/
    ├── Home.jsx              # Landing page
    ├── SectionPage.jsx       # Reusable section page
    ├── HooksPage.jsx         # Hooks grid page
    └── SearchPage.jsx        # Live search results
```

---

## 🛠️ Tech Stack

- **React 18** — UI library
- **Vite 5** — build tool
- **React Router v6** — client-side routing
- **CSS Modules** — scoped styling, no Tailwind needed

---

## 📦 Deploy

Includes both `netlify.toml` and `vercel.json` — ready to deploy to either platform in one click.

**Vercel:**
```bash
vercel --prod
```

**Netlify:**
```bash
netlify deploy --prod
```

---

## 🤝 Contributing

Found a missing command? Want to add a section?

1. Fork the repo
2. Create a branch: `git checkout -b feat/your-feature`
3. Add your changes to `src/data/cheatcodes.js`
4. Commit: `git commit -m "feat: add your feature"`
5. Push: `git push origin feat/your-feature`
6. Open a Pull Request

---

## 👤 Author

Built with 😤 frustration by **[axomiyaindie](https://github.com/axomiyaindie)**

---

## 📄 License

MIT — free to use, modify and share.