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
                className={`fixed inset-x-0 top-0 z-50 py-1 transition-all duration-300 md:py-3 ${scrolled
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
                            <Button>
                                Start Growing
                            </Button>
                        </Link>

                    </div>


                    {/* Mobile Button */}

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="
                            rounded-xl
                            border border-white/10
                            bg-[#111827]/60
                            p-2
                            text-white
                            transition
                            hover:border-emerald-500/30
                            hover:bg-[#111827]
                            hover:text-emerald-400
                            lg:hidden
                        "
                        aria-label="Toggle mobile menu"
                    >
                        {mobileOpen ? (
                            <X size={22} />
                        ) : (
                            <Menu size={22} />
                        )}
                    </button>

                </div>
            </header>


            {/* ================= OVERLAY ================= */}

            <div
                onClick={() => setMobileOpen(false)}
                className={`
                    fixed
                    inset-0
                    z-40
                    bg-[#030712]/70
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    lg:hidden

                    ${mobileOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }
                `}
            />


            {/* ================= MOBILE DRAWER ================= */}

            <aside
                className={`
                    fixed
                    right-0
                    top-0
                    z-50
                    h-[100dvh]
                    w-[300px]
                    max-w-[85vw]

                    border-l
                    border-slate-800/80

                    bg-[#111827]

                    shadow-2xl
                    shadow-black/40

                    transition-transform
                    duration-300
                    ease-in-out

                    lg:hidden

                    ${mobileOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
                `}
            >

                <div
                    className="flex h-full flex-col"
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* =================================================
                        DRAWER HEADER
                    ================================================== */}

                    <div
                        className="
                            flex
                            h-[72px]
                            shrink-0
                            items-center
                            justify-between
                            border-b
                            border-slate-800/80
                            px-6
                        "
                    >

                        <Link
                            to="/"
                            onClick={() => setMobileOpen(false)}
                        >
                            {/* <Logo /> */}
                            <h2 className="text-xl font-bold tracking-tight text-white">
                                Growth Journal
                            </h2>

                            <p className="text-sm text-gray-400">
                                Build. Learn. Grow.
                            </p>
                        </Link>


                        {/* Close */}

                        <button
                            onClick={() => setMobileOpen(false)}
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-slate-800
                                bg-[#030712]/60
                                text-slate-400
                                transition
                                hover:border-emerald-500/30
                                hover:bg-emerald-500/10
                                hover:text-emerald-400
                            "
                            aria-label="Close menu"
                        >
                            <X size={21} />
                        </button>

                    </div>


                    {/* =================================================
                        LINKS
                    ================================================== */}

                    <nav
                        className="
                            flex
                            flex-1
                            flex-col
                            gap-2
                            overflow-y-auto
                            px-6
                            py-8
                        "
                    >

                        {navLinks.map((item) => (
                            <NavLink
                                key={item.title}
                                to={item.path}
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                    `
                                    rounded-xl
                                    border
                                    px-4
                                    py-3
                                    text-sm
                                    font-medium
                                    transition-all
                                    duration-200

                                    ${isActive
                                        ? `
                                                border-emerald-500/20
                                                bg-emerald-500/10
                                                text-emerald-400
                                              `
                                        : `
                                                border-transparent
                                                text-gray-300
                                                hover:border-slate-800
                                                hover:bg-[#030712]/60
                                                hover:text-white
                                              `
                                    }
                                    `
                                }
                            >
                                {item.title}
                            </NavLink>
                        ))}

                    </nav>


                    {/* =================================================
                        BOTTOM ACTIONS
                    ================================================== */}

                    <div
                        className="
                            shrink-0
                            border-t
                            border-slate-800/80
                            bg-[#030712]/40
                            px-6
                            py-6
                        "
                    >

                        <Link
                            to="/login"
                            onClick={() => setMobileOpen(false)}
                            className="
                                mb-3
                                block
                                rounded-xl
                                border
                                border-transparent
                                px-4
                                py-3
                                text-center
                                text-sm
                                font-medium
                                text-gray-300
                                transition
                                hover:border-slate-800
                                hover:bg-[#111827]
                                hover:text-white
                            "
                        >
                            Login
                        </Link>


                        <Link
                            to="/register"
                            onClick={() => setMobileOpen(false)}
                            className="block"
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