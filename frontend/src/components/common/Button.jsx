import clsx from "clsx";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25",

    secondary:
      "bg-slate-800 text-white border border-white/10 hover:bg-slate-700",

    outline:
      "border border-white/10 bg-transparent text-white hover:bg-white/5",

    ghost:
      "text-gray-300 hover:bg-white/5",
  };

  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button
      type={type}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}