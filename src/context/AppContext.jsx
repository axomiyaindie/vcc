import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [os, setOS] = useState('windows')
  const [search, setSearch] = useState('')
  const [copied, setCopied] = useState(null)

  function copyCode(text, id) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id)
      setTimeout(() => setCopied(null), 1800)
    })
  }

  return (
    <AppContext.Provider value={{ os, setOS, search, setSearch, copied, copyCode }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}