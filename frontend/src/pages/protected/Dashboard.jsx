import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu, Bell } from "lucide-react";

import DashboardSidebar from "./dashboard/DashboardSidebar";

const Dashboard = () => {
    const getPageTitle = (pathname) => {

        if (pathname === "/dashboard") {
            return "Dashboard";
        }

        if (pathname.startsWith("/dashboard/notes")) {
            return "My Notes";
        }

        if (pathname.startsWith("/dashboard/tasks")) {
            return "Tasks";
        }

        if (pathname.startsWith("/dashboard/community")) {
            return "Community";
        }

        if (pathname.startsWith("/dashboard/calendar")) {
            return "Calendar";
        }

        if (pathname.startsWith("/dashboard/profile")) {
            return "Profile";
        }

        if (pathname.startsWith("/dashboard/settings")) {
            return "Settings";
        }

        return "Dashboard";
    };
    const location = useLocation();

    const pageTitle = getPageTitle(location.pathname);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Lock background/page scrolling when mobile sidebar is open
    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [sidebarOpen]);

    return (
        <div className="min-h-screen bg-[#030712]">

            {/* =================================================
                MOBILE OVERLAY
            ================================================== */}

            {sidebarOpen && (
                <div
                    className="
                        fixed inset-0
                        z-40
                        bg-black/60
                        backdrop-blur-[2px]
                        lg:hidden
                    "
                    onClick={() => setSidebarOpen(false)}
                />
            )}


            {/* =================================================
                SIDEBAR
            ================================================== */}

            <DashboardSidebar
                sidebarOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />


            {/* =================================================
                MAIN APPLICATION
            ================================================== */}

            <div className="min-h-screen lg:ml-64">

                {/* =================================================
                    NAVBAR
                ================================================== */}

                <header
                    className="
                        sticky
                        top-0
                        z-30
                        flex
                        h-16
                        items-center
                        justify-between
                        border-b
                        border-slate-800/80
                         bg-[#030712]
                        px-4
                        backdrop-blur-md
                        sm:px-6
                    "
                >

                    {/* =================================================
                        LEFT SIDE
                    ================================================== */}

                    <div className="flex items-center gap-3">

                        {/* Mobile Menu */}

                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-lg
                                text-slate-400
                                transition-colors
                                hover:bg-slate-800
                                hover:text-emerald-400
                                lg:hidden
                            "
                            aria-label="Open menu"
                        >
                            <Menu size={22} />
                        </button>


                        {/* Page Title */}

                        <div>
                            <h2 className="text-lg font-semibold text-white">
                                {pageTitle}
                            </h2>
                        </div>

                    </div>


                    {/* =================================================
                        RIGHT SIDE
                    ================================================== */}

                    <div className="flex items-center gap-3">

                        {/* Notification */}

                        <button
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-lg
                                text-slate-400
                                transition-colors
                                hover:bg-slate-800
                                hover:text-emerald-400
                            "
                            aria-label="Notifications"
                        >
                            <Bell size={19} />
                        </button>


                        {/* Profile */}

                        <div
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                bg-emerald-500/10
                                text-sm
                                font-semibold
                                text-emerald-400
                                ring-1
                                ring-emerald-500/20
                            "
                        >
                            S
                        </div>

                    </div>

                </header>


                {/* =================================================
                    PAGE CONTENT
                ================================================== */}

                <main className="min-w-0">
                    <Outlet />
                </main>

            </div>

        </div>
    );
};

export default Dashboard;