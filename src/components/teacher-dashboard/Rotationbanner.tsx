import { FaCalendarAlt } from "react-icons/fa";

interface RotationBannerProps {
  label: string;
  period: string;
  description: string;
}

export default function RotationBanner({
  label,
  period,
  description,
}: RotationBannerProps) {
  return (
    <div className="flex items-center justify-between bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 mb-6">
      <div className="flex items-center gap-3">
        <FaCalendarAlt className="text-blue-400 text-lg flex-shrink-0" />
        <div>
          <p className="text-sm font-bold text-gray-800">
            Current Rotation: {label}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">{description}</p>
        </div>
      </div>
      <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
        {period}
      </span>
    </div>
  );
}
