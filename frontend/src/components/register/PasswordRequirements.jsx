import {
  CheckCircle2,
  Circle,
} from "lucide-react";

export default function PasswordRequirements({
  password,
}) {

  const rules = [
    {
      label: "At least 8 characters",
      valid: password.length >= 8,
    },
    {
      label: "One uppercase letter",
      valid: /[A-Z]/.test(password),
    },
    {
      label: "One lowercase letter",
      valid: /[a-z]/.test(password),
    },
    {
      label: "One number",
      valid: /\d/.test(password),
    },
    {
      label: "One special character",
      valid: /[^A-Za-z0-9]/.test(password),
    },
  ];

  return (

    <div className="space-y-3">

      <p className="text-sm font-medium text-gray-300">

        Password Requirements

      </p>

      <div className="space-y-2">

        {rules.map((rule) => (

          <div
            key={rule.label}
            className="flex items-center gap-3"
          >

            {rule.valid ? (

              <CheckCircle2
                size={18}
                className="text-emerald-400"
              />

            ) : (

              <Circle
                size={18}
                className="text-gray-600"
              />

            )}

            <span
              className={`text-sm transition ${
                rule.valid
                  ? "text-emerald-400"
                  : "text-gray-500"
              }`}
            >
              {rule.label}
            </span>

          </div>

        ))}

      </div>

    </div>

  );

}