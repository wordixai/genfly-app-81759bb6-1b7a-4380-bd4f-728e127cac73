import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LovableLogo from "./LovableLogo";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="mr-8">
          <LovableLogo />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/community" className="text-gray-700 hover:text-gray-900">
            Community
          </Link>
          <Link to="/teams" className="text-gray-700 hover:text-gray-900">
            Teams
          </Link>
          <Link to="/learn" className="text-gray-700 hover:text-gray-900">
            Learn
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/login">
          <Button variant="ghost" className="text-gray-700">
            Log in
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="bg-gray-900 text-white hover:bg-gray-800">
            Sign up
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;