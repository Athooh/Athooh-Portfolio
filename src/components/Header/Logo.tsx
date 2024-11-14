import React from 'react';
import { Code2 } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 animate-[slideIn_0.6s_ease-out]">
      <Code2 className="w-8 h-8 text-purple-500" />
      <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        OAthooh
      </span>
    </div>
  );
};

export default Logo;