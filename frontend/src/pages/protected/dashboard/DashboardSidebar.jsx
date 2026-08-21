import React from "react";
import { toast } from "sonner";
import {
    Home,
    FileText,
    CheckSquare,
    Users,
    CalendarDays,
    Settings,
    UserCircle,
    LogOut,
    X,
    Rss,
} from "lucide-react";

import { NavLink , useNavigate} from "react-router-dom";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { getInitial } from "../../../utils/getInitials";

const DashboardSidebar = ({
    sidebarOpen,
    onClose,
}) => {
    
    const {data : user} = useCurrentUser();
    const nameFirstLetter = getInitial(user?.name)
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        toast.success("You have been logged out.");
        navigate("/login", {
            replace : true,
        });
    };

    const menuItems = [
        // If any of the menu items are added or removed, make sure to update the getPageTitle function in Dashboard.jsx accordingly.
        {
            name: "Home",
            path: "/dashboard",
            icon: Home,
        },
        {
            name: "Feed",
            path: "/dashboard/feed",
            icon: Rss,

        },
        {
            name: "My Notes",
            path: "/dashboard/notes",
            icon: FileText,
        },
        {
            name: "Tasks",
            path: "/dashboard/tasks",
            icon: CheckSquare,
        },
        {
            name: "Community",
            path: "/dashboard/community",
            icon: Users,
        },
        {
            name: "Calendar",
            path: "/dashboard/calendar",
            icon: CalendarDays,
        },

    ];

    const handleNavigation = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <aside
            className={`
                fixed
                left-0
                top-0
                z-50
                flex
                h-[100dvh]
                w-[220px]
                sm:w-64
                flex-col
                overflow-hidden

                border-r border-slate-800/80
                bg-[#030712]

                transition-transform
                duration-300
                ease-in-out

                lg:translate-x-0

                ${
                    sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                }
            `}
        >

            {/* =================================================
                LOGO
            ================================================== */}

            <div
                className="
                    flex
                    h-16
                    min-h-16
                    shrink-0
                    items-center
                    justify-between
                    border-b border-slate-800/80
                    px-4
                    sm:px-5
                "
            >

                <div className="flex min-w-0 items-center gap-3">

                    {/* Brand Logo */}

                    <div
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-gradient-to-br
                            from-cyan-400
                            to-emerald-500
                            shadow-lg
                            shadow-emerald-500/10
                        "
                    >
                        <FileText
                            size={19}
                            className="text-white"
                        />
                    </div>


                    {/* Brand */}

                    <span
                        className="
                            truncate
                            text-lg
                            font-bold
                            tracking-tight
                            text-white
                        "
                    >
                        Nexora
                    </span>

                </div>


                {/* Mobile Close */}

                <button
                    onClick={handleNavigation}
                    className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        text-slate-400
                        transition-colors
                        hover:bg-slate-800
                        hover:text-emerald-400
                        lg:hidden
                    "
                    aria-label="Close menu"
                >
                    <X size={19} />
                </button>

            </div>


            {/* =================================================
                SCROLLABLE NAVIGATION
            ================================================== */}

            <nav
                className="
                    min-h-0
                    flex-1
                    overflow-y-auto
                    overscroll-contain
                    px-4
                    py-4
                "
            >

                {/* Workspace */}

                <p
                    className="
                        mb-3
                        px-3
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-emerald-400
                    "
                >
                    Workspace
                </p>


                {/* Main Menu */}

                <div className="space-y-1">

                    {menuItems.map((item) => {

                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                end={item.path === "/dashboard"}
                                onClick={handleNavigation}
                                className={({ isActive }) =>
                                    `
                                    group
                                    flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    px-3
                                    py-2.5
                                    text-sm
                                    font-medium
                                    transition-all
                                    duration-200

                                    ${
                                        isActive
                                            ? `
                                                bg-emerald-500/10
                                                text-emerald-400
                                                shadow-sm
                                              `
                                            : `
                                                text-slate-400
                                                hover:bg-slate-800/70
                                                hover:text-white
                                              `
                                    }
                                    `
                                }
                            >
                                <Icon
                                    size={19}
                                    className="shrink-0"
                                />

                                <span className="truncate">
                                    {item.name}
                                </span>

                            </NavLink>
                        );
                    })}

                </div>


                {/* Divider */}

                <div className="my-5 border-t border-slate-800/80" />


                {/* =================================================
                    ACCOUNT
                ================================================== */}

                <p
                    className="
                        mb-3
                        px-3
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-emerald-400
                    "
                >
                    Account
                </p>


                <div className="space-y-1">

                    {/* Profile */}

                    <NavLink
                        to="/dashboard/profile"
                        onClick={handleNavigation}
                        className={({ isActive }) =>
                            `
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            px-3
                            py-2.5
                            text-sm
                            font-medium
                            transition-all
                            duration-200

                            ${
                                isActive
                                    ? `
                                        bg-emerald-500/10
                                        text-emerald-400
                                      `
                                    : `
                                        text-slate-400
                                        hover:bg-slate-800/70
                                        hover:text-white
                                      `
                            }
                            `
                        }
                    >
                        <UserCircle
                            size={19}
                            className="shrink-0"
                        />

                        <span>
                            Profile
                        </span>

                    </NavLink>


                    {/* Settings */}

                    <NavLink
                        to="/dashboard/setting"
                        onClick={handleNavigation}
                        className={({ isActive }) =>
                            `
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            px-3
                            py-2.5
                            text-sm
                            font-medium
                            transition-all
                            duration-200

                            ${
                                isActive
                                    ? `
                                        bg-emerald-500/10
                                        text-emerald-400
                                      `
                                    : `
                                        text-slate-400
                                        hover:bg-slate-800/70
                                        hover:text-white
                                      `
                            }
                            `
                        }
                    >
                        <Settings
                            size={19}
                            className="shrink-0"
                        />

                        <span>
                            Settings
                        </span>

                    </NavLink>

                </div>

            </nav>


            {/* =================================================
                USER SECTION
            ================================================== */}

            <div
                className="
                    shrink-0
                    border-t
                    border-slate-800/80
                    bg-[#030712]
                    p-3
                    sm:p-4
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-800
                        bg-[#111827]
                        p-2.5
                        sm:gap-3
                        sm:p-3
                    "
                >

                    {/* Avatar */}

                    <div
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-emerald-500/10
                            text-sm
                            font-semibold
                            text-emerald-400
                        "
                    >
                        {nameFirstLetter}
                    </div>


                    {/* User Info */}

                    <div className="min-w-0 flex-1">

                        <p
                            className="
                                truncate
                                text-sm
                                font-medium
                                text-white
                            "
                        >
                            {user?.name}
                        </p>

                        <p
                            className="
                                truncate
                                text-xs
                                text-slate-500
                            "
                        >
                            Personal Account
                        </p>

                    </div>


                    {/* Logout */}

                    <button
                    onClick={handleLogout}
                        className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            text-slate-500
                            transition-colors
                            hover:bg-red-500/10
                            hover:text-red-400
                        "
                        aria-label="Logout"
                    >
                        <LogOut size={17} />
                    </button>

                </div>

            </div>

        </aside>
    );
};

export default DashboardSidebar;