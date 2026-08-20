import React from "react";
import {
    Camera,
    Mail,
    MapPin,
    User,
    AtSign,
    CalendarDays,
    Edit3,
    FileText,
    CheckCircle2,
    MessageSquare,
    Flame,
    MoreHorizontal,
    Sparkles,
    Settings,
} from "lucide-react";
import { useCurrentUser } from "../../../hooks/useCurrentUser";

const Profile = () => {
    const { data : user } = useCurrentUser();
    
    return (
        <div className="min-h-screen bg-[#030712] p-4 sm:p-6 lg:p-8">

            <div className="mx-auto max-w-6xl space-y-6">

                {/* =====================================================
                    PROFILE HEADER
                ===================================================== */}

                <section className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border border-white/10
                    bg-[#111827]
                ">

                    {/* Decorative gradient */}

                    <div className="
                        pointer-events-none
                        absolute
                        inset-0
                        overflow-hidden
                    ">

                        <div className="
                            absolute
                            -right-20
                            -top-24
                            h-72
                            w-72
                            rounded-full
                            bg-emerald-500/10
                            blur-3xl
                        "/>

                        <div className="
                            absolute
                            left-1 /3
                        -top-24
                        h-64
                        w-64
                        rounded-full
                        bg-cyan-500/10
                        blur-3xl
                       " />

                        <div className="
                            absolute
                            -bottom-32
                            left-10
                            h-64
                            w-64
                            rounded-full
                            bg-blue-500/10
                            blur-3xl
                        "/>

                    </div>


                    {/* =================================================
                        COVER
                    ================================================= */}

                    <div className="
                            relative
                            h-36
                            overflow-hidden
                            bg-gradient-to-r
                            from-emerald-500 /20
                        via-cyan-500/10
                        to-blue-500/10
                    ">

                        {/* Gradient glow */}

                        <div className="
                            absolute
                            inset-0
                            bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.20),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.15),transparent_30%)]
                        " />

                        {/* Bottom fade */}

                        <div className="
                            absolute
                            inset-x-0
                            bottom-0
                            h-24
                            bg-gradient-to-t
                            from-[#111827]
                            to-transparent
                        " />

                    </div>


                    {/* =================================================
                        PROFILE CONTENT
                    ================================================= */}

                    <div className="
                        relative
                        px-5
                        pb-7
                        sm:px-7
                    ">

                        <div className="
                            flex
                            flex-col
                            gap-6
                            lg:flex-row
                            lg:items-end
                            lg:justify-between
                        ">

                            {/* Identity */}

                            <div className="
                                flex
                                flex-col
                                gap-4
                                sm:flex-row
                                sm:items-end
                            ">

                                {/* Avatar */}

                                <div className="
                                    relative
                                    -mt-14
                                ">

                                    <div className="
                                        flex
                                        h-28
                                        w-28
                                        items-center
                                        justify-center
                                        rounded-3xl
                                        border-4
                                        border-[#111827]
                                        bg-gradient-to-br
                                        from-emerald-400
                                        via-cyan-400
                                        to-blue-500
                                        text-4xl
                                        font-bold
                                        text-white
                                        shadow-2xl
                                        shadow-emerald-500/10
                                    ">
                                        S
                                    </div>


                                    {/* Change photo */}

                                    <button
                                        type="button"
                                        aria-label="Change profile photo"
                                        className="
                                            absolute
                                            bottom-1
                                            right-1
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-white/10
                                            bg-[#030712]
                                            text-slate-400
                                            shadow-lg
                                            transition
                                            hover:border-emerald-500/40
                                            hover:text-emerald-400
                                        "
                                    >
                                        <Camera size={16} />
                                    </button>

                                </div>


                                {/* User identity */}

                                <div className="pb-1">

                                    <h1 className="
                                        text-2xl
                                        font-bold
                                        tracking-tight
                                        text-white
                                        sm:text-3xl
                                    ">
                                        {user?.name}
                                    </h1>

                                    <p className="
                                        mt-1
                                        text-sm
                                        text-slate-400
                                    ">
                                        @shiba
                                    </p>


                                    <div className="
                                        mt-3
                                        flex
                                        flex-wrap
                                        items-center
                                        gap-x-4
                                        gap-y-2
                                        text-xs
                                        text-slate-500
                                    ">

                                        <span className="
                                            flex
                                            items-center
                                            gap-1.5
                                        ">
                                            <CalendarDays size={14} />
                                            Joined 2026
                                        </span>

                                        <span className="
                                            flex
                                            items-center
                                            gap-1.5
                                        ">
                                            <MapPin size={14} />
                                            India
                                        </span>

                                    </div>

                                </div>

                            </div>


                            {/* Actions */}

                            <div className="
                                flex
                                items-center
                                gap-2
                            ">

                                <button
                                    type="button"
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-[#030712]/70
                                        px-4
                                        py-2.5
                                        text-sm
                                        font-medium
                                        text-slate-300
                                        backdrop-blur
                                        transition
                                        hover:border-emerald-500/30
                                        hover:bg-emerald-500/5
                                        hover:text-emerald-400
                                    "
                                >
                                    <Edit3 size={16} />
                                    Edit Profile
                                </button>


                                <button
                                    type="button"
                                    aria-label="Profile settings"
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-[#030712]/70
                                        text-slate-400
                                        backdrop-blur
                                        transition
                                        hover:border-white/20
                                        hover:text-white
                                    "
                                >
                                    <Settings size={17} />
                                </button>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    PROFILE STATS
                ===================================================== */}

                <section className="
                    grid
                    grid-cols-2
                    gap-4
                    lg:grid-cols-4
                ">

                    <ProfileStat
                        icon={FileText}
                        label="Notes"
                        value="24"
                        accent="emerald"
                    />

                    <ProfileStat
                        icon={CheckCircle2}
                        label="Completed"
                        value="86"
                        accent="cyan"
                    />

                    <ProfileStat
                        icon={MessageSquare}
                        label="Posts"
                        value="18"
                        accent="blue"
                    />

                    <ProfileStat
                        icon={Flame}
                        label="Day Streak"
                        value="12"
                        accent="orange"
                    />

                </section>


                {/* =====================================================
                    ABOUT + PERSONAL INFORMATION
                ===================================================== */}

                <div className="
                    grid
                    grid-cols-1
                    gap-6
                    lg:grid-cols-3
                ">

                    {/* ABOUT */}

                    <section className="
                        rounded-2xl
                        border border-white/10
                        bg-[#111827]
                        p-5
                        sm:p-7
                    ">

                        <div className="mb-5">

                            <div className="
                                mb-4
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                bg-emerald-500/10
                                text-emerald-400
                            ">
                                <Sparkles size={18} />
                            </div>

                            <h2 className="
                                text-lg
                                font-semibold
                                text-white
                            ">
                                About
                            </h2>

                            <p className="
                                mt-1
                                text-sm
                                text-slate-500
                            ">
                                A little about you.
                            </p>

                        </div>


                        <p className="
                            text-sm
                            leading-7
                            text-slate-400
                        ">
                            Building ideas, learning new things,
                            and working toward becoming better
                            every day.
                        </p>


                        <button
                            type="button"
                            className="
                                mt-5
                                text-sm
                                font-medium
                                text-emerald-400
                                transition
                                hover:text-emerald-300
                            "
                        >
                            Edit bio →
                        </button>

                    </section>


                    {/* PERSONAL INFORMATION */}

                    <section className="
                        rounded-2xl
                        border border-white/10
                        bg-[#111827]
                        p-5
                        sm:p-7
                        lg:col-span-2
                    ">

                        <div className="mb-6">

                            <h2 className="
                                text-lg
                                font-semibold
                                text-white
                            ">
                                Personal Information
                            </h2>

                            <p className="
                                mt-1
                                text-sm
                                text-slate-500
                            ">
                                Information associated with your account.
                            </p>

                        </div>


                        <div className="
                            grid
                            grid-cols-1
                            gap-4
                            sm:grid-cols-2
                        ">

                            <ProfileField
                                icon={User}
                                label="Full Name"
                                value="Shiba Murmu"
                            />

                            <ProfileField
                                icon={Mail}
                                label="Email"
                                value="shiba@example.com"
                            />

                            <ProfileField
                                icon={AtSign}
                                label="Username"
                                value="@shiba"
                            />

                            <ProfileField
                                icon={MapPin}
                                label="Location"
                                value="India"
                            />

                        </div>

                    </section>

                </div>


                {/* =====================================================
                    RECENT ACTIVITY
                ===================================================== */}

                <section className="
                    rounded-2xl
                    border border-white/10
                    bg-[#111827]
                    p-5
                    sm:p-7
                ">

                    <div className="
                        mb-6
                        flex
                        items-center
                        justify-between
                    ">

                        <div>

                            <h2 className="
                                text-lg
                                font-semibold
                                text-white
                            ">
                                Recent Activity
                            </h2>

                            <p className="
                                mt-1
                                text-sm
                                text-slate-500
                            ">
                                Your latest activity across Nexora.
                            </p>

                        </div>


                        <button
                            type="button"
                            className="
                                text-sm
                                font-medium
                                text-emerald-400
                                transition
                                hover:text-emerald-300
                            "
                        >
                            View all
                        </button>

                    </div>


                    <div className="space-y-3">

                        <ActivityItem
                            icon={CheckCircle2}
                            title="Completed a task"
                            description="Finish portfolio dashboard"
                            time="2 hours ago"
                            accent="emerald"
                        />

                        <ActivityItem
                            icon={FileText}
                            title="Created a new note"
                            description="Ideas for the next project"
                            time="Yesterday"
                            accent="cyan"
                        />

                        <ActivityItem
                            icon={MessageSquare}
                            title="Published a community post"
                            description="Shared a productivity idea"
                            time="2 days ago"
                            accent="blue"
                        />

                    </div>

                </section>

            </div>

        </div>
    );
};


/* ================================================================
   PROFILE STAT
================================================================ */

const ProfileStat = ({
    icon: Icon,
    label,
    value,
    accent,
}) => {

    const accentStyles = {

        emerald:
            "bg-emerald-500/10 text-emerald-400",

        cyan:
            "bg-cyan-500/10 text-cyan-400",

        blue:
            "bg-blue-500/10 text-blue-400",

        orange:
            "bg-orange-500/10 text-orange-400",

    };


    return (

        <div className="
            rounded-2xl
            border border-white/10
            bg-[#111827]
            p-4
            transition
            hover:border-white/15
            sm:p-5
        ">

            <div className="
                flex
                items-center
                justify-between
            ">

                <div className={`
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    ${accentStyles[accent]}
                `}>
                    <Icon size={18} />
                </div>


                <span className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-white
                ">
                    {value}
                </span>

            </div>


            <p className="
                mt-4
                text-sm
                text-slate-500
            ">
                {label}
            </p>

        </div>
    );
};


/* ================================================================
   PROFILE FIELD
================================================================ */

const ProfileField = ({
    icon: Icon,
    label,
    value,
}) => {

    return (

        <div className="
            rounded-xl
            border border-white/10
            bg-[#030712]/60
            p-4
            transition
            hover:border-emerald-500/20
        ">

            <div className="
                flex
                items-center
                gap-3
            ">

                <div className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-emerald-500/10
                    text-emerald-400
                ">
                    <Icon size={17} />
                </div>


                <div className="min-w-0">

                    <p className="
                        text-xs
                        text-slate-500
                    ">
                        {label}
                    </p>

                    <p className="
                        mt-1
                        truncate
                        text-sm
                        font-medium
                        text-slate-200
                    ">
                        {value}
                    </p>

                </div>

            </div>

        </div>
    );
};


/* ================================================================
   ACTIVITY ITEM
================================================================ */

const ActivityItem = ({
    icon: Icon,
    title,
    description,
    time,
    accent,
}) => {

    const accentStyles = {

        emerald:
            "bg-emerald-500/10 text-emerald-400",

        cyan:
            "bg-cyan-500/10 text-cyan-400",

        blue:
            "bg-blue-500/10 text-blue-400",

    };


    return (

        <div className="
            flex
            items-center
            gap-4
            rounded-xl
            border border-white/5
            bg-[#030712]/50
            p-4
            transition
            hover:border-white/10
        ">

            <div className={`
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                ${accentStyles[accent]}
            `}>

                <Icon size={17} />

            </div>


            <div className="min-w-0 flex-1">

                <p className="
                    text-sm
                    font-medium
                    text-slate-200
                ">
                    {title}
                </p>

                <p className="
                    mt-1
                    truncate
                    text-xs
                    text-slate-500
                ">
                    {description}
                </p>

            </div>


            <span className="
                hidden
                shrink-0
                text-xs
                text-slate-600
                sm:block
            ">
                {time}
            </span>

        </div>
    );
};


export default Profile;