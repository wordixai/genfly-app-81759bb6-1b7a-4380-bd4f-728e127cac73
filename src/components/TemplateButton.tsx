import React from "react";
import { Button } from "@/components/ui/button";

interface TemplateButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const TemplateButton: React.FC<TemplateButtonProps> = ({
  icon,
  label,
  onClick,
}) => {
  return (
    <Button
      variant="outline"
      className="bg-white hover:bg-gray-50 text-gray-800 rounded-full px-4 py-2 flex items-center gap-2"
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </Button>
  );
};

export default TemplateButton;