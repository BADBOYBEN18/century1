/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Define the props interface
interface CardProps {
  imageUrl: string; // imageUrl must be a string
  title: string; // title must be a string
  description: string; // description must be a string
  buttonText?: string; // buttonText is optional and must be a string if provided
}

const ServiceCard: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  buttonText,
}) => {
  return (
    <div
      className={`animation4 max-w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden my-4 md:my-2 cursor-pointer flex flex-col sm:h-full`}
    >
      {/* Image Section */}
      <img
        className="w-full h-48 object-cover rounded-t-md"
        src={imageUrl}
        alt="Card Image"
      />

      {/* Text Section */}
      <div className="p-6 flex flex-col sm:flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 lg:mb-4">
          {title}
        </h2>
        <p className="text-gray-600 text-[12px] lg:text-lg flex-grow">
          {description}
        </p>
        {/* Optional Button */}
        {buttonText && (
          <div className="mt-4">
            <button className="px-4 py-2 text-sm bg-black text-[#4dbf88] active:bg-black/70 font-medium rounded-lg shadow-md">
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
