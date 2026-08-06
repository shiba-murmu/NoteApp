import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'


function Layout() {
    const location = useLocation();

    // Routes that should NOT show the landing navbar/footer
    const hideLayout = location.pathname.startsWith("/dashboard");
    return (
        <>
            {!hideLayout && <Navbar />}
            <App />
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
