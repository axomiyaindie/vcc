const technologies = [
  "react",
  "git",
  "npm",
  "github",
  "vercel",
  "netlify",
  "vscode"
]

const intents = [
  "commands",
  "cheatsheet",
  "examples",
  "guide",
  "tutorial",
  "best-practices",
  "workflow",
  "tips"
]

const modifiers = [
  "beginner",
  "advanced",
  "complete",
  "quick",
  "developer"
]

export const pages = []

technologies.forEach(tech => {
  intents.forEach(intent => {
    modifiers.forEach(mod => {

      const slug = `${tech}-${intent}-${mod}`

      pages.push({
        slug,
        title: `${tech.toUpperCase()} ${intent} (${mod})`,
        description: `${mod} ${intent} for ${tech}. Quick commands, developer workflows and examples.`
      })

    })
  })
})

export default pages