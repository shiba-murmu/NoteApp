import { TrendingUp } from "lucide-react";
import { MainContentData } from "../../data/ChangebleData";
export default function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/25">
        <TrendingUp size={24} className="text-white" />
      </div>

      <div>
        <h2 className="text-xl font-bold tracking-tight text-white">
          {MainContentData.Heading}
        </h2>

        <p className="text-sm text-gray-400">
          {MainContentData.SubHeading}
        </p>
      </div>
    </div>
  );
}