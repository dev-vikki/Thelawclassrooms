import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-navy-800/80 backdrop-blur-sm rounded-lg transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-4xl font-bold text-gold-500">{number}</h2>
      <p className="text-white mt-2">{label}</p>
    </div>
  );
};

export default StatCard;