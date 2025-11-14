
import React from 'react';

interface HeaderProps {
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="bg-black/30 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={onLogoClick}
          >
            <span className="font-logo text-3xl font-bold tracking-wider bg-white text-black px-3 py-1 mr-3 group-hover:bg-purple-400 transition-all duration-300 transform group-hover:scale-110">B</span>
            <h1 className="text-2xl font-semibold tracking-wide group-hover:text-purple-400 transition-colors duration-300">BLOCK CODE</h1>
          </div>
          <span className="text-sm font-medium bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full px-4 py-1">
            100% FREE
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;