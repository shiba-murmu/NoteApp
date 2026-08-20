import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import RegisterPage from './pages/RegisterPage'

// public routes.
import LandingPage from './pages/LandingPage'
import ScrollToTop from './components/common/ScrollToTop'
import PageNotFound from './pages/PageNotFound'

// Protected routes ...
import Dashboard from './pages/protected/Dashboard'
import DashboardHome from './pages/protected/dashboard/DashboardHome'
import Profile from './pages/protected/profile/Profile';

import { Toaster } from "sonner";

// Routes guards

import GuestRoute from './components/auth/GuestRoute'
import ProtectedRoute from './components/auth/ProtectedRoute'
import HomeRoute from './components/auth/HomeRoute'

function App() {
    return (
        <>
            <ScrollToTop />
            <Toaster
                position="top-right"
                closeButton
                toastOptions={{
                    classNames: {
                        toast: `
                !bg-white
                !border-slate-200
                !text-slate-900
                shadow-xl
            `,
                        title: "!text-slate-900 !font-semibold",
                        description: "!text-slate-500",

                        closeButton: `
                !bg-slate-100
                !border-slate-200
                !text-slate-500
                hover:!bg-slate-200
                hover:!text-slate-900
            `,

                        success: "!border-emerald-200",
                        error: "!border-red-200",
                    },
                }}
            />
            <Routes>
                <Route path="/" element={<HomeRoute />} />
                

                <Route
                    element={<GuestRoute />} >
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>


                <Route element={<ProtectedRoute />} >
                    <Route path='/dashboard' element={<Dashboard />} >
                        <Route index element={<DashboardHome />} />
                        <Route path="*" element={<PageNotFound />} />
                        <Route path="/dashboard/profile" element={<Profile />} />
                    </Route >
                </Route>
                {/* 404 Route */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default App