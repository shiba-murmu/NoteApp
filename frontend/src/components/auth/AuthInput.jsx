import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function AuthInput({
    label,
    icon: Icon,
    type = "text",
    placeholder,
    value,
    onChange,
}) {
    const [show, setShow] = useState(false);

    const isPassword = type === "password";

    return (
        <div className="space-y-2">

            <label className="text-sm font-medium text-gray-300">
                {label}
            </label>

            <div
                className={clsx(
                    "group flex items-center rounded-2xl border border-white/10 bg-slate-900/80 px-4 transition-all duration-300",
                    "focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20"
                )}
            >
                {Icon && (
                    <Icon
                        size={18}
                        className="text-gray-500 transition group-focus-within:text-emerald-400"
                    />
                )}

                <input
                    type={
                        isPassword
                            ? show
                                ? "text"
                                : "password"
                            : type
                    }
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="h-14 w-full bg-transparent px-4 text-white placeholder:text-gray-500 focus:outline-none"
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShow(!show)}
                        className="text-gray-500 transition hover:text-white"
                    >
                        {show ? (
                            <EyeOff size={18} />
                        ) : (
                            <Eye size={18} />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}