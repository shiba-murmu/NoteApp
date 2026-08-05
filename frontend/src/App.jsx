import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage'
import ScrollToTop from './components/common/ScrollToTop'
import CommunityHero from './components/community/CommunityHero'
function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/community" element={<CommunityHero />} />
            </Routes>
        </>
    )
}

export default App