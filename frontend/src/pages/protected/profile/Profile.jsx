import React from "react";
import {
    Camera,
    Mail,
    MapPin,
    User,
    AtSign,
    CalendarDays,
    Edit3,
} from "lucide-react";

const Profile = () => {
    return (
        <div className="min-h-screen bg-[#030712] p-4 sm:p-6 lg:p-8">

            <div className="mx-auto max-w-6xl space-y-6">

                {/* =================================================
                    PROFILE HEADER
                ================================================== */}

                <section
                    className="
                        overflow-hidden
                        rounded-2xl
                        border border-slate-800/80
                        bg-[#111827]
                    "
                >

                    {/* Cover */}

                    <div
                        className="
                            relative
                            h-32
                            bg-gradient-to-r
                            from-cyan-500/20
                            via-emerald-500/10
                            to-transparent
                        "
                    />

                    {/* Profile Info */}

                    <div className="px-5 pb-6 sm:px-7">

                        <div
                            className="
                                flex
                                flex-col
                                gap-5
                                sm:flex-row
                                sm:items-end
                                sm:justify-between
                            "
                        >

                            {/* User */}

                            <div
                                className="
                                    flex
                                    flex-col
                                    gap-4
                                    sm:flex-row
                                    sm:items-end
                                "
                            >

                                {/* Avatar */}

                                <div className="-mt-12 relative">

                                    <div
                                        className="
                                            flex
                                            h-24
                                            w-24
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border-4
                                            border-[#111827]
                                            bg-gradient-to-br
                                            from-cyan-400
                                            to-emerald-500
                                            text-3xl
                                            font-bold
                                            text-white
                                            shadow-xl
                                        "
                                    >
                                        S
                                    </div>

                                    {/* Camera */}

                                    <button
                                        className="
                                            absolute
                                            bottom-1
                                            right-1
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-slate-700
                                            bg-[#030712]
                                            text-slate-300
                                            transition
                                            hover:border-emerald-500/40
                                            hover:text-emerald-400
                                        "
                                        aria-label="Change profile photo"
                                    >
                                        <Camera size={15} />
                                    </button>

                                </div>


                                {/* Name */}

                                <div className="pb-1">

                                    <h1
                                        className="
                                            text-2xl
                                            font-bold
                                            tracking-tight
                                            text-white
                                        "
                                    >
                                        Shiba Murmu
                                    </h1>

                                    <p className="mt-1 text-sm text-slate-400">
                                        Personal Account
                                    </p>

                                    <div
                                        className="
                                            mt-2
                                            flex
                                            items-center
                                            gap-2
                                            text-xs
                                            text-slate-500
                                        "
                                    >
                                        <CalendarDays size={14} />

                                        <span>
                                            Member since 2026
                                        </span>
                                    </div>

                                </div>

                            </div>


                            {/* Edit */}

                            <button
                                className="
                                    flex
                                    w-fit
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-slate-700
                                    bg-[#030712]
                                    px-4
                                    py-2.5
                                    text-sm
                                    font-medium
                                    text-slate-300
                                    transition
                                    hover:border-emerald-500/30
                                    hover:bg-emerald-500/5
                                    hover:text-emerald-400
                                "
                            >
                                <Edit3 size={16} />

                                Edit Profile
                            </button>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    PERSONAL INFORMATION
                ================================================== */}

                <section
                    className="
                        rounded-2xl
                        border border-slate-800/80
                        bg-[#111827]
                        p-5
                        sm:p-7
                    "
                >

                    <div className="mb-6">

                        <h2 className="text-lg font-semibold text-white">
                            Personal Information
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Manage the information associated with your account.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        {/* Full Name */}

                        <ProfileField
                            icon={User}
                            label="Full Name"
                            value="Shiba Murmu"
                        />


                        {/* Email */}

                        <ProfileField
                            icon={Mail}
                            label="Email"
                            value="your@email.com"
                        />


                        {/* Username */}

                        <ProfileField
                            icon={AtSign}
                            label="Username"
                            value="@shiba"
                        />


                        {/* Location */}

                        <ProfileField
                            icon={MapPin}
                            label="Location"
                            value="India"
                        />

                    </div>

                </section>


                {/* =================================================
                    ABOUT
                ================================================== */}

                <section
                    className="
                        rounded-2xl
                        border border-slate-800/80
                        bg-[#111827]
                        p-5
                        sm:p-7
                    "
                >

                    <div className="mb-5">

                        <h2 className="text-lg font-semibold text-white">
                            About
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Tell people a little about yourself.
                        </p>

                    </div>


                    <div
                        className="
                            rounded-xl
                            border
                            border-slate-800
                            bg-[#030712]
                            p-4
                        "
                    >
                        <p className="text-sm leading-6 text-slate-400">
                            No bio added yet. Add something about yourself
                            to help people in the Nexora community know you better.
                        </p>
                    </div>

                </section>

            </div>

        </div>
    );
};


/* =============================================================
   PROFILE FIELD
============================================================= */

const ProfileField = ({
    icon: Icon,
    label,
    value,
}) => {
    return (
        <div
            className="
                rounded-xl
                border border-slate-800
                bg-[#030712]/60
                p-4
                transition
                hover:border-slate-700
            "
        >

            <div className="flex items-center gap-3">

                <div
                    className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-emerald-500/10
                        text-emerald-400
                    "
                >
                    <Icon size={17} />
                </div>

                <div className="min-w-0">

                    <p className="text-xs text-slate-500">
                        {label}
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-slate-200">
                        {value}
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Profile;