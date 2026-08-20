import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import App from './App.jsx'
import { BrowserRouter, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'



function Layout() {

    const queryClient = new QueryClient();
    const location = useLocation();

    const protectedRoutes = [
        "/dashboard",
        "/task",
        "/calendar",
        "/messages",
        "/analytics",
        "/settings",
    ]

    // Routes that should NOT show the landing navbar/footer
    const hideLayout = protectedRoutes.some((route) => location.pathname.startsWith(route));
    return (
        <>
            {!hideLayout && <Navbar />}
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>

            {!hideLayout && <Footer />}
        </>
    );
}
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </StrictMode>,
)
