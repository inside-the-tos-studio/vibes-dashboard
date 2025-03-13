import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend }) => {
  return (
    <div className="dashboard__card">
      <div className="dashboard__card-header">
        <h2>{title}</h2>
      </div>
      <div className="dashboard__card-content">
        <div className="text-3xl font-semibold mb-2">{value}</div>
        {trend && (
          <div className={`text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}% from last week
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;