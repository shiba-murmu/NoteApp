import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage'
import ScrollToTop from './components/common/ScrollToTop'
import PageNotFound from './pages/PageNotFound'
import Dashboard from './pages/protected/Dashboard'
import DashboardHome from './pages/protected/dashboard/DashboardHome'
import Profile from './pages/protected/profile/Profile'
function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path='/dashboard' element={<Dashboard />} >
                    <Route index element={<DashboardHome />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/dashboard/profile" element={<Profile />} />
                </Route >

                {/* 404 Route */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default App