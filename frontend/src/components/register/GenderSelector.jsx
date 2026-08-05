import { useState } from "react";
import { Check, Mars, Venus } from "lucide-react";

const options = [
  {
    value: "male",
    label: "Male",
    icon: Mars,
  },
  {
    value: "female",
    label: "Female",
    icon: Venus,
  },
  {
    value: "non-binary",
    label: "Non-binary",
    icon: Check,
  },
  {
    value: "prefer-not",
    label: "Prefer not to say",
    icon: Check,
  },
];

export default function GenderSelector() {
  const [selected, setSelected] = useState("");

  return (
    <div className="space-y-3">

      <label className="text-sm font-medium text-gray-300">
        Gender <span className="text-gray-500">(Optional)</span>
      </label>

      <div className="grid grid-cols-2 gap-4">

        {options.map((option) => {
          const Icon = option.icon;

          const active = selected === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setSelected(option.value)}
              className={`
                group
                relative
                rounded-2xl
                border
                p-4
                text-left
                transition-all
                duration-300
                ${
                  active
                    ? "border-emerald-500 bg-emerald-500/10"
                    : "border-white/10 bg-[#0F172A] hover:border-emerald-500/30 hover:bg-white/5"
                }
              `}
            >
              {active && (
                <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
                  <Check size={14} className="text-white" />
                </div>
              )}

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 group-hover:bg-emerald-500/10">

                <Icon
                  size={24}
                  className={
                    active
                      ? "text-emerald-400"
                      : "text-gray-400"
                  }
                />

              </div>

              <h3
                className={
                  active
                    ? "font-semibold text-white"
                    : "font-semibold text-gray-300"
                }
              >
                {option.label}
              </h3>

            </button>
          );
        })}

      </div>

    </div>
  );
}