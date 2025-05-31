import React from "react";

const GradientBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-red-200 z-0"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 70%, rgba(255, 100, 100, 0.3), rgba(100, 100, 255, 0.3))",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;