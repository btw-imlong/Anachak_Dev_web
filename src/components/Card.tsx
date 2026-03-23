// src/components/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  bgColor?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  subtitle,
  icon,
  bgColor,
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
      <div>
        <div className="text-gray-500 text-sm">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
        {subtitle && <div className="text-gray-400 text-xs">{subtitle}</div>}
      </div>
      <div className={`p-3 rounded-lg ${bgColor || "bg-gray-100"}`}>{icon}</div>
    </div>
  );
};

export default Card;
