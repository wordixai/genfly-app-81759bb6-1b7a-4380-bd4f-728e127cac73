import React from "react";

const LovableLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path
          d="M3 9C3 6.23858 5.23858 4 8 4H16C18.7614 4 21 6.23858 21 9V15C21 17.7614 18.7614 20 16 20H8C5.23858 20 3 17.7614 3 15V9Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="3"
            y1="4"
            x2="21"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF5F6D" />
            <stop offset="1" stopColor="#FFC371" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-bold text-xl">Lovable</span>
    </div>
  );
};

export default LovableLogo;