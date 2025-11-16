import { Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { FAQ } from './pages/FAQ'
import { ThemeWrapper } from './components/ThemeWrapper'

function App() {
  return (
    <ThemeWrapper>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeWrapper>
  )
}

export default App
