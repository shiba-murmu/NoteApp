import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage'
import ScrollToTop from './components/common/ScrollToTop'
import PageNotFound from './pages/PageNotFound'
function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* 404 Route */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default App