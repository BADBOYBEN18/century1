/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  iconTitle: string;
  description: string;
  // buttonText?: string;
  backgroundColorClass?: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  iconTitle,
  title,
  description,
  // buttonText,
  backgroundColorClass,
}) => {
  return (
    <div
      className={`max-w-full mx-auto ${backgroundColorClass}
     rounded-lg shadow-lg overflow-hidden py-4 my-4 md:my-2 animation2 cursor-pointer border-2 border-black`}
    >
      {/* Image Section */}
      <div className="flex flex-col items-center justify-center gap-4 relative group">
        <div className="text-[#e53344]">{icon}</div>
        <p className="font-bold relative inline-block">
          {iconTitle}
          {/* Red line on hover */}
          <span className="absolute bottom-0 left-0 w-0 -my-1 h-0.5 bg-[#e53344] transition-all duration-300 group-hover:w-full"></span>
        </p>
      </div>

      {/* Text Section */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-black/90 text-[12px] sm:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
