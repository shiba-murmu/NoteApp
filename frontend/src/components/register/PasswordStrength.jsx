import { useMemo } from "react";

export default function PasswordStrength({ password = "" }) {

  const strength = useMemo(() => {

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;

  }, [password]);

  const levels = [
    {
      text: "Very Weak",
      color: "bg-red-500",
      width: "w-1/5",
      textColor: "text-red-400",
    },
    {
      text: "Weak",
      color: "bg-orange-500",
      width: "w-2/5",
      textColor: "text-orange-400",
    },
    {
      text: "Medium",
      color: "bg-yellow-500",
      width: "w-3/5",
      textColor: "text-yellow-400",
    },
    {
      text: "Good",
      color: "bg-emerald-500",
      width: "w-4/5",
      textColor: "text-emerald-400",
    },
    {
      text: "Strong",
      color: "bg-green-500",
      width: "w-full",
      textColor: "text-green-400",
    },
  ];

  const current =
    password.length === 0
      ? null
      : levels[Math.max(strength - 1, 0)];

  return (
    <div className="space-y-3">

      <div className="flex items-center justify-between">

        <span className="text-sm font-medium text-gray-300">
          Password Strength
        </span>

        <span
          className={`text-sm font-medium ${
            current
              ? current.textColor
              : "text-gray-500"
          }`}
        >
          {current ? current.text : "-"}
        </span>

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">

        <div
          className={`h-full rounded-full transition-all duration-300 ${
            current
              ? `${current.color} ${current.width}`
              : "w-0"
          }`}
        />

      </div>

    </div>
  );
}