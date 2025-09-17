import React from 'react';
import { Activity } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-bg">
        <Activity size={24} className="text-accent" />
      </div>
      <div className="ml-2">
        <h1 className="text-lg font-bold leading-tight">
          <span className="text-secondary">Micro</span>
          <span className="text-primary">con</span>
        </h1>
        <p className="text-xs leading-tight text-gray-600">Industrial Systems</p>
      </div>
    </div>
  );
};

export default Logo;