import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Logo from "../common/Logo";
import Button from "../common/Button";

const navLinks = [
    {
        title: "Features",
        path: "/features",
    },
    {
        title: "Community",
        path: "/community",
    },
    {
        title: "Discover",
        path: "/discover",
    },
    {
        title: "About",
        path: "/about",
    },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [mobileOpen]);

    return (
        <>
            {/* ================= NAVBAR ================= */}

            <header
                className={`fixed py-1 md:py-3 inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
                        ? "border-b border-white/10 bg-[#030712]/90 backdrop-blur-xl"
                        : "bg-transparent"
                    }`}
            >
                <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
                    {/* Logo */}

                    <Link to="/">
                        <Logo />
                    </Link>

                    {/* Desktop Navigation */}

                    <nav className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.title}
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-sm font-medium text-white"
                                        : "text-sm font-medium text-gray-400 transition hover:text-white"
                                }
                            >
                                {item.title}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop Buttons */}

                    <div className="hidden items-center gap-4 lg:flex">
                        <Link
                            to="/login"
                            className="text-sm font-medium text-gray-300 transition hover:text-white"
                        >
                            Login
                        </Link>

                        <Link to="/register">
                            <Button>Start Growing</Button>
                        </Link>
                    </div>

                    {/* Mobile Button */}

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="rounded-xl border border-white/10 p-2 text-white transition hover:bg-white/5 lg:hidden"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </header>

            {/* ================= OVERLAY ================= */}

            <div
                onClick={() => setMobileOpen(false)}
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${mobileOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }`}
            />

            {/* ================= MOBILE DRAWER ================= */}

            <aside
                className={`fixed right-0 top-0 z-50 h-screen w-[320px] border-l border-white/10 bg-[#111827] shadow-2xl transition-transform duration-300 lg:hidden ${mobileOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
            >
                <div
                    className="flex h-full flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}

                    <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-6">
                        <Logo />

                        <button
                            onClick={() => setMobileOpen(false)}
                            className="rounded-xl p-2 text-white hover:bg-white/5"
                        >
                            <X size={22} />
                        </button>
                    </div>

                    {/* Links */}

                    <nav className="flex flex-col gap-2 px-6 py-8">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.title}
                                to={item.path}
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                    `rounded-xl px-4 py-3 text-sm font-medium transition ${isActive
                                        ? "bg-emerald-500 text-white"
                                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                                    }`
                                }
                            >
                                {item.title}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Bottom */}

                    <div className="mt-auto border-white/10 px-6 py-17 flex flex-col gap-4 border-t rounded-t-2xl">
                        <Link
                            to="/login"
                            onClick={() => setMobileOpen(false)}
                            className="mb-4 block rounded-xl px-4 py-3 text-center text-gray-300 transition hover:bg-white/5 hover:text-white"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            onClick={() => setMobileOpen(false)}
                        >
                            <Button className="w-full">
                                Start Growing
                            </Button>
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}