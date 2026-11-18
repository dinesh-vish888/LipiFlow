import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import { AppContext } from './context/AppContext'
import './styles/global.css'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('lipiflow-theme') || 'light'
  })

  const [toastMsg, setToastMsg] = useState(null)
  const [conversionHistory, setConversionHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lipiflow-history') || '[]')
    } catch { return [] }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('lipiflow-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  const showToast = (msg, type = 'success') => {
    setToastMsg({ msg, type })
    setTimeout(() => setToastMsg(null), 2500)
  }

  const addHistory = (entry) => {
    const updated = [entry, ...conversionHistory].slice(0, 20)
    setConversionHistory(updated)
    localStorage.setItem('lipiflow-history', JSON.stringify(updated))
  }

  const clearHistory = () => {
    setConversionHistory([])
    localStorage.removeItem('lipiflow-history')
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme, showToast, conversionHistory, addHistory, clearHistory }}>
      <Router>
        <div className="app-wrapper">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>

      {/* Toast Notification */}
      {toastMsg && (
        <div className={`toast toast-${toastMsg.type}`}>
          {toastMsg.type === 'success' ? '✅' : '❌'} {toastMsg.msg}
        </div>
      )}
    </AppContext.Provider>
  )
}

export default App
