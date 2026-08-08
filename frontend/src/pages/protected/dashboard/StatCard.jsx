import React from "react";
import { ArrowUpRight } from "lucide-react";

const StatCard = ({
    title,
    value,
    change,
    icon: Icon,
    iconColor = "text-emerald-400",
    iconBg = "bg-emerald-500/10",
}) => {
    return (
        <div
            className="
                rounded-2xl
                border border-emerald-950/60
                bg-[#0B1C15]
                p-5
                transition-all
                duration-200
                hover:border-emerald-900
                hover:bg-[#0D2119]
            "
        >

            <div className="flex items-start justify-between">

                {/* Information */}
                <div>

                    <p className="text-sm text-slate-400">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                        {value}
                    </h2>

                    <div className="mt-2 flex items-center gap-1 text-xs text-emerald-400">

                        <ArrowUpRight size={13} />

                        <span>
                            {change}
                        </span>

                    </div>

                </div>


                {/* Icon */}
                <div
                    className={`
                        flex h-11 w-11
                        items-center justify-center
                        rounded-xl
                        ${iconBg}
                    `}
                >
                    <Icon
                        size={21}
                        className={iconColor}
                    />
                </div>

            </div>

        </div>
    );
};

export default StatCard;