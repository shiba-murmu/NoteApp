import clsx from "clsx";

export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={clsx(
        "rounded-[28px] border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,.45)]",
        className
      )}
    >
      {children}
    </div>
  );
}