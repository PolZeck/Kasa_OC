import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles/index.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement" element={<Logement />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </StrictMode>
)
